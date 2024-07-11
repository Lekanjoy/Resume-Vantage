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
    <main className=" px-6  lg:px-20  xl:px-[80px] 2xl:px-[120px]">
      <Header />
      <Hero />
      <Perks/>
      <Discover/>
      <Steps/>
      <Testimonials/>
      <Cta/>
      <Footer/>
    </main>
  );
}
