import type { Metadata } from "next";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import WhoWeAre from "./_components/who-we-are";
import Services from "./_components/services";
import Tools from "./_components/tools";
import Projects from "./_components/projects";
import Testimonials from "./_components/testimonials";
import CtaBanner from "./_components/cta-banner";
import Contact from "./_components/contact";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  title: "Devora — We Build Digital Products That Drive Growth",
  description:
    "From custom apps to full-scale platforms - Devora transforms your vision into powerful, scalable software trusted by businesses across 12+ countries.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        <Tools />
        <Projects />
        <Testimonials />
        <CtaBanner />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
