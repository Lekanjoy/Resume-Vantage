import Header from "@/components/header";
import Cta from "@/components/landing-page/cta";
import Footer from "@/components/landing-page/footer";
import TemplatesList from "@/components/templates/TemplatesList";
import UserDashboard from "@/components/user-dashboard";

export default function Templates() {
  return (
    <>
      <Header />
      <div className="mt-24 px-6 lg:px-20 lg:mt-32 xl:px-[80px] 2xl:px-[120px]">
        <h1 className="font-semibold text-[#292B2F] text-base lg:text-xl xl:text-4xl">
          Create your resume
        </h1>
        <p className="text-secondaryColor-100 text-sm lg:text-base">
          Curate a resume that is personally crafted and designed to make you
          stand out in the job marketplace.
        </p>
        <TemplatesList />
        <UserDashboard />
      </div>
      <Cta />
      <Footer />
    </>
  );
}
