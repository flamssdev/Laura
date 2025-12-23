
import React from 'react';

const Empathy: React.FC = () => {
  return (
    <section className="bg-primary-light py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-text mb-8">
          Seu pet merece cuidado de verdade. E você merece paz de espírito.
        </h2>
        <div className="space-y-6 text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          <p>
            Quando o assunto é saúde, não dá para arriscar. Quem ama seu pet quer atendimento responsável, explicações claras e procedimentos feitos com segurança.
          </p>
          <p className="font-medium text-primary">
            Aqui, cada decisão é pensada para reduzir riscos, promover uma recuperação tranquila e garantir o bem-estar do seu animal — do início ao pós-operatório.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Empathy;
