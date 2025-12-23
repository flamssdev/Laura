
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-text leading-tight mb-6">
              Atendimento veterinário de confiança para quem trata seu pet como parte da família
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-xl">
              Consultas, cirurgias e castrações seguras para cães e gatos em Ribeirão Preto, com foco em bem-estar animal e tranquilidade para o tutor.
            </p>
            
            <a
              href="https://wa.me/5516999999999"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary rounded-xl hover:bg-opacity-90 transition-all shadow-xl shadow-primary/25 mb-10 group"
            >
              Agendar atendimento pelo WhatsApp
            </a>

            <div className="flex flex-wrap gap-4 items-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light text-primary font-semibold text-sm border border-primary/10">
                ✔ Cães e gatos
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light text-primary font-semibold text-sm border border-primary/10">
                ✔ Clínica e cirurgia
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light text-primary font-semibold text-sm border border-primary/10">
                ✔ Castração minimamente invasiva
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 flex items-center justify-center">
              <img
                src="https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/veterinario_em_trajes_cirurgicos_usando_um_estetoscopio_para_verificar_o_batimento_cardiaco_de_um_gato_durante_um_exame_medico_em_uma_clinica.webp"
                alt="Banner principal"
                className="w-full h-auto max-h-[600px] object-cover rounded-3xl"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-light rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
