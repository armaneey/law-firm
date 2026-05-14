import {Navbar}from "./components/Navbar"
import {Hero} from "./sections/Hero";
import {LogoStrip} from "./sections/LogoStrip";
import {LegalRights} from "./sections/LegalRights";
import {Service} from "./sections/Services";
import {AboutFirm} from "./sections/AboutFirm";
import {Features} from "./sections/Features";
import {HowWeWork} from "./sections/HowWeWork";
import {Awards} from "./sections/Awards";
import {Stat} from "./sections/Stats";
import {Portfolio} from "./sections/Portfolio";
import {FreeConsultBanner} from "./sections/FreeConsultBanner";
import {FounderQuote} from "./sections/FounderQuote";
import {Team }from "./sections/Team";
import {Media} from "./sections/Media";
import {Blog }from "./sections/Blog";
import {Contact} from "./sections/Contact";
import{Footer} from "./sections/Footer";

function App() {
  return (
    <main className="bg-[#F9F7F2] text-[#0D0D0D] overflow-x-hidden">
      
      <Navbar />
      <Hero />
      <LogoStrip />
    <LegalRights />
      <Service />
      <AboutFirm />
      <Features />
      <HowWeWork />
       <Awards />
      <Stat />
      <Portfolio />
        <FreeConsultBanner />
      <FounderQuote />
      <Team />
      <Media />
      <Blog />
      <Contact />
      <Footer />

    </main>
  );
}

export default App;