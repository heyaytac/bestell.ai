import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AIWorkflowSection } from './components/AIWorkflow/AIWorkflowSection';
import { OrdersContainer } from './components/OrderVisualization/OrdersContainer';
import { VoiceCustomization } from './components/SpecialFeatures/VoiceCustomization';
import { SystemExamplesSection } from './components/SystemExamples/SystemExamplesSection';
import { PricingSection } from './components/PricingSection';
import { ComparisonTable } from './components/ComparisonTable/ComparisonTable';
import { CaseStudiesSection } from './components/CaseStudies/CaseStudiesSection';
import { FAQSection } from './components/FAQ/FAQSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { RestaurantScene } from './components/RestaurantScene';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress/ScrollProgress';
import { AuthModal } from './components/auth/AuthModal';
import { AuthProvider } from './contexts/AuthContext';
import './styles/animations.css';

export default function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleAuthClick = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <ScrollProgress />
        <Header onAuthClick={handleAuthClick} />
        <main className="max-w-7xl mx-auto">
          <Hero onAuthClick={handleAuthClick} />
          <AIWorkflowSection />
          <SystemExamplesSection />
          <OrdersContainer />
          <VoiceCustomization />
          <PricingSection onAuthClick={handleAuthClick} />
          <div className="max-w-6xl mx-auto px-6">
            <ComparisonTable />
          </div>
          <CaseStudiesSection />
          <TestimonialsSection />
          <FAQSection />
          <RestaurantScene onAuthClick={handleAuthClick} />
          <ContactSection />
        </main>
        <Footer />
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
      </div>
    </AuthProvider>
  );
}