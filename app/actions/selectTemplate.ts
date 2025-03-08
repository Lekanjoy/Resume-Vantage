"use server";
import { getServerAxiosInstance } from "@/hooks/serverAxiosInstance";
import { baseURL } from "@/hooks/useAxios";
import { z } from "zod";
import axios from "axios";

const templateSchema = z.object({
  resumeId: z.string().min(10, "Failed to get Resume ID"),
  templateType: z.string().min(2, "Provide a template type"),
});

export async function selectTemplateType(
  resumeId: string,
  templateType: string
) {
  const validatedInput = templateSchema.parse({
    resumeId,
    templateType,
  });
  const axiosInstance = await getServerAxiosInstance();

  try {
    const res = await axiosInstance.put(
      `${baseURL}/resume/select-template`,
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
        error: error.response.data.reason || "Template selection error",
      };
    }
    console.error("Header creation error:", error);
    return { success: false, error: "Template selection error" };
  }
}
