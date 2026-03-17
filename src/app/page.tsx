import Hero from "@/components/Hero";
import Savoirfaire from "@/components/Savoirfaire";
import Manifeste from "@/components/Manifeste";
import Decouvrir from "@/components/Decouvrir";
import Ressources from "@/components/Ressources";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Savoirfaire />
      <Manifeste />
      <Decouvrir />
      <Ressources />
      <Newsletter />
      <FAQ />
      <Footer />
    </main>
  );
}
