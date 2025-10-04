// src/components/Header.tsx

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react'; // Using lucide-react for better icons

const Header = () => {
    return (
        // Sticky header with primary color background
        <header className="bg-primary text-white py-4 px-4 shadow-xl sticky top-0 z-50">
            <nav className="container mx-auto flex justify-between items-center">
                
                {/* Logo and Clinic Name */}
                <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
                    <Image 
                        src="/Images/General/TheLogo.jpeg" 
                        alt="Dr. Bushra&apos;s Dental Clinic Logo" 
                        width={40} 
                        height={40} 
                        className="rounded-full ring-2 ring-goldAccent" 
                    />
                    <span className="text-xl font-bold tracking-tight hidden sm:block">Dr. Bushra&apos;s Dental Clinic</span>
                    <span className="text-xl font-bold tracking-tight sm:hidden">Dr. Bushra&apos;s</span>
                </Link>

                {/* Desktop Navigation Links */}
                <ul className="hidden lg:flex space-x-8 text-lg font-medium">
                    <li><Link href="/" className="hover:text-goldAccent transition">Home</Link></li>
                    <li><Link href="/services" className="hover:text-goldAccent transition">Services</Link></li>
                    <li><Link href="/about" className="hover:text-goldAccent transition">About</Link></li>
                    <li><Link href="/contact" className="hover:text-goldAccent transition">Contact</Link></li>
                </ul>

                {/* Call-to-Action and Mobile Button */}
                <div className="flex items-center space-x-4">
                    
                    {/* BOOK APPOINTMENT BUTTON (Desktop) */}
                    <Link
                        href="/contact" // Assuming the contact page is used for booking
                        className="hidden md:inline-flex bg-brownAccent text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-goldAccent transition duration-300 transform hover:scale-[1.03]"
                    >
                        Book Appointment
                    </Link>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden p-2 rounded-md hover:bg-primary/70 transition" aria-label="Toggle menu">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

            </nav>

            {/* Note: Mobile menu overlay logic would be handled by state management here */}
            
        </header>
    );
};

export default Header;