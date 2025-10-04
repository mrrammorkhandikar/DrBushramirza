// src/components/Testimonials.tsx

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Enhanced Testimonial Data (consider adding images/avatars in a real app)
const testimonials = [
  {
    quote: 'The best dental experience I’ve ever had. Dr. Bushra made me feel comfortable and pain-free.',
    name: 'Ma. Ananya Singh',
    location: 'Pune, India',
    rating: 5,
  },
  {
    quote: 'Affordable, honest, and professional. Highly recommended for families.',
    name: 'Mr. Vijay Bapat',
    location: 'Kothrud',
    rating: 5,
  },
  {
    quote: 'Single-visit root canal saved me so much time. Very happy with the results and follow-up.',
    name: 'Ms. Priyanka Sharma',
    location: 'Hinjewadi',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Slower, more readable 5-second interval
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Custom function to render star icons
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex text-goldAccent text-2xl space-x-0.5">
      {/* Renders solid star icon */}
      {'★'.repeat(rating)} 
      {/* Renders empty star icon */}
      {'☆'.repeat(5 - rating)} 
    </div>
  );

  return (
    // Background changed to neutralGray/50 for contrast, increased padding
    <section className="bg-neutralGray/50 py-24 md:py-36">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase text-tealSoft tracking-widest">
            Trusted by Patients
          </p>
          <h2 className="text-4xl font-bold text-primary mt-2">
            Hear From Our Happy Smiles
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          
          {/* Testimonial Card Area */}
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                // Quote Card Styling: White background with a subtle primary border/accent
                className="relative bg-white text-gray-800 p-8 md:p-12 border-t-8 border-primary rounded-2xl min-h-[300px] flex flex-col justify-center"
              >
                
                {/* Large, accent quote mark */}
                <span className="absolute top-4 left-4 text-primary/10 text-9xl font-serif leading-none select-none">“</span>

                {/* Quote Text */}
                <p className="mb-8 italic text-xl md:text-2xl leading-relaxed text-center z-10">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </p>

                {/* Patient Info */}
                <div className="flex flex-col items-center justify-center space-y-2 pt-4 border-t border-gray-100">
                  <StarRating rating={testimonials[currentIndex].rating} />
                  <span className="font-extrabold text-lg text-primary">
                    {testimonials[currentIndex].name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {testimonials[currentIndex].location}
                  </span>
                </div>
                
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons: Integrated into the side of the container */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-10 bg-primary/90 text-white rounded-full p-3 shadow-lg hover:bg-primary transition-colors focus:outline-none focus:ring-4 focus:ring-primary/50 hidden md:block"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-10 bg-primary/90 text-white rounded-full p-3 shadow-lg hover:bg-primary transition-colors focus:outline-none focus:ring-4 focus:ring-primary/50 hidden md:block"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots indicator: Changed to primary color dots on a neutral background */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full border border-primary transition-all ${
                  index === currentIndex ? 'bg-primary scale-110' : 'bg-transparent hover:bg-primary/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;