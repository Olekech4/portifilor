import { FaFacebook, FaTwitter, FaInstagram, } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';

export default function CenteredIcons() {
  return (
    <div>
    <div className="flex items-center justify-center mt-10">
      <div className="flex space-x-4">
        <FaFacebook className="w-10 h-10 text-blue-600" />
        <FaTwitter className="w-10 h-10 text-blue-400" />
        <FaInstagram className="w-10 h-10 text-pink-500" />
        <FaLinkedinIn className="w-10 h-10 text--500" />

      </div><br />

      
    </div>
     <div className='flex items-center justify-center mt-10'>Copyright ©2024 All rights reserved | Designed by Chisom Tech </div>
     </div>
  );
}


