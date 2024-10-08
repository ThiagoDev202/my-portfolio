import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl font-bold mb-4 font-medium text-gray-800">
            Olá, bem-vindo ao meu portfólio!
          </h1>
          <p className=" mb-8 mt-2 title-font sm:text-base text-sm font-medium text-gray-800 leading-relaxed my-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Desenvolvedor Full-Stack com mais de 1 ano de experiência.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
            >
              Contato
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
              Veja meus projetos
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}