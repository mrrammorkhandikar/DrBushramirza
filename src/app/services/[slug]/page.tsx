// services/page.tsx
'use client';

// Removed: import ServicesGrid from '@/components/ServicesGrid';
// Removed: import TheServicesoageGrid from '@/Services/[slug]/page'; // Removed the incorrect import

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Heart, Microscope, DollarSign, ArrowRight } from 'lucide-react'; 

// === SERVICE DATA EXTRACTED FROM SERVICES/[SLUG]/PAGE.TSX ===
const serviceData = [
    {
        title: 'Teeth Whitening',
        description: 'Professional in-office whitening for safe and quick brightening. Options for single arch or full mouth.',
        imgSrc: '/Images/Services/teeth-whitening.jpg',
        slug: 'teeth-whitening',
    },
    {
        title: 'Dental Implants',
        description: 'Permanent solution for missing teeth. High-quality implants restore function and aesthetics.',
        imgSrc: '/Images/Services/dental-implants.jpg',
        slug: 'dental-implants',
    },
    {
        title: 'Root Canal Treatment',
        description: 'Advanced, painless RCT using rotary endodontics. Available as single-visit or multiple visits.',
        imgSrc: '/Images/Services/root-canal.jpg',
        slug: 'root-canal-treatment',
    },
    {
        title: 'Dental Crowns',
        description: 'Protect and restore damaged teeth with durable crowns. Options include metal-ceramic, full ceramic, and zirconia.',
        imgSrc: '/Images/Services/dental-crowns.jpg',
        slug: 'dental-crowns',
    },
    {
        title: 'Smile Designing',
        description: 'Customized cosmetic dental plan — combining veneers, crowns, whitening, and orthodontics for the perfect smile.',
        imgSrc: '/Images/Services/smile-designing.jpg',
        slug: 'smile-designing',
    },
    {
        title: 'Fillings',
        description: 'Tooth-colored composite fillings that restore function and blend naturally with your teeth.',
        imgSrc: '/Images/Services/fillings.jpg',
        slug: 'fillings',
    },
    {
        title: 'Wisdom Tooth Extraction',
        description: 'Safe surgical and non-surgical removal of third molars. Comfortable procedures with proper anesthesia and aftercare.',
        imgSrc: '/Images/Services/wisdom-tooth-extraction.jpg',
        slug: 'wisdom-tooth-extraction',
    },
    {
        title: 'Pediatric Dental Care',
        description: 'Gentle dental care for children. Focus on prevention, habit correction, and creating a positive dental experience.',
        imgSrc: '/Images/Services/pediatric-dentistry.jpg',
        slug: 'pediatric-dental-care',
    },
    {
        title: 'Braces & Orthodontics',
        description: 'Comprehensive orthodontic treatments — metal braces, ceramic braces, and clear aligners for better-aligned teeth.',
        imgSrc: '/Images/Services/braces.jpg',
        slug: 'braces-orthodontics',
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

// Component for a single service card (to replace the ServicesGrid logic)
interface ServiceCardProps {
    service: {
        title: string;
        description: string;
        imgSrc: string;
        slug: string;
    };
    index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => (
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    >
        <div className="relative w-full aspect-video">
            <Image 
                src={service.imgSrc} 
                alt={service.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay to darken image slightly */}
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors"></div>
        </div>
        <div className="p-6 space-y-4">
            <h3 className="text-2xl font-bold text-primary group-hover:text-brownAccent transition duration-300">
                {service.title}
            </h3>
            <p className="text-gray-600 text-sm h-12 overflow-hidden">{service.description}</p>
            <Link 
                href={`/services/${service.slug}`} 
                className="inline-flex items-center text-brownAccent font-semibold hover:text-goldAccent transition"
            >
                Learn More 
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
    </motion.div>
);


const ServicesPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Banner (Enhanced) */}
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
                        className="text-5xl md:text-6xl font-extrabold"
                    >
                        Comprehensive Dental Services
                    </motion.h1>
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-neutralLight max-w-3xl mx-auto mt-4 text-xl"
                    >
                        From preventative checkups to advanced cosmetic and restorative dentistry, we are here to ensure your healthiest, brightest smile.
                    </motion.p>
                </div>
            </motion.section>

            {/* Services Grid (INLINED) */}
            <div className="py-20 md:py-24 bg-neutralLight">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-primary text-center mb-12">Explore All Treatments</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {serviceData.map((service, index) => (
                            <ServiceCard key={service.slug} service={service} index={index} />
                        ))}
                    </div>

                </div>
            </div>

            {/* Why Choose Us Section */}
            <section className="bg-white py-20 md:py-32">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-4">Why Dr. Bushra&apos;s Clinic?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
                        Experience the difference that genuine care and modern technology make.
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

            {/* CTA Appointment Section */}
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