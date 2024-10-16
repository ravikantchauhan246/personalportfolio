import React from "react";
import styles from "./UnderConstruction.module.css";

const UnderConstruction = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-200 p-4">
      <div
        className={`${styles.fadeIn} text-center bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 max-w-md w-full shadow-lg flex flex-col items-center`}
      >
        <h1
          className={`${styles.scaleIn}  text-4xl sm:text-5xl font-bold mb-6`}
        >
          Under Construction
        </h1>
        <p
          className={`${styles.fadeInDelay} text-lg sm:text-xl mb-8 text-gray-100`}
        >
          My portfolio is currently being built. Please check back soon!
        </p>
        <div className={`${styles.scaleInDelay} w-full flex justify-center`}>
          <a
            href="https://github.com/ravikantchauhan246"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-95 duration-300 relative group cursor-pointer text-gray-200 overflow-hidden h-12 w-48 rounded-md bg-gray-500 p-2 flex justify-center items-center font-extrabold"
          >
            <div className="absolute right-24 -top-3 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-gary-900"></div>
            <div className="absolute right-2 -top-3 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-gray-800"></div>
            <div className="absolute -right-8 top-3 group-hover:top-1 group-hover:right-2 z-10 w-20 h-20 rounded-full group-hover:scale-150 duration-500 bg-gray-700"></div>
            <div className="absolute right-16 -top-3 group-hover:top-1 group-hover:right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-500 bg-gray-600"></div>
            <p className="z-10 text-sm font-medium">Check out my GitHub</p>
          </a>
        </div>
      </div>
    </main>
  );
};

export default UnderConstruction;
