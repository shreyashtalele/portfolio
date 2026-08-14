import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

// ✅ Lazy load components that are below the fold
const Work = dynamic(() => import("@/components/Work"), {
  loading: () => (
    <div className="py-12 text-center text-muted">Loading work...</div>
  ),
});

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => (
    <div className="py-12 text-center text-muted">Loading skills...</div>
  ),
});

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => (
    <div className="py-12 text-center text-muted">Loading experience...</div>
  ),
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => (
    <div className="py-12 text-center text-muted">Loading contact...</div>
  ),
});

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
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
