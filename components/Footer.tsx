import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          {/* Brand */}
          <div>
            <div className="font-heading font-extrabold text-3xl tracking-tighter mb-6">
              NOVA<span className="text-red-600">TERRA</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Tu agencia inmobiliaria de confianza en San Vicente del Raspeig. Expertos en conectar personas con sus hogares ideales desde 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links (Dummy) */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-200">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Vender mi casa</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Comprar</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Valoración Gratuita</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-200">Dónde Estamos</h4>
            <div className="flex items-start mb-4">
              <MapPin className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
              <p className="text-gray-400">
                Av. de la Libertad, 22, Local 2<br />
                03690 San Vicente del Raspeig<br />
                Alicante, España
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center text-sm text-gray-400">
              Horario: Lunes a Viernes<br />
              9:30 - 14:00 | 17:00 - 20:30
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Novaterra Inmobiliaria. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Aviso Legal</a>
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;