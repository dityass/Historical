
import { motion } from 'motion/react';
import { Home, Compass, ShieldCheck, User } from 'lucide-react';
import { Screen } from '../types';

export default function Navigation({ active, onNavigate }: { active: Screen, onNavigate: (s: Screen) => void }) {
  const items = [
    { id: 'dashboard' as Screen, icon: Home, label: 'Beranda' },
    { id: 'archive' as Screen, icon: Compass, label: 'Eksplorasi' },
    { id: 'quiz' as Screen, icon: ShieldCheck, label: 'Ujian' },
    { id: 'profile' as Screen, icon: User, label: 'Profil' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-nav px-6 pb-8 pt-4 flex justify-between items-center max-w-md mx-auto">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`flex flex-col items-center transition-colors duration-300 ${
            active === item.id ? 'text-honor' : 'text-manuscript/40'
          }`}
        >
          <item.icon size={24} strokeWidth={active === item.id ? 2.5 : 1.5} />
          <span className="text-[10px] uppercase tracking-widest mt-1 font-serif-header font-bold">
            {item.label}
          </span>
          {active === item.id && (
            <motion.div 
              layoutId="nav-glow"
              className="absolute -top-1 w-8 h-8 bg-honor/10 blur-xl rounded-full"
            />
          )}
        </button>
      ))}
    </div>
  );
}
