import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Mission } from "@/components/site/Mission";
import { About } from "@/components/site/About";
import { Ministry } from "@/components/site/Ministry";
import { Sermons } from "@/components/site/Sermons";
import { Publications } from "@/components/site/Publications";
import { Books } from "@/components/site/Books";
import { Speaking } from "@/components/site/Speaking";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <About />
        <Ministry />
        <Sermons />
        <Publications />
        <Books />
        <Speaking />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
