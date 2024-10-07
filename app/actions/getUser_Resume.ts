"use server";
import { getServerAxiosInstance } from "@/hooks/serverAxiosInstance";
import { baseURL } from "@/hooks/useAxios";
import { resumeData } from "@/types";
import { AxiosError } from "axios";


// Get Current User
export async function getUser() {
    const axiosInstance = await getServerAxiosInstance();
  
    try {
      const res = await axiosInstance.get(`${baseURL}/profile/fetch`);
      if (res.status !== 200) {
        throw new Error(res?.data?.message);
      }
      return { success: true, data: res.data };
    } catch (error) {
      console.error(error);
      return { success: false, error: "Failed to Fetch user" };
    }
  }
  
  // Get unique resume by ID
  export const fetchResumes = async (
    id: string
  ): Promise<resumeData[]> => {
    const axiosInstance = await getServerAxiosInstance();
    try {
      const response = await axiosInstance.get(`${baseURL}/profile/fetch`);
      const resumes: resumeData[] = response.data?.payload?.resumes;
      //Filter based on resumeId search query in url
      const filteredResumes = resumes.filter((resume) => resume?._id === id);
      return filteredResumes;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Axios error:", error.message);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
        }
      } else {
        console.error("Unexpected error:", error);
      }
      return [];
    }
  };
  