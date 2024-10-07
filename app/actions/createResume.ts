"use server";
import { getServerAxiosInstance } from "@/hooks/serverAxiosInstance";
import { baseURL } from "@/hooks/useAxios";
import { z } from "zod";
import axios from "axios";

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
