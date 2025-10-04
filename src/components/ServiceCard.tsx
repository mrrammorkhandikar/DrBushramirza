// src/components/ServiceCard.tsx

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
    title: string;
    description: string;
    imgSrc: string;
    slug: string;
}

const ServiceCard = ({ title, description, imgSrc, slug }: ServiceCardProps) => {
    return (
        <motion.div
            className="bg-white shadow-xl rounded-xl overflow-hidden flex flex-col h-full border border-primary/10 transition-shadow duration-300"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" }}
        >

            {/* Image Section */}
            <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                    src={imgSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-20 hover:opacity-0 transition-opacity duration-300" />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 flex-grow text-base line-clamp-3">{description}</p>

                <Link
                    href={`/services/${slug}`}
                    className="text-brownAccent font-semibold hover:text-goldAccent transition duration-300 mt-auto flex items-center group"
                >
                    View Details
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
            </div>
        </motion.div>
    );
};

export default ServiceCard;