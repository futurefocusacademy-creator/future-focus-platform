import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Founder from '../sections/Founder';
import CoFounder from '../sections/CoFounder';
import Courses from '../sections/Courses';
import WhyChooseUs from '../sections/WhyChooseUs';
import SuccessStories from '../sections/SuccessStories';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';

export default function LandingPage() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Founder />
      <CoFounder />
      <Courses />
      <WhyChooseUs />
      <SuccessStories />
      <FAQ />
      <Contact />
    </div>
  );
}
