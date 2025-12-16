import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import LeadMagnet from './components/LeadMagnet';
import FormSection from './components/FormSection';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

const App: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onScrollToForm={scrollToForm} />
      <main>
        <Hero onScrollToForm={scrollToForm} />
        <Features />
        <LeadMagnet />
        <div ref={formRef}>
          <FormSection />
        </div>
        <SocialProof />
        
        {/* Final Urgency Section */}
        <section className="py-16 bg-white border-t border-gray-100 text-center px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
              El mercado inmobiliario cambia constantemente.
              <br className="hidden md:block" />
              <span className="text-red-600">Conoce hoy el valor real de tu vivienda.</span>
            </h2>
            <button 
              onClick={scrollToForm}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-full shadow-xl transition-all transform hover:scale-105 text-lg"
            >
              Solicitar Valoración Ahora
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;