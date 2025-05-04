import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Testimonials from "@/components/sections/Testimonials";
import Cta from "@/components/sections/Cta";
import Contact from "@/components/sections/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Work />
      <Testimonials />
      <Cta />
      <Contact />
    </main>
  );
};

export default Home;
