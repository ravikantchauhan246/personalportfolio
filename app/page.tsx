"use client";
import React from "react";
import { motion } from "framer-motion";

import { AuroraBackground } from "@/components/ui/aurora-background";
import styles from "./UnderConstruction.module.css";
import DataCollectingForm from "@/components/DataCollectingForm";

const UnderConstruction = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 min-h-screen h-screen pt-48"
      >
        <div
          className={`${styles.scaleIn} text-4xl md:text-7xl font-bold text-white text-center`}
        >
          Ravikant Chauhan
        </div>
        <div className="font-extralight text-base md:text-2xl text-neutral-200 py-4 text-center">
          Full Stack Developer | Cloud Enthusiast | Crafting Digital Experiences
        </div>
        <div className="text-sm md:text-base text-neutral-300 max-w-2xl text-center">
          Welcome to my portfolio! I'm currently enhancing this space to
          showcase my projects and skills. Stay tuned for an immersive journey
          through my work in web development and AI.
        </div>
        <section className="flex justify-center items-center mt-4">
          <a
            href="https://github.com/ravikantchauhan246"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex justify-center items-center p-2 rounded-md bg-transparent text-white font-semibold hover:translate-y-1 transition-all duration-300 px-8 border border-white/20 hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 15 15"
              className="w-5 mr-2"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                fill="currentColor"
                d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
              ></path>
            </svg>
            Explore My GitHub
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 whitespace-nowrap">
              <span className="text-yellow-300">⭐</span> Star my repos!
            </span>
          </a>
        </section>
        <DataCollectingForm />
      </motion.div>
    </AuroraBackground>
  );
};

export default UnderConstruction;
