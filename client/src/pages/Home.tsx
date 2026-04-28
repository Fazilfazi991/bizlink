import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Government from "./sections/Government";
import Visas from "./sections/Visas";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Government />
      <Visas />
      <Contact />
    </>
  );
}
