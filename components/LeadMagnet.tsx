import React from 'react';
import { Download } from 'lucide-react';

const LeadMagnet: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-700 to-red-600 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-black opacity-10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
          Descarga nuestra guía completa <br/> para vender tu casa
        </h2>
        <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
          Accede a consejos profesionales, estrategias de venta y toda la información que necesitas para maximizar el valor de tu propiedad en el mercado actual.
        </p>
        
        <button className="bg-white text-red-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-xl transition-transform transform hover:scale-105 flex items-center mx-auto text-lg">
          <Download className="w-6 h-6 mr-2" />
          Descargar Guía Gratis
        </button>
      </div>
    </section>
  );
};

export default LeadMagnet;