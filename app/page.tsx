import React from 'react';
import styles from './UnderConstruction.module.css';

const UnderConstruction = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-200 p-4">
      <div 
        className={`${styles.fadeIn} text-center bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 max-w-md w-full shadow-lg`}
      >
        <h1 
          className={`${styles.scaleIn} btn-shine text-4xl sm:text-5xl font-bold mb-6 text-white`}
          
        >
           Under Construction 
        </h1>
        <p 
          className={`${styles.fadeInDelay} text-lg sm:text-xl mb-8 text-gray-100`}
        >
          My portfolio is currently being built. Please check back soon!
        </p>
        <div
          className={styles.scaleInDelay}
        >
          <a 
            href="https://github.com/ravikantchauhan246" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gray-600 text-purple-600 font-semibold py-2 px-4 rounded-full hover:bg-purple-100 transition-colors duration-300"
          >
            Check out my GitHub
          </a>
        </div>
      </div>
    </main>
  );
};

export default UnderConstruction;
