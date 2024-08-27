import { fetchResumes } from "@/app/actions/createResume";
import { resumeData } from "@/data";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = resumeData;

export const fetchResumeData = createAsyncThunk(
  "resume/fetchResumeData",
  async (id: string) => {
    const resume = fetchResumes(id);
    return resume;
  }
);

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    removeSkill: (state, action) => {
      state.skills = state.skills.filter((skill) => skill !== action.payload);
    },
    addExperience: (state, action) => {
      state.experience.push(action.payload);
    },
    updateExperience: (state, action) => {
      const index = state.experience.findIndex(
        (exp) => exp.company === action.payload.company
      );
      if (index !== -1) {
        state.experience[index] = action.payload;
      }
    },
    removeExperience: (state, action) => {
      state.experience = state.experience.filter(
        (exp) => exp.company !== action.payload
      );
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    updateEducation: (state, action) => {
      const index = state.education.findIndex(
        (edu) => edu.institution === action.payload.institution
      );
      if (index !== -1) {
        state.education[index] = action.payload;
      }
    },
    removeEducation: (state, action) => {
      state.education = state.education.filter(
        (edu) => edu.institution !== action.payload
      );
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
          state.fname = action.payload[0]?.firstName;
          state.lname = action.payload[0]?.lastName;
          state.title = action.payload[0]?.profession;
          state.email = action.payload[0]?.publicEmail;
          state.city = action.payload[0]?.city;
          state.country = action.payload[0]?.country;
          state.phone = action.payload[0]?.phoneNumber;
          state.summary = action.payload[0]?.summary;
          state.skills = action.payload[0]?.skills;
          state.experience = action.payload[0]?.jobExperiences;
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
  addSkill,
  removeSkill,
  addExperience,
  updateExperience,
  removeExperience,
  addEducation,
  updateEducation,
  removeEducation,
  addCertification,
  updateCertification,
  removeCertification,
} = resumeSlice.actions;

export default resumeSlice.reducer;
