
import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const images = [
    "https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/whatsapp_image_2025_12_15_at_19_32_25.webp",
    "https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/whatsapp_image_2025_12_15_at_19_32_23_2_.webp",
    "https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/whatsapp_image_2025_12_15_at_19_32_23.webp",
    "https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/whatsapp_image_2025_12_15_at_19_32_25_1_.webp",
    "https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/group_1171276819.webp",
    "https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/whatsapp_image_2025_12_15_at_19_32_24.webp",
    "https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/whatsapp_image_2025_12_15_at_19_32_24_1_.webp"
  ];

  const next = () => setCurrentIdx((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content - Left Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6">Conheça nosso espaço</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ambiente planejado para o conforto e segurança do seu pet. Contamos com infraestrutura moderna, salas higienizadas e equipamentos de última geração para garantir o melhor atendimento em Ribeirão Preto.
              </p>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6">Quem sou eu</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>

          {/* Vertical Image & Controls - Right Side */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[450px] aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-2xl border border-gray-100 bg-gray-50 mb-8">
              <img 
                key={currentIdx}
                src={images[currentIdx]} 
                alt={`Clinic space vertical ${currentIdx + 1}`} 
                className="w-full h-full object-cover animate-in fade-in slide-in-from-right-4 duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Navigation Buttons below image */}
            <div className="flex gap-6">
              <button 
                onClick={prev}
                className="p-5 rounded-full bg-white border border-gray-200 hover:bg-primary hover:text-white transition-all shadow-md group active:scale-95"
                aria-label="Ver anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={next}
                className="p-5 rounded-full bg-white border border-gray-200 hover:bg-primary hover:text-white transition-all shadow-md group active:scale-95"
                aria-label="Ver próximo"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
