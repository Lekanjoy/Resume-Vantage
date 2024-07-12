import Header from "@/components/header";
import Cta from "@/components/landing-page/cta";
import Discover from "@/components/landing-page/discover";
import Footer from "@/components/landing-page/footer";
import Hero from "@/components/landing-page/hero";
import Perks from "@/components/landing-page/perks";
import Steps from "@/components/landing-page/steps";
import Testimonials from "@/components/landing-page/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Perks />
      <Discover />
      <Steps />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
