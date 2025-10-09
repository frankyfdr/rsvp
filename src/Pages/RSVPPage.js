import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Clock, Users, Mail, Phone } from 'lucide-react';
export const RSVPPage = ({ t }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en');
  const [userLocation, setUserLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [contact, setContact] = useState({
    email: '',
    phone: '',
    message: '',
  });
  // guests: array of guest objects { guestName, attendance: 'yes'|'no'|'', hasAllergy: 'yes'|'no'|'', allergyDetails: '' }
  const [guests, setGuests] = useState([{ guestName: '', attendance: '', hasAllergy: '', allergyDetails: '' }]);

  // === NEW: Read URL param ?names=Alice,Bob,Charlie (comma-separated list of names)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const namesParam = params.get('names') || params.get('guests'); // accept either 'names' or legacy 'guests'
      if (namesParam && namesParam.trim().length > 0) {
        // split by comma, decode components, trim whitespace, filter out empty
        const parsed = namesParam
          .split(',')
          .map((s) => decodeURIComponent(s).trim())
          .filter((s) => s.length > 0);

        // clamp to a reasonable maximum to avoid rendering extreme counts
        const max = 10;
        const final = parsed.slice(0, max);

        if (final.length > 0) {
          setGuests(final.map((name) => ({ guestName: name, attendance: '', hasAllergy: '', allergyDetails: '' })));
          return;
        }
      }

      // fallback: keep one empty guest if no valid names provided
      setGuests([{ guestName: '', attendance: '', hasAllergy: '', allergyDetails: '' }]);
    } catch (e) {
      // on any error, fallback to a single empty guest
      setGuests([{ guestName: '', attendance: '', hasAllergy: '', allergyDetails: '' }]);
    }
    // run only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const appendToExcel = async () => {
    // build rows (one per guest)
    // adjust to your desired row structure
    const rows = guests.map((g, idx) => [
      g.guestName || `Guest ${idx + 1}`,
      g.attendance || 'no answer',
      g.allergyDetails || '',
      contact.email || '',
      contact.phone || '',
      contact.message || '',
    ]);

    try {
      const response = await fetch('/api/append', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rows }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Failed to submit RSVP', response.statusText);
      }
    } catch (err) {
      console.error('Submit error:', err);
    }
  };
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  // update a single guest field
  const handleGuestChange = (index, field, value) => {
    setGuests((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };

      // If attendance becomes 'no', clear allergy fields
      if (field === 'attendance' && value === 'no') {
        copy[index].hasAllergy = '';
        copy[index].allergyDetails = '';
      }

      // If hasAllergy becomes 'no', clear allergyDetails
      if (field === 'hasAllergy' && value === 'no') {
        copy[index].allergyDetails = '';
      }

      return copy;
    });
  };

  if (submitted) {
    return (
      <div className="text-center text-gray-700 space-y-6 px-4">
        <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" style={{ color: '#435942' }} />
        <h2 className="text-3xl sm:text-4xl font-serif">{t.thankYou}</h2>
        <p className="text-lg sm:text-xl opacity-90">{t.thankYouMessage}</p>
        <button
          onClick={() => {
            setCurrentPage('home');
            setSubmitted(false);
          }}
          className="text-white px-6 py-3 rounded-full transition-all duration-300"
          style={{ backgroundColor: '#435942' }}
        >
          {t.backToHome}
        </button>
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center text-gray-700 mb-6 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl font-serif mb-2">{t.rsvpTitle}</h2>
        <p className="opacity-90 text-sm sm:text-base">{t.rsvpSubtitle}</p>
      </div>

      <div className="rounded-2xl p-4 sm:p-6 space-y-4" style={{ backgroundColor: '#435942' }}>
        {/* contact & message */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">{t.email}</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleContactChange}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none transition-all text-sm sm:text-base"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">{t.phone}</label>
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleContactChange}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none transition-all text-sm sm:text-base"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">{t.specialMessage}</label>
          <textarea
            name="message"
            value={contact.message}
            onChange={handleContactChange}
            rows={2}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none transition-all resize-none text-sm sm:text-base"
            placeholder="Share your excitement or well wishes..."
          />
        </div>

        {/* guest sub-forms */}
        <div className="space-y-4">
          <div className="text-white font-medium">
            {t.numberOfGuests}: {guests.length}
          </div>

          {guests.map((g, i) => (
            <div key={i} className="rounded-lg p-4 bg-white text-gray-700">
              <div className="flex items-center justify-between mb-2">
                <strong>
                  {t.invitationFor}
                  {g.guestName}
                </strong>
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">{t.fullName}</label>
                <input
                  type="text"
                  value={g.guestName}
                  onChange={(e) => handleGuestChange(i, 'guestName', e.target.value)}
                  className="w-full px-3 py-2 rounded border border-gray-300"
                  placeholder={`Guest ${i + 1} full name`}
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">{t.willYouAttend}</label>
                <div className="flex gap-4 items-center">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`attendance-${i}`}
                      value="yes"
                      checked={g.attendance === 'yes'}
                      onChange={() => handleGuestChange(i, 'attendance', 'yes')}
                    />
                    <span>{t.yesIllBeThere}</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`attendance-${i}`}
                      value="no"
                      checked={g.attendance === 'no'}
                      onChange={() => handleGuestChange(i, 'attendance', 'no')}
                    />
                    <span>{t.sorryCannotMake}</span>
                  </label>
                </div>
              </div>

              {/* only show allergy questions when attending */}
              {g.attendance === 'yes' && (
                <>
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">{t.anyAllergies}</label>
                    <div className="flex gap-4 items-center">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`hasAllergy-${i}`}
                          value="yes"
                          checked={g.hasAllergy === 'yes'}
                          onChange={() => handleGuestChange(i, 'hasAllergy', 'yes')}
                        />
                        <span>{t.yes}</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`hasAllergy-${i}`}
                          value="no"
                          checked={g.hasAllergy === 'no'}
                          onChange={() => handleGuestChange(i, 'hasAllergy', 'no')}
                        />
                        <span>{t.no}</span>
                      </label>
                    </div>
                  </div>

                  {g.hasAllergy === 'yes' && (
                    <div className="mb-3">
                      <label className="block text-sm font-medium mb-1">{t.allergyDetails}</label>
                      <input
                        type="text"
                        value={g.allergyDetails}
                        onChange={(e) => handleGuestChange(i, 'allergyDetails', e.target.value)}
                        className="w-full px-3 py-2 rounded border border-gray-300"
                        placeholder="e.g. Peanuts, shellfish, lactose"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={appendToExcel}
          className="w-full text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          style={{ backgroundColor: '#7BAE7B' }}
        >
          {t.submitRsvp}
        </button>
      </div>
    </div>
  );
};
