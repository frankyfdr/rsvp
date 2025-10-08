import { Calendar } from 'lucide-react';

export const DetailsPage = () => (
  <div className="text-gray-700 space-y-6 sm:space-y-8 px-4">
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-serif mb-2">Wedding Details</h2>
      <p className="opacity-90 text-sm sm:text-base">Everything you need to know</p>
    </div>
    <div className="grid gap-4 sm:gap-6">
      <div className="rounded-2xl p-4 sm:p-6" style={{ backgroundColor: '#8FBC8B', color: 'white' }}>
        <h3 className="text-xl sm:text-2xl font-serif mb-4 flex items-center">
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-white flex-shrink-0" />
          Ceremony
        </h3>
        <div className="space-y-2 ml-8 sm:ml-9 text-sm sm:text-base">
          <p>
            <strong>Date:</strong> Thursday, 28th May, 2026
          </p>
          <p>
            <strong>Time:</strong> 4:00 PM
          </p>
          <p>
            <strong>Location:</strong> Casa Paratgea
          </p>
        </div>
      </div>
    </div>
  </div>
);
