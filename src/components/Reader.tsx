
import { motion } from 'motion/react';
import { ArrowLeft, Book } from 'lucide-react';
import { Article } from '../types';

export default function Reader({ article, onClose }: { article: Article, onClose: () => void }) {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      className="fixed inset-0 z-[60] bg-manuscript text-ink overflow-y-auto manuscript-card"
    >
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        {/* Reader Header */}
        <div className="sticky top-0 z-20 px-6 py-6 flex items-center justify-between bg-manuscript/80 backdrop-blur-md">
          <button onClick={onClose} className="p-2 -ml-2 text-ink/60 hover:text-honor transition-colors">
            <ArrowLeft size={24} />
          </button>
          <div className="text-[10px] uppercase tracking-widest font-bold text-honor/50">Immersive Reader</div>
          <div className="w-10 h-1" />
        </div>

        <div className="px-8 pb-20 pt-4">
          <div className="flex items-center gap-2 text-honor/60 mb-4">
            <Book size={14} />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{article.era}</span>
          </div>
          
          <h1 className="font-serif-header text-4xl font-bold leading-tight mb-8 drop-shadow-sm">
            {article.title}
          </h1>

          <div className="w-20 h-1 bg-honor/30 mb-8" />

          {/* Article Image Frame */}
          <div className="mb-10 relative">
             <div className="absolute -inset-2 border border-ink/10" />
             <img 
               src={article.image} 
               alt="" 
               className="grayscale contrast-125 sepia-[0.2] border-4 border-manuscript shadow-lg" 
               referrerPolicy="no-referrer"
             />
             <p className="text-[10px] italic mt-3 text-ink/40 text-center">Ilustrasi sejarah Nusantara</p>
          </div>

          <div className="font-serif-body text-lg leading-[1.8] space-y-6 text-ink/90 first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-serif-header first-letter:font-bold first-letter:text-honor first-letter:leading-none">
            {article.content.split('\n\n').map((para, i) => (
              <p key={i} className={i === 0 ? "" : ""}>
                {para}
              </p>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-ink/10 text-center flex flex-col items-center">
             <div className="w-1.5 h-1.5 rounded-full bg-honor/50 mb-2" />
             <div className="w-1.5 h-1.5 rounded-full bg-honor/50 mb-2" />
             <div className="w-1.5 h-1.5 rounded-full bg-honor/50" />
             <p className="mt-8 text-honor font-serif-header italic">Finis Arsyip</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
