
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6">Canais de atendimento</h2>
            <div className="text-lg text-gray-600 space-y-6 mb-8">
              <p>
                Para dúvidas, resultados de exames e agendamentos, entre em contato por mensagem ou áudio nos horários abaixo:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 flex-shrink-0">
                    <img 
                      src="https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/relogio.svg" 
                      alt="Horário" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-text">Segunda à Sexta</p>
                    <p className="text-primary font-medium">9h às 18h</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 flex-shrink-0">
                    <img 
                      src="https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/relogio.svg" 
                      alt="Horário" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-text">Sábados</p>
                    <p className="text-primary font-medium">9h às 12h</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 border-l-4 border-primary bg-primary/5 rounded-r-xl">
                 <div className="w-10 h-10 flex-shrink-0">
                    <img 
                      src="https://flavioemanuel.com.br/laura/wp-content/uploads/2025/12/conversando.svg" 
                      alt="WhatsApp" 
                      className="w-full h-full object-contain"
                    />
                 </div>
                 <p className="font-semibold text-text">Atendimento via WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-text mb-6">
              Agende agora e cuide da saúde do seu pet com tranquilidade
            </h3>
            <p className="text-gray-600 mb-10">
              Clique no botão abaixo para iniciar uma conversa agora mesmo com nossa equipe.
            </p>
            <a
              href="https://wa.me/5516999999999"
              className="w-full inline-flex items-center justify-center px-8 py-5 text-xl font-bold text-white bg-primary rounded-2xl hover:bg-opacity-90 transition-all shadow-2xl shadow-primary/30 group"
            >
              Agendar pelo WhatsApp
            </a>
            <p className="mt-6 text-sm text-gray-400">
              Atendimento veterinário em Ribeirão Preto, SP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
