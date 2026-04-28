
import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';
import { Search, Filter, Hash } from 'lucide-react';
import { Article } from '../types';

export default function Archive({ articles, onSelect }: { articles: Article[], onSelect: (a: Article) => void }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Era VOC', 'Perjuangan Daerah', 'Kebangkitan Nasional'];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'Semua' || article.era === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [articles, search, activeCategory]);

  return (
    <div className="p-6 pb-32 space-y-8">
      <header className="pt-8">
        <h2 className="text-honor text-xs uppercase tracking-[0.3em] font-serif-header font-bold">The Archive</h2>
        <h1 className="text-4xl font-serif-header mt-2">Katalog Kearsipan</h1>
        <p className="text-manuscript/60 font-serif-body text-sm mt-2 italic">Menelusuri naskah-naskah kuno yang membentuk identitas bangsa.</p>
      </header>

      {/* Search Ledger */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-honor/50 group-focus-within:text-honor transition-colors">
          <Search size={18} />
        </div>
        <input 
          type="text"
          placeholder="Cari naskah atau peristiwa..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-manuscript/5 border-b-2 border-manuscript/20 py-4 pl-12 pr-4 font-serif-body text-manuscript placeholder:text-manuscript/20 focus:outline-none focus:border-honor/50 transition-all text-lg italic"
        />
        <div className="absolute bottom-0 left-0 h-[2px] bg-honor w-0 group-focus-within:w-full transition-all duration-500" />
      </div>

      {/* Category Pills */}
      <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full border text-[10px] uppercase tracking-widest font-bold transition-all ${
              activeCategory === cat 
                ? 'bg-honor text-void border-honor shadow-[0_0_15px_rgba(197,160,89,0.3)]' 
                : 'border-manuscript/10 text-manuscript/40 hover:border-manuscript/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-manuscript/30 font-bold border-b border-manuscript/5 pb-2">
        <span>Menampilkan {filteredArticles.length} Dokumen</span>
        <div className="flex items-center gap-1">
          <Filter size={10} />
          <span>Terurut: Kronologis</span>
        </div>
      </div>

      <div className="space-y-8">
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => onSelect(article)}
              className="group relative bg-manuscript text-ink p-8 rounded-br-[60px] cursor-pointer overflow-hidden shadow-2xl manuscript-card border border-ink/5"
            >
              {/* Ribbon Aksen */}
              <div className="absolute top-0 right-10 w-8 h-12 bg-honor/20 flex items-center justify-center border-b border-x border-honor/40">
                <Hash size={12} className="text-honor" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] px-2 py-1 bg-ink/5 border border-ink/10 rounded uppercase font-bold tracking-tighter opacity-60">
                    ID: {article.id.toUpperCase().slice(0, 8)}
                  </span>
                  <div className="h-px flex-1 bg-ink/5" />
                  <span className="text-[10px] font-bold text-honor tracking-widest uppercase">{article.category}</span>
                </div>

                <h3 className="text-2xl font-serif-header leading-tight group-hover:text-honor transition-colors duration-500">
                  {article.title}
                </h3>
                
                <p className="font-serif-body text-sm mt-4 opacity-70 line-clamp-3 leading-relaxed italic border-l-2 border-honor/20 pl-4">
                  {article.excerpt}
                </p>
                
                <div className="mt-8 pt-6 border-t border-ink/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[8px] uppercase tracking-widest opacity-40 font-bold mb-1">Era Sejarah</span>
                    <span className="text-[10px] font-bold text-ink/80">{article.era}</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className="text-[10px] italic opacity-40 underline decoration-honor/30">{article.readTime} Menit</span>
                     <div className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-honor group-hover:border-honor group-hover:text-void transition-all duration-500">
                        <span className="text-lg">→</span>
                     </div>
                  </div>
                </div>
              </div>
              
              {/* Texture Overlays */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-void/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-honor/40 via-transparent to-transparent" />
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredArticles.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="py-20 text-center space-y-4"
          >
            <div className="text-honor/20 flex justify-center">
              <Search size={64} strokeWidth={1} />
            </div>
            <p className="font-serif-body italic text-manuscript/40">
              Maaf, tidak ada naskah yang cocok dengan kriteria pencarian Anda.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
