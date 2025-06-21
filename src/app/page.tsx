import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import VideoSection from "@/components/video-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <HeroSection />
      <VideoSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
