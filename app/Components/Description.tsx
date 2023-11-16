import React from "react";
import Button from "./Button/Button";
import Image from "next/image";

const Description = () => {
  return (
    <section className="flex justify-center items-center space-x-8 mt-12 mb-12 mx-[60px]">
      <div className="w-1/2">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Cloud Marvin&rsquo;s <br /> Cyber Community
        </h2>
        <p className="text-base lg:text-lg mb-6">
          1. Collaborative learning: Connect with like-minded individuals to
          enhance your knowledge and skills in cybersecurity. <br />
          2. Networking opportunities: Build valuable professional relationships
          and expand your career prospects in the cyber industry. <br />
          3. Resource sharing: Gain access to a wealth of resources, tools, and
          insights to stay updated and excel in your cybersecurity endeavors.{" "}
          <br />
          4. Supportive community: Find a supportive network that fosters
          growth, provides guidance, and celebrates your achievements in the
          cyber domain.
        </p>

        <Button
          to="/page1"
          className="text-lg lg:text-xl font-bold rounded-full px-6 py-3 bg-custom-color2 text-white"
        >
          JOIN OUR FREE COMMUNITY
        </Button>
      </div>

      <div className="w-1/2">
        <Image
          src="/new.jpeg"
          alt="community"
          width={500}
          height={300}
          priority
        />
      </div>
    </section>
  );
};

export default Description;
