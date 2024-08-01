import React from "react";
import { FaLinkedin, FaGithub, FaFilePdf, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white mt-20">
      <div className="flex justify-center items-center sm:px-12 px-4 py-7">
        <h1 className="text-5xl md:text-4xl mb-0 leading-tight font-bold text-teal-500 mt-5">
          <span className="mb-10">Para mais informações</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 mt-3">
        <div>
          <h2 className="text-2xl font-bold text-gray-200">Contatos</h2>
          <p className="mt-2 flex items-center justify-center space-x-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
            <FaLinkedin className="text-teal-400"/>
            <a href="https://www.linkedin.com/in/thiagofernandesdev/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline hover:text-green-500">
              LinkedIn
            </a>
          </p>
          <p className="mt-2 flex items-center justify-center space-x-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
            <FaGithub className="text-teal-400"/>
            <a href="https://github.com/ThiagoDev202" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline hover:text-green-500">
              GitHub
            </a>
          </p>
          <p className="mt-2 flex items-center justify-center space-x-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
            <FaFilePdf className="text-teal-400"/>
            <a href="https://www.dropbox.com/scl/fi/6kroitx8qypxzkty4nlfo/Profile.pdf?rlkey=ose0xwuftywvunmkq93o3ejr4&dl=1" className="text-teal-400 hover:underline hover:text-green-500" download="Curriculo Thiago Fernandes.pdf">
              Currículo
            </a>
          </p>
          <p className="mt-2 flex items-center justify-center space-x-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
            <FaWhatsapp className="text-teal-400"/>
            <a href="https://api.whatsapp.com/send?phone=5585992668904&text=" className="text-teal-400 hover:underline hover:text-green-500">
              WhatsApp
            </a>
          </p>
        </div>
        <div>
          <span className="text-xl font-bold text-teal-300" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
            Feito Por Thiago Fernandes
          </span>
        </div>
        <div>
          <span className="mt-1 text-gray-400" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>Made w/ React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
