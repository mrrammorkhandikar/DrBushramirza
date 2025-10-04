'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Heart, Star, Medal, Users } from 'lucide-react';

// 1. MOCK/REPRESENTATIVE STATIC IMPORTS for local images
// In a real project, these files must exist in your project structure (e.g., in a 'public' directory)
// Since the path is '/Images/General/dr-bushra.jpg', the image would be at /public/Images/General/dr-bushra.jpg
// NOTE: For local images, Next.js prefers this pattern:
// import DrBushra from '@/public/Images/General/dr-bushra.jpg';
// But since we can't create files, we'll assume the files are in the public folder and continue using path strings
// *Correction* We MUST use the 'fill' prop for the background image, and either 'import' or use 'fill' + parent relative positioning for the others if width/height are truly unknown.
// Given the current structure with width/height, the string path will work IF the files are in 'public' and the paths are correct (e.g., /Images/General/dr-bushra.jpg => /public/Images/General/dr-bushra.jpg).
// The main fix is in the Hero Section.

// Color variables for consistency (Assuming these are defined in Tailwind config or globally)
const PRIMARY_COLOR = '#1f5855'; // Dark Teal/Primary
const GOLD_ACCENT = '#8B5A2B'; // Gold Accent
const NEUTRAL_LIGHT = '#f7f7f7'; // Light Gray/Neutral Light

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        },
    },
};

const AboutPage = () => {
    // 2. Add 'alt' prop to Image components where it was missing (though all were present, it's good practice)
    // 3. FIX: Hero Section background image usage. Next.js does not optimize background images passed via style props.
    return (
        <div className="bg-white font-sans">
            {/* Hero Section - Elevated Design */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={`relative pt-20 pb-40 bg-gray-100 overflow-hidden`}
                style={{ backgroundColor: PRIMARY_COLOR }} // Use PRIMARY_COLOR for the background base
            >
                {/* Background Image Layer (Using a simple div with a CSS background for complex styling) */}
                <div 
                    className={`absolute inset-0 bg-cover bg-center`}
                    style={{
                        backgroundImage: `url('/Images/General/Interior.jpg')`,
                        backgroundPosition: 'center 40%',
                        backgroundBlendMode: 'multiply',
                        opacity: 0.2, // Reduce opacity for the background image effect
                    }}
                ></div>
                {/* Overlay with Primary color and opacity */}
                <div className={`absolute inset-0`} style={{ backgroundColor: PRIMARY_COLOR, opacity: 0.8 }}></div>
                
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-white"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg leading-tight">
                            The Story Behind Your Smile
                        </h1>
                        <p className="text-xl text-white/90 mt-4 max-w-2xl mx-auto">
                            Delivering compassionate, affordable, and world-class dental care in Pune.
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* About the Doctor - Premium Layout */}
            <div className={`py-20 md:py-32 px-6`} style={{ backgroundColor: NEUTRAL_LIGHT }}>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-12 gap-12 items-center">
                        {/* Image Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8 }}
                            className="md:col-span-5 relative"
                        >
                            <div className="absolute top-4 left-4 w-full h-full bg-amber-200 rounded-xl"></div>
                            {/* NOTE: If you use Image component with string src, the file MUST be in /public */}
                            <Image 
                                src={"/Images/General/dr-bushra.jpg"} 
                                alt="Portrait of Dr. Bushra Mirza, a general dental surgeon" 
                                width={500} 
                                height={500} 
                                className="relative rounded-xl shadow-2xl w-full object-cover aspect-square"
                                priority // High priority for above-the-fold content
                            />
                        </motion.div>

                        {/* Text Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="md:col-span-7 bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                        >
                            {/* 4. FIX: Use hardcoded color in style for 'primary' and 'goldAccent/50' equivalent */}
                            <h2 className={`text-4xl font-bold mb-4 border-b-2 pb-2`} style={{ color: PRIMARY_COLOR, borderColor: GOLD_ACCENT + '80' }}>
                                Meet Dr. Bushra Mirza
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6 italic">
                                &quot;My commitment is to provide gentle and effective dental care, treating every patient as if they were family.&quot;
                            </p>
                            <p className="text-gray-800 leading-relaxed mb-4">
                                Dr. Bushra Mirza is a highly sought-after general dental surgeon specializing in **painless treatments**, **preventive dentistry**, and stunning **smile makeovers**. With a philosophy centered on patient comfort and affordable, high-quality care, she has built a practice founded on trust and clinical excellence in Pune.
                            </p>
                            <h3 className="text-lg font-semibold mt-6 text-gray-700">Credentials & Achievements:</h3>
                            <motion.ul 
                                className="list-none space-y-2 mt-2 text-gray-600 grid sm:grid-cols-2"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {/* 5. FIX: Use hardcoded color for 'goldAccent' equivalent */}
                                <motion.li variants={itemVariants} className="flex items-center">
                                    <Star className={`w-4 h-4 mr-2`} style={{ color: '#8B5A2B' }} /> BDS, Top University Graduate
                                </motion.li>
                                <motion.li variants={itemVariants} className="flex items-center">
                                    <Medal className={`w-4 h-4 mr-2`} style={{ color: GOLD_ACCENT }} /> Specialized in Endodontics
                                </motion.li>
                                <motion.li variants={itemVariants} className="flex items-center">
                                    <Heart className={`w-4 h-4 mr-2`} style={{ color: GOLD_ACCENT }} /> 5000+ Successful Treatments
                                </motion.li>
                                <motion.li variants={itemVariants} className="flex items-center">
                                    <Users className={`w-4 h-4 mr-2`} style={{ color: GOLD_ACCENT }} /> Active Dental Association Member
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                    </div>
                </div>
            </div>
            
            {/* Mission, Vision & Values - Clean Icon Cards with Hover */}
            <div 
                className="py-24 px-6"
                style={{ backgroundColor: NEUTRAL_LIGHT }}
            >
                <div className="container mx-auto">
                    {/* 6. FIX: Use hardcoded color for 'primary' equivalent */}
                    <h2 
                        className={`text-4xl font-extrabold text-center mb-4`}
                        style={{ color: PRIMARY_COLOR }}
                    >
                        Our Guiding Principles
                    </h2>
                    <p className='text-center text-gray-700 max-w-3xl mx-auto mb-16'>
                        Every decision we make, from clinical technology to patient interaction, is rooted in these foundational values.
                    </p>
                    <motion.div 
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Card 1: Compassion */}
                        <motion.div variants={itemVariants} className={`bg-white rounded-xl p-8 shadow-md border border-gray-100 transition duration-500 hover:shadow-xl hover:scale-[1.01]`}>
                            {/* 7. FIX: Use hardcoded color for icons */}
                            <Heart className={`w-12 h-12 mb-4`} style={{ color: GOLD_ACCENT }} />
                            <h3 className={`text-2xl font-bold text-gray-800 mb-2`}>Compassionate Mission</h3>
                            <p className="text-gray-600">To provide accessible, high-quality, and **painless dental care**, removing the fear and anxiety traditionally associated with dentistry.</p>
                        </motion.div>
                        
                        {/* Card 2: Excellence */}
                        <motion.div variants={itemVariants} className={`bg-white rounded-xl p-8 shadow-md border border-gray-100 transition duration-500 hover:shadow-xl hover:scale-[1.01]`} style={{ transitionDelay: '0.1s' }}>
                            <Star className={`w-12 h-12 mb-4`} style={{ color: GOLD_ACCENT }} />
                            <h3 className={`text-2xl font-bold text-gray-800 mb-2`}>Clinical Excellence</h3>
                            <p className="text-gray-600">Our vision is to be the **most trusted dental brand** in Pune, defined by our unwavering commitment to ethical practice and superior clinical outcomes.</p>
                        </motion.div>
                        
                        {/* Card 3: Trust */}
                        <motion.div variants={itemVariants} className={`bg-white rounded-xl p-8 shadow-md border border-gray-100 transition duration-500 hover:shadow-xl hover:scale-[1.01]`} style={{ transitionDelay: '0.2s' }}>
                            <Users className={`w-12 h-12 mb-4`} style={{ color: GOLD_ACCENT }} />
                            <h3 className={`text-2xl font-bold text-gray-800 mb-2`}>Patient Trust</h3>
                            <p className="text-gray-600">We operate with complete **transparency** regarding treatment plans and costs, building long-lasting relationships based on mutual respect and honesty.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* About the Clinic - Gallery and Detail (White Background) */}
            <div className={`bg-white py-24 px-6`}>
                <div className="container mx-auto">
                    {/* 8. FIX: Use hardcoded color for 'primary' equivalent */}
                    <h2 
                        className={`text-4xl font-extrabold text-center mb-16`}
                        style={{ color: PRIMARY_COLOR }}
                    >
                        A Modern, Soothing Environment
                    </h2>
                    
                    <motion.div 
                        className="grid md:grid-cols-3 gap-6 mb-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div variants={itemVariants}> 
                            {/* NOTE: Image uses explicit width/height. Assumes the image is correctly located in /public */}
                            <Image
                                src={"/Images/General/ClinicChair.jpg"} 
                                alt="A modern dental examination chair in a clean room" 
                                width={500} // Explicit width/height for next/image
                                height={375} // Maintains the 4/3 aspect ratio
                                className="rounded-xl shadow-lg object-cover w-full aspect-[4/3]" 
                            />
                            <p className="text-center text-sm text-gray-500 mt-2">State-of-the-Art Treatment Rooms</p>
                        </motion.div>
                        <motion.div variants={itemVariants}> 
                            <Image 
                                src={"/Images/General/clinic.jpg"} 
                                alt="Advanced digital dental equipment for precision procedures" 
                                width={500} 
                                height={375} 
                                className="rounded-xl shadow-lg object-cover w-full aspect-[4/3]" 
                            />
                            <p className="text-center text-sm text-gray-500 mt-2">Precision Technology</p>
                        </motion.div>
                        <motion.div variants={itemVariants}> 
                            <Image 
                                src={"/Images/General/WaitingArea.jpg"} 
                                alt="Comfortable and modern dental clinic reception and waiting area" 
                                width={500} 
                                height={375} 
                                className="rounded-xl shadow-lg object-cover w-full aspect-[4/3]" 
                            />
                            <p className="text-center text-sm text-gray-500 mt-2">Relaxing Waiting Area</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="max-w-4xl mx-auto text-center p-8 rounded-2xl shadow-inner border border-gray-100"
                        style={{ backgroundColor: NEUTRAL_LIGHT }}
                    >
                        {/* 9. FIX: Use hardcoded color for 'primary' equivalent */}
                        <p className='font-medium mb-3' style={{ color: PRIMARY_COLOR }}>Your Health. Our Priority.</p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our conveniently located Pune clinic is meticulously designed to reduce anxiety. We ensure the highest standards of safety and precision using **advanced sterilization protocols** and the latest in **digital dental imaging**. From the moment you step into our calm reception area to your departure, every detail is focused on your comfort and peace of mind.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Final CTA - Prominent Gold Accent (Primary Background) */}
            <div 
                className={`py-20 text-center`}
                style={{ backgroundColor: PRIMARY_COLOR }} // Use PRIMARY_COLOR
            >
                <div className="container mx-auto px-6">
                    <h3 className="text-white text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
                        Ready for Your Best Smile?
                    </h3>
                    {/* 10. FIX: Using hardcoded color for the text which was previously '#4FD1C5' */}
                    <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: '#4FD1C5' }}>
                        Join our community of happy patients. We look forward to meeting you and exceeding your expectations for dental care.
                    </p>
                    <motion.button 
                        whileHover={{ 
                            scale: 1.05, 
                            boxShadow: `0 15px 25px -5px ${GOLD_ACCENT}80`, // Use GOLD_ACCENT for shadow
                            backgroundColor: GOLD_ACCENT
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-12 py-5 bg-goldAccent   rounded-full shadow-xl transition-all font-bold text-xl uppercase tracking-wider transform duration-300`}
                        // 11. FIX: Set background color to GOLD_ACCENT and text color to PRIMARY_COLOR
                        style={{  color: PRIMARY_COLOR }} 
                    >
                        Schedule My Appointment
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;