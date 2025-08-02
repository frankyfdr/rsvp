'use client';
import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Clock, Users, Mail, Phone, Globe } from 'lucide-react';

const WeddingRSVP = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en');
  const [userLocation, setUserLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(true);
  const [rsvpData, setRsvpData] = useState({
    guestName: '',
    email: '',
    phone: '',
    attendance: '',
    guestCount: 1,
    dietaryRestrictions: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Available languages with their country codes and flags
  const availableLanguages = [
    { code: 'en', name: 'English', flag: '🇺🇸', country: 'US' },
    { code: 'es', name: 'Español', flag: '🇪🇸', country: 'ES' },
    { code: 'pt', name: 'Português', flag: '🇧🇷', country: 'BR' },
  ];

  // Auto-detect location and set language
  useEffect(() => {
    const detectLocation = async () => {
      try {
        // Try to get user's location via IP
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        setUserLocation({
          country: data.country_name,
          countryCode: data.country_code,
          city: data.city,
          timezone: data.timezone,
        });

        // Auto-set language based on country
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

  const translations = {
    en: {
      // Navigation
      home: 'Home',
      rsvp: 'RSVP',
      details: 'Details',
      contact: 'Contact',

      // Home page
      areGettingMarried: 'are getting married!',
      rsvpNow: 'RSVP Now',
      detectedLocation: 'Detected location',

      // RSVP page
      rsvpTitle: 'RSVP',
      rsvpSubtitle: 'Please let us know if you can join us',
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      willYouAttend: 'Will you be attending?',
      yesIllBeThere: "Yes, I'll be there! ❤️",
      sorryCannotMake: "Sorry, can't make it 😢",
      numberOfGuests: 'Number of Guests',
      justMe: 'Just me',
      mePlus1: 'Me + 1',
      mePlus2: 'Me + 2',
      mePlus3: 'Me + 3',
      dietaryRestrictions: 'Dietary Restrictions',
      dietaryPlaceholder: 'Vegetarian, vegan, allergies, etc.',
      specialMessage: 'Special Message',
      messagePlaceholder: 'Share your excitement or well wishes...',
      submitRsvp: 'Submit RSVP',
      thankYou: 'Thank You!',
      thankYouMessage: "We've received your RSVP and can't wait to celebrate with you!",
      backToHome: 'Back to Home',

      // Details page
      weddingDetails: 'Wedding Details',
      everythingYouNeed: 'Everything you need to know',
      ceremony: 'Ceremony',
      reception: 'Reception',
      date: 'Date',
      time: 'Time',
      location: 'Location',
      address: 'Address',
      dressCode: 'Dress Code',
      cocktailAttire: 'Cocktail Attire',
      additionalInfo: 'Additional Information',
      parking: 'Parking: Valet parking available at reception venue',
      accommodations: 'Accommodations: Room blocks available at The Plaza Hotel',
      registry: "Registry: We're registered at Williams Sonoma and Amazon",
      photography: 'Photography: Unplugged ceremony - please enjoy the moment!',

      // Contact page
      contactUs: 'Contact Us',
      questionsHelp: "Questions? We're here to help!",
      bride: 'Bride',
      groom: 'Groom',
      weddingPlanner: 'Wedding Planner',

      // Footer
      madeWithLove: 'Made with ❤️',
    },
    es: {
      // Navigation
      home: 'Inicio',
      rsvp: 'Confirmar',
      details: 'Detalles',
      contact: 'Contacto',

      // Home page
      areGettingMarried: '¡se casan!',
      rsvpNow: 'Confirmar Ahora',
      detectedLocation: 'Ubicación detectada',

      // RSVP page
      rsvpTitle: 'Confirmar Asistencia',
      rsvpSubtitle: 'Por favor, déjanos saber si puedes acompañarnos',
      fullName: 'Nombre Completo',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      willYouAttend: '¿Asistirás?',
      yesIllBeThere: '¡Sí, estaré ahí! ❤️',
      sorryCannotMake: 'Lo siento, no puedo asistir 😢',
      numberOfGuests: 'Número de Invitados',
      justMe: 'Solo yo',
      mePlus1: 'Yo + 1',
      mePlus2: 'Yo + 2',
      mePlus3: 'Yo + 3',
      dietaryRestrictions: 'Restricciones Dietéticas',
      dietaryPlaceholder: 'Vegetariano, vegano, alergias, etc.',
      specialMessage: 'Mensaje Especial',
      messagePlaceholder: 'Comparte tu emoción o buenos deseos...',
      submitRsvp: 'Enviar Confirmación',
      thankYou: '¡Gracias!',
      thankYouMessage: '¡Hemos recibido tu confirmación y esperamos celebrar contigo!',
      backToHome: 'Volver al Inicio',

      // Details page
      weddingDetails: 'Detalles de la Boda',
      everythingYouNeed: 'Todo lo que necesitas saber',
      ceremony: 'Ceremonia',
      reception: 'Recepción',
      date: 'Fecha',
      time: 'Hora',
      location: 'Ubicación',
      address: 'Dirección',
      dressCode: 'Código de Vestimenta',
      cocktailAttire: 'Vestimenta de Cóctel',
      additionalInfo: 'Información Adicional',
      parking: 'Estacionamiento: Servicio de valet disponible en el lugar de la recepción',
      accommodations: 'Alojamiento: Habitaciones reservadas disponibles en The Plaza Hotel',
      registry: 'Registro: Estamos registrados en Williams Sonoma y Amazon',
      photography: 'Fotografía: Ceremonia sin dispositivos - ¡por favor disfruta el momento!',

      // Contact page
      contactUs: 'Contáctanos',
      questionsHelp: '¿Preguntas? ¡Estamos aquí para ayudar!',
      bride: 'Novia',
      groom: 'Novio',
      weddingPlanner: 'Organizador de Bodas',

      // Footer
      madeWithLove: 'Hecho con ❤️',
    },
    pt: {
      // Navigation
      home: 'Início',
      rsvp: 'Confirmar',
      details: 'Detalhes',
      contact: 'Contato',

      // Home page
      areGettingMarried: 'vão se casar!',
      rsvpNow: 'Confirmar Agora',
      detectedLocation: 'Localização detectada',

      // RSVP page
      rsvpTitle: 'Confirmar Presença',
      rsvpSubtitle: 'Por favor, nos deixe saber se você pode se juntar a nós',
      fullName: 'Nome Completo',
      email: 'E-mail',
      phone: 'Telefone',
      willYouAttend: 'Você vai comparecer?',
      yesIllBeThere: 'Sim, estarei lá! ❤️',
      sorryCannotMake: 'Desculpe, não posso comparecer 😢',
      numberOfGuests: 'Número de Convidados',
      justMe: 'Apenas eu',
      mePlus1: 'Eu + 1',
      mePlus2: 'Eu + 2',
      mePlus3: 'Eu + 3',
      dietaryRestrictions: 'Restrições Alimentares',
      dietaryPlaceholder: 'Vegetariano, vegano, alergias, etc.',
      specialMessage: 'Mensagem Especial',
      messagePlaceholder: 'Compartilhe sua alegria ou bons desejos...',
      submitRsvp: 'Enviar Confirmação',
      thankYou: 'Obrigado!',
      thankYouMessage: 'Recebemos sua confirmação e mal podemos esperar para celebrar com você!',
      backToHome: 'Voltar ao Início',

      // Details page
      weddingDetails: 'Detalhes do Casamento',
      everythingYouNeed: 'Tudo que você precisa saber',
      ceremony: 'Cerimônia',
      reception: 'Recepção',
      date: 'Data',
      time: 'Horário',
      location: 'Local',
      address: 'Endereço',
      dressCode: 'Código de Vestimenta',
      cocktailAttire: 'Traje de Coquetel',
      additionalInfo: 'Informações Adicionais',
      parking: 'Estacionamento: Serviço de manobrista disponível no local da recepção',
      accommodations: 'Acomodações: Quartos reservados disponíveis no The Plaza Hotel',
      registry: 'Lista de Presentes: Estamos registrados na Williams Sonoma e Amazon',
      photography: 'Fotografia: Cerimônia sem dispositivos - por favor, aproveite o momento!',

      // Contact page
      contactUs: 'Entre em Contato',
      questionsHelp: 'Dúvidas? Estamos aqui para ajudar!',
      bride: 'Noiva',
      groom: 'Noivo',
      weddingPlanner: 'Organizador de Casamentos',

      // Footer
      madeWithLove: 'Feito com ❤️',
    },
  };

  const t = translations[language] || translations['en'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRsvpData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // In a real app, you would send this data to your backend
    console.log('RSVP Data:', rsvpData);
    setSubmitted(true);
  };

  const LanguageSelector = () => (
    <div className="fixed top-4 right-4 z-20">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-gray-700 border border-gray-300 focus:outline-none transition-all text-sm sm:text-base bg-white/90 backdrop-blur-sm"
        onFocus={(e) => (e.target.style.borderColor = '#8FBC8B')}
        onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
      >
        {availableLanguages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );

  const NavigationButton = ({ page, children, active }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={`px-3 py-2 sm:px-6 sm:py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${
        active ? 'text-white shadow-lg' : 'text-gray-700 hover:text-white'
      }`}
      style={active ? { backgroundColor: '#8FBC8B' } : {}}
      onMouseEnter={(e) => {
        if (!active) {
          e.target.style.backgroundColor = '#8FBC8B';
          e.target.style.color = 'white';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.target.style.backgroundColor = '';
          e.target.style.color = '#374151';
        }
      }}
    >
      {children}
    </button>
  );

  const HomePage = () => (
    <div className="text-center text-gray-700 space-y-6 sm:space-y-8 px-4">
      <div className="space-y-4">
        <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto animate-pulse" style={{ color: '#8FBC8B' }} />
        <h1 className="text-4xl sm:text-6xl font-serif font-light tracking-wide">Sarai & Frank</h1>
        <p className="text-lg sm:text-xl opacity-90">{t.areGettingMarried}</p>
      </div>

      <div className="rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md mx-auto" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
        <div className="space-y-3">
          <div className="flex items-center justify-center space-x-3">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
            <span className="text-base sm:text-lg">June 15, 2024</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
            <span className="text-base sm:text-lg">4:00 PM</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
            <span className="text-base sm:text-lg text-center">Garden Pavilion, Central Park</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => setCurrentPage('rsvp')}
        className="text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        style={{ backgroundColor: '#8FBC8B' }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#7BAE7B')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#8FBC8B')}
      >
        {t.rsvpNow}
      </button>
    </div>
  );

  const RSVPPage = () => {
    if (submitted) {
      return (
        <div className="text-center text-gray-700 space-y-6 px-4">
          <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" style={{ color: '#8FBC8B' }} />
          <h2 className="text-3xl sm:text-4xl font-serif">{t.thankYou}</h2>
          <p className="text-lg sm:text-xl opacity-90">{t.thankYouMessage}</p>
          <button
            onClick={() => {
              setCurrentPage('home');
              setSubmitted(false);
            }}
            className="text-white px-6 py-3 rounded-full transition-all duration-300"
            style={{ backgroundColor: '#8FBC8B' }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#7BAE7B')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#8FBC8B')}
          >
            {t.backToHome}
          </button>
        </div>
      );
    }

    return (
      <div className="max-w-lg mx-auto px-4">
        <div className="text-center text-gray-700 mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-serif mb-2">{t.rsvpTitle}</h2>
          <p className="opacity-90 text-sm sm:text-base">{t.rsvpSubtitle}</p>
        </div>

        <div className="rounded-2xl p-4 sm:p-6 space-y-4" style={{ backgroundColor: '#8FBC8B' }}>
          <div>
            <label className="block text-white text-sm font-medium mb-2">{t.fullName} *</label>
            <input
              type="text"
              name="guestName"
              value={rsvpData.guestName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none transition-all text-sm sm:text-base"
              onFocus={(e) => (e.target.style.borderColor = '#7BAE7B')}
              onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
              placeholder={
                language === 'en'
                  ? 'Enter your full name'
                  : language === 'es'
                  ? 'Ingresa tu nombre completo'
                  : language === 'pt'
                  ? 'Digite seu nome completo'
                  : language === 'fr'
                  ? 'Entrez votre nom complet'
                  : language === 'de'
                  ? 'Geben Sie Ihren vollständigen Namen ein'
                  : 'Inserisci il tuo nome completo'
              }
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">{t.email} *</label>
              <input
                type="email"
                name="email"
                value={rsvpData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none transition-all text-sm sm:text-base"
                onFocus={(e) => (e.target.style.borderColor = '#7BAE7B')}
                onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">{t.phone}</label>
              <input
                type="tel"
                name="phone"
                value={rsvpData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none transition-all text-sm sm:text-base"
                onFocus={(e) => (e.target.style.borderColor = '#7BAE7B')}
                onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">{t.willYouAttend} *</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={rsvpData.attendance === 'yes'}
                  onChange={handleInputChange}
                  className="text-white"
                  style={{ accentColor: 'white' }}
                />
                <span className="text-white text-sm sm:text-base">{t.yesIllBeThere}</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={rsvpData.attendance === 'no'}
                  onChange={handleInputChange}
                  className="text-white"
                  style={{ accentColor: 'white' }}
                />
                <span className="text-white text-sm sm:text-base">{t.sorryCannotMake}</span>
              </label>
            </div>
          </div>

          {rsvpData.attendance === 'yes' && (
            <>
              <div>
                <label className="block text-white text-sm font-medium mb-2">{t.numberOfGuests}</label>
                <select
                  name="guestCount"
                  value={rsvpData.guestCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 border border-gray-300 focus:outline-none transition-all text-sm sm:text-base"
                  onFocus={(e) => (e.target.style.borderColor = '#7BAE7B')}
                  onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                >
                  <option value={1}>{t.justMe}</option>
                  <option value={2}>{t.mePlus1}</option>
                  <option value={3}>{t.mePlus2}</option>
                  <option value={4}>{t.mePlus3}</option>
                </select>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">{t.dietaryRestrictions}</label>
                <input
                  type="text"
                  name="dietaryRestrictions"
                  value={rsvpData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none transition-all text-sm sm:text-base"
                  placeholder={t.dietaryPlaceholder}
                  onFocus={(e) => (e.target.style.borderColor = '#7BAE7B')}
                  onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-white text-sm font-medium mb-2">{t.specialMessage}</label>
            <textarea
              name="message"
              value={rsvpData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none transition-all resize-none text-sm sm:text-base"
              placeholder={t.messagePlaceholder}
              onFocus={(e) => (e.target.style.borderColor = '#7BAE7B')}
              onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ backgroundColor: '#7BAE7B' }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#6BA06B')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#7BAE7B')}
          >
            {t.submitRsvp}
          </button>
        </div>
      </div>
    );
  };

  const DetailsPage = () => (
    <div className="text-gray-700 space-y-6 sm:space-y-8 px-4">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-serif mb-2">{t.weddingDetails}</h2>
        <p className="opacity-90 text-sm sm:text-base">{t.everythingYouNeed}</p>
      </div>

      <div className="grid gap-4 sm:gap-6">
        <div className="rounded-2xl p-4 sm:p-6" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
          <h3 className="text-xl sm:text-2xl font-serif mb-4 flex items-center">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-white flex-shrink-0" />
            {t.ceremony}
          </h3>
          <div className="space-y-2 ml-8 sm:ml-9 text-sm sm:text-base">
            <p>
              <strong>{t.date}:</strong> Saturday, June 15, 2024
            </p>
            <p>
              <strong>{t.time}:</strong> 4:00 PM
            </p>
            <p>
              <strong>{t.location}:</strong> Garden Pavilion, Central Park
            </p>
            <p>
              <strong>{t.address}:</strong> 830 5th Ave, New York, NY 10065
            </p>
          </div>
        </div>

        <div className="rounded-2xl p-4 sm:p-6" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
          <h3 className="text-xl sm:text-2xl font-serif mb-4 flex items-center">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-white flex-shrink-0" />
            {t.reception}
          </h3>
          <div className="space-y-2 ml-8 sm:ml-9 text-sm sm:text-base">
            <p>
              <strong>{t.time}:</strong> 6:00 PM - 11:00 PM
            </p>
            <p>
              <strong>{t.location}:</strong> The Plaza Hotel Ballroom
            </p>
            <p>
              <strong>{t.address}:</strong> 768 5th Ave, New York, NY 10019
            </p>
            <p>
              <strong>{t.dressCode}:</strong> {t.cocktailAttire}
            </p>
          </div>
        </div>

        <div className="rounded-2xl p-4 sm:p-6" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
          <h3 className="text-xl sm:text-2xl font-serif mb-4">{t.additionalInfo}</h3>
          <div className="space-y-2 text-sm sm:text-base">
            <p>
              <strong>Parking:</strong> Valet parking available at reception venue
            </p>
            <p>
              <strong>Accommodations:</strong> Room blocks available at The Plaza Hotel
            </p>
            <p>
              <strong>Registry:</strong> We're registered at Williams Sonoma and Amazon
            </p>
            <p>
              <strong>Photography:</strong> Unplugged ceremony - please enjoy the moment!
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="text-gray-700 space-y-6 sm:space-y-8 px-4">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-serif mb-2">{t.contactUs}</h2>
        <p className="opacity-90 text-sm sm:text-base">{t.questionsHelp}</p>
      </div>

      <div className="grid gap-4 sm:gap-6 max-w-lg mx-auto">
        <div className="rounded-2xl p-4 sm:p-6 text-center" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
          <h3 className="text-xl sm:text-2xl font-serif mb-4">{t.bride}</h3>
          <div className="space-y-3 text-sm sm:text-base">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              <span className="break-all">sarai@email.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              <span>(555) 123-4567</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-4 sm:p-6 text-center" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
          <h3 className="text-xl sm:text-2xl font-serif mb-4">{t.groom}</h3>
          <div className="space-y-3 text-sm sm:text-base">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              <span className="break-all">frank@email.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              <span>(555) 987-6543</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-4 sm:p-6 text-center" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
          <h3 className="text-xl sm:text-2xl font-serif mb-4">{t.weddingPlanner}</h3>
          <div className="space-y-3 text-sm sm:text-base">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              <span className="break-all">events@dreamweddings.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              <span>(555) 555-0123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background decorative elements - responsive */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-16 h-16 sm:w-32 sm:h-32 rounded-full" style={{ backgroundColor: '#8FBC8B' }}></div>
        <div className="absolute top-40 right-20 w-12 h-12 sm:w-24 sm:h-24 rounded-full" style={{ backgroundColor: '#8FBC8B' }}></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 sm:w-40 sm:h-40 rounded-full" style={{ backgroundColor: '#8FBC8B' }}></div>
        <div className="absolute bottom-40 right-10 w-10 h-10 sm:w-20 sm:h-20 rounded-full" style={{ backgroundColor: '#8FBC8B' }}></div>
      </div>

      {/* Location and Language selectors */}
      <LanguageSelector />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 sm:py-8 pt-20 sm:pt-16">
        {/* Navigation - mobile optimized */}
        <nav className="flex justify-center space-x-2 sm:space-x-4 mb-8 sm:mb-12 overflow-x-auto">
          <NavigationButton page="home" active={currentPage === 'home'}>
            {t.home}
          </NavigationButton>
          <NavigationButton page="rsvp" active={currentPage === 'rsvp'}>
            {t.rsvp}
          </NavigationButton>
          <NavigationButton page="details" active={currentPage === 'details'}>
            {t.details}
          </NavigationButton>
          <NavigationButton page="contact" active={currentPage === 'contact'}>
            {t.contact}
          </NavigationButton>
        </nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto">
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'rsvp' && <RSVPPage />}
          {currentPage === 'details' && <DetailsPage />}
          {currentPage === 'contact' && <ContactPage />}
        </main>

        {/* Footer */}
        <footer className="text-center text-gray-600 mt-12 sm:mt-16 px-4">
          <p className="text-xs sm:text-sm">Sarai & Frank • May 26, 2026 • {t.madeWithLove}</p>
        </footer>
      </div>
    </div>
  );
};

export default WeddingRSVP;
