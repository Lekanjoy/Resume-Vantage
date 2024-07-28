import Card from "./card";
import img1 from "@/public/assets/landing-page/Dayflow Homework.png";
import img2 from "@/public/assets/landing-page/Dayflow Credit Card.png";
import img3 from "@/public/assets/landing-page/Dayflow Study Set.png";
import img4 from "@/public/assets/landing-page/Dayflow Light Bulb.png";
import img5 from "@/public/assets/landing-page/Dayflow Cute List.png";
import img6 from "@/public/assets/landing-page/Dayflow Draw.png";

const Perks = () => {
  return (
    <section className="w-full mt-12 flex flex-col justify-center items-center gap-y-6 px-6  lg:px-20 lg:gap-y-8 xl:px-[80px] 2xl:px-[120px] 2xl:gap-y-12">
      <div className="flex flex-col justify-center items-center text-center gap-y-6 lg:gap-y-8 2xl:gap-y-12">
        <h2 className="text-2xl text-secondaryColor font-bold leading-[24px] lg:text-6xl  lg:leading-[60px] 2xl:text-8xl 2xl:leading-[96px]">
          Why use the
          <span className="font-semibold text-primaryColor-100"> Resume</span>
          <span className="text-primaryColor">Vantage. </span>
          Resume Builder?
        </h2>
        <p className="text-secondaryColor-100 font-medium lg:text-xl lg:font-semibold lg:max-w-[700px]">
          We have a wide range of unique features readily available to help you
          stand out in the competitive job market and land your dream job.
        </p>
      </div>

      <div className="w-full grid grid-cols-2 mt-12 gap-x-6 gap-y-8 lg:grid-cols-3 lg:gap-8">
        <Card
          text="Creative and Professional Templates"
          img={img1}
          bgColor="bg-[#E8E2FD]"
          innerColor="bg-[#D1C6FB]"
        />
        <Card
          text="Free and Premium, No Hidden Fees"
          img={img2}
          bgColor="bg-[#EAF5F1]"
          innerColor="bg-[#D5EBE2]"
        />
        <Card
          text="ATS-Friendly Resume Templates"
          img={img3}
          bgColor="bg-[#F8E7F5]"
          innerColor="bg-[#F1D0EC]"
        />
        <Card
          text="AI-powered Content Optimization"
          img={img4}
          bgColor="bg-[#FDF7E2]"
          innerColor="bg-[#FBEFC6]"
        />
        <Card
          text="Real-time Edits and Feedback"
          img={img5}
          bgColor="bg-[#FFE0FC]"
          innerColor="bg-[#FFC2F9]"
        />
        <Card
          text="Smart Template Customization"
          img={img6}
          bgColor="bg-[#E4EFFC]"
          innerColor="bg-[#C8DEF9]"
        />
      </div>
    </section>
  );
};

export default Perks;
