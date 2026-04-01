import { HeroSection } from "@/components/organisms/HeroSection";
import { Navbar } from "@/components/organisms/Navbar";
import { SocialProofSection } from "@/components/organisms/SocialProofSection";
import { PainSection } from "@/components/organisms/PainSection";

import { BenefitsSection } from "@/components/organisms/BenefitsSection";
import { DifferentialsSection } from "@/components/organisms/DifferentialsSection";
import { AuthoritySection } from "@/components/organisms/AuthoritySection";
import { FAQSection } from "@/components/organisms/FAQSection";
import { CTASection } from "@/components/organisms/CTASection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { Footer } from "@/components/organisms/Footer";
import { WhatsAppButton } from "@/components/organisms/WhatsAppButton";
import { SchedulingModal } from "@/components/organisms/SchedulingModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <SchedulingModal />
      <main id="main-content" className="relative w-full overflow-hidden">
        <HeroSection />
        <SocialProofSection />
      <PainSection />

      <AuthoritySection />
      <BenefitsSection />
      <DifferentialsSection />
        <CTASection />
        <ContactSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
