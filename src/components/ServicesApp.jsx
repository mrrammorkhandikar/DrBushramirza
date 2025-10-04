import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Zap, Heart, Microscope, DollarSign, ArrowLeft, 
    IndianRupee, Clock, ChevronRight, CheckCircle, ArrowRight 
} from 'lucide-react'; 

// ==========================================================
// 1. CONSOLIDATED SERVICES DATA
// All data needed for both the list view and detail view is stored here.
// Placeholder URLs are used for images.
// ==========================================================
const FULL_SERVICES_DATA = [
    {
        title: 'Teeth Whitening',
        slug: 'teeth-whitening',
        imgSrc: 'https://placehold.co/800x600/f3f4f6/374151?text=Teeth+Whitening',
        price: '4000 single arch, 7000 full mouth',
        duration: '45-60 min',
        tagline: 'Achieve a dazzling, confident smile in less than an hour.',
        details: 'Professional in-office teeth whitening is a safe, quick, and highly effective cosmetic procedure. We use high-concentration, dentist-applied bleaching agents combined with light activation to break down stains and discoloration, giving you dramatically brighter results than over-the-counter kits.',
        process: ['Initial Consultation: Assess suitability and match initial shade.', 'Preparation: Protect gums and soft tissues with a barrier.', 'Gel Application: Apply the professional-grade whitening gel to teeth.', 'Light Activation: Use a specialized LED light to accelerate the bleaching process (usually 3 cycles of 15 minutes).', 'Final Results: Rinse, remove the barrier, and reveal your bright new shade.', 'Aftercare Instructions: Provide guidance on maintaining results and managing sensitivity.'],
        description: 'Professional in-office whitening for safe and quick brightening. Options for single arch or full mouth.',
    },
    {
        title: 'Dental Implants',
        slug: 'dental-implants',
        imgSrc: 'https://placehold.co/800x600/f3f4f6/374151?text=Dental+Implants',
        price: '20k-40k per implant',
        duration: 'Varies',
        tagline: 'The permanent solution for replacing missing teeth, restoring function and aesthetics.',
        details: 'Dental implants are titanium fixtures surgically placed into the jawbone beneath the gum line. They act as artificial tooth roots, providing a stable foundation for custom-made replacement teeth (crowns). Implants prevent bone loss and provide the most natural feel and look.',
        process: ['Phase 1: Diagnosis & Planning (X-rays, 3D scans, bone assessment).', 'Phase 2: Surgical Placement of the titanium implant post into the jawbone.', 'Phase 3: Healing and Osseointegration (3-6 months for the implant to fuse with the bone).', 'Phase 4: Abutment Placement and Final Crown Fabrication.', 'Phase 5: Fitting the Custom Crown and final check.'],
        description: 'Permanent solution for missing teeth. High-quality implants restore function and aesthetics.',
    },
    {
        title: 'Root Canal Treatment',
        slug: 'root-canal-treatment',
        imgSrc: 'https://placehold.co/800x600/f3f4f6/374151?text=Root+Canal',
        price: 'starting from 2500',
        duration: '1-2 visits',
        tagline: 'Painless treatment to save a severely damaged or infected tooth.',
        details: 'Root Canal Treatment (RCT) involves removing infected or damaged pulp (nerve) from inside the tooth. Using advanced rotary endodontics, the interior of the tooth is cleaned, disinfected, and filled, sealing it to prevent future infection. This procedure saves the natural tooth structure.',
        process: ['Anesthesia & Isolation: Numb the area and isolate the tooth with a rubber dam.', 'Access & Cleaning: Create an opening and use specialized files (rotary tools) to remove infected tissue.', 'Shaping & Disinfecting: Clean and shape the root canals thoroughly.', 'Filling (Obturation): Fill the cleaned canal with gutta-percha material.', 'Sealing & Restoration: Place a filling and typically a final crown to protect the weakened tooth structure.'],
        description: 'Advanced, painless RCT using rotary endodontics. Available as single-visit or multiple visits.',
    },
    {
        title: 'Dental Crowns',
        slug: 'dental-crowns',
        imgSrc: 'https://placehold.co/800x600/f3f4f6/374151?text=Dental+Crowns',
        price: 'Metal-ceramic 3500, Full Ceramic – 6000',
        duration: '2-3 visits',
        tagline: 'Protect and restore damaged teeth with durable crowns.',
        details: 'Dental crowns are tooth-shaped caps placed over damaged teeth to restore their shape, size, strength, and appearance. We offer options including metal-ceramic, full ceramic, and highly durable zirconia, customized to match your natural bite and color.',
        process: ['Preparation: Tooth is reshaped to accommodate the crown.', 'Impression: A mold of the tooth is taken.', 'Temporary Crown: A temporary crown is placed while the permanent one is fabricated.', 'Cementation: The custom-made crown is checked for fit and permanently bonded.'],
        description: 'Protect and restore damaged teeth with durable crowns. Options include metal-ceramic, full ceramic, and zirconia.',
    },
    {
        title: 'Smile Designing',
        slug: 'smile-designing',
        imgSrc: 'https://placehold.co/800x600/f3f4f6/374151?text=Smile+Designing',
        price: 'Starting from 5000 onwards',
        duration: 'Varies',
        tagline: 'Creating your perfectly balanced and aesthetically pleasing smile.',
        details: 'Smile Designing is a comprehensive process that analyzes your facial features, gum line, teeth alignment, and color to create a customized cosmetic treatment plan. This may involve veneers, tooth reshaping, crowns, and whitening to achieve your ideal smile.',
        process: ['Consultation & Analysis: Digital imaging and assessment of facial aesthetics.', 'Treatment Plan: Designing the virtual smile and discussing options.', 'Execution: Phased treatment delivery (e.g., whitening, then veneers).', 'Review & Refinement: Final checks and adjustments.'],
        description: 'Customized cosmetic dental plan — combining veneers, crowns, whitening, and orthodontics for the perfect smile.',
    },
    {
        title: 'Fillings',
        slug: 'fillings',
        imgSrc: 'https://placehold.co/800x600/f3f4f6/374151?text=Composite+Fillings',
        price: '500-1500',
        duration: '20-40 min',
        tagline: 'Invisible and lasting restoration for cavities and minor damage.',
        details: 'We use high-quality, tooth-colored composite resin fillings. Unlike old metal fillings, these blend seamlessly with your natural teeth, providing strong, durable repair for cavities while maintaining aesthetic integrity.',
        process: ['Preparation: Numbing the area and removing decayed tooth material.', 'Etching & Bonding: Preparing the surface for the resin.', 'Filling: Applying the composite resin in layers and shaping it.', 'Curing & Polishing: Hardening the resin with a special light and polishing for a smooth finish.'],
        description: 'Tooth-colored composite fillings that restore function and blend naturally with your teeth.',
    },
    {
        title: 'Wisdom Tooth Extraction',
        slug: 'wisdom-tooth-extraction',
        imgSrc: 'https://placehold.co/800x600/f3f4f6/374151?text=Wisdom+Tooth+Extraction',
        price: 'Third molar Extraction: 2000-5000',
        duration: '30-60 min',
        tagline: 'Expert, comfortable removal of impacted or problematic wisdom teeth.',
        details: 'Surgical and non-surgical procedures for the safe removal of third molars (wisdom teeth). We ensure maximum comfort through local anesthesia and provide detailed aftercare instructions to minimize recovery time and prevent complications.',
        process: ['Consultation & X-ray: Assessing the tooth position and nerve proximity.', 'Anesthesia: Thorough numbing of the surgical site.', 'Extraction: Gentle removal of the tooth, which may involve minor gum incision.', 'Suturing: Placing stitches (if needed) and providing gauze.', 'Aftercare: Detailed instructions and pain management plan.'],
        description: 'Safe surgical and non-surgical removal of third molars. Comfortable procedures with proper anesthesia and aftercare.',
    },
    {
        title: 'Pediatric Dental Care',
        slug: 'pediatric-dental-care',
        imgSrc: 'https://placehold.co/800x600/f3f4f6/374151?text=Pediatric+Care',
        price: 'call for inquiry',
        duration: 'Varies',
        tagline: 'Creating positive and fun dental experiences for children.',
        details: 'Specialized dental care focused on the unique needs of infants, children, and adolescents. Our approach emphasizes prevention (sealants, fluoride), early habit correction, and gentle treatment of cavities, all within a welcoming and comforting environment.',
        process: ['Friendly Introduction: Making the child comfortable.', 'Examination & Cleaning: Gentle checkup and cleaning.', 'Preventative Treatment: Application of fluoride or sealants.', 'Education: Teaching proper brushing/flossing techniques to parents and children.'],
        description: 'Gentle dental care for children. Focus on prevention, habit correction, and creating a positive dental experience.',
    },
    {
        title: 'Braces & Orthodontics',
        slug: 'braces-orthodontics',
        imgSrc: 'https://placehold.co/800x600/f3f4f6/374151?text=Braces',
        price: 'Starting from 30K',
        duration: 'Varies',
        tagline: 'Achieve a straight, functional smile with personalized orthodontic plans.',
        details: 'Comprehensive treatment for correcting misaligned teeth and jaws. We offer modern solutions including traditional metal braces, discreet ceramic braces, and removable clear aligner systems, tailored to deliver optimal results efficiently.',
        process: ['Initial Consultation: Examination, X-rays, and 3D scans.', 'Treatment Planning: Customized brace type and duration plan.', 'Bonding/Fitting: Application of braces or delivery of aligners.', 'Adjustments & Monitoring: Regular appointments for progress checks.', 'Retention: Post-treatment retainers to maintain results.'],
        description: 'Comprehensive orthodontic treatments — metal braces, ceramic braces, and clear aligners for better-aligned teeth.',
    },
];


// ==========================================================
// 2. WHY CHOOSE US FEATURES DATA
// ==========================================================
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

// ==========================================================
// 3. SERVICE CARD COMPONENT (LIST VIEW ITEM)
// Uses an onClick handler for simulated routing
// ==========================================================
const ServiceCard = ({ service, index, onViewDetails }) => (
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-primary/10 cursor-pointer"
        onClick={() => onViewDetails(service.slug)}
    >
        {/* Replaced Next.js Image with standard <img> tag */}
        <div className="relative w-full aspect-[16/9] md:aspect-[4/3]">
            <img 
                src={service.imgSrc} 
                alt={service.title} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
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
                <p className="flex items-center text-brownAccent font-semibold">
                    <IndianRupee className="w-4 h-4 mr-1" />
                    {service.price}
                </p>
                <p className="flex items-center text-tealSoft">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                </p>
            </div>

            <div 
                className="inline-flex items-center text-primary font-bold hover:text-goldAccent transition pt-2"
            >
                View Details 
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </div>
        </div>
    </motion.div>
);

// ==========================================================
// 4. SERVICE DETAIL COMPONENT (DETAIL VIEW)
// ==========================================================
const ServiceDetail = ({ service, goBack }) => {
    return (
        <div className="bg-white min-h-screen">
            
            {/* --- HERO SECTION --- */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
            >
                <div className="absolute inset-0">
                    {/* Replaced Next.js Image with standard <img> tag */}
                    <img
                        src={service.imgSrc}
                        alt={service.title}
                        className="object-cover w-full h-full"
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
                        
                        {/* Summary Stats */}
                        <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-lg font-semibold bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                            <div className="flex items-center">
                                <IndianRupee className="w-5 h-5 mr-2 text-goldAccent" />
                                Price: {service.price}
                            </div>
                            <div className="flex items-center mt-2 md:mt-0">
                                <Clock className="w-5 h-5 mr-2 text-goldAccent" />
                                Duration: {service.duration}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* --- DETAILS AND ACTIONS SECTION --- */}
            <div className="container mx-auto px-6 py-16 md:py-24">
                <div className="grid lg:grid-cols-3 gap-12">
                    
                    {/* Left Column: Details */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-12"
                    >
                        {/* How It Is */}
                        <div className="p-8 bg-neutralLight rounded-xl shadow-inner border-l-4 border-brownAccent">
                            <h2 className="text-3xl font-bold text-primary mb-4 flex items-center">
                                <ChevronRight className="w-6 h-6 mr-2 text-brownAccent" />
                                How It Is: The Service Overview
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                {service.details}
                            </p>
                        </div>

                        {/* How It Works (Process) */}
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

                    {/* Right Column: Actions */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1 space-y-6 lg:sticky lg:top-8 lg:self-start"
                    >
                        <div className="bg-primary p-6 rounded-xl shadow-2xl text-center space-y-4">
                            <h3 className="text-white text-2xl font-bold">Start Your Treatment</h3>
                            <p className="text-neutralLight text-sm">
                                Ready to take the next step towards a healthier smile? Book your consultation now.
                            </p>
                            {/* Replaced Next.js Link with standard <a> tag */}
                            <a
                                href="#book" // Placeholder for booking link
                                className="w-full inline-block bg-goldAccent text-primary px-8 py-3 rounded-full font-bold text-lg transition duration-300 hover:bg-brownAccent hover:text-white transform hover:scale-[1.02]"
                            >
                                Book Appointment Now
                            </a>
                        </div>

                        {/* Back Button - Replaced Next.js Link with standard <button> tag */}
                        <button
                            onClick={goBack}
                            className="w-full inline-flex items-center justify-center bg-gray-100 text-primary px-8 py-3 rounded-full border border-primary/20 font-semibold transition duration-300 hover:bg-gray-200"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to All Services
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* --- WHY CHOOSE US SECTION (REUSED) --- */}
            <section className="bg-neutralLight py-20 md:py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold text-primary mb-4">Why Choose Dr. Bushra's Clinic?</h2>
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
                                className="bg-white shadow-xl rounded-xl p-8 text-center border-b-4 border-transparent hover:border-tealSoft transition-all duration-300 transform hover:scale-[1.03]"
                            >
                                <div className={`${feature.bg} ${feature.color} w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6 shadow-inner`}>
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
};

// ==========================================================
// 5. SERVICE LIST COMPONENT (LIST VIEW)
// ==========================================================
const ServiceList = ({ onViewDetails }) => {
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
                        backgroundImage: "url('https://placehold.co/1920x800/2c3e50/ffffff?text=Modern+Clinic+Interior')", // Placeholder for clinic.jpg
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

            {/* === SERVICES GRID (INLINED) === */}
            <div className="py-20 md:py-24 bg-neutralLight">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-primary text-center mb-16">Our Specialized Dental Treatments</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {FULL_SERVICES_DATA.map((service, index) => (
                            <ServiceCard 
                                key={service.slug} 
                                service={service} 
                                index={index} 
                                onViewDetails={onViewDetails} 
                            />
                        ))}
                    </div>

                </div>
            </div>

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
                        {/* Replaced Next.js Link with standard <a> tag */}
                        <a
                            href="#book" // Placeholder link
                            className="inline-block bg-goldAccent hover:bg-brownAccent text-primary hover:text-white px-10 py-4 rounded-full shadow-2xl font-bold text-lg transition duration-300 transform hover:scale-105"
                        >
                            Book Appointment Now →
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};


// ==========================================================
// 6. MAIN APP COMPONENT (CONTROLLER)
// ==========================================================
const ServicesApp = () => {
    // State to simulate routing: 'list' for the main page, 'detail' for the service page
    const [view, setView] = useState('list'); 
    const [selectedSlug, setSelectedSlug] = useState(null);

    // Helper to find service data based on slug
    const findServiceBySlug = (slug) => {
        return FULL_SERVICES_DATA.find(service => service.slug === slug);
    };

    // Handler to navigate to the detail view
    const handleViewDetails = (slug) => {
        setSelectedSlug(slug);
        setView('detail');
    };

    // Handler to navigate back to the list view
    const handleGoBack = () => {
        setSelectedSlug(null);
        setView('list');
    };

    const service = selectedSlug ? findServiceBySlug(selectedSlug) : null;

    if (view === 'detail') {
        if (!service) {
            // Simplified 404 handler for the detail view
            return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-neutralLight p-10">
                    <h1 className="text-4xl font-extrabold text-primary mb-4">Service Not Found</h1>
                    <button
                        onClick={handleGoBack}
                        className="inline-flex items-center bg-brownAccent text-white px-8 py-3 rounded-full shadow-lg font-bold transition duration-300 hover:bg-primary"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to All Services
                    </button>
                </div>
            );
        }
        return <ServiceDetail service={service} goBack={handleGoBack} />;
    }

    // Default view: list
    return <ServiceList onViewDetails={handleViewDetails} />;
};

export default ServicesApp;
