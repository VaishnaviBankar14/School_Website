import PublicLayout from "../layouts/PublicLayout";

import Hero from "../components/About/Hero";
import Story from "../components/About/Story";
import VisionMission from "../components/About/VisionMission";
import PrincipalMessage from "../components/About/PrincipalMessage";
import WhyChooseUs from "../components/About/WhyChooseUs";
import Achievements from "../components/About/Achievements";
import GalleryPreview from "../components/About/GalleryPreview";
import CTA from "../components/About/CTA";

function AboutPage() {
  return (
    <PublicLayout>
        
      <Hero />
      <Story />
      <VisionMission />
      <PrincipalMessage />
      <WhyChooseUs />
      <Achievements />
      <GalleryPreview />
      <CTA />
    </PublicLayout>
  );
}

export default AboutPage;