import React from "react";
import Button from "./Button/Button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Image-1.png')", opacity: 0.5 }}
      />

      {/* Content */}
      <div className="mx-auto text-white lg:ml-[100px] lg:text-left text-left relative z-10 ml-8 mr-8">
        <h3 className="lg:text-2xl text-lg font-bold">
          CLOUD MAVIN'S <br /> <span>CYBER ACADEMY</span>
        </h3>

        <h1 className="lg:text-6xl text-3xl font-bold lg:mt-10 lg:mb-4 text-left mt-4 mb-4">
          Top-notch <span className="block">Cyber Security Education</span>
        </h1>

        <p className="lg:text-lg text-left mb-8">
          Welcome to our cybersecurity academy, where we empower beginners
          <br className="hidden lg:inline" /> with essential skills to protect
          digital landscapes and combat online
          <br className="hidden lg:inline" /> threats, forging the next
          generation of cyber defenders.
        </p>

        <Button
          to="/page1"
          className="lg:text-xl lg:font-bold  rounded-full lg:px-6 lg:py-3 py-2 px-3 bg-custom-color text-white"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
