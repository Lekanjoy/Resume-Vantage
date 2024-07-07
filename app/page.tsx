import Header from "@/components/header";
import Discover from "@/components/landing-page/discover";
import Hero from "@/components/landing-page/hero";
import Perks from "@/components/landing-page/perks";

export default function Home() {
  return (
    <main className=" px-6  lg:px-20  xl:px-[80px] 2xl:px-[120px]">
      <Header />
      <Hero />
      <Perks/>
      <Discover/>
    </main>
  );
}
