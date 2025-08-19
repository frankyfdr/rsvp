export const t = translations[language] || translations['en'];

export const useTransition = (language) => {
  const t = translations[language] || translations['en'];
  return { t };
};

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
    May28: '28th May, 2026',

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
    dressCode: 'Dress code',
    date: 'Date',
    dateMay28: 'Thursday, 28th May, 2026',
    time: 'Time',
    location: 'Location',
    address: 'Address',
    dressCode: 'Dress Code',
    dressCodeDetails: 'Inpired in earthy tones, warm colors, and soft, elegant shades.',
    dressCodeDetails2: 'Please ladies, dont wear white or similar colors, and avoid bright or neon tones.',
    cocktailAttire: 'Cocktail Attire',
    additionalInfo: 'Additional Information',
    parking: 'Parking: Valet parking available at reception venue',
    accommodations: 'Accommodations: Room blocks available at The Plaza Hotel',
    registry: "Registry: We're registered at Williams Sonoma and Amazon",
    photography: 'Photography: Unplugged ceremony - please enjoy the moment!',

    additionalInfo: {
      title: 'The wedding location',
      intro: 'Private, no public taxi/Uber. Only accessible by car. It can be reached by transport.',
      suggestion:
        'We suggest two options to make your trip easier: if you plan to do some sightseeing, we recommend staying in Barcelona city and on the wedding day taking an Uber or taxi to go and return comfortably.',
      celebration: 'If you are coming only for the celebration: here are some nearby accommodation options:',
      hotels: ['B&B Hotel Barcelona', 'Hotel Molí Cardedeu', 'Aparthotel Atenea Les Suites', 'Pensión Galicia'],
    },

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
    May28: '28 de mayo de 2026',

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
    dressCode: 'Código de Vestimenta',
    date: 'Fecha',
    dateMay28: 'Jueves, 28 de mayo de 2026',
    time: 'Hora',
    location: 'Ubicación',
    address: 'Dirección',
    dressCode: 'Código de Vestimenta',
    dressCodeDetails: 'Inspirado en tonos terrosos, colores cálidos y tonos suaves y elegantes.',
    dressCodeDetails2: 'Por favor, damas, no usen blanco o colores similares, y eviten tonos brillantes o neón.',
    cocktailAttire: 'Vestimenta de Cóctel',
    additionalInfo: 'Información Adicional',
    parking: 'Estacionamiento: Servicio de valet disponible en el lugar de la recepción',
    accommodations: 'Alojamiento: Habitaciones reservadas disponibles en The Plaza Hotel',
    registry: 'Registro: Estamos registrados en Williams Sonoma y Amazon',
    photography: 'Fotografía: Ceremonia sin dispositivos - ¡por favor disfruta el momento!',
    additionalInfo: {
      title: 'La localización de la boda',
      intro: 'Particular, no taxi / Uber público. Solo es accesible en coche. Se puede llegar en transporte.',
      suggestion:
        'Sugerimos dos opciones para facilitar vuestro viaje: si tenéis pensado aprovechar para hacer turismo, os recomendamos hospedaros en Barcelona ciudad y el día de la boda tomar un Uber o taxi para ir y volver cómodamente.',
      celebration: 'Si venís solo a la celebración: para la boda, aquí os dejamos algunas opciones de alojamiento cercanas al lugar:',
      hotels: ['B&B Hotel Barcelona', 'Hotel Molí Cardedeu', 'Aparthotel Atenea Les Suites', 'Pensión Galicia'],
    },
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
    May28: '28 de maio de 2026',

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
    dateMay28: 'Quinta-feira, 28 de maio de 2026',
    time: 'Horário',
    location: 'Local',
    address: 'Endereço',
    dressCode: 'Código de Vestimenta',
    dressCodeDetails: 'Inspirado em tons terrosos, cores quentes e tons suaves e elegantes.',
    dressCodeDetails2: 'Por favor, senhoras, não usem branco ou cores semelhantes, e evitem tons brilhantes ou neon.',
    cocktailAttire: 'Traje de Coquetel',
    additionalInfo: 'Informações Adicionais',
    parking: 'Estacionamento: Serviço de manobrista disponível no local da recepção',
    accommodations: 'Acomodações: Quartos reservados disponíveis no The Plaza Hotel',
    registry: 'Lista de Presentes: Estamos registrados na Williams Sonoma e Amazon',
    photography: 'Fotografia: Cerimônia sem dispositivos - por favor, aproveite o momento!',
    additionalInfo: {
      title: 'A localização do casamento',
      intro: 'Privado, sem táxi/Uber público. Só é acessível de carro. Pode ser alcançado por transporte.',
      suggestion:
        'Sugerimos duas opções para facilitar a sua viagem: se planeia aproveitar para fazer turismo, recomendamos hospedar-se na cidade de Barcelona e, no dia do casamento, pegar um Uber ou táxi para ir e voltar confortavelmente.',
      celebration: 'Se vier apenas para a celebração: aqui estão algumas opções de alojamento próximas ao local:',
      hotels: ['B&B Hotel Barcelona', 'Hotel Molí Cardedeu', 'Aparthotel Atenea Les Suites', 'Pensión Galicia'],
    },

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
