import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaCoffee, FaCopy } from 'react-icons/fa';
import { SiBitcoin, SiEthereum } from 'react-icons/si';
import { useState } from 'react';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const walletAddress = "0x72acEE3554A7456d47714E588C327ed86D445685";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <footer className="bg-gradient-to-b from-black via-blue-500 to-gray-500 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-3">
            <FaCoffee className="text-amber-400 text-2xl mr-2" />
            <p className="text-xl font-bold">Buy me coffee with crypto. <span className='text-xl font-bold text-red-500 italic'> REAL ETH PLEASE NOT FAUCET !!!</span></p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="relative">
              <p className="font-mono text-sm sm:text-base break-all bg-black bg-opacity-30 p-3 rounded pr-10">
                {walletAddress}
              </p>
              <button 
                onClick={copyToClipboard}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded"
                aria-label="Copy wallet address"
              >
                <FaCopy className="text-white" />
              </button>
            </div>
            {copied && (
              <div className="mt-2 text-green-400 text-sm">
                ✓ Copied to clipboard!
              </div>
            )}
            <div className="flex justify-center mt-3 space-x-4">
              <div className="flex items-center">
                <SiBitcoin className="text-amber-500 mr-1" />
                <span className="text-xs">BTC</span>
              </div>
              <div className="flex items-center">
                <SiEthereum className="text-purple-500 mr-1" />
                <span className="text-xs">ETH</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-lg font-semibold mb-4">Connect with me</p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors duration-300 flex flex-col items-center"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl mb-1" />
              <span className="text-sm">Twitter</span>
            </a>
            <a 
              href="https://facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors duration-300 flex flex-col items-center"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl mb-1" />
              <span className="text-sm">Facebook</span>
            </a>
            <a 
              href="https://instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-400 transition-colors duration-300 flex flex-col items-center"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl mb-1" />
              <span className="text-sm">Instagram</span>
            </a>
            <a 
              href="mailto:niyomugaboetiene53@gmail.com" 
              className="hover:text-red-400 transition-colors duration-300 flex flex-col items-center"
              aria-label="Email"
            >
              <FaEnvelope className="text-2xl mb-1" />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
        
        <div className="text-center text-gray-300 text-sm border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} Krypto Site. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;