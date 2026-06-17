import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Works from './pages/Works';
import Insights from './pages/Insights';
import BlogPost from './pages/BlogPost';
import Terms from './pages/Terms';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

/**
 * Main Application Component
 * Defines the public route table and wraps every route in the shared
 * Layout so navigation, footer, loader, smooth scroll, and cursor behavior
 * stay consistent across pages.
 */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<BlogPost />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
