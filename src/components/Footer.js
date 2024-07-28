import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="flex justify-center items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
      <h1 className="text-5xl md:text-4xl mb-0 leading-tight font-bold text-teal-600 mt-5 shadow-lg">
        <span className="text-teal-600 mb-10">Para mais informações</span>
      </h1>
      </div>
      <div className="grid grid-cols-1 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 mt-3">
        <div>
          <h2 className="text-2xl font-bold text-gray-200">Contatos</h2>
          <p className="mt-2">
            <a href="https://www.linkedin.com/in/thiagofernandesdev/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline hover:text-green-500">
              LinkedIn
            </a>
          </p>
          <p className="mt-2">
            <a href="https://github.com/ThiagoDev202" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline hover:text-green-500">
              GitHub
            </a>
          </p>
          <p className="mt-2">
            <a href="https://www.dropbox.com/scl/fi/6kroitx8qypxzkty4nlfo/Profile.pdf?rlkey=ose0xwuftywvunmkq93o3ejr4&dl=1" className="text-teal-400 hover:underline hover:text-green-500" download="Curriculo Thiago Fernandes.pdf">
                Curriculo
            </a>
          </p>
          <p className="mt-2">
            <a href="https://api.whatsapp.com/send?phone=55992668904" className="text-teal-400 hover:underline hover:text-green-500">
                WhatsApp
            </a>
          </p>
        </div>
        <div>
          <span className="text-xl font-bold text-teal-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Feito Por Thiago Fernandes
          </span>
        </div>
        <div>
          <span className="mt-1 text-gray-400" style={{ fontFamily: 'Roboto, sans-serif' }}>Made w/ React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
