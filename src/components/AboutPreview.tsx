// src/components/AboutPreview.tsx

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const AboutPreview = () => {
    return (
        // 1. Increased Vertical Padding for a Premium Look
        <section className="bg-white py-24 md:py-36 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">

                {/* === Left Content Column (Order 2 on MD screens) === */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6 md:order-2" 
                >
                    <p className="text-sm font-semibold uppercase text-tealSoft tracking-widest">
                        Welcome to Dr. Bushra&apos;s Dental Care
                    </p>

                    <h2 className="text-4xl font-bold text-primary leading-snug">
                        Commitment to Comfort & Advanced Care in Pune.
                    </h2>

                  <p className="text-lg text-gray-800 leading-relaxed mb-6">
                      Dr. Bushra&apos;s Dental Care is equipped with <strong>modern facilities</strong> — from digital radiography to advanced sterilization protocols. Dr. Bushra Mirza ensures every patient receives <strong>painless, personalized, and accessible</strong> dental care.
                  </p>

                    <div className="pt-4">
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center bg-brownAccent text-white px-8 py-3 rounded-lg shadow-lg hover:bg-goldAccent hover:shadow-xl transition transform hover:scale-[1.02] duration-300 font-semibold"
                        >
                            Meet Dr. Bushra ➡️
                        </Link>
                    </div>
                </motion.div>

                {/* === Right Image Column (Order 1 on MD screens) === */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.0 }}
                    viewport={{ once: true }}
                    // 💥 FIX: Ensure the container has relative positioning
                    className="relative w-full aspect-[4/3] md:order-1" 
                >
                    {/* 5. Image Framing: Layered Look for visual depth */}
                    <div className="absolute inset-0 bg-primary rounded-xl -translate-x-4 translate-y-4 shadow-xl hidden md:block" />

                    <div className="relative z-10 rounded-xl shadow-2xl overflow-hidden ring-4 ring-primary/20 w-full h-full">
                         {/* 💥 FIX CONFIRMED: The w-full h-full on this relative container combined with aspect-[4/3] on the parent ensures the dimensions are set for `fill`. */}
                        <Image
                            src="/Images/General/dr-bushra.jpg"
                            alt="Dr. Bushra Mirza professional photo"
                            fill 
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transform hover:scale-105 transition duration-500"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutPreview;