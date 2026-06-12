import { HeroSection } from '../sections/HeroSection';
import { OurProjectsSection } from '../sections/OurProjectsSection';
import { SolutionsSection } from '../sections/SolutionsSection';
import { ServicesSection } from '../sections/ServicesSection';
import { WhyAionixSection } from '../sections/WhyAionixSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <OurProjectsSection />
      <SolutionsSection />
      <ServicesSection />
      <WhyAionixSection />
    </>
  );
}
