import { Heart, Calendar, MapPin, Clock, Users, Mail, Phone } from 'lucide-react';

export const HomePage = ({ t, setCurrentPage }) => (
  <div className="text-center text-gray-700 space-y-6 sm:space-y-8 px-4">
    <div className="space-y-4">
      <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto animate-pulse" style={{ color: '#435942' }} />
      <h1 className="text-4xl sm:text-6xl font-serif font-light tracking-wide">Sarai & Frank</h1>
      <p className="text-lg sm:text-xl opacity-90">{t.celebrateWithUs}</p>
    </div>

    <div className="rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md mx-auto" style={{ backgroundColor: '#435942', color: 'white' }}>
      <div className="space-y-3">
        <div className="flex items-center justify-center space-x-3">
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
          <span className="text-base sm:text-lg">28 May, 2026</span>
        </div>
      </div>
    </div>

    <button
      onClick={() => setCurrentPage('rsvp')}
      className="text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
      style={{ backgroundColor: '#435942' }}
    >
      RSVP
    </button>
  </div>
);
