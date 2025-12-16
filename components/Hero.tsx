import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onScrollToForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToForm }) => {
  return (
    <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-22b4899975d6?q=80&w=2675&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl mt-16">
        <h2 className="text-white font-heading font-bold text-xl md:text-2xl mb-4 tracking-wide uppercase">
          Inmobiliaria en San Vicente del Raspeig
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-xl">
          ¿Te has preguntado <br />
          <span className="text-red-500">cuánto vale tu casa hoy?</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Descubre el verdadero valor de mercado de tu vivienda. Valoración profesional, gratuita y sin compromiso en menos de 24 horas.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onScrollToForm}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-transform transform hover:-translate-y-1 hover:shadow-2xl border-2 border-transparent"
          >
            Solicitar Valoración Gratuita
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-10 text-white/70">
        <ArrowDown size={32} />
      </div>
    </div>
  );
};

export default Hero;