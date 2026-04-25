import { Landmark, LayoutGrid, BarChart3, Settings, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  return (
    <header className="w-full top-0 sticky z-50 bg-surface/80 backdrop-blur-md">
      <nav className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <Landmark className="w-6 h-6 text-primary" />
          <span className="text-xl font-headline font-bold text-primary tracking-tight">Sovereign Intelligence</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-primary font-bold font-headline tracking-tight text-sm">Vault</Link>
          <Link to="/intake" className="text-secondary font-headline tracking-tight text-sm hover:bg-surface-container-high transition-colors px-3 py-1 rounded">Analyze</Link>
          <Link to="/recommendation" className="text-secondary font-headline tracking-tight text-sm hover:bg-surface-container-high transition-colors px-3 py-1 rounded">Recommendation</Link>
          {/* <Link to="/processing" className="text-secondary font-headline tracking-tight text-sm hover:bg-surface-container-high transition-colors px-3 py-1 rounded">Impact</Link> */}

        </div>
        <div className="flex items-center gap-4">
          {/* <button className="hidden md:block px-6 py-2 bg-gradient-to-br from-primary to-primary-container text-white text-sm font-semibold rounded-xl active:scale-95 duration-200">
            Get Started
          </button>
          <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/20">
            <img 
              alt="User profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqQUsndV84NnIdp4Sx3O6HJIClTBfx7bew4Q3EAYoPJT-QymxjZSpntGcUjfHy4fJGeXSmvAjUc-8PsSxWjlNB53sOiMpi5mdOLBYn_nyRKDYbz0H0gR-7bOU0Q4XFoBgsDvUmFTgo6orYHbihL1mdAtaNt3PrUDQvRPMqflWzFAnpdCDr69bS6lDceQTVEYhF7Z31KuN10i3C_yCwc0u2RZ_7aVf3bGRJJcqVhLJi9CiNse6HFi4WGXkXFbFZ4sTHPgvDoihtdrI"
              referrerPolicy="no-referrer"
            />
          </div> */}
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-12 bg-surface-container-low mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 w-full max-w-7xl mx-auto gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-headline font-bold text-primary text-lg">Sovereign Intelligence</span>
          <p className="font-body text-xs tracking-wide text-secondary">© 2024 The Sovereign Intelligence. Private Wealth Division.</p>
        </div>
        <div className="flex gap-8">
          <a className="font-body text-xs tracking-wide text-secondary hover:text-primary transition-all" href="#">Privacy</a>
          <a className="font-body text-xs tracking-wide text-secondary hover:text-primary transition-all" href="#">Terms</a>
          <a className="font-body text-xs tracking-wide text-secondary hover:text-primary transition-all" href="#">Compliance</a>
          <a className="font-body text-xs tracking-wide text-secondary hover:text-primary transition-all" href="#">Security</a>
        </div>
      </div>
    </footer>
  );
}

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { icon: LayoutGrid, label: 'Vault', path: '/' },
    { icon: BarChart3, label: 'Analyze', path: '/intake' },
    { icon: Landmark, label: 'Impact', path: '/processing' },
    { icon: Settings, label: 'Settings', path: '#' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-white border-t border-outline-variant/15 shadow-[0_-10px_30px_rgba(17,28,45,0.04)] rounded-t-xl">
      {navItems.map((item) => (
        <Link 
          key={item.label}
          to={item.path} 
          className={`flex flex-col items-center justify-center transition-all ${location.pathname === item.path ? 'text-primary' : 'text-secondary'}`}
        >
          <item.icon className="w-6 h-6" />
          <span className="font-body text-[11px] uppercase tracking-[0.05em] font-semibold mt-1">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
