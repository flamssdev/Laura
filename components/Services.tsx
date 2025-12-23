
import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
    <div className="mb-6">
      <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-sm border border-primary/5">
        <img 
          src={icon} 
          alt={title} 
          className="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300" 
        />
      </div>
    </div>
    <h3 className="text-xl font-bold text-text mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: "https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/veterinario-2-1.svg",
      title: "Clínica Veterinária",
      description: "Consultas, acompanhamento de saúde, diagnóstico e orientações claras para tutores."
    },
    {
      icon: "https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/veterinario.svg",
      title: "Castração segura e experiente",
      description: "Procedimentos com técnica minimamente invasiva (gancho), menor trauma cirúrgico e recuperação mais rápida."
    },
    {
      icon: "https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/limpeza-dentaria.svg",
      title: "Limpeza de tártaro",
      description: "Profilaxia dental em dia para prevenir dor, infecções e problemas sistêmicos."
    },
    {
      icon: "https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/kit-de-primeiros-socorros.svg",
      title: "Cirurgias veterinárias",
      description: "Atendimento cirúrgico com foco em segurança, técnica e acompanhamento pós-operatório."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text">Atendimento completo para cães e gatos</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((s, idx) => (
            <ServiceCard key={idx} {...s} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5516999999999"
            className="text-primary font-bold text-lg hover:underline inline-flex items-center gap-2 group"
          >
            Quero agendar um atendimento
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
