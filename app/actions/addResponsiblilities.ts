"use server";
import { getServerAxiosInstance } from "@/hooks/serverAxiosInstance";
import { baseURL } from "@/hooks/useAxios";
import axios from "axios";
import { z } from "zod";

const responsibilitiesSchema = z.object({
  resumeId: z.string().min(24, "Invalid Resume ID"),
  jobExperienceId: z.string().min(24, "Invalid Job Experience ID"),
  userResponsibilities: z
    .array(z.string().min(1, "Responsibility cannot be empty"))
    .min(1, "At least one responsibility is required"),
});

type ResponsibilitiesInput = z.infer<typeof responsibilitiesSchema>;

export const addResponsibilitiesAction = async (
  input: ResponsibilitiesInput
) => {
  const validatedInput = responsibilitiesSchema.parse(input);
  const axiosInstance = getServerAxiosInstance();
  try {
    const res = await (
      await axiosInstance
    ).post(`${baseURL}/resume/responsibilities`, validatedInput);
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
        error: error.response.data.reason || "Responsibilities creation failed",
      };
    }
    console.error("Responsibilities creation error:", error);
    return { success: false, error: "Responsibilities creation failed" };
  }
};
