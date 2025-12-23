
import React from 'react';

const Step: React.FC<{ number: string; text: string }> = ({ number, text }) => (
  <div className="flex flex-col items-center text-center p-6 bg-primary-light rounded-2xl border border-primary/5">
    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-primary/20">
      {number}
    </div>
    <p className="text-gray-700 font-semibold leading-snug">{text}</p>
  </div>
);

const Process: React.FC = () => {
  const steps = [
    { number: "1", text: "Você entra em contato pelo WhatsApp" },
    { number: "2", text: "Tiramos dúvidas e avaliamos a melhor conduta para o seu pet" },
    { number: "3", text: "Agendamos o melhor horário" },
    { number: "4", text: "Seu pet recebe cuidado profissional e responsável" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text">Atendimento simples, claro e humanizado</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector lines (hidden on small screens) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-8 -z-10"></div>
          
          {steps.map((s, idx) => (
            <Step key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
