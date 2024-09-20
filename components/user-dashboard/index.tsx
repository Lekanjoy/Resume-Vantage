"use client";
import { useEffect, useState } from "react";
import { resumeData } from "@/types";
import { useToast } from "../toast/ShowToast";
import View from "./View";
import Toast from "../toast";

type UserDashboardProps = {
  resumes: resumeData[];
  error: string | undefined;
};

const UserDashboard = ({ resumes, error }: UserDashboardProps) => {
  const { showToast, toastState } = useToast();
  // State for drafts and completed resumes
  const [drafts, setDrafts] = useState<resumeData[]>([]);
  const [completed, setCompleted] = useState<resumeData[]>([]);
  
  // State for selected view and view names
  const [selectedView, setSelectedView] = useState(0);
  const viewNames = ["Drafts", "Completed"];

  // Effect to separate resumes into drafts and completed
  useEffect(() => {
    if (error) {
      showToast(error, "error");
    }
    if (resumes) {
      // Filter resumes into drafts and completed
      const draftResumes = resumes.filter((resume) => !resume.completed);
      const completedResumes = resumes.filter((resume) => resume.completed);
      
      // Update state with filtered resumes
      setDrafts(draftResumes);
      setCompleted(completedResumes);
    }
  }, [error, resumes, showToast]);
  // Function to render resume views
  const renderResumeViews = () => {
    const currentResumes = selectedView === 0 ? drafts : completed;
    return currentResumes.map((resume) => (
      <View key={resume._id} resume={resume} />
    ));
  };

  return (
    <div className="my-14 xl:my-20">
      <h3 className="font-semibold text-[#292B2F] text-lg mb-10 lg:text-xl xl:text-4xl">
        My Resume
      </h3>

      <div className="w-full text-[#292B2F] font-semibold text-sm flex gap-x-10 pb-5 lg:text-base cursor-pointer border-b border-[#BDBDBD]">
        {viewNames.map((view, id) => (
          <div
            key={view+id}
            onClick={() => setSelectedView(id)}
            className={`flex gap-x-1 items-center ${
              selectedView === id
                ? "relative ease-in-out duration-300 before:bg-primaryColor before:absolute before:w-full before:rounded-md before:-bottom-[23px] before:h-[3px]"
                : ""
            }`}
          >
            <span>{view}</span>
            <span className="text-[#B9BBBE]">
              {id === 0 ? drafts?.length : completed?.length}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex gap-x-2 xl:mt-16">
        {renderResumeViews()}
      </div>

      <Toast
        message={toastState.message}
        variant={toastState.variant}
        isVisible={toastState.visible}
      />
    </div>
  );
};

export default UserDashboard;
