"use client"
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import AboutDoctor from '../components/AboutDoctor';
import Testimonials from '../components/Testimonials';
import AppointmentForm from '../components/AppointmentForm';
import TreatmentCards from '@/components/treatmentsCards';
import NewPatientsWelcome from '@/components/NewPatientsWelcome';
import WhyChooseUs from '@/components/WhyChooseUs';
import NewsArticles from '@/components/NewsArticles';
import Testimonials_2 from '@/components/Testimonials2';
import FAQSection from '@/components/faq';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <Head> */}
        <title>Elite Aesthetics | Premium Cosmetic Treatments</title>
        <meta name="description" content="Professional aesthetic treatments by board-certified specialists" />
      {/* </Head> */}
   
      <Navbar/>
      <HeroSection />
      <TreatmentCards />
      <NewPatientsWelcome />
      <WhyChooseUs/>
      <Testimonials_2 />
      <NewsArticles />
      {/* <Services /> */}
      <AboutDoctor />
      <Testimonials />
      <FAQSection/>
      <AppointmentForm />
      <Footer/>
    </motion.div>
  );
}