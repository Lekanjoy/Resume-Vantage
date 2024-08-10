"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { z } from "zod";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

//  schema for login input validation
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export async function loginUser(email: string, password: string) {
  try {
    // Validate input
    const validatedInput = loginSchema.parse({ email, password });
    const res = await axios.post(`${baseURL}/auth/login`, validatedInput);

    if (res.status !== 200) {
      throw new Error("Login failed");
    }
    // Set the cookie
    cookies().set("token", res.data.payload.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600, // 1 hour
      path: "/",
    });

    return { success: true, data: res.data.payload };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      return { success: false, error: error.errors[0].message };
    }
    if (axios.isAxiosError(error) && error.response) {
      // Handle specific API errors if available
      return {
        success: false,
        error: error.response.data.reason || "Login failed",
      };
    }
    console.error("Login error:", error);
    return { success: false, error: "Login failed" };
  }
}

//schema for signup input validation
const signupSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters long"),
  lastName: z.string().min(2, "Last name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export async function signUpUser(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  try {
    // Validate input
    const validatedInput = signupSchema.parse({
      firstName,
      lastName,
      email,
      password,
    });

    const res = await axios.post(`${baseURL}/auth/register`, {
      name: `${validatedInput.firstName} ${validatedInput.lastName}`,
      firstName: validatedInput.firstName,
      lastName: validatedInput.lastName,
      email: validatedInput.email,
      password: validatedInput.password,
    });

    if (res.status !== 201) {
      throw new Error("Registration failed");
    }

    return { success: true, data: res.data.payload };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      return { success: false, error: error.errors[0].message };
    }
    if (axios.isAxiosError(error) && error.response) {
      // Handle specific API errors if available
      return {
        success: false,
        error: error.response.data.reason || "Registration failed",
      };
    }
    console.error("Registration error:", error);
    return { success: false, error: "Registration failed" };
  }
}

//  schema for reset input validation
const forgotPassSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function recoverPassword(email: string) {
  try {
    // Validate input
    const validatedInput = forgotPassSchema.parse({ email });

    const res = await axios.post(
      `${baseURL}/auth/verify-email-password-reset`,
      validatedInput
    );

    if (res.status !== 200) {
      throw new Error("Password Recovery failed");
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
        error: error.response.data.reason || "Password Recovery failed",
      };
    }
    console.error("Registration error:", error);
    return { success: false, error: "Password Recovery failed" };
  }
}


export async function updatePassword(email: string, password: string) {
  try {
    // Validate input
    const validatedInput = loginSchema.parse({ email, password });

    const res = await axios.post(
      `${baseURL}/auth/update-password`,
      validatedInput
    );

    if (res.status !== 200) {
      throw new Error("Password Update failed");
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
        error: error.response.data.reason || "Password Update failed",
      };
    }
    console.error("Registration error:", error);
    return { success: false, error: "Password Update failed" };
  }
}


export async function setAuthToken(token: string) {
  cookies().set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: 3600, // 1 hour
    sameSite: "strict",
    path: "/",
  });
}

export async function logOutUser() {
  // Clear the cookie
  cookies().delete("token");
  return { success: true };
}

export async function isUserLoggedIn() {
  const token = cookies().get("token");
  return { success: !!token };
}
