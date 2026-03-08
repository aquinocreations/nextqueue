import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ExpertsSection from "@/components/ExpertsSection";
import SampleItinerary from "@/components/SampleItinerary";
import Pricing from "@/components/Pricing";
import IntakeForm from "@/components/IntakeForm";
import Footer from "@/components/Footer";
import PasswordGate from "@/components/PasswordGate";

export default function Home() {
  return (
    <PasswordGate>
      <main>
        <Navbar />
        <Hero />
        <HowItWorks />
        <ExpertsSection />
        <SampleItinerary />
        <Pricing />
        <IntakeForm />
        <Footer />
      </main>
    </PasswordGate>
  );
}
