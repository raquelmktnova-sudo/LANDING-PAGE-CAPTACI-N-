import React from 'react';
import { Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { val: "4.9", label: "Valoración media", sub: "En Google Reviews" },
            { val: "98%", label: "Clientes satisfechos", sub: "Encuestas finales" },
            { val: "100%", label: "Transparencia", sub: "Gestión clara" },
            { val: "24/7", label: "Disponibilidad", sub: "Atención al cliente" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{stat.val}</div>
              <div className="text-gray-900 font-bold text-lg">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Opiniones Verificadas
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            Lo que dicen nuestros <span className="text-red-600">clientes</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            La satisfacción de nuestros vecinos en San Vicente es nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg relative border border-gray-100">
            <div className="absolute top-6 right-8 text-red-100 text-6xl font-serif leading-none">”</div>
            <div className="flex items-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 text-red-500 fill-current" />)}
            </div>
            <p className="text-gray-700 italic text-lg mb-6 leading-relaxed relative z-10">
              "Vendimos nuestra casa en tiempo récord. El equipo fue muy profesional, nos mantuvieron informados en todo momento y consiguieron el precio que queríamos. 100% recomendable."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" 
                alt="María García" 
                className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-red-100"
              />
              <div>
                <div className="font-bold text-gray-900">María García</div>
                <div className="text-sm text-gray-500">San Vicente del Raspeig</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg relative border border-gray-100">
            <div className="absolute top-6 right-8 text-red-100 text-6xl font-serif leading-none">”</div>
            <div className="flex items-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 text-red-500 fill-current" />)}
            </div>
            <p className="text-gray-700 italic text-lg mb-6 leading-relaxed relative z-10">
              "Necesitaba una valoración urgente por una herencia y en Novaterra me atendieron el mismo día. Su conocimiento de la zona del parque Lo Torrent es impresionante."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop" 
                alt="Carlos Martínez" 
                className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-red-100"
              />
              <div>
                <div className="font-bold text-gray-900">Carlos Martínez</div>
                <div className="text-sm text-gray-500">Alicante</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;