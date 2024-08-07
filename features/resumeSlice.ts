import { resumeData } from '@/data';
import { createSlice } from '@reduxjs/toolkit';

const initialState = resumeData;

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    removeSkill: (state, action) => {
      state.skills = state.skills.filter(skill => skill !== action.payload);
    },
    addExperience: (state, action) => {
      state.experience.push(action.payload);
    },
    updateExperience: (state, action) => {
      const index = state.experience.findIndex(exp => exp.company === action.payload.company);
      if (index !== -1) {
        state.experience[index] = action.payload;
      }
    },
    removeExperience: (state, action) => {
      state.experience = state.experience.filter(exp => exp.company !== action.payload);
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    updateEducation: (state, action) => {
      const index = state.education.findIndex(edu => edu.institution === action.payload.institution);
      if (index !== -1) {
        state.education[index] = action.payload;
      }
    },
    removeEducation: (state, action) => {
      state.education = state.education.filter(edu => edu.institution !== action.payload);
    },
    addCertification: (state, action) => {
      state.certifications.push(action.payload);
    },
    updateCertification: (state, action) => {
      const index = state.certifications.findIndex(cert => cert.title === action.payload.title);
      if (index !== -1) {
        state.certifications[index] = action.payload;
      }
    },
    removeCertification: (state, action) => {
      state.certifications = state.certifications.filter(cert => cert.title !== action.payload);
    },
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
  removeCertification
} = resumeSlice.actions;

export default resumeSlice.reducer;