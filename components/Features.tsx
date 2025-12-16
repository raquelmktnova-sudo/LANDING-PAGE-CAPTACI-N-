import React from 'react';
import { Search, FileText, Clock, ShieldCheck, TrendingUp, Camera } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Search className="w-10 h-10 text-red-600" />,
      title: "Conocimiento Local",
      desc: "Especialistas en San Vicente del Raspeig. Conocemos cada barrio y cada precio real de cierre."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-red-600" />,
      title: "Honorarios Transparentes",
      desc: "Sin comisiones ocultas ni sorpresas. Te explicamos todos los costes desde el primer día."
    },
    {
      icon: <Camera className="w-10 h-10 text-red-600" />,
      title: "Marketing Profesional",
      desc: "Fotografía de alta calidad y publicación destacada en los principales portales inmobiliarios."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
      title: "Gestión Legal",
      desc: "Nos encargamos de toda la documentación, notaría y bancos. Cero preocupaciones para ti."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            ¿Por qué elegir <span className="text-red-600">Novaterra</span>?
          </h2>
          <p className="text-gray-600 text-lg">
            Somos la inmobiliaria de referencia en San Vicente del Raspeig y área metropolitana.
            Combinamos tecnología con un trato humano y cercano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center group">
              <div className="bg-red-50 p-4 rounded-full mb-6 group-hover:bg-red-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;