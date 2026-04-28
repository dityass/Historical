
import { motion } from 'motion/react';
import { TrendingUp, BookOpen } from 'lucide-react';
import { UserStats, Article } from '../types';

export default function Dashboard({ 
  stats, 
  featured, 
  onOpenArticle 
}: { 
  stats: UserStats, 
  featured: Article, 
  onOpenArticle: (a: Article) => void 
}) {
  return (
    <div className="p-6 pb-32 space-y-6">
      <header className="pt-8">
        <h2 className="text-honor text-xs uppercase tracking-[0.3em] font-serif-header font-bold">The Study Room</h2>
        <h1 className="text-4xl font-serif-header mt-2">Selamat Datang, Kurator</h1>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Today's Topic - Large Span */}
        <motion.div
          whileHover={{ scale: 0.98 }}
          onClick={() => onOpenArticle(featured)}
          className="col-span-2 relative h-56 rounded-2xl overflow-hidden shadow-2xl cursor-pointer border border-manuscript/10"
        >
          <img 
            src={featured.image} 
            alt={featured.title}
            className="absolute inset-0 w-full h-full object-cover grayscale sepia-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <span className="text-honor text-[10px] uppercase font-bold tracking-widest bg-void/60 px-2 py-1 rounded backdrop-blur-sm">Topik Hari Ini</span>
            <h3 className="text-xl font-serif-header mt-2 leading-tight">{featured.title}</h3>
          </div>
        </motion.div>

        {/* Progress Card */}
        <div className="bg-manuscript/5 border border-manuscript/10 p-5 rounded-2xl flex flex-col justify-between">
          <BookOpen className="text-honor mb-4" size={20} />
          <div>
            <div className="text-3xl font-serif-header text-honor">{stats.progress}%</div>
            <div className="text-[10px] uppercase opacity-50 tracking-widest mt-1">Progres Belajar</div>
          </div>
        </div>

        {/* Daily Mission Card */}
        <div className="bg-manuscript/5 border border-manuscript/10 p-5 rounded-2xl flex flex-col justify-between">
          <TrendingUp className="text-honor mb-4" size={20} />
          <div>
            <div className="text-xs font-serif-body leading-tight opacity-90 italic">Selesaikan 1 Quiz tentang VOC</div>
            <div className="text-[10px] uppercase font-bold text-honor tracking-widest mt-2">Misi Harian</div>
          </div>
        </div>

        {/* Knowledge XP Card */}
        <div className="col-span-2 bg-manuscript/5 border border-manuscript/10 p-5 rounded-2xl flex items-center justify-center text-center">
          <div>
            <div className="text-3xl font-serif-header text-honor">{stats.xp}</div>
            <div className="text-[10px] uppercase opacity-50 tracking-widest mt-1 font-bold">Total Pengetahuan (XP) Terkumpul</div>
          </div>
        </div>

        <div className="col-span-2 p-8 text-center border-2 border-dashed border-manuscript/10 rounded-2xl opacity-40">
           <p className="font-serif-body italic text-sm italic italic">"Masa lalu kita adalah kompas bagi masa depan."</p>
        </div>
      </div>
    </div>
  );
}
