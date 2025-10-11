'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';
import DelayedBeforeAfterSlider from './DelayedBeforeAfterSlider';

interface StandardImage {
  src: string;
  alt: string;
  category: 'General' | 'Services';
}

interface BeforeAfterImage {
  before: string;
  after: string;
  alt: string;
  category: 'Before & After';
}

type GalleryImage = StandardImage | BeforeAfterImage;

const allImages: GalleryImage[] = [
  { src: '/Images/General/ClinicChair.jpg', alt: 'Clinic Chair', category: 'General' },
  { src: '/Images/General/Interior.jpg', alt: 'Clinic Interior', category: 'General' },
  { src: '/Images/General/WaitingArea.jpg', alt: 'Waiting Area', category: 'General' },
  { src: '/Images/General/clinic.jpg', alt: 'The Clinic', category: 'General' },
  { src: '/Images/General/dr-bushra.jpg', alt: 'Dr. Bushra', category: 'General' },
  { src: '/Images/Services/Braces.jpg', alt: 'Braces', category: 'Services' },
  { src: '/Images/Services/DentalCrowns.jpg', alt: 'Dental Crowns', category: 'Services' },
  { src: '/Images/Services/DentalImplants.avif', alt: 'Dental Implants', category: 'Services' },
  { src: '/Images/Services/Fillings.webp', alt: 'Fillings', category: 'Services' },
  { src: '/Images/Services/PediatricCare.jpg', alt: 'Pediatric Care', category: 'Services' },
  { src: '/Images/Services/RootCanalTreatment.jpg', alt: 'Root Canal Treatment', category: 'Services' },
  { src: '/Images/Services/SmileDesigning.webp', alt: 'Smile Designing', category: 'Services' },
  { src: '/Images/Services/TeethWhitening.avif', alt: 'Teeth Whitening', category: 'Services' },
  { src: '/Images/Services/WisdomToothExtraction.jpg', alt: 'Wisdom Tooth Extraction', category: 'Services' },
  { before: '/Images/Before-after/all-on-4-dental-implants-before.jpg', after: '/Images/Before-after/all-on-4-dental-implants-after.jpg', alt: 'All on 4 Dental Implants', category: 'Before & After' },
  { before: '/Images/Before-after/dental-implants-before.jpg', after: '/Images/Before-after/dental-implants-after.jpg', alt: 'Dental Implants', category: 'Before & After' },
  { before: '/Images/Before-after/image-before.jpg', after: '/Images/Before-after/image-after.jpg', alt: 'Image', category: 'Before & After' },
  { before: '/Images/Before-after/images-before.jpg', after: '/Images/Before-after/images-after.jpg', alt: 'Images', category: 'Before & After' },
  { before: '/Images/Before-after/implant-surgery-treatment-applied-edentulous-before.jpg', after: '/Images/Before-after/implant-surgery-treatment-applied-edentulous-after.jpg', alt: 'Implant Surgery', category: 'Before & After' },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' ? allImages : allImages.filter(image => image.category === filter);

  const openLightbox = (image: StandardImage) => {
    const standardImages = allImages.filter((img): img is StandardImage => img.category !== 'Before & After');
    setIndex(standardImages.indexOf(image));
    setOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      
      <div className="flex justify-center space-x-4 mb-8">
        <button onClick={() => setFilter('All')} className={`px-4 py-2 rounded-lg ${filter === 'All' ? 'bg-primary text-white' : 'bg-gray-200'}`}>All</button>
        <button onClick={() => setFilter('General')} className={`px-4 py-2 rounded-lg ${filter === 'General' ? 'bg-primary text-white' : 'bg-gray-200'}`}>General</button>
        <button onClick={() => setFilter('Services')} className={`px-4 py-2 rounded-lg ${filter === 'Services' ? 'bg-primary text-white' : 'bg-gray-200'}`}>Services</button>
        <button onClick={() => setFilter('Before & After')} className={`px-4 py-2 rounded-lg ${filter === 'Before & After' ? 'bg-primary text-white' : 'bg-gray-200'}`}>Before & After</button>
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, idx) => (
          <motion.div layout key={idx} className="relative overflow-hidden rounded-lg cursor-pointer" onClick={() => image.category !== 'Before & After' && openLightbox(image as StandardImage)} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            {image.category === 'Before & After' ? (
              <DelayedBeforeAfterSlider before={image.before} after={image.after} alt={image.alt} />
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={allImages.filter((image): image is StandardImage => image.category !== 'Before & After').map(image => ({ src: image.src }))}
        index={index}
      />
    </div>
  );
};

export default Gallery;