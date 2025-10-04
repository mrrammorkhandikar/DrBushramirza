// services/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Heart, Microscope, DollarSign, ArrowRight, IndianRupee, Clock } from 'lucide-react'; 
import { useState, useEffect } from 'react';

// ==========================================================
// 1. SERVICE DATA (COMBINED FROM SERVICES/[SLUG]/PAGE.TSX)
// This data now lives directly in the main services page for easy management.
// ==========================================================
const serviceData = [
    {
        title: 'Teeth Whitening',
        description: 'Professional in-office whitening for safe and quick brightening. Options for single arch or full mouth.',
        imgSrc: '/Images/Services/TeethWhitening.avif',
        slug: 'teeth-whitening',
        price: '7000 full mouth ,4000 single arch',
        duration: '45-60 min'
    },
    {
        title: 'Dental Implants',
        description: 'Permanent solution for missing teeth. High-quality implants restore function and aesthetics.',
        imgSrc: '/Images/Services/DentalImplants.avif',
        slug: 'dental-implants',
        price: '20k-40k per implant',
        duration: 'Varies'
    },
    {
        title: 'Root Canal Treatment',
        description: 'Advanced, painless RCT using rotary endodontics. Available as single-visit or multiple visits.',
        imgSrc: '/Images/Services/RootCanalTreatment.jpg',
        slug: 'root-canal-treatment',
        price: 'starting from 2500',
        duration: '1-3 visits'
    },
    {
        title: 'Dental Crowns',
        description: 'Protect and restore damaged teeth with durable crowns. Options include metal-ceramic, full ceramic, and zirconia.',
        imgSrc: '/Images/Services/DentalCrowns.jpg',
        slug: 'dental-crowns',
        price: 'Metal-ceramic 3500, Full Ceramic – 6000',
        duration: '2 visits'
    },
    {
        title: 'Smile Designing',
        description: 'Customized cosmetic dental plan — combining veneers, crowns, whitening, and orthodontics for the perfect smile.',
        imgSrc: '/Images/Services/SmileDesigning.webp',
        slug: 'smile-designing',
        price: 'Starting from 5000 onwards',
        duration: 'Varies'
    },
    {
        title: 'Fillings',
        description: 'Tooth-colored composite fillings that restore function and blend naturally with your teeth.',
        imgSrc: '/Images/Services/Fillings.webp',
        slug: 'fillings',
        price: '500-1500',
        duration: '20-40 min'
    },
    {
        title: 'Wisdom Tooth Extraction',
        description: 'Safe surgical and non-surgical removal of third molars. Comfortable procedures with proper anesthesia and aftercare.',
        imgSrc: '/Images/Services/WisdomToothExtraction.jpg',
        slug: 'wisdom-tooth-extraction',
        price: 'Third molar Extraction: 2000-5000',
        duration: '30-60 min'
    },
    {
        title: 'Pediatric Dental Care',
        description: 'Gentle dental care for children. Focus on prevention, habit correction, and creating a positive dental experience.',
        imgSrc: '/Images/Services/PediatricCare.jpg',
        slug: 'pediatric-dental-care',
        price: 'call for inquiry',
        duration: 'Varies'
    },
    {
        title: 'Braces & Orthodontics',
        description: 'Comprehensive orthodontic treatments — metal braces, ceramic braces, and clear aligners for better-aligned teeth.',
        imgSrc: '/Images/Services/Braces.jpg',
        slug: 'braces-orthodontics',
        price: 'Starting from 30K',
        duration: '6-18 months'
    },
];
// ==========================================================

// Data for the "Why Choose Us" section
const features = [
    { 
        icon: Zap, 
        title: 'Painless Treatments', 
        description: 'Utilizing advanced anesthesia and gentle techniques for a stress-free experience.',
        color: 'text-brownAccent',
        bg: 'bg-brownAccent/10'
    },
    { 
        icon: Microscope, 
        title: 'Advanced Technology', 
        description: 'Equipped with digital X-rays, rotary endodontics, and modern sterilization protocols.',
        color: 'text-tealSoft',
        bg: 'bg-tealSoft/10'
    },
    { 
        icon: Heart, 
        title: 'Experienced & Caring', 
        description: 'Dr. Bushra provides personalized attention and ethical, evidence-based dental solutions.',
        color: 'text-primary',
        bg: 'bg-primary/10'
    },
    { 
        icon: DollarSign, 
        title: 'Affordable Pricing', 
        description: 'Clear, transparent pricing with affordable options for high-quality, long-lasting dental work.',
        color: 'text-goldAccent',
        bg: 'bg-goldAccent/10'
    },
];

// Helper function to format price based on window width
const formatPrice = (price: string, isMobile: boolean) => {
    if (isMobile && price.includes(',')) {
        return price.replace(',', ',\n');
    }
    return price;
};

// Component for a single service card (INLINED GRID ITEM)
const ServiceCard = ({ service, index }: { service: typeof serviceData[0]; index: number }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-primary/10"
        >
            <div className="relative w-full aspect-[16/9] md:aspect-[4/3]">
                <Image 
                    src={service.imgSrc} 
                    alt={service.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
            </div>
            <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-primary group-hover:text-brownAccent transition duration-300">
                    {service.title}
                </h3>
                <p className="text-gray-600 text-sm h-10 overflow-hidden">{service.description}</p>
                
                {/* Price and Duration Info */}
                <div className="flex justify-between items-center text-sm pt-2 border-t border-neutralLight">
                    <p className="flex items-center text-brownAccent font-semibold whitespace-pre-line">
                        <IndianRupee className="w-4 h-4 mr-1" />
                        {formatPrice(service.price, isMobile)}
                    </p>
                    <p className="flex items-center text-tealSoft">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                    </p>
                </div>

                <Link 
                    href={`/contact`} 
                    className="inline-flex items-center text-primary font-bold hover:text-goldAccent transition pt-2"
                >
                    Book Appointment Now 
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
};


const ServicesPage = () => {
    return (
        <div className="bg-white">
            
            {/* === HERO BANNER === */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative text-white py-32 md:py-48 overflow-hidden"
            >
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                    style={{ 
                        backgroundImage: "url('/Images/General/clinic.jpg')", 
                        backgroundAttachment: 'fixed' 
                    }}
                />
                <div className="absolute inset-0 bg-primary/80"></div> 
                
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl font-extrabold tracking-tight"
                    >
                        Your Complete Guide to a Healthy Smile
                    </motion.h1>
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-neutralLight max-w-3xl mx-auto mt-4 text-xl"
                    >
                        Explore our full range of dental services, backed by modern technology and compassionate care.
                    </motion.p>
                </div>
            </motion.section>

            {/* --- */}

            {/* === SERVICES GRID (INLINED) === */}
            <div className="py-20 md:py-24 bg-neutralLight">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-primary text-center mb-16">Our Specialized Dental Treatments</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {serviceData.map((service, index) => (
                            <ServiceCard key={service.slug} service={service} index={index} />
                        ))}
                    </div>

                </div>
            </div>

            {/* --- */}

            {/* === WHY CHOOSE US SECTION === */}
            <section className="bg-white py-20 md:py-32">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold text-primary mb-4">The Dr. Bushra Advantage</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
                        We prioritize your comfort and results. See what sets our clinic apart.
                    </p>
                    
                    <div className="grid md:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="bg-white shadow-xl rounded-xl p-8 text-center border-t-4 border-transparent hover:border-brownAccent transition-all duration-300 transform hover:scale-[1.03]"
                            >
                                <div className={`${feature.bg} ${feature.color} w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6`}>
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* --- */}

            {/* === CTA APPOINTMENT SECTION === */}
            <section className="bg-gradient-to-r from-primary to-tealSoft py-20 text-center text-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Ready for your healthiest smile?</h2>
                        <p className="max-w-3xl mx-auto mb-10 text-lg">
                            Schedule a consultation with Dr. Bushra today. We look forward to welcoming you!
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-goldAccent hover:bg-brownAccent text-primary hover:text-white px-10 py-4 rounded-full shadow-2xl font-bold text-lg transition duration-300 transform hover:scale-105"
                        >
                            Book Appointment Now →
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;