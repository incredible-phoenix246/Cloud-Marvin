import React from "react";
import Link from "next/link";

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  color?: string; // Add the color prop
}

const Button: React.FC<ButtonProps> = ({
  to,
  children,
  className,
  color = "",
}) => {
  // Combine the default Tailwind classes with the custom ones
  const buttonClasses = `bg-${color} hover:bg-${color}-dark text-white font-bold py-2 px-4 rounded ${
    className || ""
  }`;

  return (
    <Link href={to} className={buttonClasses}>
      {children}
    </Link>
  );
};

export default Button;

{
  /*

usage 

// pages/index.tsx
import React from 'react';
import CustomButton from '../components/CustomButton';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Next.js Custom Button Example</h1>
      
      <CustomButton destination="/page1" className="text-xl font-bold">
        Go to Page 1
      </CustomButton>

      <CustomButton variant="secondary" destination="/page2" className="bg-red-500 mt-4">
        Go to Page 2
      </CustomButton>
    </div>
  );
};

export default Home;



*/
}
