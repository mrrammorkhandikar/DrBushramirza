'use client';

import React, { useState } from 'react';
import { ChevronDown, Crown, Search } from 'lucide-react';
import Link from 'next/link';

// Define the structure for the FAQ data
interface FAQItem {
    q: string;
    a: string;
}

const faqs: FAQItem[] = [
    {
        q: "How many times do I have to visit for root canal treatment?",
        a: "Root canal treatment usually takes 3-4 visits. If followed properly, the process is typically completed within 2 weeks. However, single-visit options are also available based on the case assessment."
    },
    {
        q: "Do you provide single visit Root canal treatments (RCT)?",
        a: "Yes, we frequently provide single-visit Root Canal Treatments for qualifying cases. This modern approach saves you time while maintaining the highest standards of care."
    },
    {
        q: "Are dental treatments painful?",
        a: "We prioritize your comfort. We ensure painless dental procedures by using advanced local anesthetics and appropriate numbing techniques, making your experience stress-free."
    },
    {
        q: "Are the rates fixed or negotiable?",
        a: "Our rates are competitive but are not fixed. The final cost will vary depending on your specific treatment requirements, the complexity of the procedure, and any preferences for materials or technology used. We provide a clear, detailed estimate before starting any work."
    },
];

/**
 * An attractive and interactive FAQ component using an accordion pattern.
 * Uses a gold accent and soft shadows for an upscale, inviting appearance.
 */
const FAQ: React.FC = () => {
    // State to manage which FAQ item is currently open (stores the index)
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Toggle function to open and close FAQ items
    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredFaqs = faqs.filter(faq =>
        faq.q.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 font-inter">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <Crown className="w-10 h-10 text-goldAccent mx-auto mb-3" />
                    <h2 className="text-4xl font-extrabold text-primary md:text-5xl tracking-tight">
                        Frequently Asked <span className="text-goldAccent">Questions</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Find quick answers to common queries about our dental services and procedures.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-8 max-w-lg mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-tealSoft focus:border-transparent"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {filteredFaqs.map((faq, index) => (
                        <div key={index} 
                             className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border-t-4 border-goldAccent/0 hover:border-goldAccent/80">
                            
                            {/* Question Header (Button) */}
                            <button
                                className="w-full text-left p-5 flex justify-between items-center transition duration-300"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className={`text-lg font-semibold ${openIndex === index ? 'text-brownAccent' : 'text-primary'}`}>
                                    {faq.q}
                                </span>
                                <ChevronDown 
                                    className={`w-6 h-6 text-goldAccent transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                                />
                            </button>

                            {/* Answer Content (Accordion Body) */}
                            <div 
                                id={`faq-answer-${index}`}
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 p-0'}`}
                            >
                                <div className="border-l-4 border-tealSoft/50 pl-4 text-gray-700 leading-relaxed">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action at the Bottom */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">
                        Couldn&apos;t find what you were looking for?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brownAccent hover:bg-primary transition duration-300 shadow-md"
                    >
                        Contact Our Clinic Directly
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
