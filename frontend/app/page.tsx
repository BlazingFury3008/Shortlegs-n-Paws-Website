import React from "react";
import Navbar from "./components/main/Navbar";
import Intro from "./components/main/Intro";
import About from "./components/main/About";
import FAQ from "./components/main/FAQ";
import Footer from "./components/main/Footer";
import Gallery from "./components/main/Gallery";
import Reviews from "./components/main/Reviews";
import Services from "./components/main/Services";

export default function Page() {
  return (
    <div className="select-none bg-[#fffaf4] text-stone-900">
      <Navbar />

      <main>
        {/* Intro */}
        <section id="home" className="scroll-mt-24">
          <Intro />
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-24">
          <Services />
        </section>

        {/* Gallery */}
        <section id="gallery" className="scroll-mt-24">
          <Gallery />
        </section>

        {/* Reviews */}
        <section id="reviews" className="scroll-mt-24">
          <Reviews />
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24">
          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  );
}