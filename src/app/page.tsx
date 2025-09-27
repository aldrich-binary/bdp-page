import { BDPHeader } from "./components/Header";
import { LogoSection } from "./components/LogoSection";
import ContentSection from "./components/ContentSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import { TestimonialSection } from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <BDPHeader />
      <LogoSection />
      <ContentSection />
      <TestimonialSection/>
      <TeamSection />
      <CallToAction/>
      <Footer/>
    </main>
  );
}
