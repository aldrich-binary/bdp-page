import { BDPHeader } from "./components/Header";
import { LogoSection } from "./components/LogoSection";
import ContentSection from "./components/ContentSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <main>
      <BDPHeader />
      <LogoSection />
      <ContentSection />
      <TeamSection />
      <CallToAction/>
      <Footer/>
    </main>
  );
}
