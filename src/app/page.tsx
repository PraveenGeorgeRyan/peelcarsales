import { LeadFormProvider } from "@/components/LeadFormContext";
import LeadFormModal from "@/components/LeadFormModal";
import AutoOpenLeadForm from "@/components/AutoOpenLeadForm";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Awards from "@/components/Awards";
import SeoContent from "@/components/SeoContent";
import Inventory from "@/components/Inventory";
import Financing from "@/components/Financing";
import TradeIn from "@/components/TradeIn";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Locations from "@/components/Locations";
import CarFinder from "@/components/CarFinder";
import AwardsBottom from "@/components/AwardsBottom";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <LeadFormProvider>
      <StructuredData />
      <LeadFormModal />
      <AutoOpenLeadForm />
      <FloatingButtons />
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <StatsBar />
        <Awards />
        <SeoContent />
        <Inventory />
        <Financing />
        <TradeIn />
        <Reviews />
        <FAQ />
        <Locations />
        <CarFinder />
        <AwardsBottom />
      </main>
      <Footer />
    </LeadFormProvider>
  );
}
