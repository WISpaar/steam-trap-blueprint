import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TrapTypes from '@/components/TrapTypes';
import WhyMatters from '@/components/WhyMatters';
import PreviewSections from '@/components/PreviewSections';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TrapTypes />
        <WhyMatters />
        <PreviewSections />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
