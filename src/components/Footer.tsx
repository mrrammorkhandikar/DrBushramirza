// src/components/Footer.tsx

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    // Reusable styles for links
    const linkClasses = "hover:text-goldAccent transition flex items-center";

    return (
        <footer className="bg-primary text-white pt-16 pb-8 border-t-8 border-brownAccent/80">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    {/* Column 1: Logo, About & CTA */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center justify-center space-x-3">
                            <Image
                                src="/Images/General/TheLogo.jpeg"
                                alt="Dr. Bushra's Dental Clinic Logo"
                                width={125} // Increased from 75 to 85
                                height={125} // Increased from 75 to 85
                                className="rounded-full ring-2 ring-goldAccent"
                            />
                            
                        </Link>
                        <p className="text-neutralLight text-sm">
                            Providing Pune with painless, modern, and affordable dental care for the whole family. Your smile is our priority.
                        </p>
                        <Link
                            href="/contact"
                            className="flex justify-center items-center bg-goldAccent text-primary font-bold px-6 py-2 rounded-lg shadow-md hover:bg-brownAccent hover:text-white transition duration-300"
                        >
                            Get Directions
                        </Link>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 border-b-2 border-tealSoft/50 pb-2">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className={linkClasses}>Home</Link></li>
                            <li><Link href="/services" className={linkClasses}>Services</Link></li>
                            <li><Link href="/about" className={linkClasses}>About Us</Link></li>
                            <li><Link href="/contact" className={linkClasses}>Book Online</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info (With Icons) */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 border-b-2 border-tealSoft/50 pb-2">Clinic Hours & Contact</h3>
                        <ul className="space-y-4 text-neutralLight">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 mt-0.5 text-tealSoft flex-shrink-0" />
                                <p>123 Dental St, Pune, Maharashtra, 411000, India</p>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-tealSoft" />
                                <p><a href="mailto:contact@ghhclinic.com" className="hover:text-goldAccent transition">contact@ghhclinic.com</a></p>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-tealSoft" />
                                <p><a href="tel:+911234567890" className="hover:text-goldAccent transition">+91 123 456 7890</a></p>
                            </li>
                            <li className="pt-2">
                                <p className="font-semibold text-white">Mon - Sat: 10:00 AM - 7:00 PM</p>
                                <p className="text-sm">Sunday: Closed</p>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Social Media (With Icons) */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 border-b-2 border-tealSoft/50 pb-2">Connect with Us</h3>
                        <div className="flex space-x-5">
                            <a href="https://www.facebook.com/drsayyedb" className="hover:text-goldAccent transition" aria-label="Follow us on Facebook">
                                <Facebook className="w-7 h-7" />
                            </a>
                            <a href="https://www.instagram.com/dr.bushra.s" className="hover:text-goldAccent transition" aria-label="Follow us on Instagram">
                                <Instagram className="w-7 h-7" />
                            </a>
                            
                        </div>
                    </div>

                </div>
                
                <div className="border-t border-tealSoft/50 pt-8 text-center text-neutralLight text-sm">
                    <p>&copy; {new Date().getFullYear()} Dr. Bushra&apos;s Dental Clinic. All rights reserved. | Design by [Your Name/Company]</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;