export type Service = {
    title: string;
    slug: string;
    imgSrc: string;
    price: string;
    duration: string;
    tagline: string;
    details: string;
    process: string[];
    description: string;
    featured?: boolean;
};

export const services: Service[] = [
    {
        title: 'Teeth Whitening',
        slug: 'teeth-whitening',
        imgSrc: '/Images/Services/TeethWhitening.avif',
        price: '4000 single arch, 7000 full mouth',
        duration: '45-60 min',
        tagline: 'Achieve a dazzling, confident smile in less than an hour.',
        details:
            'Professional in-office teeth whitening is a safe, quick, and highly effective cosmetic procedure. We use high-concentration, dentist-applied bleaching agents combined with light activation to break down stains and discoloration, giving you dramatically brighter results than over-the-counter kits.',
        process: [
            'Initial Consultation: Assess suitability and match initial shade.',
            'Preparation: Protect gums and soft tissues with a barrier.',
            'Gel Application: Apply the professional-grade whitening gel to teeth.',
            'Light Activation: Use a specialized LED light to accelerate the bleaching process (usually 3 cycles of 15 minutes).',
            'Final Results: Rinse, remove the barrier, and reveal your bright new shade.',
            'Aftercare Instructions: Provide guidance on maintaining results and managing sensitivity.',
        ],
        description: 'Professional in-office whitening for a brighter smile.',
        featured: true,
    },
    {
        title: 'Dental Implants',
        slug: 'dental-implants',
        imgSrc: '/Images/Services/DentalImplants.avif',
        price: '20k-40k per implant',
        duration: 'Varies',
        tagline: 'The permanent solution for replacing missing teeth, restoring function and aesthetics.',
        details:
            'Dental implants are titanium fixtures surgically placed into the jawbone beneath the gum line. They act as artificial tooth roots, providing a stable foundation for custom-made replacement teeth (crowns). Implants prevent bone loss and provide the most natural feel and look.',
        process: [
            'Phase 1: Diagnosis & Planning (X-rays, 3D scans, bone assessment).',
            'Phase 2: Surgical Placement of the titanium implant post into the jawbone.',
            'Phase 3: Healing and Osseointegration (3-6 months for the implant to fuse with the bone).',
            'Phase 4: Abutment Placement and Final Crown Fabrication.',
            'Phase 5: Fitting the Custom Crown and final check.',
        ],
        description: 'Permanent, natural-looking replacements for missing teeth.',
        featured: true,
    },
    {
        title: 'Root Canal Treatment',
        slug: 'root-canal-treatment',
        imgSrc: '/Images/Services/RootCanalTreatment.webp',
        price: 'starting from 2500',
        duration: '1-3 visits',
        tagline: 'Painless treatment to save a severely damaged or infected tooth.',
        details:
            'Root Canal Treatment (RCT) involves removing infected or damaged pulp (nerve) from inside the tooth. Using advanced rotary endodontics, the interior of the tooth is cleaned, disinfected, and filled, sealing it to prevent future infection. This procedure saves the natural tooth structure.',
        process: [
            'Anesthesia & Isolation: Numb the area and isolate the tooth with a rubber dam.',
            'Access & Cleaning: Create an opening and use specialized files (rotary tools) to remove infected tissue.',
            'Shaping & Disinfecting: Clean and shape the root canals thoroughly.',
            'Filling (Obturation): Fill the cleaned canal with gutta-percha material.',
            'Sealing & Restoration: Place a filling and typically a final crown to protect the weakened tooth structure.',
        ],
        description: 'Painless, single-visit RCT to save your natural tooth.',
        featured: true,
    },
    {
        title: 'Dental Crowns',
        slug: 'dental-crowns',
        imgSrc: '/Images/Services/DentalCrowns.jpg',
        price: 'Metal-ceramic 3500, Full Ceramic – 6000',
        duration: '2 visits',
        tagline: 'Protect and restore damaged teeth with durable crowns.',
        details:
            'Dental crowns are tooth-shaped caps placed over damaged teeth to restore their shape, size, strength, and appearance. We offer options including metal-ceramic, full ceramic, and highly durable zirconia, customized to match your natural bite and color.',
        process: [
            'Preparation: Tooth is reshaped to accommodate the crown.',
            'Impression: A mold of the tooth is taken.',
            'Temporary Crown: A temporary crown is placed while the permanent one is fabricated.',
            'Cementation: The custom-made crown is checked for fit and permanently bonded.',
        ],
        description: 'Durable and aesthetic crowns for tooth restoration.',
        featured: true,
    },
    {
        title: 'Smile Designing',
        slug: 'smile-designing',
        imgSrc: '/Images/Services/SmileDesigning.webp',
        price: 'Starting from 5000 onwards',
        duration: 'Varies',
        tagline: 'Creating your perfectly balanced and aesthetically pleasing smile.',
        details:
            'Smile Designing is a comprehensive process that analyzes your facial features, gum line, teeth alignment, and color to create a customized cosmetic treatment plan. This may involve veneers, tooth reshaping, crowns, and whitening to achieve your ideal smile.',
        process: [
            'Consultation & Analysis: Digital imaging and assessment of facial aesthetics.',
            'Treatment Plan: Designing the virtual smile and discussing options.',
            'Execution: Phased treatment delivery (e.g., whitening, then veneers).',
            'Review & Refinement: Final checks and adjustments.',
        ],
        description: 'Customized treatments for your perfect smile makeover.',
        featured: true,
    },
    {
        title: 'Fillings',
        slug: 'fillings',
        imgSrc: '/Images/Services/Fillings.webp',
        price: '500-1500',
        duration: '20-40 min',
        tagline: 'Invisible and lasting restoration for cavities and minor damage.',
        details:
            'We use high-quality, tooth-colored composite resin fillings. Unlike old metal fillings, these blend seamlessly with your natural teeth, providing strong, durable repair for cavities while maintaining aesthetic integrity.',
        process: [
            'Preparation: Numbing the area and removing decayed tooth material.',
            'Etching & Bonding: Preparing the surface for the resin.',
            'Filling: Applying the composite resin in layers and shaping it.',
            'Curing & Polishing: Hardening the resin with a special light and polishing for a smooth finish.',
        ],
        description: 'Discreet, tooth-colored composite restorations.',
        featured: true,
    },
    {
        title: 'Wisdom Tooth Extraction',
        slug: 'wisdom-tooth-extraction',
        imgSrc: '/Images/Services/WisdomToothExtraction.jpg',
        price: 'Third molar Extraction: 2000-5000',
        duration: '30-60 min',
        tagline: 'Expert, comfortable removal of impacted or problematic wisdom teeth.',
        details:
            'Surgical and non-surgical procedures for the safe removal of third molars (wisdom teeth). We ensure maximum comfort through local anesthesia and provide detailed aftercare instructions to minimize recovery time and prevent complications.',
        process: [
            'Consultation & X-ray: Assessing the tooth position and nerve proximity.',
            'Anesthesia: Thorough numbing of the surgical site.',
            'Extraction: Gentle removal of the tooth, which may involve minor gum incision.',
            'Suturing: Placing stitches (if needed) and providing gauze.',
            'Aftercare: Detailed instructions and pain management plan.',
        ],
        description:
            'Safe surgical and non-surgical removal of third molars. Comfortable procedures with proper anesthesia and aftercare.',
    },
    {
        title: 'Pediatric Dental Care',
        slug: 'pediatric-dental-care',
        imgSrc: '/Images/Services/PediatricCare.jpg',
        price: 'call for inquiry',
        duration: 'Varies',
        tagline: 'Creating positive and fun dental experiences for children.',
        details:
            'Specialized dental care focused on the unique needs of infants, children, and adolescents. Our approach emphasizes prevention (sealants, fluoride), early habit correction, and gentle treatment of cavities, all within a welcoming and comforting environment.',
        process: [
            'Friendly Introduction: Making the child comfortable.',
            'Examination & Cleaning: Gentle checkup and cleaning.',
            'Preventative Treatment: Application of fluoride or sealants.',
            'Education: Teaching proper brushing/flossing techniques to parents and children.',
        ],
        description:
            'Gentle dental care for children. Focus on prevention, habit correction, and creating a positive dental experience.',
    },
    {
        title: 'Braces & Orthodontics',
        slug: 'braces-orthodontics',
        imgSrc: '/Images/Services/Braces.jpg',
        price: 'Starting from 30K',
        duration: '6-18 months',
        tagline: 'Achieve a straight, functional smile with personalized orthodontic plans.',
        details:
            'Comprehensive treatment for correcting misaligned teeth and jaws. We offer modern solutions including traditional metal braces, discreet ceramic braces, and removable clear aligner systems, tailored to deliver optimal results efficiently.',
        process: [
            'Initial Consultation: Examination, X-rays, and 3D scans.',
            'Treatment Planning: Customized brace type and duration plan.',
            'Bonding/Fitting: Application of braces or delivery of aligners.',
            'Adjustments & Monitoring: Regular appointments for progress checks.',
            'Retention: Post-treatment retainers to maintain results.',
        ],
        description:
            'Comprehensive orthodontic treatments — metal braces, ceramic braces, and clear aligners for better-aligned teeth.',
    },
];

export const featuredServices = services.filter((service) => service.featured);

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((service) => service.slug === slug);
}
