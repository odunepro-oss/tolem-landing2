import Hero from "@/components/Hero";
import Savoirfaire from "@/components/Savoirfaire";
import Manifeste from "@/components/Manifeste";
import Decouvrir from "@/components/Decouvrir";
import Ressources from "@/components/Ressources";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qui est derrière TOLEM ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TOLEM est née de la rencontre de deux héritages familiaux. Mon père travaille dans l'industrie depuis 40 ans, il fabrique des vannes haute pression. Mon grand-père était bijoutier, il a réalisé des pièces pour le roi du Maroc. J'ai voulu réunir ces deux mondes dans une montre.",
      },
    },
    {
      "@type": "Question",
      name: "Où sont fabriquées vos montres ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chaque montre est conçue et designée à Paris, puis assemblée et contrôlée en France, dans notre atelier de Besançon. Les composants d'habillage proviennent de Hong Kong, le cuir des bracelets vient d'Italie.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi passer par Kickstarter ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kickstarter nous permet de lancer la production sans intermédiaire et de proposer un prix juste aux premiers soutiens. C'est aussi une façon de construire une communauté dès le départ.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la garantie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chaque montre TOLEM bénéficie d'une garantie de 2 ans à partir de la date de livraison. Elle couvre les défauts de fabrication et d'assemblage en usage normal. Sont exclus : usure normale, dommages accidentels, mauvais usage, et interventions non autorisées.",
      },
    },
    {
      "@type": "Question",
      name: "Quand vais-je recevoir ma montre ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les livraisons sont estimées entre 4 et 6 mois après la campagne.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le prix ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le prix retail est de 590€ TTC. Sur Kickstarter : Super Early Bird à 329€ HT, Early Bird à 359€ HT, et Prix Kickstarter à 399€ HT.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
