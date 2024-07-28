import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Mensagem enviada com sucesso! ✅"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative pt-16 md:pt-20">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Fortaleza+-+CE,+Brasil&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md text-white text-opacity-70">
            {/* <div className="lg:w-1/2 px-6"> */}
            <div className="w-full lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS<span className="ml-1" role="img" aria-label="cérebro emoji">📍</span>
              </h2>
              <p className="mt-1">
                Brasil, <br />
                Fortaleza-CE
              </p>
            </div>
            {/* <div className="lg:w-1/2 px-6 mt-4 lg:mt-0"> */}
            <div className="w-full lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed break-words">
                thiago2002.fernandes@hotmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">
            +55 (85) 9 9266-8904
            <a
              href="https://api.whatsapp.com/send?phone=5585992668904&text="
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-block flex items-center leading-relaxed"
            >
              <img
                src="/whatsapp.png"
                alt="WhatsApp"
                style={{ width: '24px', height: '24px' }}
                className="inline-block flex items-center leading-relaxed mt-1"
              />
            </a>
          </p>
            </div>
          </div>
        </div>
        <form
      netlify
      name="contact"
      onSubmit={handleSubmit}
      className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h2 className="text-white sm:text-4xl text-3xl mb-5 font-medium title-font text-xl font-bold mt-5" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Enviar E-mail
      </h2>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite seu nome e sobrenome"
          className="w-full bg-gray-800 italic rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"
          className="w-full bg-gray-800 italic rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="message"
          className="leading-7 text-sm text-gray-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Envie sua proposta!"
          className="w-full bg-gray-800 italic rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Enviar
      </button>
    </form>
      </div>
    </section>
  );
}