import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile ao mudar de página
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo-link">
          {/* Logo da Q-Age Cred */}
          <img src="/logo.png" alt="Q-Age Cred" className="logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/5571999087669" target="_blank" rel="noreferrer" className="btn btn-primary">
            Simular Agora
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://wa.me/5571999087669" target="_blank" rel="noreferrer" className="btn btn-primary mobile-btn">
                  Simular Agora
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
