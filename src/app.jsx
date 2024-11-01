// IMPORTS =======================================================//
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// COMPONENTS ====================================================//
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './pages/Home';
import Employee from './pages/Employee';
// STYLES ========================================================//
import './scss/app.module.scss';

// RENDER APPLICATION ============================================//
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
        <Footer />
      </Router>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
// END OF APPLICATION RENDER =====================================//
