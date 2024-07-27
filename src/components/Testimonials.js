import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        {/* Não está em uso UserIcon abaixo*/}
        <UsersIcon className="w-10 inline-block mb-4 text-white" />
        {/* não removida por motivo de save_code = não é uma boaa pratica */}
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 font-bold body-font mb-12 mt-10">
          Experiência
        </h1>
        <div className="flex flex-wrap m-4 text-white text-opacity-80">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              {/* <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded"> */}
              <div className="h-full bg-gray-900 p-8 rounded rounded-1xl">
                <TerminalIcon className="block w-8 text-white mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center" >
                  {/* <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  /> */}
                  {/* teste */}
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-900 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}