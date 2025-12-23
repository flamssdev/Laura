
import React from 'react';

const CheckIcon = () => (
  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

const Differentials: React.FC = () => {
  const diffs = [
    "Bem-estar animal como prioridade",
    "Atendimento clínico de confiança",
    "Castrações com alto padrão de segurança",
    "Técnica minimamente invasiva (gancho)",
    "Menor risco cirúrgico",
    "Recuperação rápida e monitorada",
    "Menos complicações no pós-operatório",
    "Experiência em alto volume cirúrgico"
  ];

  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
             <img
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1000&auto=format&fit=crop"
                alt="Equipe veterinária"
                className="rounded-3xl shadow-lg w-full h-auto object-cover"
              />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-10">
              Por que tantos tutores escolhem este atendimento?
            </h2>
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {diffs.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-700 font-medium leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
