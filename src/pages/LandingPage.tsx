import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionSection } from '../components/SolutionSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { ContentSection } from '../components/ContentSection';
import { BonusSection } from '../components/BonusSection';
import { ForYouSection } from '../components/ForYouSection';
import { BeforeAfterSection } from '../components/BeforeAfterSection';
import { CredibilitySection } from '../components/CredibilitySection';
import { OfferSection } from '../components/OfferSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTASection } from '../components/FinalCTASection';
export function LandingPage() {
  return (
    <main className="min-h-screen w-full bg-beige-sand font-body text-text-body overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <ContentSection />
      <BonusSection />
      <ForYouSection />
      <BeforeAfterSection />
      <CredibilitySection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
    </main>);

}