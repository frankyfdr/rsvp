'use client';
import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Clock, Users, Mail, Phone } from 'lucide-react';
import { DetailsPage } from './Pages/DetailsPage';
import { ContactPage } from './Pages/ContactPage';
import { RSVPPage } from './Pages/RSVPPage';
import { HomePage } from './Pages/HomePage';

const WeddingRSVP = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en');
  const [userLocation, setUserLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(true);

  // Available languages with their country codes and flags (kept from your original)
  const availableLanguages = [
    { code: 'en', name: 'English', flag: '🇺🇸', country: 'US' },
    { code: 'es', name: 'Español', flag: '🇪🇸', country: 'ES' },
    { code: 'pt', name: 'Português', flag: '🇧🇷', country: 'BR' },
  ];

  // Auto-detect location and set language (kept from your original)
  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        setUserLocation({
          country: data.country_name,
          countryCode: data.country_code,
          city: data.city,
          timezone: data.timezone,
        });

        const countryLanguageMap = {
          ES: 'es',
          MX: 'es',
          AR: 'es',
          CO: 'es',
          BR: 'pt',
          PT: 'pt',
          FR: 'fr',
          DE: 'de',
          IT: 'it',
        };

        const detectedLanguage = countryLanguageMap[data.country_code] || 'en';
        setLanguage(detectedLanguage);
      } catch (error) {
        console.log('Location detection failed:', error);
        setUserLocation({ country: 'Unknown', countryCode: 'US', city: 'Unknown' });
      } finally {
        setLocationLoading(false);
      }
    };

    detectLocation();
  }, []);

  // translations (kept but trimmed for readability — you can keep your full translations)
  const translations = {
    en: {
      home: 'Home',
      rsvp: 'RSVP',
      details: 'Details',
      contact: 'Contact',
      rsvpTitle: 'RSVP',
      rsvpSubtitle: 'Please let us know if you can join us',
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      willYouAttend: 'Will you be attending?',
      yesIllBeThere: "Yes, I'll be there! ❤️",
      sorryCannotMake: "Sorry, can't make it 😢",
      anyAllergies: 'Do you have any allergies?',
      yes: 'Yes',
      no: 'No',
      allergyDetails: 'Please specify allergies',
      specialMessage: 'Special Message',
      submitRsvp: 'Submit RSVP',
      thankYou: 'Thank You!',
      thankYouMessage: "We've received your RSVP and can't wait to celebrate with you!",
      backToHome: 'Back to Home',
      numberOfGuests: 'Number of Guests',
      bride: 'Bride',
      groom: 'Groom',
      madeWithLove: 'Made with ❤️',
      invitationFor: 'Invitation for ',
      celebrateWithUs: 'Celebrate with us!',
    },
    es: {
      bride: 'Novia',
      groom: 'Novio',
      home: 'Inicio',
      rsvp: 'Confirmar',
      details: 'Detalles',
      contact: 'Contacto',
      rsvpTitle: 'Confirmar Asistencia',
      rsvpSubtitle: 'Por favor, déjanos saber si puedes acompañarnos',
      fullName: 'Nombre Completo',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      willYouAttend: '¿Asistirás?',
      yesIllBeThere: '¡Sí, estaré ahí! ❤️',
      sorryCannotMake: 'Lo siento, no puedo asistir 😢',
      anyAllergies: '¿Tienes alguna alergia?',
      yes: 'Sí',
      no: 'No',
      allergyDetails: 'Por favor especifica las alergias',
      specialMessage: 'Mensaje Especial',
      submitRsvp: 'Enviar Confirmación',
      thankYou: '¡Gracias!',
      thankYouMessage: '¡Hemos recibido tu confirmación y esperamos celebrar contigo!',
      backToHome: 'Volver al Inicio',
      numberOfGuests: 'Número de Invitados',
      madeWithLove: 'Hecho con ❤️',
      invitationFor: 'Invitación para ',
      celebrateWithUs: '¡Celebra con nosotros!',
    },
    pt: {
      bride: 'Noiva',
      groom: 'Noivo',
      home: 'Início',
      rsvp: 'Confirmar',
      details: 'Detalhes',
      contact: 'Contato',
      rsvpTitle: 'Confirmar Presença',
      rsvpSubtitle: 'Por favor, nos deixe saber se você pode se juntar a nós',
      fullName: 'Nome Completo',
      email: 'E-mail',
      phone: 'Telefone',
      willYouAttend: 'Você vai comparecer?',
      yesIllBeThere: 'Sim, estarei lá! ❤️',
      sorryCannotMake: 'Desculpe, não posso comparecer 😢',
      anyAllergies: 'Você tem alguma alergia?',
      yes: 'Sim',
      no: 'Não',
      allergyDetails: 'Por favor especifique as alergias',
      specialMessage: 'Mensagem Especial',
      submitRsvp: 'Enviar Confirmação',
      thankYou: 'Obrigado!',
      thankYouMessage: 'Recebemos sua confirmação e mal podemos esperar para celebrar com você!',
      backToHome: 'Voltar ao Início',
      numberOfGuests: 'Número de Convidados',
      madeWithLove: 'Feito com ❤️',
      invitationFor: 'Convite para ',
      celebrateWithUs: 'Celebre conosco!',
    },
  };

  const t = translations[language] || translations.en;

  const LanguageSelector = () => (
    <div className="fixed top-4 right-4 z-20">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-gray-700 border border-gray-300 focus:outline-none transition-all text-sm sm:text-base bg-white/90 backdrop-blur-sm"
      >
        {availableLanguages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF4E6] relative overflow-hidden">
      <LanguageSelector />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 sm:py-8 pt-20 sm:pt-16">
        <nav className="flex justify-center space-x-2 sm:space-x-4 mb-8 sm:mb-12 overflow-x-auto">
          <button
            onClick={() => setCurrentPage('home')}
            style={{ backgroundColor: '#435942' }}
            className={`px-3 hover:cursor-pointer py-2 sm:px-6 sm:py-2 rounded-full`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('rsvp')}
            style={{ backgroundColor: '#435942' }}
            className={`px-3 hover:cursor-pointer py-2 sm:px-6 sm:py-2 rounded-full`}
          >
            RSVP
          </button>
          <button
            onClick={() => setCurrentPage('details')}
            style={{ backgroundColor: '#435942' }}
            className={`px-3 hover:cursor-pointer py-2 sm:px-6 sm:py-2 rounded-full`}
          >
            Details
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            style={{ backgroundColor: '#435942' }}
            className={`px-3 hover:cursor-pointer py-2 sm:px-6 sm:py-2 rounded-full`}
          >
            Contact
          </button>
        </nav>

        <main className="max-w-4xl mx-auto">
          {currentPage === 'home' && <HomePage t={t} setCurrentPage={setCurrentPage} />}
          {currentPage === 'rsvp' && <RSVPPage t={t} />}
          {currentPage === 'details' && <DetailsPage t={t} />}
          {currentPage === 'contact' && <ContactPage t={t} />}
        </main>

        <footer className="text-center text-gray-600 mt-12 sm:mt-16 px-4">
          <p className="text-xs sm:text-sm">Sarai & Frank • May 28, 2026 • </p>
        </footer>
      </div>
    </div>
  );
};

export default WeddingRSVP;
