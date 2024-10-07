"use server";
import { getServerAxiosInstance } from "@/hooks/serverAxiosInstance";
import { baseURL } from "@/hooks/useAxios";
import { z } from "zod";
import axios from "axios";

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
  