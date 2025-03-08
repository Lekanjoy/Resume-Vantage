"use server";
import { getServerAxiosInstance } from "@/hooks/serverAxiosInstance";
import { baseURL } from "@/hooks/useAxios";
import { z } from "zod";
import axios from "axios";

const completedSchema = z.object({
  resumeId: z.string().min(10, "Failed to get Resume ID"),
  completed: z.boolean(),
});

export async function setIsCompleted(resumeId: string, completed: boolean) {
  const validatedInput = completedSchema.parse({
    resumeId,
    completed,
  });
  const axiosInstance = await getServerAxiosInstance();

  try {
    const res = await axiosInstance.put(
      `${baseURL}/resume/set-completed`,
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
        error: error.response.data.reason || "Completed status failed",
      };
    }
    console.error("Header creation error:", error);
    return { success: false, error: "Completed status failed" };
  }
}
