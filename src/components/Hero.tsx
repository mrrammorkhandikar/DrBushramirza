// src/components/Hero.tsx

'use client'; 

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    // 1. Full height and large padding for impact
    // bg-neutralGray/50 uses the subtle global background color
    <section className="relative bg-neutralGray/50 min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-8 py-10 md:py-32">
      
      {/* 2. Optional: Add a subtle background graphic or color wave */}
      <div className="absolute inset-0 bg-primary/5 clip-path-polygon-[0_0,100%_0,100%_70%,0_100%]"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 z-10">
        
        {/* === Left Content Column === */}
        <div className="space-y-8">
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            // 3. Larger, more authoritative font size and stronger color
            className="text-5xl md:text-6xl font-extrabold text-primary leading-tight"
          >
            Better Teeth. Better Health. <span className="text-tealSoft">Brighter Smile.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-lg"
          >
            Modern, painless, and affordable dental care in Pune by &quot;Dr. Bushra Mirza&quot; committed to your comfort and health.
          </motion.p>
          
          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            
            {/* 4. Primary Button: Stronger design with shadow */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-[1.02] duration-300 font-semibold text-lg"
            >
              Book Appointment Today ➡️
            </Link>
            
            {/* Secondary Button: Outline style */}
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-xl hover:bg-primary hover:text-white transition transform hover:scale-[1.02] duration-300 font-semibold text-lg"
            >
              View All Services
            </Link>
          </div>
          
          {/* Feature Tags: Updated style for cleaner look */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <FeatureTag icon="⭐" text="200+ Happy Patients" />
            <FeatureTag icon="🏥" text="Modern Digital X-Rays" />
            <FeatureTag icon="🦷" text="Painless Treatments" />
          </motion.div>
        </div>
        
        {/* === Right Image Column === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.5 }}
          // 5. Image container with aspect ratio for better framing
          className="relative w-full aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden ring-4 ring-primary/20"
        >
          <Image
            src="/Images/General/clinic.jpg"
            alt="Dr. Bushra Mirza at her clinic"
            fill // Use fill to make it cover the container
            priority
            className="object-cover"
          />
        </motion.div>
        
      </div>
    </section>
  );
};

// Helper component for cleaner Feature Tag styling
const FeatureTag = ({ icon, text }: { icon: string; text: string }) => (
    <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-gray-700 text-sm font-medium border border-gray-100">
      <span className="text-lg">{icon}</span>   
      <span>{text}</span>
    </div>
);

export default Hero;