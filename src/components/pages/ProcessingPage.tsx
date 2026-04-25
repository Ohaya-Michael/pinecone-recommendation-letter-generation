import { motion } from 'motion/react';
import { Diamond, ShieldCheck, Database, LineChart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { JSONViewer } from './JsonViewer';

export function ProcessingPage() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const location = useLocation();
  const result = location.state?.result;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    // console.log('Received result on ProcessingPage:', result);
    return () => clearInterval(timer);
  }, []);


  // useEffect(() => {
  //   if (progress === 100) {
  //     const timeout = setTimeout(() => {
  //       navigate('/processing');
  //     }, 1000);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [progress, navigate]);

  return (
    <div className="relative min-h-[calc(100vh-160px)] flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      {/* Background Layering */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary-fixed-dim/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Processing Canvas */}
      <div className="relative z-10 w-full max-w-2xl text-center space-y-12">
        {/* Premium Animated Loader */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center w-32 h-32 mb-8">
            {/* Rotating Outlines */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-primary-container/10 rounded-xl"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-on-tertiary-container/20 rounded-xl"
            ></motion.div>
            {/* Core Diamond */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-primary-container"
            >
              <Diamond className="w-16 h-16 fill-current" />
            </motion.div>
          </div>
          <h1 className="font-headline text-3xl md:text-4xl font-extrabold text-primary tracking-tight mb-3">
            Generating Your Email Recommendations. 
          </h1>
          <p className="text-secondary font-body text-sm max-w-md mx-auto">
            Analyzing customer profile and behavior to generate personalized email suggestions. This may take a moment as we synthesize insights from your data.
          </p>
        </div>

        {/* Progress Architecture */}
        <div className="space-y-6">
          {/* Percentage Indicator */}
          <div className="flex justify-between items-end px-1">
            <span className="font-label text-[11px] uppercase tracking-[0.05em] font-semibold text-primary">RECOMMENDATION SYNTHESIS</span>
            <span className="font-headline text-lg font-bold text-on-tertiary-container">{progress}%</span>
          </div>
          {/* Progress Bar */}
          <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-primary to-primary-container"
            ></motion.div>
          </div>

          {/* Status Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/15 flex flex-col items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-on-tertiary-container" />
              <div className="text-left">
                <p className="font-label text-[10px] uppercase tracking-wider text-secondary">PROFILE</p>
                <p className="text-xs font-semibold text-primary">Customer Data Loaded</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/15 flex flex-col items-start gap-3">
              <Database className={`w-5 h-5 text-primary-container ${progress < 80 ? 'animate-pulse' : ''}`} />
              <div className="text-left">
                <p className="font-label text-[10px] uppercase tracking-wider text-secondary">Data Retrieval</p>
                <p className="text-xs font-semibold text-primary">{progress < 80 ? 'Indexing Assets...' : 'Behavior Patterns Analyzed'}</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/15 flex flex-col items-start gap-3">
              <LineChart className="w-5 h-5 text-secondary" />
              <div className="text-left">
                <p className="font-label text-[10px] uppercase tracking-wider text-secondary">GENERATION</p>
                <p className="text-xs font-semibold text-primary">{progress < 100 ? 'Queueing Algorithms' : 'Recommendations Ready'}</p>
              </div>
            </div>
          </div>
          {/*  */}
          {progress === 100 && result && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <JSONViewer data={result}/>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
