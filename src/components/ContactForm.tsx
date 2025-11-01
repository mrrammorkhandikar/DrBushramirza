// src/components/ContactForm.tsx

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
// Import a calendar/clock icon for appointment setting (using Heroicons/Lucide/etc.)
// For simplicity, we'll use inline SVGs for standard icons.

const ContactForm = () => {
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would integrate your actual form submission logic (e.g., Axios call to API)
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000); // Hide after 5s
    };

    const inputClasses = "w-full p-4 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-primary focus:ring-1 transition shadow-sm bg-gray-50 text-gray-800 placeholder-gray-500";
    const labelClasses = "block text-sm font-semibold text-primary mb-2";

    // Component for reusable contact item
    const ContactItem: React.FC<{ icon: React.ReactNode, title: string, content: React.ReactNode }> = ({ icon, title, content }) => (
        <div className="flex items-start space-x-4">
            <div className="text-primary p-3 rounded-full bg-primary/10 flex-shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="text-base font-bold text-primary">{title}</h4>
                <p className="text-gray-700 text-sm">{content}</p>
            </div>
        </div>
    );

    return (
        <section className="bg-white py-24 md:py-36 relative">
            <div className="container mx-auto px-4">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase text-tealSoft tracking-widest">
                        Book Your Visit Today
                    </p>
                    <h2 className="text-4xl font-bold text-primary mt-2">
                        Get in Touch with Our Clinic
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch bg-gray-50 p-6 md:p-10 rounded-2xl shadow-2xl shadow-primary/10">

                    {/* Left Column: Contact Info & Opening Hours (Lg: 1/3 width) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.8 }} 
                        viewport={{ once: true }}
                        className="space-y-10 lg:col-span-1 p-6 bg-white rounded-xl shadow-lg border-t-4 border-brownAccent"
                    >
                        <h3 className="text-2xl font-bold text-brownAccent">Clinic Details</h3>
                        
                        <div className="space-y-8">
                            <ContactItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m11.314-11.314L12 5.05L6.686 10.364m0 0L2 15m18 0l-4.686-4.636m0 0l-5.314-5.314m5.314 5.314L12 10.364" /></svg>}
                                title="Visit Us"
                                content={<a href="https://maps.google.com/?q=Pune" target="_blank" rel="noopener noreferrer" className="hover:text-goldAccent">Dr. Bushra&apos;s Dental Clinic, Pune, India</a>}
                            />
                            
                            <ContactItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                                title="Call Us"
                                content={<a href="tel:+919529045550" className="hover:text-goldAccent block">+91 952 904 5550</a>}
                            />

                            <ContactItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.8 5.2a2 2 0 002.4 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                                title="Email Us"
                                content={<a href="mailto:contact@ghhclinic.com" className="hover:text-goldAccent">drsayyedbushra@gmail.com</a>}
                            />
                        </div>

                        {/* Map Snippet */}
                        <div className="h-48 rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.1305883957775!2d73.88630324631445!3d18.48564629574462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebac96f3f173%3A0x858d83b2369d312!2sDr%20Bushra&#39;s%20Dental%20Care!5e0!3m2!1sen!2sin!4v1759553231418!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                aria-hidden="false"
                                tabIndex={0}
                            ></iframe>
                        </div>

                    </motion.div>

                    {/* Right Column: Contact Form (Lg: 2/3 width) */}
                    <motion.form
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="bg-white p-8 md:p-12 rounded-xl shadow-lg space-y-6 lg:col-span-2"
                    >
                        <h3 className="text-3xl font-bold text-primary mb-6">Request an Appointment</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className={labelClasses}>Full Name</label>
                                <input type="text" id="name" placeholder="John Doe" className={inputClasses} required />
                            </div>
                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className={labelClasses}>Phone Number <span className="text-red-500">*</span></label>
                                <input type="tel" id="phone" placeholder="+91 98765 43210" className={inputClasses} required />
                            </div>
                        </div>

                        {/* Email & Subject (New field for better routing) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className={labelClasses}>Email Address</label>
                                <input type="email" id="email" placeholder="you@example.com" className={inputClasses} />
                            </div>
                            {/* Subject/Service */}
                            <div>
                                <label htmlFor="subject" className={labelClasses}>Service/Inquiry Type</label>
                                <select id="subject" className={inputClasses} defaultValue="">
                                    <option value="" disabled>Select a service...</option>
                                    <option value="Appointment">New Appointment</option>
                                    <option value="Teeth Whitening">Teeth Whitening</option>
                                    <option value="Implants">Dental Implants Inquiry</option>
                                    <option value="General">General Inquiry</option>
                                </select>
                            </div>
                        </div>
                        
                        {/* Message */}
                        <div>
                            <label htmlFor="message" className={labelClasses}>Your Message</label>
                            <textarea id="message" placeholder="Please describe your symptoms or reason for visit." className={`${inputClasses} h-32`}></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-brownAccent text-white font-bold py-4 rounded-xl hover:bg-goldAccent transition transform hover:scale-[1.01] shadow-xl text-lg mt-4"
                        >
                            Book Appointment Now
                        </button>
                        
                        {/* Success Message with Framer Motion */}
                        <motion.div>
                            {success && (
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-green-600 font-semibold text-center pt-2"
                                >
                                    ✅ Thank you! Your appointment request has been received. We&apos;ll call you shortly.
                                </motion.p>
                            )}
                        </motion.div>
                    </motion.form>
                </div>
            </div>

            {/* WhatsApp Floating Button (Corrected Icon) */}
            <a
                href="https://wa.me/95290455500" 
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110 z-50"
                aria-label="Chat on WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.45 0-9.91 4.45-9.91 9.91 0 1.75.54 3.44 1.56 4.98l-1.01 3.7c-.12.44.13.91.57 1.03a.75.75 0 00.32.06c.16 0 .31-.04.45-.12l3.87-2.1c1.54.43 3.19.65 4.88.65 5.46 0 9.92-4.46 9.92-9.92.01-5.46-4.45-9.91-9.91-9.91zm4.84 14.16a2.1 2.1 0 01-1.46.54c-.21 0-.42-.04-.63-.13a7.48 7.48 0 01-4.71-2.91 7.23 7.23 0 01-1.74-3.52 1.34 1.34 0 01.37-1.12c.1-.11.23-.16.38-.16h1.27c.18 0 .34.09.43.25l.44 1.05a1.23 1.23 0 00.17.47c.05.15.02.32-.09.46l-.51.61c-.13.15-.07.39.11.58l.7.83c.18.21.46.21.65.02l.71-.69c.14-.14.39-.18.57-.12l1.01.44c.16.07.28.19.35.34l.7 1.7c.09.2.04.44-.12.61z" />
                </svg>
            </a>
        </section>
    );
};

export default ContactForm;
