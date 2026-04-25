import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, BarChart3, Diamond, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '@/src/components/api/client';
import { div } from 'motion/react-m';

export function IntakePage() {
  const navigate = useNavigate();
  const [isResult, setIsResult] = React.useState([]);
  const [hasCrCard, setHasCrCard] = React.useState(false);
  const [isActiveMember, setIsActiveMember] = React.useState(false);



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const inputValues = {
      CreditScore: formData.get('CreditScore')?.toString() ?? '',
      Age: formData.get('Age')?.toString() ?? '',
      Tenure: formData.get('Tenure')?.toString() ?? '',
      Balance: formData.get('Balance')?.toString() ?? '',
      NumOfProducts: formData.get('NumOfProducts')?.toString() ?? '',
      HasCrCard: hasCrCard ? '1' : '0',
      IsActiveMember: isActiveMember ? '1' : '0',
      EstimatedSalary: formData.get('EstimatedSalary')?.toString() ?? '',
      Exited: formData.get('Exited')?.toString() ?? '',
      Complain: formData.get('Complain')?.toString() ?? '',
      SatisfactoryScore: formData.get('SatisfactoryScore')?.toString() ?? '',
      CardType: formData.get('CardType')?.toString() ?? '',
      PointsEarned: formData.get('PointsEarned')?.toString() ?? '',
    };
  
    console.log('Submitting form with values:', inputValues);

    api.post('/api/email_recommendation', inputValues)
      .then((email_response) => {
        console.log('Form submitted successfully:', email_response.data);
        setIsResult(email_response.data);
        navigate('/processing', { state: { result: email_response.data } });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  const handleSubmit_ = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const inputValues = {
    // Convert strings to Numbers for the backend
    CreditScore: Number(formData.get('CreditScore')),
    Age: Number(formData.get('Age')),
    Tenure: Number(formData.get('Tenure')),
    Balance: Number(formData.get('Balance')),
    NumOfProducts: Number(formData.get('NumOfProducts')),
    
    // Handle Checkboxes (convert "on" to boolean or 1/0)
    HasCrCard: formData.get('HasCrCard') === 'on', 
    IsActiveMember: formData.get('IsActiveMember') === 'on',
    
    EstimatedSalary: Number(formData.get('EstimatedSalary')),
    Exited: Number(formData.get('Exited')),
    Complain: Number(formData.get('Complain')),
    SatisfactoryScore: Number(formData.get('SatisfactoryScore')),
    CardType: formData.get('CardType')?.toString() ?? '',
    PointsEarned: Number(formData.get('PointsEarned')),
  };

  api.post('/api/email_recommendation/', inputValues)
    .then((email_response) => {
      setIsResult(email_response.data);
      navigate('/processing', { state: { result: email_response.data } });
    })
    .catch((error) => {
      // IMPORTANT: Log the actual validation error from FastAPI
      console.error('Validation Error:', error.response?.data);
      console.error('General Error:', error.message);
    });
};


  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl mb-12"
      >
        <span className="font-label text-[11px] uppercase tracking-[0.05em] font-semibold text-on-tertiary-container bg-tertiary-fixed px-3 py-1 rounded-full">Private Wealth Division</span>
        <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-primary mt-6 mb-4">Sovereign Profile Intake</h1>
        <p className="text-secondary text-lg max-w-2xl font-light">Input your primary financial vectors for high-precision intelligence modeling. Our Diamond-class engine provides asymmetric insights into your net position.</p>
      </motion.div>

      {/* Multi-Step Form Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-3 space-y-4">
          <div className="p-6 bg-surface-container-low rounded-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-2 w-2 rounded-full bg-on-tertiary-container animate-pulse"></div>
              <span className="font-label text-xs font-bold uppercase tracking-widest text-primary">Intake Progress</span>
            </div>
            <nav className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center h-8 w-8 rounded-md bg-primary text-white text-xs font-bold">01</span>
                <span className="text-sm font-bold text-primary">Identity & Vitality</span>
              </div>
              <div className="flex items-center gap-4 opacity-50">
                <span className="flex items-center justify-center h-8 w-8 rounded-md border border-outline-variant text-xs font-bold">02</span>
                <span className="text-sm font-medium">Assets & Exposure</span>
              </div>
              <div className="flex items-center gap-4 opacity-50">
                <span className="flex items-center justify-center h-8 w-8 rounded-md border border-outline-variant text-xs font-bold">03</span>
                <span className="text-sm font-medium">Affinity & Loyalty</span>
              </div>
            </nav>
          </div>
          <div className="p-6 glass-card rounded-xl border-l-4 border-on-tertiary-container">
            <p className="text-xs font-bold text-primary mb-2">INTELLIGENCE TIP</p>
            <p className="text-xs leading-relaxed text-secondary">Providing precise balance figures increases recommendation accuracy by 24% for Diamond-tier accounts.</p>
          </div>
        </div>

        {/* Form Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-9 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_20px_40px_rgba(17,28,45,0.04)]"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Section 1: Demographics */}
            <div className="space-y-8">
              <div className="border-b border-outline-variant/15 pb-4">
                <h2 className="font-headline text-2xl font-bold text-primary">Demographics & Base Metrics</h2>
                <p className="text-secondary text-sm">Foundational data points for fiscal stratification.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-primary uppercase tracking-wider">Credit Score</label>
                  <input name="CreditScore" className="w-full bg-surface-container-low border-none rounded-md p-4 text-primary focus:ring-2 focus:ring-primary-container" placeholder="300 - 850" type="number" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-primary uppercase tracking-wider">Age</label>
                  <input name="Age" className="w-full bg-surface-container-low border-none rounded-md p-4 text-primary focus:ring-2 focus:ring-primary-container" placeholder="Years" type="number" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-primary uppercase tracking-wider">Tenure</label>
                  <input name="Tenure" className="w-full bg-surface-container-low border-none rounded-md p-4 text-primary focus:ring-2 focus:ring-primary-container" placeholder="Years with Institution" type="number" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-primary uppercase tracking-wider">Estimated Salary</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary">$</span>
                    <input name="EstimatedSalary" className="w-full bg-surface-container-low border-none rounded-md p-4 pl-8 text-primary focus:ring-2 focus:ring-primary-container" placeholder="Annual Total" type="number" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Portfolio Depth */}
            <div className="space-y-8">
              <div className="border-b border-outline-variant/15 pb-4">
                <h2 className="font-headline text-2xl font-bold text-primary">Portfolio Depth</h2>
                <p className="text-secondary text-sm">Product density and liquidity status.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-primary uppercase tracking-wider">Total Balance</label>
                  <input name="Balance" className="w-full bg-surface-container-low border-none rounded-md p-4 text-primary focus:ring-2 focus:ring-primary-container" placeholder="Available Liquidity" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-primary uppercase tracking-wider">Has Credit Card</label>
                  <button
                    type="button"
                    onClick={() => setHasCrCard(!hasCrCard)}
                    className={`w-full flex items-center  gap-3 rounded-md p-4 transition-all bg-surface-container-low text-secondary`}
                  >
                    <div className={`relative w-12 h-7 rounded-full transition-all ${
                      hasCrCard ? 'bg-primary' : 'bg-outline-variant'
                    }`}>
                      <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${
                        hasCrCard ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </div>
                    <span className="font-bold text-sm">{hasCrCard ? 'ON' : 'OFF'}</span>
                  </button>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-primary uppercase tracking-wider">Is Active Member</label>
                  <button
                    type="button"
                    onClick={() => setIsActiveMember(!isActiveMember)}
                    className={`w-full flex items-center  gap-3 rounded-md p-4 transition-all bg-surface-container-low text-secondary`}
                  >
                    <div className={`relative w-12 h-7 rounded-full transition-all ${
                      isActiveMember ? 'bg-primary' : 'bg-outline-variant'
                    }`}>
                      <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${
                        isActiveMember ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </div>
                    <span className="font-bold text-sm">{isActiveMember ? 'ON' : 'OFF'}</span>
                  </button>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-primary uppercase tracking-wider">Exited</label>
                  <input name="Exited" className="w-full bg-surface-container-low border-none rounded-md p-4 text-primary focus:ring-2 focus:ring-primary-container" placeholder="Exited" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-primary uppercase tracking-wider">Complain</label>
                  <input name="Complain" className="w-full bg-surface-container-low border-none rounded-md p-4 text-primary focus:ring-2 focus:ring-primary-container" placeholder="Complain" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-primary uppercase tracking-wider">Satisfactory Score</label>
                  <input name="SatisfactoryScore" className="w-full bg-surface-container-low border-none rounded-md p-4 text-primary focus:ring-2 focus:ring-primary-container" placeholder="Satisfactory Score" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-primary uppercase tracking-wider">Card Type</label>
                  <input name="CardType" className="w-full bg-surface-container-low border-none rounded-md p-4 text-primary focus:ring-2 focus:ring-primary-container" placeholder="Card Type" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-primary uppercase tracking-wider">Points Earned</label>
                  <input name="PointsEarned" className="w-full bg-surface-container-low border-none rounded-md p-4 text-primary focus:ring-2 focus:ring-primary-container" placeholder="Points Earned" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-primary uppercase tracking-wider">Number of Products</label>
                  <select name="NumOfProducts" className="w-full bg-surface-container-low border-none rounded-md p-4 text-primary focus:ring-2 focus:ring-primary-container">
                    <option value="1">1 Product</option>
                    <option value="2">2 Products</option>
                    <option value="3">3 Products</option>
                    <option value="4+">4+ Products</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-12 flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* <button className="w-full md:w-auto px-8 py-4 text-secondary font-bold text-sm bg-surface-container-highest rounded-md hover:bg-surface-container-high transition-all" type="button">Save Progress</button> */}
              <button className="w-full md:w-auto px-12 py-4 bg-gradient-to-br from-primary to-primary-container text-white font-headline font-bold text-lg rounded-md shadow-xl active:scale-95 duration-200" type="submit">
                Analyze My Profile
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Secondary Info Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="p-8 bg-surface-container-low rounded-xl border-l-4 border-primary">
          <ShieldCheck className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-headline font-bold text-primary text-lg mb-2">Vault Security</h3>
          <p className="text-secondary text-sm">All financial metrics are encrypted using quantum-resistant protocols.</p>
        </div>
        <div className="p-8 bg-surface-container-low rounded-xl border-l-4 border-on-tertiary-container">
          <BarChart3 className="w-8 h-8 text-on-tertiary-container mb-4" />
          <h3 className="font-headline font-bold text-primary text-lg mb-2">Real-time Analysis</h3>
          <p className="text-secondary text-sm">Vector analysis begins as you type, preparing your personalized diamond report.</p>
        </div>
        <div className="p-8 bg-surface-container-low rounded-xl border-l-4 border-tertiary-fixed-dim">
          <Diamond className="w-8 h-8 text-on-tertiary-container mb-4" />
          <h3 className="font-headline font-bold text-primary text-lg mb-2">Impact Score</h3>
          <p className="text-secondary text-sm">Discover how your tenure and points influence your sovereign status.</p>
        </div>
      </div>
    </div>
  );
}
