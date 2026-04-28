
import { motion } from 'motion/react';
import { Award, Target, Zap, User, Crown } from 'lucide-react';
import { UserStats, Achievement } from '../types';

export default function Profile({ stats, achievements }: { stats: UserStats, achievements: Achievement[] }) {
  return (
    <div className="p-6 pb-32 space-y-8">
      <header className="pt-8 flex flex-col items-center text-center space-y-4">
        {/* Placeholder Profile Logo */}
        <div className="relative group">
          <div className="w-24 h-24 rounded-full bg-manuscript/5 border-2 border-honor/30 flex items-center justify-center overflow-hidden shadow-2xl">
            <User size={48} className="text-honor/40" />
          </div>
          <div className="absolute -inset-2 border border-honor/10 rounded-full animate-pulse pointer-events-none" />
        </div>

        <div className="space-y-1">
          <h2 className="text-honor text-xs uppercase tracking-[0.3em] font-serif-header font-bold">The Hall of Records</h2>
          <h1 className="text-3xl font-serif-header text-manuscript">I Ketut Sutha Negara</h1>
          <div className="flex items-center justify-center gap-3 text-manuscript/50 text-[10px] uppercase tracking-widest font-bold">
            <span className="text-honor">{stats.rank}</span>
            <div className="w-1 h-1 rounded-full bg-honor/30" />
            <span>No: 12</span>
            <div className="w-1 h-1 rounded-full bg-honor/30" />
            <span>Kelas: X RPL 1</span>
          </div>
        </div>
      </header>

      {/* Stats Bento */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 bg-manuscript/5 border border-manuscript/10 rounded-3xl group hover:border-honor/30 transition-colors">
           <Zap className="text-honor mb-2" size={20} />
           <div className="text-2xl font-serif-header text-manuscript">{stats.xp}</div>
           <div className="text-[10px] uppercase opacity-40 tracking-widest">Knowledge XP</div>
        </div>
        <div className="p-6 bg-manuscript/5 border border-manuscript/10 rounded-3xl group hover:border-honor/30 transition-colors">
           <Target className="text-honor mb-2" size={20} />
           <div className="text-2xl font-serif-header text-manuscript">{stats.accuracy}%</div>
           <div className="text-[10px] uppercase opacity-40 tracking-widest">Akurasi Ujian</div>
        </div>
      </div>

      {/* Rank Hierarchy List */}
      <div className="p-6 bg-manuscript/5 border border-manuscript/10 rounded-3xl space-y-4">
        <h3 className="font-serif-header text-lg flex items-center gap-2 mb-2">
          <Crown className="text-honor" size={18} />
          Hierarki Kurator
        </h3>
        <div className="space-y-3">
          {[
            { name: 'Bronze', xp: '0 - 99 XP' },
            { name: 'Gold', xp: '100 - 499 XP' },
            { name: 'Diamond', xp: '500 - 899 XP' },
            { name: 'Master', xp: '900 - 1500 XP' },
            { name: 'Kaisar', xp: '> 1500 XP' },
          ].map((r) => (
            <div 
              key={r.name}
              className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                stats.rank === r.name 
                  ? 'bg-honor/20 border-honor shadow-[0_0_15px_rgba(197,160,89,0.2)]' 
                  : 'bg-void/20 border-manuscript/5 opacity-40'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${stats.rank === r.name ? 'bg-honor animate-pulse' : 'bg-manuscript/20'}`} />
                <span className={`font-serif-header ${stats.rank === r.name ? 'text-honor font-bold' : 'text-manuscript'}`}>{r.name}</span>
              </div>
              <span className="text-[9px] uppercase tracking-tighter opacity-60 font-bold">{r.xp}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-serif-header text-xl mb-4 flex items-center gap-2">
           <Award className="text-honor" size={20} /> 
           Pencapaian Kearsipan
        </h3>
        <div className="space-y-4">
          {achievements.map((item) => (
            <div 
              key={item.id}
              className={`p-5 rounded-2xl border flex items-center gap-4 transition-all ${
                item.unlocked 
                  ? 'bg-manuscript text-ink border-honor manuscript-card' 
                  : 'bg-manuscript/5 text-manuscript/20 border-manuscript/10 grayscale'
              }`}
            >
              <div className={`p-3 rounded-full ${item.unlocked ? 'bg-honor/20 text-honor' : 'bg-manuscript/5 text-manuscript/20'}`}>
                 <Award size={24} />
              </div>
              <div className="flex-1">
                <div className={`font-serif-header text-lg ${item.unlocked ? '' : 'opacity-40'}`}>{item.title}</div>
                <div className={`text-[10px] uppercase tracking-wide opacity-60`}>{item.description}</div>
                {item.unlocked && (
                   <p className="mt-4 pt-4 border-t border-ink/10 font-serif-body text-xs italic text-ink/70">
                      "{item.historySnippet}"
                   </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
