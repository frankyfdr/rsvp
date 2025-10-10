import { Calendar, Map } from 'lucide-react';

export const DetailsPage = () => (
  <div className="text-gray-700 space-y-6 sm:space-y-8 px-4">
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-serif mb-2">Wedding Details</h2>
      <p className="opacity-90 text-sm sm:text-base">Everything you need to know</p>
    </div>
    <div className="grid gap-4 sm:gap-6">
      <div className="rounded-2xl p-4 sm:p-6" style={{ backgroundColor: '#435942', color: 'white' }}>
        <h3 className="text-xl sm:text-2xl font-serif mb-4 flex items-center">
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-white flex-shrink-0" />
          Ceremony
        </h3>
        <div className="space-y-2 ml-8 sm:ml-9 text-sm sm:text-base">
          <p>
            <strong>Date:</strong> Thursday, 28th May, 2026
          </p>
          <p>
            <strong>Time:</strong> 3:00 PM
          </p>
          <p>
            <strong>Location:</strong> Casa Paratgea, Barcelona, Spain
          </p>
          <MapEmbed />
        </div>
      </div>
    </div>
  </div>
);

export default function MapEmbed() {
  return (
    <div className="w-full h-[400px] overflow-hidden rounded-lg shadow">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.1429724991713!2d2.395391930051445!3d41.631040965491366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4cbc6b92fed7b%3A0x6cea9e7ff2f6c4e7!2sParatgea!5e0!3m2!1sen!2ses!4v1760010833165!5m2!1sen!2ses"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
