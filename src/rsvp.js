import React, { useState } from 'react';
import { Heart, Calendar, MapPin, Clock, Users, Mail, Phone } from 'lucide-react';

const WeddingRSVP = () => {
  const [currentPage, setCurrentPage] = useState('home');
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
        <p className="text-xl opacity-90">are getting married!</p>
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
        RSVP Now
      </button>
    </div>
  );

  const RSVPPage = () => {
    if (submitted) {
      return (
        <div className="text-center text-gray-700 space-y-6">
          <Heart className="w-16 h-16 mx-auto" style={{ color: '#8FBC8B' }} />
          <h2 className="text-4xl font-serif">Thank You!</h2>
          <p className="text-xl opacity-90">We've received your RSVP and can't wait to celebrate with you!</p>
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
            Back to Home
          </button>
        </div>
      );
    }

    return (
      <div className="max-w-md mx-auto">
        <div className="text-center text-gray-700 mb-8">
          <h2 className="text-4xl font-serif mb-2">RSVP</h2>
          <p className="opacity-90">Please let us know if you can join us</p>
        </div>

        <div className="rounded-2xl p-6 space-y-4" style={{ backgroundColor: '#8FBC8B' }}>
          <div>
            <label className="block text-white text-sm font-medium mb-2">Full Name *</label>
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
              placeholder="Enter your full name"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">Email *</label>
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
              <label className="block text-white text-sm font-medium mb-2">Phone</label>
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
            <label className="block text-white text-sm font-medium mb-2">Will you be attending? *</label>
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
                <span className="text-white">Yes, I'll be there! ❤️</span>
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
                <span className="text-white">Sorry, can't make it 😢</span>
              </label>
            </div>
          </div>

          {rsvpData.attendance === 'yes' && (
            <>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Number of Guests</label>
                <select
                  name="guestCount"
                  value={rsvpData.guestCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 border border-gray-300 focus:outline-none transition-all"
                  onFocus={(e) => (e.target.style.borderColor = '#7BAE7B')}
                  onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                >
                  <option value={1}>Just me</option>
                  <option value={2}>Me + 1</option>
                  <option value={3}>Me + 2</option>
                  <option value={4}>Me + 3</option>
                </select>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Dietary Restrictions</label>
                <input
                  type="text"
                  name="dietaryRestrictions"
                  value={rsvpData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none transition-all"
                  placeholder="Vegetarian, vegan, allergies, etc."
                  onFocus={(e) => (e.target.style.borderColor = '#7BAE7B')}
                  onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-white text-sm font-medium mb-2">Special Message</label>
            <textarea
              name="message"
              value={rsvpData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none transition-all resize-none"
              placeholder="Share your excitement or well wishes..."
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
            Submit RSVP
          </button>
        </div>
      </div>
    );
  };

  const DetailsPage = () => (
    <div className="text-gray-700 space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-serif mb-2">Wedding Details</h2>
        <p className="opacity-90">Everything you need to know</p>
      </div>

      <div className="grid gap-6">
        <div className="rounded-2xl p-6" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
          <h3 className="text-2xl font-serif mb-4 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-white" />
            Ceremony
          </h3>
          <div className="space-y-2 ml-9">
            <p>
              <strong>Date:</strong> Saturday, June 15, 2024
            </p>
            <p>
              <strong>Time:</strong> 4:00 PM
            </p>
            <p>
              <strong>Location:</strong> Garden Pavilion, Central Park
            </p>
            <p>
              <strong>Address:</strong> 830 5th Ave, New York, NY 10065
            </p>
          </div>
        </div>

        <div className="rounded-2xl p-6" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
          <h3 className="text-2xl font-serif mb-4 flex items-center">
            <Users className="w-6 h-6 mr-3 text-white" />
            Reception
          </h3>
          <div className="space-y-2 ml-9">
            <p>
              <strong>Time:</strong> 6:00 PM - 11:00 PM
            </p>
            <p>
              <strong>Location:</strong> The Plaza Hotel Ballroom
            </p>
            <p>
              <strong>Address:</strong> 768 5th Ave, New York, NY 10019
            </p>
            <p>
              <strong>Dress Code:</strong> Cocktail Attire
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
