"use server";
import { getServerAxiosInstance } from "@/hooks/serverAxiosInstance";
import { baseURL } from "@/hooks/useAxios";
import { resumeData } from "@/types";
import { z } from "zod";
import axios, { AxiosError } from "axios";

// Initialize Resume
export async function initializeAction() {
  const axiosInstance = await getServerAxiosInstance();
  try {
    const res = await axiosInstance.post(`${baseURL}/resume/initialize`);
    if (res.status !== 201) {
      throw new Error(res?.data?.message);
    }

    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to Initialize Resume" };
  }
}

//Create Resume Header
const headerSchema = z.object({
  resumeId: z.string().min(10, "Failed to get Resume ID"),
  firstName: z.string().min(2, "First name must be at least 2 characters long"),
  lastName: z.string().min(2, "Last name must be at least 2 characters long"),
  city: z.string().min(2, "City must be at least 2 characters long"),
  country: z.string().min(2, "Country must be at least 2 characters long"),
  address: z.string().min(2, "Address must be at least 2 characters long"),
  profession: z
    .string()
    .min(2, "Profession must be at least 2 characters long"),
  phoneNumber: z
    .string()
    .min(6, "Phone Number must be at least 2 characters long"),
  publicEmail: z.string().email("Invalid email address"),
});

export async function createResumeHeader(
  resumeId: string,
  firstName: string,
  lastName: string,
  city: string,
  country: string,
  address: string,
  profession: string,
  phoneNumber: string,
  publicEmail: string
) {
  const validatedInput = headerSchema.parse({
    resumeId,
    firstName,
    lastName,
    city,
    country,
    address,
    profession,
    phoneNumber,
    publicEmail,
  });
  const axiosInstance = await getServerAxiosInstance();

  try {
    const res = await axiosInstance.post(
      `${baseURL}/resume/header`,
      validatedInput
    );

    if (res.status !== 201) {
      throw new Error(res?.data?.message);
    }

    return { success: true, data: res.data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      return { success: false, error: error.errors[0].message };
    }
    if (axios.isAxiosError(error) && error.response) {
      // Handle specific API errors if available
      return {
        success: false,
        error: error.response.data.reason || "Header creation failed",
      };
    }
    console.error("Header creation error:", error);
    return { success: false, error: "Header creation failed" };
  }
}

// Create Resume Experience
const experienceSchema = z.object({
  jobTitle: z.string().min(2, "Job title must be at least 2 characters long"),
  resumeId: z.string().min(10, "Invalid Resume ID"),
  city: z.string().min(2, "City must be at least 2 characters long"),
  country: z.string().min(2, "Country must be at least 2 characters long"),
  company: z.string().min(2, "Company name must be at least 2 characters long"),
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Use YYYY-MM-DD"),
  endDate: z
    .union([
      z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Use YYYY-MM-DD"),
      z.literal("Present"),
    ])
    .optional(),
  currentlyWorking: z.boolean(),
});

type ExperienceInput = z.infer<typeof experienceSchema>;

export async function createResumeExperience(input: ExperienceInput) {
  const validatedInput = experienceSchema.parse(input);
  const axiosInstance = await getServerAxiosInstance();

  try {
    const res = await axiosInstance.post(
      `${baseURL}/resume/experiences`,
      validatedInput
    );

    if (res.status !== 201) {
      throw new Error(res?.data?.message);
    }

    return { success: true, data: res.data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      return { success: false, error: error.errors[0].message };
    }
    if (axios.isAxiosError(error) && error.response) {
      // Handle specific API errors if available
      return {
        success: false,
        error: error.response.data.reason || "Experience creation failed",
      };
    }
    console.error("Experience creation error:", error);
    return { success: false, error: "Experience creation failed" };
  }
}

// Create Resume Education
const educationSchema = z.object({
  schoolName: z.string().min(2, "School name must be at least 2 characters long"),
  resumeId: z.string().min(10, "Invalid Resume ID"),
  schoolLocation: z.string().min(2, "Location must be at least 2 characters long"),
  degreeType: z.string().min(2, "Degree type must be at least 2 characters long"),
  studyField: z.string().min(2, "Study field name must be at least 2 characters long"),
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Use YYYY-MM-DD"),
    graduationDate: z
    .union([
      z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Use YYYY-MM-DD"),
      z.literal("Present"),
    ])
    .optional(),
    stillEnrolled: z.boolean(),
});

type EducationInput = z.infer<typeof educationSchema>;

export async function createResumeEducation(input: EducationInput) {
  const validatedInput = educationSchema.parse(input);
  const axiosInstance = await getServerAxiosInstance();

  try {
    const res = await axiosInstance.post(
      `${baseURL}/resume/education`,
      validatedInput
    );

    if (res.status !== 201) {
      throw new Error(res?.data?.message);
    }

    return { success: true, data: res.data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      return { success: false, error: error.errors[0].message };
    }
    if (axios.isAxiosError(error) && error.response) {
      // Handle specific API errors if available
      return {
        success: false,
        error: error.response.data.reason || "Education creation failed",
      };
    }
    console.error("Education creation error:", error);
    return { success: false, error: "Education creation failed" };
  }
}

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
