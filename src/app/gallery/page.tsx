'use client';
import { motion } from 'framer-motion';
import Gallery from '@/components/Gallery';

const PRIMARY_COLOR = '#1f5855'; // Dark Teal/Primary
const GOLD_ACCENT = '#8B5A2B'; // Gold Accent

const GalleryPage = () => {
    return (
        <div className="bg-white font-sans">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={`relative pt-20 pb-40 bg-gray-100 overflow-hidden`}
                style={{ backgroundColor: PRIMARY_COLOR }}
            >
                <div
                    className={`absolute inset-0 bg-cover bg-center`}
                    style={{
                        backgroundImage: `url('/Images/General/clinic.jpg')`,
                        backgroundPosition: 'center 40%',
                        backgroundBlendMode: 'multiply',
                        opacity: 0.2,
                    }}
                ></div>
                <div className={`absolute inset-0`} style={{ backgroundColor: PRIMARY_COLOR, opacity: 0.8 }}></div>
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-white"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg leading-tight">
                            Our Smile Gallery
                        </h1>
                        <p className="text-xl text-white/90 mt-4 max-w-2xl mx-auto">
                            Explore the transformations and see the quality of our work.
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            <Gallery />

            {/* Final CTA */}
            <div
                className={`py-20 text-center`}
                style={{ backgroundColor: PRIMARY_COLOR }}
            >
                <div className="container mx-auto px-6">
                    <h3 className="text-white text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
                        Ready for Your Best Smile?
                    </h3>
                    <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: '#4FD1C5' }}>
                        Join our community of happy patients. We look forward to meeting you and exceeding your expectations for dental care.
                    </p>
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: `0 15px 25px -5px ${GOLD_ACCENT}80`,
                            backgroundColor: GOLD_ACCENT
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-12 py-5 bg-goldAccent rounded-full shadow-xl transition-all font-bold text-xl uppercase tracking-wider transform duration-300`}
                        style={{ color: PRIMARY_COLOR }}
                    >
                        Schedule My Appointment
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;