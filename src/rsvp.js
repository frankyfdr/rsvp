'use client';
import React, { useState } from 'react';
import { Heart, Calendar, MapPin, Clock, Users, Mail, Phone } from 'lucide-react';

const WeddingRSVP = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en');
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

  const t = translations[language];

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
    <div className="absolute top-4 right-4 z-20">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="px-3 py-2 rounded-lg text-gray-700 border border-gray-300 focus:outline-none transition-all"
        style={{ backgroundColor: 'white' }}
        onFocus={(e) => (e.target.style.borderColor = '#8FBC8B')}
        onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
      >
        <option value="en">🇺🇸 English</option>
        <option value="es">🇪🇸 Español</option>
        <option value="pt">🇧🇷 Português</option>
      </select>
    </div>
  );

  const NavigationButton = ({ page, children, active }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={`px-6 py-2 rounded-full transition-all duration-300 ${active ? 'text-white shadow-lg' : 'text-gray-700 hover:text-white'}`}
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
    <div className="text-center text-gray-700 space-y-8">
      <div className="space-y-4">
        <Heart className="w-16 h-16 mx-auto animate-pulse" style={{ color: '#8FBC8B' }} />
        <h1 className="text-6xl font-serif font-light tracking-wide">Sarai & Frank</h1>
        <p className="text-xl opacity-90">{t.areGettingMarried}</p>
      </div>

      <div className="rounded-2xl p-8 max-w-md mx-auto" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
        <div className="flex items-center justify-center space-x-3">
          <Calendar className="w-6 h-6 text-white" />
          <span className="text-lg">June 15, 2024</span>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <Clock className="w-6 h-6 text-white" />
          <span className="text-lg">4:00 PM</span>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <MapPin className="w-6 h-6 text-white" />
          <span className="text-lg">Garden Pavilion, Central Park</span>
        </div>
      </div>

      <button
        onClick={() => setCurrentPage('rsvp')}
        className="text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
        <div className="text-center text-gray-700 space-y-6">
          <Heart className="w-16 h-16 mx-auto" style={{ color: '#8FBC8B' }} />
          <h2 className="text-4xl font-serif">{t.thankYou}</h2>
          <p className="text-xl opacity-90">{t.thankYouMessage}</p>
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
      <div className="max-w-md mx-auto">
        <div className="text-center text-gray-700 mb-8">
          <h2 className="text-4xl font-serif mb-2">{t.rsvpTitle}</h2>
          <p className="opacity-90">{t.rsvpSubtitle}</p>
        </div>

        <div className="rounded-2xl p-6 space-y-4" style={{ backgroundColor: '#8FBC8B' }}>
          <div>
            <label className="block text-white text-sm font-medium mb-2">{t.fullName} *</label>
            <input
              type="text"
              name="guestName"
              value={rsvpData.guestName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none transition-all"
              style={{ '--tw-ring-color': '#8FBC8B' }}
              onFocus={(e) => (e.target.style.borderColor = '#7BAE7B')}
              onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
              placeholder={language === 'en' ? 'Enter your full name' : language === 'es' ? 'Ingresa tu nombre completo' : 'Digite seu nome completo'}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">{t.email} *</label>
              <input
                type="email"
                name="email"
                value={rsvpData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none transition-all"
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
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none transition-all"
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
                <span className="text-white">{t.yesIllBeThere}</span>
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
                <span className="text-white">{t.sorryCannotMake}</span>
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
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 border border-gray-300 focus:outline-none transition-all"
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
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none transition-all"
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
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none transition-all resize-none"
              placeholder={t.messagePlaceholder}
              onFocus={(e) => (e.target.style.borderColor = '#7BAE7B')}
              onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full text-white py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
    <div className="text-gray-700 space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-serif mb-2">{t.weddingDetails}</h2>
        <p className="opacity-90">{t.everythingYouNeed}</p>
      </div>

      <div className="grid gap-6">
        <div className="rounded-2xl p-6" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
          <h3 className="text-2xl font-serif mb-4 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-white" />
            {t.ceremony}
          </h3>
          <div className="space-y-2 ml-9">
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

        <div className="rounded-2xl p-6" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
          <h3 className="text-2xl font-serif mb-4 flex items-center">
            <Users className="w-6 h-6 mr-3 text-white" />
            {t.reception}
          </h3>
          <div className="space-y-2 ml-9">
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

        <div className="rounded-2xl p-6" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
          <h3 className="text-2xl font-serif mb-4">Additional Information</h3>
          <div className="space-y-2">
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
    <div className="text-gray-700 space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-serif mb-2">Contact Us</h2>
        <p className="opacity-90">Questions? We're here to help!</p>
      </div>

      <div className="grid gap-6 max-w-md mx-auto">
        <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
          <h3 className="text-2xl font-serif mb-4">Bride</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-white" />
              <span>sarai@email.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-white" />
              <span>(555) 123-4567</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
          <h3 className="text-2xl font-serif mb-4">Groom</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-white" />
              <span>frank@email.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-white" />
              <span>(555) 987-6543</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
          <h3 className="text-2xl font-serif mb-4">Wedding Planner</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5" style={{ color: '#8FBC8B' }} />
              <span>events@dreamweddings.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5" style={{ color: '#8FBC8B' }} />
              <span>(555) 555-0123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: '#8FBC8B' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full" style={{ backgroundColor: '#8FBC8B' }}></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full" style={{ backgroundColor: '#8FBC8B' }}></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 rounded-full" style={{ backgroundColor: '#8FBC8B' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Navigation */}
        <nav className="flex justify-center space-x-4 mb-12">
          <NavigationButton page="home" active={currentPage === 'home'}>
            Home
          </NavigationButton>
          <NavigationButton page="rsvp" active={currentPage === 'rsvp'}>
            RSVP
          </NavigationButton>
          <NavigationButton page="details" active={currentPage === 'details'}>
            Details
          </NavigationButton>
          <NavigationButton page="contact" active={currentPage === 'contact'}>
            Contact
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
        <footer className="text-center text-gray-600 mt-16">
          <p className="text-sm">Sarai & Frank • June 15, 2024 • Made with ❤️</p>
        </footer>
      </div>
    </div>
  );
};

export default WeddingRSVP;
