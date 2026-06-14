import { HeroSection } from '../sections/HeroSection';
import { SolutionsSection } from '../sections/SolutionsSection';
import { ServicesSection } from '../sections/ServicesSection';
import { WhyAionixSection } from '../sections/WhyAionixSection';
import { OurProjectSection } from '../sections/OurProjectSection';
import { PartnerSection } from '../sections/PartnerSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <ServicesSection />
      <WhyAionixSection />
      <OurProjectSection />
      <PartnerSection />
    </>
  );
}
