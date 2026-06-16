import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <img src="/logo.png" alt="Q-Age Cred" className="footer-logo" />
            <p className="footer-desc">
              Especialistas em crédito consignado, empréstimo na conta de luz e crédito pessoal.
              Realizamos seu sonho de forma rápida e segura.
            </p>
          </div>
          
          <div className="footer-col">
            <h3>Links Rápidos</h3>
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/servicos">Nossos Serviços</Link></li>
              <li><Link to="/sobre">Sobre Nós</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Serviços</h3>
            <ul>
              <li><Link to="/servicos">Empréstimo Consignado</Link></li>
              <li><Link to="/servicos">Crédito na Conta de Luz</Link></li>
              <li><Link to="/servicos">Crédito Pessoal (CNC)</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Contato</h3>
            <ul className="contact-list">
              <li><Phone size={16} /> (11) 99999-9999</li>
              <li><Mail size={16} /> contato@qagecred.com.br</li>
              <li><MapPin size={16} /> Av. Paulista, 1000 - São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Q-Age Cred. Todos os direitos reservados.</p>
          <p className="disclaimer">A Q-Age Cred não cobra valores antecipados para aprovação de crédito.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
