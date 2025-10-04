// src/components/ServicesCarousel.tsx

'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import ServiceCard from './ServiceCard';

// --- Data & Constants ---
const services = [
    { title: 'Teeth Whitening', description: 'Professional in-office whitening for a brighter smile and confidence.', imgSrc: '/Images/Services/TeethWhitening.avif' },
    { title: 'Dental Implants', description: 'Permanent, natural-looking replacement for missing teeth using advanced technology.', imgSrc: '/Images/Services/DentalImplants.avif' },
    { title: 'Root Canal Treatment', description: 'Pain-free, single-visit advanced RCT solutions to save your natural tooth.', imgSrc: '/Images/Services/RootCanalTreatment.webp' },
    { title: 'Dental Crowns', description: 'Durable and aesthetic metal-ceramic & full ceramic options for restoration.', imgSrc: '/Images/Services/DentalCrowns.jpg' },
    { title: 'Smile Designing', description: 'Customized treatments combining veneers, whitening, and more for your perfect smile.', imgSrc: '/Images/Services/SmileDesigning.webp' },
    { title: 'Fillings', description: 'Discreet, tooth-colored composite restorations that blend seamlessly.', imgSrc: '/Images/Services/Fillings.webp' },
    { title: 'Wisdom Tooth Extraction', description: 'Safe surgical & non-surgical extractions performed with utmost care.', imgSrc: '/Images/Services/WisdomToothExtraction.jpg' },
    { title: 'Pediatric Care', description: 'Gentle and friendly dentistry tailored specifically for children.', imgSrc: '/Images/Services/PediatricCare.jpg' },
    { title: 'Braces', description: 'Orthodontic treatments, including clear aligners, for perfectly aligned teeth.', imgSrc: '/Images/Services/Braces.jpg' },
];

const row1 = services.slice(0, 5);
const row2 = services.slice(5, 9);

// Card dimensions: w-96 (384px) + space-x-8 (32px)
const CARD_FULL_WIDTH = 384 + 32; 
const VISIBLE_CARDS = 3;

// --- Carousel Row Sub-Component ---

interface CarouselRowProps {
    services: typeof services;
}

const CarouselRow: React.FC<CarouselRowProps> = ({ services }) => {
    const controls = useAnimation();
    const totalCards = services.length;
    
    // Total width of all cards including gaps
    const scrollableWidth = useMemo(() => totalCards * CARD_FULL_WIDTH, [totalCards]);
    
    // The maximum negative X position before the carousel hits the end (ensures the last 3 cards are visible)
    // The '+ 32' accounts for the trailing gap of the last visible card.
    const maxScrollX = -(scrollableWidth - (CARD_FULL_WIDTH * VISIBLE_CARDS) + 32); 

    const getCurrentX = useCallback(() => {
        // LegacyAnimationControls doesn't expose a current property
        // We'll track the position manually via a ref
        return 0;
    }, []);

    // --- AUTOMATIC 2-SECOND SLIDE LOGIC ---
    useEffect(() => {
        const autoSlide = async () => {
            let currentX = getCurrentX();

            // 1. If we are at or past the end, instantly reset to the beginning (0)
            if (currentX.toFixed(2) <= maxScrollX.toFixed(2) + 0.1) { // Added tolerance for floating point issues
                await controls.start({
                    x: 0,
                    transition: { duration: 0.01 } // Instant reset
                });
                currentX = 0;
            }

            // 2. Move to the next card (one card width left)
            const newX = Math.max(currentX - CARD_FULL_WIDTH, maxScrollX);

            await controls.start({
                x: newX,
                transition: { duration: 0.5, ease: "easeInOut" }
            });
        };

        // Set interval to 2 seconds
        const intervalId = setInterval(autoSlide, 2000);

        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(intervalId);
    }, [controls, getCurrentX, maxScrollX]);

    // Calculate the width of the visible container to show exactly 3 cards
    const visibleContainerWidth = useMemo(() => (CARD_FULL_WIDTH * VISIBLE_CARDS) - 32, []); // -32 to remove the last gap

    return (
        <div className="relative w-full">

            {/* Scrollable Area - Fixed width to show 3 cards, centered */}
            <div
                className="overflow-hidden mx-auto"
                style={{ width: visibleContainerWidth }}
            >
                <motion.div
                    className="flex space-x-8"
                    animate={controls}
                    style={{ width: scrollableWidth }}
                >
                    {services.map((service, index) => (
                        <div key={`service-${index}`} className="flex-shrink-0">
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </motion.div>
            </div>

     
        </div>
    );
};


const ServicesCarousel: React.FC = () => {
    return (
        <section className="py-20 bg-neutralGray/50">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-2">Comprehensive Dental Care</h2>
                <p className="text-lg text-gray-700">From routine checkups to specialized treatments, we cover all your dental needs.</p>
            </div>

            <div className="space-y-12">

                {/* === Row 1: First 5 Services (Automatically Slides) === */}
                <CarouselRow services={row1} />

                {/* === Row 2: Next 4 Services (Automatically Slides) === */}
                <CarouselRow services={row2} />

            </div>

            <div className="text-center mt-16">
                <Link
                    href="/services"
                    className="inline-flex items-center justify-center bg-brownAccent text-white px-10 py-4 rounded-xl shadow-xl hover:bg-goldAccent transition transform hover:scale-[1.02] duration-300 font-semibold text-lg"
                >
                    Explore All Services
                </Link>
            </div>
        </section>
    );
};

export default ServicesCarousel;