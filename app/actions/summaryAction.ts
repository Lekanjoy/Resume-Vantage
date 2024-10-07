"use server";
import { getServerAxiosInstance } from "@/hooks/serverAxiosInstance";
import { baseURL } from "@/hooks/useAxios";
import axios from "axios";
import { z } from "zod";


// Add Skills Action
const careerSummarySchema = z.object({
  resumeId: z.string().min(24, "Invalid Resume ID"),
  careerSummary: z.string().min(24, "Summary too short"),
});

type SummaryInput = z.infer<typeof careerSummarySchema>;

export const createCareerSummary = async ( input: SummaryInput
) => {
  const validatedInput = careerSummarySchema.parse(input);
  const axiosInstance = getServerAxiosInstance();
  try {
    const res = await (
      await axiosInstance
    ).post(`${baseURL}/resume/career-summary`, validatedInput);
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
        error: error.response.data.reason || "Summary creation failed",
      };
    }
    console.error("Summary creation error:", error);
    return { success: false, error: "Summary creation failed" };
  }
}

// Skills Suggestions
const summarySuggestionsSchema = careerSummarySchema.pick({ resumeId: true });

type SummarySuggestionsInput = z.infer<typeof summarySuggestionsSchema>;

export const getSummarySuggestions = async ( input: SummarySuggestionsInput
) => {
  const validatedInput = summarySuggestionsSchema.parse(input);
  const axiosInstance = getServerAxiosInstance();
  try {
    const res = await (
      await axiosInstance
    ).post(`${baseURL}/resume/get/career-summary`, validatedInput);
    if (res.status !== 200) {
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
        error: error.response.data.reason || "Summary suggestion failed",
      };
    }
    console.error("Summary suggestion error:", error);
    return { success: false, error: "Summary suggestion failed" };
  }
}