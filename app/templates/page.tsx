import Header from "@/components/header";
import Cta from "@/components/landing-page/cta";
import Footer from "@/components/landing-page/footer";
import TemplatesList from "@/components/templates/TemplatesList";
import UserDashboard from "@/components/user-dashboard";
import { getServerAxiosInstance } from "@/hooks/serverAxiosInstance";
import { baseURL } from "@/hooks/useAxios";
import { resumeData } from "@/types";
import { Suspense } from "react";
import { AxiosError } from "axios";

const fetchResumes = async (): Promise<{
  resumes: resumeData[];
  error?: string;
}> => {
  try {
    const axiosInstance = await getServerAxiosInstance();
    const response = await axiosInstance.get(`${baseURL}/profile/fetch`);
    const resumes = response.data?.payload?.resumes;
    if (!resumes) {
      throw new Error("No resumes found in the response");
    }
    return { resumes };
  } catch (error) {
    let errorMessage = "An unexpected error occurred";
    if (error instanceof AxiosError) {
      errorMessage =
        error.response?.data?.statusCode === 401
          ? "Please login to see your resumes"
          : error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error(errorMessage);
    return { resumes: [], error: errorMessage };
  }
};

export default async function Templates() {
  const { resumes, error } = await fetchResumes();

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
        <Suspense fallback={<p>Loading...</p>}>
          <UserDashboard resumes={resumes} error={error} />
        </Suspense>
      </div>
      <Cta />
      <Footer />
    </>
  );
}
