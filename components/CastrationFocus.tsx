
import React from 'react';

const CastrationFocus: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-10 lg:p-20 text-white shadow-2xl overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/5 rounded-full"></div>

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">
              Castração é cuidado, prevenção e qualidade de vida
            </h2>
            <div className="space-y-6 text-lg lg:text-xl opacity-90 leading-relaxed mb-10">
              <p>
                Além de evitar crias indesejadas, a castração ajuda a prevenir doenças, reduz comportamentos indesejados e contribui para uma vida mais longa e saudável para cães e gatos.
              </p>
              <p className="font-semibold">
                Aqui, o procedimento é feito com técnica segura, planejamento e acompanhamento responsável.
              </p>
            </div>
            
            <a
              href="https://wa.me/5516999999999"
              className="inline-block px-10 py-5 bg-white text-primary font-bold text-lg rounded-2xl hover:bg-gray-100 transition-colors shadow-xl"
            >
              Agendar avaliação para castração segura
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CastrationFocus;
