import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/Dashboard";
import UploadZone from "@/components/UploadZone";
import AutomationFlow from "@/components/AutomationFlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <Dashboard />
      <UploadZone />
      <AutomationFlow />
    </div>
  );
};

export default Index;
