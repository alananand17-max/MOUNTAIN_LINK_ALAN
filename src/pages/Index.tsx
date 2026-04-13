import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import RouteMap from "@/components/landing/RouteMap";
import ComparisonTable from "@/components/landing/ComparisonTable";
import KeyStats from "@/components/landing/KeyStats";
import CustomerSegments from "@/components/landing/CustomerSegments";
import Testimonials from "@/components/landing/Testimonials";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <KeyStats />
    <HowItWorks />
    <RouteMap />
    <ComparisonTable />
    <CustomerSegments />
    <Testimonials />
    <Footer />
  </div>
);

export default Index;
