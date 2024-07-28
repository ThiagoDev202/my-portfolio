// import React from "react";

// const SocialIcons = ({ Icons }) => {
//   return (
//     <div className="text-teal-500">
//       {Icons.map((icon) => (
//         <span
//           key={icon.name}
//           className="p-2 cursor-pointer inline-flex items-center
//         rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
//         duration-300 "
//         >
//           <ion-icon name={icon.name}></ion-icon>
//         </span>
//       ))}
//     </div>
//   );
// };

// export default SocialIcons;

// SocialIcons.jsx
import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      {Icons.map((icon, index) => (
        <a
          key={index}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-600"
        >
          <i className={`fab ${icon.name}`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;

// Menus.js
export const Icons = [
  { name: "fa-github", link: "https://github.com/ThiagoDev202" },
  { name: "fa-linkedin", link: "https://www.linkedin.com/in/thiago-fernandes/" },
  // Adicione mais ícones conforme necessário
];
