export const metadata = {
  title: "Fancy Testimonials Slider - Cruip Tutorials",
  description: "Page description",
};

import TestimonialImg01 from "@/public/testimonial-01.jpg";
import TestimonialImg02 from "@/public/testimonial-02.jpg";
import TestimonialImg03 from "@/public/testimonial-03.jpg";
import TestimonialsSlider from "./Carousel/Testomonial";

export default function Feedback() {
  const testimonials = [
    {
      img: TestimonialImg01,
      quote:
        "Thank you so much for the oppurtunity to learn and grow. I can boldly state and claim that my cybersecurity journey began with Clould Marvin&rsquo;s Academy and it is progressing",
      name: "Kelvin Rob",
      role: "Acme LTD",
    },
    {
      img: TestimonialImg02,
      quote:
        "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
      name: "Nick V",
      role: "Malika Inc.",
    },
    {
      img: TestimonialImg03,
      quote:
        "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
      name: "Amelia W",
      role: "Panda AI",
    },
    {
      img: TestimonialImg03,
      quote:
        "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
      name: "Amelia W",
      role: "Panda AI",
    },
  ];

  return (
    <section className="bg-white flex h-[80vh] items-center justify-center">
      <TestimonialsSlider testimonials={testimonials} />
    </section>
  );
}
