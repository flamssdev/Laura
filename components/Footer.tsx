
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center h-12">
            <img 
              src="https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/whatsapp_image_2025_12_15_at_19_12_54_1.webp" 
              alt="VetCare Logo" 
              className="h-full w-auto object-contain"
            />
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} VetCare Ribeirão Preto. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6 text-sm text-gray-500 font-medium">
             <span className="flex items-center gap-1">📍 Ribeirão Preto - SP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
