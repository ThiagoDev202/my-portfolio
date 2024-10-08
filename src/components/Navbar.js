import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }} >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl hover:opacity-90">
            Home
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-white">
          <a href="#projects" className="mr-5 hover:text-green-500">
            Projetos
          </a>
          <a href="#skills" className="mr-5 hover:text-green-500">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-green-500">
            Experiência
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base text-white mt-4 md:mt-0"> 
          Contato
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}