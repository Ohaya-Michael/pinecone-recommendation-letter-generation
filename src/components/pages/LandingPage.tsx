import { motion } from 'motion/react';
import { Diamond, TrendingUp, Layers, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-surface overflow-hidden pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 z-10"
          >
            <div className="inline-flex items-center gap-2 bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-xs font-label font-semibold tracking-wider uppercase">
              <Diamond className="w-3.5 h-3.5 fill-current" />
              Diamond Tier Advisory
            </div>
            <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-on-background tracking-tighter leading-[0.95]">
              Sovereign <br /> <span className="text-on-tertiary-container">Intelligence.</span>
            </h1>
            <p className="text-xl text-secondary max-w-xl font-body leading-relaxed">
              Hyper-intelligent AI, delivered. Our bespoke email recommendations curate private wealth opportunities and asset insights tailored specifically to your portfolio's needs. 
              A hyper-intelligent AI concierge curating bespoke financial recommendations that redefine asset management for the modern investor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/intake" className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-white font-semibold rounded-xl shadow-lg hover:shadow-primary/20 transition-all active:scale-95 text-center">
                Secure Access Now
              </Link>
              <Link to="/recommendation" className="px-8 py-4 bg-surface-container-highest text-on-primary-fixed-variant font-semibold rounded-xl hover:bg-surface-container-high transition-all text-center">
                View Recommendation
              </Link>
            </div>
            <div className="pt-8 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    alt={`Member ${i}`} 
                    className="w-10 h-10 rounded-full ring-4 ring-surface" 
                    src={`https://picsum.photos/seed/member${i}/100/100`}
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm text-secondary font-medium">
                <span className="text-on-background font-bold tracking-tight">500+</span> Diamond Tier Members
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-tertiary-fixed opacity-30 rounded-full blur-[100px]"></div>
            <div className="relative bg-surface-container-lowest p-8 rounded-2xl shadow-[0_20px_40px_rgba(17,28,45,0.06)] border border-outline-variant/10">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <p className="text-xs font-label uppercase tracking-widest text-secondary mb-1">Amount of Portfolio Recommendation</p>
                  <h3 className="text-3xl font-headline font-bold text-on-surface tracking-tight">8,429,150.00</h3>
                </div>
                <TrendingUp className="w-6 h-6 text-on-tertiary-container" />
              </div>
              <div className="space-y-6">
                <div className="p-4 bg-surface-container-low rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-white">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm tracking-tight">Alpha Strategy #4</p>
                      <p className="text-xs text-secondary">Quantum Neutral</p>
                    </div>
                  </div>
                  <p className="text-on-tertiary-container font-bold">+12.4%</p>
                </div>
                <div className="p-4 bg-surface-container-low rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center text-primary">
                      <Diamond className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <p className="font-bold text-sm tracking-tight">Rare Art Fund</p>
                      <p className="text-xs text-secondary">Alternative Assets</p>
                    </div>
                  </div>
                  <p className="text-on-tertiary-container font-bold">+8.2%</p>
                </div>
              </div>
              {/* Floating Glass Recommendation Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -bottom-10 -left-10 glass-card p-6 rounded-xl border border-white/20 shadow-xl max-w-[240px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                  <p className="text-[10px] font-label font-bold uppercase tracking-widest text-on-tertiary-fixed-variant">AI Alert</p>
                </div>
                <p className="text-xs font-body text-primary font-medium leading-snug">New arbitrage opportunity detected in EMEA digital sovereign bonds.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Insights Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface mb-4">Precision Intelligence.</h2>
              <p className="text-secondary text-lg">We move beyond dashboards. Our system predicts market shifts based on advanced algorithms and real-time data analysis.</p>
            </div>
            <div className="text-right">
              <span className="text-8xl font-headline font-extrabold text-outline-variant/10 leading-none">01</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
            {/* Bento Item 1 */}
            <div className="md:col-span-8 bg-surface-container-lowest rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative group">
              <div className="z-10">
                <h4 className="text-2xl font-headline font-bold mb-2">Predictive Vault Analysis</h4>
                <p className="text-secondary max-w-md">Our proprietary 'Predictive Vault' engine transforms billions of data points into clear wealth insights, delivering proactive recommendations that protect your financial foundation while seeking aggressive alpha</p>
              </div>
              <div className="flex gap-4 z-10 items-center py-2">
                <span className="bg-surface-container-high px-4 py-2 rounded-lg text-xs font-bold font-headline uppercase tracking-widest">View Macro Data</span>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <Layers className="w-60 h-60" />
              </div>
            </div>
            {/* Bento Item 2 */}
            <div className="md:col-span-4 bg-primary-container rounded-2xl p-8 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-tertiary-fixed-dim" />
                </div>
                <h4 className="text-2xl font-headline font-bold">Real-time Attribution</h4>
                <p className="text-white/70 text-sm">Understand exactly why your wealth is growing.</p>
              </div>
            </div>
            {/* Bento Item 3 */}
            <div className="md:col-span-4 bg-surface-container-highest rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <ShieldCheck className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-headline font-bold">Sovereign Security</h4>
              <p className="text-secondary text-sm mt-2">Military-grade encryption for the world's most sensitive capital. This is just fictional content for demonstration purposes.</p>
            </div>
            {/* Bento Item 4 */}
            <div className="md:col-span-8 bg-white rounded-2xl p-8 flex items-center gap-8 overflow-hidden">
              <div className="w-1/3 shrink-0 rounded-xl overflow-hidden h-full">
                <img 
                  alt="Data Vis" 
                  className="w-full h-full object-cover" 
                  src="https://picsum.photos/seed/datavis/600/400"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-2xl font-headline font-bold mb-3">Diamond Tier Rewards</h4>
                <p className="text-secondary mb-4">Elevate to Diamond Tier to unlock the full power of our engine: secure priority allocations in restricted seed rounds and private placements unavailable to the public market.</p>
                <a className="text-on-tertiary-container font-bold underline underline-offset-4 decoration-2 inline-flex items-center gap-2" href="#">
                  Explore the Impact Portfolio <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-surface border-t border-outline-variant/15">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-label uppercase tracking-[0.2em] text-secondary mb-12">Secured & Audited By</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
            {['FINANCE.CO', 'WEALTH_CORP', 'ASSET_BLOCK', 'SOVEREIGN_LABS', 'QUANT_BASE'].map((brand) => (
              <span key={brand} className="text-2xl font-headline font-extrabold tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
