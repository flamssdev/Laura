
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center h-full py-2">
            <img 
              src="https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/whatsapp_image_2025_12_15_at_19_12_54_1.webp" 
              alt="VetCare Logo" 
              className="h-full w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#servicos" className="text-gray-600 hover:text-primary font-medium transition-colors">Serviços</a>
            <a href="#sobre" className="text-gray-600 hover:text-primary font-medium transition-colors">Diferenciais</a>
            <a href="#contato" className="text-gray-600 hover:text-primary font-medium transition-colors">Contato</a>
          </nav>
          <a
            href="https://wa.me/5516999999999"
            className="bg-primary text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all shadow-md shadow-primary/20"
          >
            Agendar Agora
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
