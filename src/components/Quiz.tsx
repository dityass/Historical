
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { QuizQuestion } from '../types';
import { ShieldCheck } from 'lucide-react';

export default function Quiz({ 
  questions, 
  onFinish 
}: { 
  questions: QuizQuestion[], 
  onFinish: (score: number) => void 
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const question = questions[currentIdx];

  const handleSelect = (idx: number) => {
    if (selectedIdx !== null) return;
    setSelectedIdx(idx);

    const isCorrect = idx === question.correctIndex;
    setAnswers(prev => [...prev, isCorrect]);

    setTimeout(() => {
      if (currentIdx < questions.length - 1) {
        setCurrentIdx(c => c + 1);
        setSelectedIdx(null);
      } else {
        const score = [...answers, isCorrect].filter(a => a).length;
        onFinish(score);
      }
    }, 1500);
  };

  const progress = ((currentIdx) / questions.length) * 100;

  return (
    <div className="p-6 pb-32 min-h-screen flex flex-col">
       {/* Progress Bar */}
       <div className="fixed top-0 left-0 right-0 h-1 bg-manuscript/10 z-[70]">
         <motion.div 
           initial={{ width: 0 }}
           animate={{ width: `${progress}%` }}
           className="h-full bg-honor shadow-[0_0_10px_#C5A059]"
         />
       </div>

      <header className="pt-8 mb-12">
        <h2 className="text-honor text-xs uppercase tracking-[0.3em] font-serif-header font-bold">The Scholarly Trials</h2>
        <h1 className="text-4xl font-serif-header mt-2 uppercase tracking-tight">Ujian Sejarah</h1>
        <p className="text-manuscript/60 font-serif-body text-sm mt-2 italic">Buktikan kedalaman pengetahuan kearsipan Anda.</p>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex-1 flex flex-col"
        >
          <div className="p-8 border border-manuscript/20 bg-manuscript/5 rounded-[40px] mb-8 relative">
             <div className="absolute top-4 left-6 text-[10px] text-honor/50 font-bold uppercase tracking-widest">Pertanyaan {currentIdx + 1} of {questions.length}</div>
             <p className="font-serif-header text-xl leading-relaxed mt-4 drop-shadow">
               {question.question}
             </p>
          </div>

          <div className="space-y-4">
             {question.options.map((option, idx) => {
               const isSelected = selectedIdx === idx;
               const isCorrect = idx === question.correctIndex;
               const isWrong = isSelected && !isCorrect;
               
               let borderColor = 'border-manuscript/20';
               let bgColor = 'bg-transparent';
               let textColor = 'text-manuscript';

               if (selectedIdx !== null) {
                 if (isCorrect) {
                   borderColor = 'border-honor';
                   bgColor = 'bg-honor/10';
                   textColor = 'text-honor';
                 } else if (isWrong) {
                   borderColor = 'border-red-900';
                   bgColor = 'border-red-900/10';
                   textColor = 'text-red-400';
                 }
               }

               return (
                 <motion.button
                   key={idx}
                   whileTap={{ scale: 0.98 }}
                   onClick={() => handleSelect(idx)}
                   disabled={selectedIdx !== null}
                   className={`w-full text-left p-5 border-2 rounded-2xl transition-all duration-300 relative overflow-hidden flex items-center gap-4 ${borderColor} ${bgColor} ${textColor}`}
                 >
                   <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-serif-header text-xs ${selectedIdx === idx ? 'border-current' : 'border-manuscript/30 opacity-50'}`}>
                      {String.fromCharCode(65 + idx)}
                   </div>
                   <span className="font-serif-body text-sm font-medium">{option}</span>
                   
                   {selectedIdx !== null && isCorrect && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto text-honor"
                      >
                         <ShieldCheck size={20} />
                      </motion.div>
                   )}

                   {selectedIdx !== null && isWrong && (
                      <motion.div 
                         initial={{ x: -10, opacity: 0 }}
                         animate={{ x: 0, opacity: 1 }}
                         className="absolute inset-0 bg-red-900/20 backdrop-blur-[2px] flex items-center justify-center"
                      >
                         <div className="w-full h-px bg-red-900 absolute rotate-[5deg] opacity-60" />
                         <div className="w-full h-px bg-red-900 absolute rotate-[-5deg] opacity-60" />
                      </motion.div>
                   )}
                 </motion.button>
               );
             })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
