"use server";
import { getServerAxiosInstance } from "@/hooks/serverAxiosInstance";
import { baseURL } from "@/hooks/useAxios";
import { z } from "zod";
import axios from "axios";

// Create Resume Education
const educationSchema = z.object({
    resumeId: z.string().min(10, "Invalid Resume ID"),
    schoolName: z.string().min(2, "School name must be at least 2 characters long"),
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
  