// src/app/page.tsx

import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import ServicesGrid from '../components/ServicesGrid';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
// Removed: Header and Footer

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <Testimonials />
      <ContactForm />
    </>
  );
}