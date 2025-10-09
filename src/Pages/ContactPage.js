import { Mail, Phone } from 'lucide-react';

export const ContactPage = ({ t }) => (
  <div className="text-gray-700 space-y-6 sm:space-y-8 px-4">
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-serif mb-2">Contact</h2>
      <p className="opacity-90 text-sm sm:text-base">Questions? We're here to help!</p>
    </div>

    <div className="grid gap-4 sm:gap-6 max-w-lg mx-auto">
      <div className="rounded-2xl p-4 sm:p-6 text-center" style={{ backgroundColor: '#435942', color: 'white' }}>
        <h3 className="text-xl sm:text-2xl font-serif mb-4">{t.bride}</h3>
        <div className="space-y-3 text-sm sm:text-base">
          <div className="flex items-center justify-center space-x-3">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
            <span className="break-all">sarailozada682@gmail.com</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
            <a target="_blank" rel="noreferrer" href="https://wa.link/ieg6iu">
              (+34) 624 48 24 59
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-2xl p-4 sm:p-6 text-center" style={{ backgroundColor: '#435942', color: 'white' }}>
        <h3 className="text-xl sm:text-2xl font-serif mb-4">{t.groom}</h3>
        <div className="space-y-3 text-sm sm:text-base">
          <div className="flex items-center justify-center space-x-3">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
            <span className="break-all">franklin-fdr@hotmail.com</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
            <a target="_blank" rel="noreferrer" href="https://wa.link/ieg6iu">
              (+34) 641 829 850
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
