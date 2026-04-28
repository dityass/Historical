/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Screen, UserStats, Article } from './types';
import { ARTICLES, QUIZ_QUESTIONS, ACHIEVEMENTS } from './constants';

import Splash from './components/Splash';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Archive from './components/Archive';
import Reader from './components/Reader';
import Quiz from './components/Quiz';
import Profile from './components/Profile';

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const getRank = (xp: number) => {
    if (xp < 100) return 'Bronze';
    if (xp < 500) return 'Gold';
    if (xp < 900) return 'Diamond';
    if (xp <= 1500) return 'Master';
    return 'Kaisar';
  };

  const [stats, setStats] = useState<UserStats>({
    accuracy: 85,
    xp: 1240,
    rank: getRank(1240),
    streak: 2,
    progress: 32
  });

  const handleSplashFinish = () => setScreen('dashboard');

  const handleOpenArticle = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleQuizFinish = (score: number) => {
    const newXp = stats.xp + (score * 100);
    const newAccuracy = Math.round(((stats.accuracy + (score / QUIZ_QUESTIONS.length * 100)) / 2));
    setStats({
      ...stats,
      xp: newXp,
      accuracy: newAccuracy,
      rank: getRank(newXp),
      progress: Math.min(stats.progress + 5, 100)
    });
    setScreen('profile');
  };

  return (
    <div className="min-h-screen bg-void flex items-center justify-center font-serif-body">
      {/* Mobile Frame Container */}
      <div className="relative w-full h-screen max-w-md bg-void overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border-x border-manuscript/5">
        
        {/* Vignette & Overlay Textures */}
        <div className="vignette-overlay" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ 
          backgroundImage: "url('https://www.transparenttextures.com/patterns/black-paper.png')" 
        }} />

        <AnimatePresence mode="wait">
          {screen === 'splash' && (
            <Splash onFinish={handleSplashFinish} />
          )}

          {screen !== 'splash' && (
            <motion.main
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full overflow-y-auto"
            >
              <AnimatePresence mode="wait">
                {screen === 'dashboard' && (
                  <motion.div key="dashboard" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <Dashboard stats={stats} featured={ARTICLES[0]} onOpenArticle={handleOpenArticle} />
                  </motion.div>
                )}
                {screen === 'archive' && (
                  <motion.div key="archive" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <Archive articles={ARTICLES} onSelect={handleOpenArticle} />
                  </motion.div>
                )}
                {screen === 'quiz' && (
                  <motion.div key="quiz" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <Quiz questions={QUIZ_QUESTIONS} onFinish={handleQuizFinish} />
                  </motion.div>
                )}
                {screen === 'profile' && (
                  <motion.div key="profile" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <Profile stats={stats} achievements={ACHIEVEMENTS} />
                  </motion.div>
                )}
              </AnimatePresence>

              <Navigation active={screen} onNavigate={setScreen} />
            </motion.main>
          )}
        </AnimatePresence>

        {/* Immersive Reader Layer */}
        <AnimatePresence>
          {selectedArticle && (
            <Reader 
              article={selectedArticle} 
              onClose={() => setSelectedArticle(null)} 
            />
          )}
        </AnimatePresence>
      </div>

      {/* Decorative desktop elements */}
      <div className="fixed top-12 left-12 hidden lg:block max-w-xs opacity-20 pointer-events-none">
        <h3 className="font-serif-header text-6xl italic">Arsip</h3>
        <p className="mt-4 border-t border-manuscript/20 pt-4 text-sm italic">
          Koleksi dokumentasi historis Nusantara dalam format digital modern.
        </p>
      </div>
      <div className="fixed bottom-12 right-12 hidden lg:block max-w-xs text-right opacity-20 pointer-events-none">
        <h3 className="font-serif-header text-6xl italic">Nusantara</h3>
        <p className="mt-4 border-t border-manuscript/20 pt-4 text-sm italic">
          Mengharmonisasikan masa lalu dengan estetika akademik modern.
        </p>
      </div>
    </div>
  );
}

