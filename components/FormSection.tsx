import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

const FormSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="valuation-form" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          
          {/* Left Column: Context & Benefits - Added Background Photo styling */}
          <div className="lg:w-1/2 relative">
             <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl -z-10 lg:hidden"></div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Solicita tu <span className="text-red-600">Valoración Gratuita</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Completa el formulario y uno de nuestros expertos en San Vicente del Raspeig te contactará en menos de 24 horas para valorar tu propiedad sin compromiso.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-600 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">¿Por qué solicitar una valoración?</h3>
              <ul className="space-y-4">
                {[
                  "Conoce el valor real de mercado actual.",
                  "Sin compromiso y completamente gratuito.",
                  "Asesoramiento profesional personalizado.",
                  "Estrategia de venta adaptada a tu zona."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-red-700 to-red-600 text-white p-8 rounded-2xl shadow-xl overflow-hidden relative">
               {/* Pattern overlay */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">Información de Contacto</h3>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 opacity-90" />
                  <span className="text-lg">965 123 456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 opacity-90" />
                  <span className="text-lg">valoraciones@novaterra.es</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 opacity-90 mt-1" />
                  <span className="text-lg">Av. de la Libertad, 22<br/>San Vicente del Raspeig, 03690<br/>Alicante</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-red-700"></div>
              
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud Recibida!</h3>
                  <p className="text-gray-600">Gracias {formState.name}. Nos pondremos en contacto contigo muy pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Empieza aquí</p>
                    <h3 className="text-2xl font-bold text-gray-900">Datos de la Propiedad</h3>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-gray-50 focus:bg-white"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-gray-50 focus:bg-white"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="600 000 000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-gray-50 focus:bg-white"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Dirección de la propiedad *</label>
                    <input 
                      type="text" 
                      name="address"
                      required
                      placeholder="Calle, número, zona..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-gray-50 focus:bg-white"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje (opcional)</label>
                    <textarea 
                      name="message"
                      rows={3}
                      placeholder="Cuéntanos más sobre tu propiedad (reformas, extras, etc)..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                      onChange={handleChange}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg flex justify-center items-center"
                  >
                    Solicitar Valoración Gratuita
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    * Campos obligatorios. Tus datos están protegidos y no serán compartidos con terceros.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;