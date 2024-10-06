import { fetchResumes } from "@/app/actions/createResume";
import { resumeData } from "@/data";
import { resumeData as resumeDataType } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Experience {
  _id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  city: string;
  country: string;
  responsibilities: {
    responsibilities: string[];
  };
  rawResponsibilities: {
    responsibilities: string[];
  };
}

export interface Education {
  _id: string;
  schoolName: string;
  schoolLocation: string;
  degreeType: string;
  studyField: string;
  startDate: string;
  gradDate: string;
  stillEnrolled: boolean;
}

const initialState = resumeData;

export const fetchResumeData = createAsyncThunk<
  resumeDataType[],
  string,
  { rejectValue: string }
>("resume/fetchResumeData", async (id: string, { rejectWithValue }) => {
  try {
    const resume = await fetchResumes(id);
    if (resume.length < 1) {
      return rejectWithValue("Failed to fetch resume data");
    }
    return resume;
  } catch (error) {
    return rejectWithValue("An unexpected error occurred");
  }
});

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
    toggleSkill: (state, action: PayloadAction<string>) => {
      const skillIndex = state.skills.indexOf(action.payload);
      if (skillIndex === -1) {
        // Skill doesn't exist, so add it
        state.skills.push(action.payload);
      } else {
        // Skill exists, so remove it
        state.skills.splice(skillIndex, 1);
      }
    },
    addExperience: (
      state,
      action: PayloadAction<Omit<Experience, "responsibilities">>
    ) => {
      state.experience.push({
        ...action.payload,
        responsibilities: { responsibilities: [] },
      });
      state.currentEditingIndex = state.experience.length - 1;
    },
    updateExperience: (
      state,
      action: PayloadAction<{ experience: Experience }>
    ) => {
      if (state.currentEditingIndex !== null) {
        state.experience[state.currentEditingIndex] = action.payload.experience;
      }
    },
    setCurrentEditingIndex: (state, action: PayloadAction<number | null>) => {
      state.currentEditingIndex = action.payload;
    },
    toggleDescriptionInCurrentExperience: (
      state,
      action: PayloadAction<string>
    ) => {
      if (state.currentEditingIndex !== null) {
        const currentExperience = state.experience[state.currentEditingIndex];
        const responsibilityIndex =
          currentExperience.responsibilities.responsibilities.indexOf(
            action.payload
          );
        if (responsibilityIndex === -1) {
          // Responsibility doesn't exist, so add it
          currentExperience.responsibilities.responsibilities.push(
            action.payload
          );
        } else {
          // Responsibility exists, so remove it
          currentExperience.responsibilities.responsibilities.splice(
            responsibilityIndex,
            1
          );
        }
      }
    },
    removeExperience: (state, action) => {
      state.experience = state.experience.filter(
        (exp) => exp.company !== action.payload
      );
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
      state.currentEditingIndex = state.education.length - 1;
    },
    updateEducation: (
      state,
      action: PayloadAction<{ education: Education }>
    ) => {
      if (state.currentEditingIndex !== null) {
        state.education[state.currentEditingIndex] = action.payload.education;
      }
    },
    addCertification: (state, action) => {
      state.certifications.push(action.payload);
    },
    updateCertification: (state, action) => {
      const index = state.certifications.findIndex(
        (cert) => cert.title === action.payload.title
      );
      if (index !== -1) {
        state.certifications[index] = action.payload;
      }
    },
    removeCertification: (state, action) => {
      state.certifications = state.certifications.filter(
        (cert) => cert.title !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResumeData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchResumeData.fulfilled, (state, action) => {
        state.status = "success";
        if (action.payload) {
          state.resumeId = action.payload[0]?._id;
          state.fname = action.payload[0]?.firstName || "";
          state.lname = action.payload[0]?.lastName || "";
          state.title = action.payload[0]?.profession || "";
          state.email = action.payload[0]?.publicEmail || "";
          state.city = action.payload[0]?.city || "";
          state.country = action.payload[0]?.country || "";
          state.phone = action.payload[0]?.phoneNumber || "";
          state.summary = action.payload[0]?.summary || "";
          state.skills = action.payload[0]?.skills || [];
          state.rawSkills = action.payload[0]?.rawSkills || [];

          // Ensure each experience has a responsibilities section
          state.experience = action.payload[0]?.jobExperiences.map(
            (exp: Experience) => ({
              ...exp,
              responsibilities: exp.responsibilities || {
                responsibilities: [],
              },
              rawResponsibilities: exp.rawResponsibilities || {
                rawResponsibilities: [],
              },
            })
          );

          state.education = action.payload[0]?.education;
          state.certifications = action.payload[0]?.certifications;
        }
      })
      .addCase(fetchResumeData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {
  updatePersonalInfo,
  toggleSkill,
  addExperience,
  updateExperience,
  toggleDescriptionInCurrentExperience,
  setCurrentEditingIndex,
  removeExperience,
  addEducation,
  updateEducation,
  addCertification,
  updateCertification,
  removeCertification,
} = resumeSlice.actions;

export default resumeSlice.reducer;
