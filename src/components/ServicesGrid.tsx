// src/components/ServicesGrid.tsx

'use client';

import Link from 'next/link';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';
import { featuredServices } from '@/data/services';

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
                    {featuredServices.map((service, index) => (
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
                    All Services We Provide
                </Link>
            </div>
        </section>
    );
};

export default ServicesGrid;