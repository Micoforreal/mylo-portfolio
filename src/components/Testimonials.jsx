import { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import TestimonialEmbed from "./TestimonialsEmbed";

const Testimonials = () => {

  return (
      
    <div  className="my-10">

        <h2 className="text-center font-bold md:text-4xl text-2xl md:my-6 my-3">Results That Speak for Themselves</h2>
        <p className="text-xs md:text-lg text-center my-3  md:mb-16">My work is only as good as the impact it creates. Here’s what my clients experienced</p>
    <div className="flex md:flex-row  flex-col ">
      <TestimonialEmbed
        id="testimonial-1"
        src="https://embed-v2.testimonial.to/text/-OegDsaCB6aHceld3ZDw"
      />

      <TestimonialEmbed
        id="testimonial-2"
        src="https://embed-v2.testimonial.to/text/-OegDsaCB6aHceld3ZDw"
        />

      <TestimonialEmbed
        id="testimonial-3"
        src="https://embed-v2.testimonial.to/text/-OegDsaCB6aHceld3ZDw"
        />
    </div>
        </div>

  );
}
 
export default SectionWrapper( Testimonials , "testimonials");