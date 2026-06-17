import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './Services.css';

function Services() {
  const servicesList = [
    {
      id: "consignado",
      title: "Empréstimo Consignado",
      description: "A modalidade com as menores taxas de juros do mercado, ideal para aposentados, pensionistas do INSS e servidores públicos.",
      benefits: [
        "Desconto direto na folha de pagamento",
        "Taxas de juros reduzidas",
        "Prazos mais longos para pagamento",
        "Sem consulta ao SPC/Serasa"
      ],
      whatsappMsg: "Olá, gostaria de simular um Empréstimo Consignado."
    },
    {
      id: "clt",
      title: "Empréstimo CLT (Antecipação FGTS)",
      description: "Antecipe o seu Saque-Aniversário do FGTS de forma rápida e segura. Uma opção de crédito sem comprometer sua renda mensal.",
      benefits: [
        "Dinheiro na conta em até 24h",
        "Não compromete seu orçamento mensal",
        "Taxas menores que o crédito pessoal comum",
        "Disponível mesmo para negativados"
      ],
      whatsappMsg: "Olá, gostaria de antecipar meu Saque-Aniversário do FGTS."
    },
    {
      id: "pessoal",
      title: "Crédito Pessoal (CNC)",
      description: "Crédito rápido e descomplicado para você usar como quiser. Sujeito à análise de crédito, com pagamento no carnê ou boleto.",
      benefits: [
        "Aprovação ágil",
        "Parcelamento em até 24x",
        "Processo 100% digital",
        "Primeira parcela para até 45 dias"
      ],
      whatsappMsg: "Olá, gostaria de simular um Crédito Pessoal."
    }
  ];

  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Nossos Serviços</h1>
            <p>Conheça as melhores soluções de crédito para o seu momento.</p>
          </motion.div>
        </div>
      </section>

      <section className="services-list section-padding">
        <div className="container">
          <div className="services-container">
            {servicesList.map((service, index) => (
              <motion.div 
                className="service-detail-card"
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-detail-content">
                  <h2>{service.title}</h2>
                  <p className="service-desc">{service.description}</p>
                  
                  <div className="service-benefits">
                    <h3>Vantagens:</h3>
                    <ul>
                      {service.benefits.map((benefit, i) => (
                        <li key={i}><CheckCircle size={20} className="check-icon" /> {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href={`https://wa.me/5571999087669?text=${encodeURIComponent(service.whatsappMsg)}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-whatsapp service-action-btn"
                  >
                    Simular Agora
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
