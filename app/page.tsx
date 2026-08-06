import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      {/* Removed pt-[72px] completely. The Hero component now handles its own spacing. */}
      <main className="m-0 p-0">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
