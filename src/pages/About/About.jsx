import { motion } from 'framer-motion';
import { Target, Users, Shield } from 'lucide-react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Sobre Nós</h1>
            <p>Conheça a história e os valores da Q-Age Cred.</p>
          </motion.div>
        </div>
      </section>

      <section className="about-content section-padding">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Nossa História</h2>
              <p>
                A <strong>Q-Age Cred</strong> nasceu com o propósito de democratizar o acesso ao crédito no Brasil. 
                Entendemos que cada momento da vida exige uma solução financeira diferente, e por isso 
                nos especializamos em oferecer opções justas e transparentes para nossos clientes.
              </p>
              <p>
                Com anos de experiência no mercado financeiro, nossa equipe de especialistas trabalha 
                diariamente para buscar as melhores taxas e condições, garantindo que você realize 
                seus projetos ou organize sua vida financeira sem dor de cabeça.
              </p>
            </motion.div>

            <motion.div 
              className="about-image-placeholder"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="about-img-box">
                {/* Aqui seria uma foto da equipe ou do escritório */}
                <span className="img-text">Time Q-Age Cred</span>
              </div>
            </motion.div>
          </div>

          <div className="values-grid">
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Target size={40} className="value-icon" />
              <h3>Missão</h3>
              <p>Proporcionar soluções financeiras acessíveis e seguras, ajudando nossos clientes a alcançarem seus objetivos com tranquilidade.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Shield size={40} className="value-icon" />
              <h3>Visão</h3>
              <p>Ser referência nacional em crédito consignado e pessoal, reconhecida pela excelência no atendimento e transparência.</p>
            </motion.div>

            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Users size={40} className="value-icon" />
              <h3>Valores</h3>
              <p>Transparência, Ética, Agilidade, Foco no Cliente e Responsabilidade Social.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
