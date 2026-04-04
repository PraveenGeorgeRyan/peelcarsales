import { LeadFormProvider } from "@/components/LeadFormContext";
import LeadFormModal from "@/components/LeadFormModal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Awards from "@/components/Awards";
import Inventory from "@/components/Inventory";
import Financing from "@/components/Financing";
import TradeIn from "@/components/TradeIn";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Locations from "@/components/Locations";
import CarFinder from "@/components/CarFinder";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <LeadFormProvider>
      <StructuredData />
      <LeadFormModal />
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <StatsBar />
        <Awards />
        <Inventory />
        <Financing />
        <TradeIn />
        <Reviews />
        <FAQ />
        <Locations />
        <CarFinder />
      </main>
      <Footer />
    </LeadFormProvider>
  );
}
