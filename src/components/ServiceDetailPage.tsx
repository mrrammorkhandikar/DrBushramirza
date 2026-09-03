'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowLeft,
    IndianRupee,
    Clock,
    ChevronRight,
    CheckCircle,
    Zap,
    Heart,
    Microscope,
    DollarSign,
} from 'lucide-react';
import type { Service } from '@/data/services';

const features = [
    {
        icon: Zap,
        title: 'Painless Treatments',
        description: 'Utilizing advanced anesthesia and gentle techniques for a stress-free experience.',
        color: 'text-brownAccent',
        bg: 'bg-brownAccent/10',
    },
    {
        icon: Microscope,
        title: 'Advanced Technology',
        description: 'Equipped with digital X-rays, rotary endodontics, and modern sterilization protocols.',
        color: 'text-tealSoft',
        bg: 'bg-tealSoft/10',
    },
    {
        icon: Heart,
        title: 'Experienced & Caring',
        description: 'Dr. Bushra provides personalized attention and ethical, evidence-based dental solutions.',
        color: 'text-primary',
        bg: 'bg-primary/10',
    },
    {
        icon: DollarSign,
        title: 'Affordable Pricing',
        description: 'Clear, transparent pricing with affordable options for high-quality, long-lasting dental work.',
        color: 'text-goldAccent',
        bg: 'bg-goldAccent/10',
    },
];

export default function ServiceDetailPage({ service }: { service: Service }) {
    return (
        <div className="bg-white min-h-screen">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
            >
                <div className="absolute inset-0">
                    <Image
                        src={service.imgSrc}
                        alt={service.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-primary/85"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
                            {service.title}
                        </h1>
                        <p className="text-goldAccent text-xl md:text-2xl italic font-medium mb-8">
                            {service.tagline}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg font-semibold bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                            <div className="flex items-center">
                                <IndianRupee className="w-5 h-5 mr-2 text-goldAccent" />
                                Price: {service.price}
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-5 h-5 mr-2 text-goldAccent" />
                                Duration: {service.duration}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <div className="container mx-auto px-6 py-16 md:py-24">
                <div className="grid lg:grid-cols-3 gap-12">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-12"
                    >
                        <div className="p-8 bg-neutralLight rounded-xl shadow-inner border-l-4 border-brownAccent">
                            <h2 className="text-3xl font-bold text-primary mb-4 flex items-center">
                                <ChevronRight className="w-6 h-6 mr-2 text-brownAccent" />
                                How It Is: The Service Overview
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">{service.details}</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-8 text-center md:text-left">
                                The Step-by-Step Process
                            </h2>
                            <ol className="space-y-6">
                                {service.process.map((step, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-start p-5 bg-white rounded-lg shadow-md border-l-8 border-tealSoft"
                                    >
                                        <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0 text-tealSoft" />
                                        <div className="ml-4">
                                            <p className="font-semibold text-lg text-primary">Step {index + 1}</p>
                                            <p className="text-gray-700">{step}</p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ol>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1 space-y-6 lg:sticky lg:top-24 lg:self-start"
                    >
                        <div className="bg-primary p-6 rounded-xl shadow-2xl text-center space-y-4">
                            <h3 className="text-white text-2xl font-bold">Start Your Treatment</h3>
                            <p className="text-neutralLight text-sm">
                                Ready to take the next step towards a healthier smile? Book your consultation now.
                            </p>
                            <Link
                                href="/contact"
                                className="w-full inline-block bg-goldAccent text-primary px-8 py-3 rounded-full font-bold text-lg transition duration-300 hover:bg-brownAccent hover:text-white transform hover:scale-[1.02]"
                            >
                                Book Appointment Now
                            </Link>
                        </div>

                        <Link
                            href="/services"
                            className="w-full inline-flex items-center justify-center bg-gray-100 text-primary px-8 py-3 rounded-full border border-primary/20 font-semibold transition duration-300 hover:bg-gray-200"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to All Services
                        </Link>
                    </motion.div>
                </div>
            </div>

            <section className="bg-neutralLight py-20 md:py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold text-primary mb-4">Why Choose Dr. Bushra&apos;s Clinic?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
                        Experience the difference that genuine care and modern technology make.
                    </p>

                    <div className="grid md:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="bg-white shadow-xl rounded-xl p-8 text-center border-b-4 border-transparent hover:border-tealSoft transition-all duration-300 transform hover:scale-[1.03]"
                            >
                                <div
                                    className={`${feature.bg} ${feature.color} w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6 shadow-inner`}
                                >
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
