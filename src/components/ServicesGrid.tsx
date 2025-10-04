// src/components/ServicesGrid.tsx

'use client';

import Link from 'next/link';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

// --- Data with Slugs ---
const services = [
    { title: 'Teeth Whitening', slug: 'teeth-whitening', description: 'Professional in-office whitening for a brighter smile.', imgSrc: '/Images/Services/TeethWhitening.avif' },
    { title: 'Dental Implants', slug: 'dental-implants', description: 'Permanent, natural-looking replacements for missing teeth.', imgSrc: '/Images/Services/DentalImplants.avif' },
    { title: 'Root Canal Treatment', slug: 'root-canal-treatment', description: 'Painless, single-visit RCT to save your natural tooth.', imgSrc: '/Images/Services/RootCanalTreatment.webp' },
    { title: 'Dental Crowns', slug: 'dental-crowns', description: 'Durable and aesthetic crowns for tooth restoration.', imgSrc: '/Images/Services/DentalCrowns.jpg' },
    { title: 'Smile Designing', slug: 'smile-designing', description: 'Customized treatments for your perfect smile makeover.', imgSrc: '/Images/Services/SmileDesigning.webp' },
    { title: 'Fillings', slug: 'fillings', description: 'Discreet, tooth-colored composite restorations.', imgSrc: '/Images/Services/Fillings.webp' },

];

const ServicesGrid: React.FC = () => {
    return (
        <section className="py-20 bg-neutralGray/50 px-4">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-2">Comprehensive Dental Care</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">From routine checkups to specialized treatments, we cover all your dental needs with precision and care.</p>
            </div>

            {/* Responsive Grid Layout */}
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-16">
                <Link
                    href="/services"
                    className="inline-flex items-center justify-center bg-brownAccent text-white px-10 py-4 rounded-xl shadow-xl hover:bg-goldAccent transition transform hover:scale-[1.02] duration-300 font-semibold text-lg"
                >
                    All Services We Providet
                </Link>
            </div>
        </section>
    );
};

export default ServicesGrid;