import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer, BottomNav } from './components/layout/Navigation';
import { LandingPage } from './components/pages/LandingPage';
import { IntakePage } from './components/pages/IntakePage';
import { ProcessingPage } from './components/pages/ProcessingPage';
import {AllRecommendationViewer} from "./components/pages/AllRecommendationViewer";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/intake" element={<IntakePage />} />
            <Route path="/processing" element={<ProcessingPage />} />
            <Route path="/recommendation" element={<AllRecommendationViewer />} />
          </Routes>
        </main>
        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}
