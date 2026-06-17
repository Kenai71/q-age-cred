import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Contato</h1>
            <p>Fale conosco e tire todas as suas dúvidas.</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Informações de Contato</h2>
              <p>Nossa equipe está pronta para ajudar você a encontrar a melhor solução financeira.</p>

              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3>WhatsApp / Telefone</h3>
                    <p>(71) 99908-7669</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3>E-mail</h3>
                    <p>grupoinvestflex26@gmail.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3>Endereço</h3>
                    <p>Lauro de Freitas Av. Santos Dumont, 1883</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3>Horário de Atendimento</h3>
                    <p>Segunda a Sexta, das 09h às 18h</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="contact-form-card">
                <h2>Envie uma mensagem</h2>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label htmlFor="name">Nome Completo</label>
                    <input type="text" id="name" placeholder="Digite seu nome" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Telefone / WhatsApp</label>
                    <input type="tel" id="phone" placeholder="(00) 00000-0000" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Serviço de Interesse</label>
                    <select id="service">
                      <option value="">Selecione...</option>
                      <option value="consignado">Empréstimo Consignado</option>
                      <option value="clt">Antecipação FGTS (CLT)</option>
                      <option value="pessoal">Crédito Pessoal</option>
                      <option value="outros">Outros / Dúvidas</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea id="message" rows="4" placeholder="Como podemos ajudar?" required></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
