import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ShieldCheck, Clock, Percent } from 'lucide-react';
import './Home.css';

function Home() {
  const features = [
    {
      icon: <Clock size={32} className="feature-icon" />,
      title: "Rápido e Fácil",
      description: "Aprovação em minutos e dinheiro na conta em até 24h."
    },
    {
      icon: <Percent size={32} className="feature-icon" />,
      title: "Taxas Atrativas",
      description: "As melhores condições do mercado para você."
    },
    {
      icon: <ShieldCheck size={32} className="feature-icon" />,
      title: "100% Seguro",
      description: "Processo totalmente transparente e sem taxas antecipadas."
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Dinheiro na mão para <span>realizar seus sonhos</span></h1>
            <p>
              Empréstimos com as melhores taxas do mercado. 
              Simule agora pelo WhatsApp de forma rápida e segura!
            </p>
            <div className="hero-buttons">
              <a href="https://wa.me/5571999087669" target="_blank" rel="noreferrer" className="btn btn-primary">
                Simular no WhatsApp
              </a>
              <Link to="/servicos" className="btn btn-outline">
                Ver Opções
              </Link>
            </div>
            <div className="hero-trust">
              <span><CheckCircle size={16} /> Sem consulta ao SPC/Serasa*</span>
              <span><CheckCircle size={16} /> Liberação rápida</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Placeholder for an illustration or photo */}
            <div className="hero-image-placeholder">
              <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={48} style={{ color: 'var(--secondary)' }} />
                <h3>Ambiente Seguro</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: '500' }}>Faça sua Simulação 100% Online</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section-padding">
        <div className="container">
          <h2 className="section-title">Por que escolher a Q-Age Cred?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                className="feature-card" 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {feature.icon}
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview section-padding">
        <div className="container">
          <div className="services-preview-header">
            <div>
              <h2 className="section-title" style={{textAlign: 'left'}}>Soluções para o seu momento</h2>
              <p>Escolha a opção que melhor se adapta à sua necessidade financeira.</p>
            </div>
            <Link to="/servicos" className="btn btn-outline">
              Ver todos <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="services-grid">
            <motion.div 
              className="service-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="service-content">
                <h3>Empréstimo Consignado</h3>
                <p>Para Aposentados, Pensionistas do INSS e Servidores Públicos. Desconto direto em folha com as menores taxas.</p>
                <a href="https://wa.me/5571999087669" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                  Simular Consignado
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="service-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="service-content">
                <h3>Empréstimo CLT (FGTS)</h3>
                <p>Antecipe suas parcelas do Saque-Aniversário do FGTS. Dinheiro na conta rápido e sem burocracia.</p>
                <a href="https://wa.me/5571999087669" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                  Simular FGTS
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="service-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="service-content">
                <h3>Crédito Pessoal (CNC)</h3>
                <p>Crédito rápido e fácil com pagamento no carnê ou boleto. Sujeito a análise de crédito.</p>
                <a href="https://wa.me/5571999087669" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                  Simular Pessoal
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section-padding">
        <div className="container cta-container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Precisando de dinheiro agora?</h2>
            <p>Fale com um de nossos especialistas e descubra quanto você pode liberar hoje mesmo.</p>
            <a href="https://wa.me/5571999087669" target="_blank" rel="noreferrer" className="btn btn-primary cta-btn">
              Falar com Especialista
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
