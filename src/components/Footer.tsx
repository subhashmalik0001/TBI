import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image 
              src="/logo.svg" 
              alt="TBI Logo" 
              width={250} 
              height={80} 
              className="" 
            />
            <p className="text-sm">
              The range of research activities at Chandigarh University is wide-ranging and profound. University scholars conduct research in practically every domain, and pursue to develop human knowledge through investigation, invention
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-500 pb-2">Address</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-red-500 mt-1 mr-3" />
                <span>NH-05, Ludhiana - Chandigarh State Hwy, Punjab 140413</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-red-500 mr-3" />
                <span>tbi@cumail.in</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-red-500 mr-3" />
                <span>+91-9463194946</span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-500 pb-2">Resources</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Programs', 'Insights', 'Events'].map(item => (
                <li key={item} className="flex items-center">
                  <span className="text-red-500 mr-2">▶</span>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
            <button className="bg-white text-black font-bold py-3 px-6 rounded-lg mt-6 hover:bg-gray-200">
              Apply To Incubate
            </button>
          </div>
        </div>

        <div className="border-t border-red-500 mt-12 pt-6 text-center text-sm">
          <p>Copyright 2025 CHANDIGARH UNIVERSITY | TBI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 