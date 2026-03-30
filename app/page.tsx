import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-[1000px] mx-auto px-10">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
