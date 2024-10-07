import React, { useMemo, useState } from "react";
import Button, { ButtonProps as SkillsProps } from "../button";
import SearchBox from "../describe-experience/SearchBox";
import RichTextEditor from "../editor";
import Toast from "@/components/toast";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import { useToast } from "@/components/toast/ShowToast";
import { toggleSkill } from "@/features/resumeSlice";
import { addSkills } from "@/app/actions/skillsAction";

const Skills = ({ currentIndex, handlePrev, handleNext }: SkillsProps) => {
  const dispatch = useAppDispatch();
  const { showToast, toastState } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    title: role,
    skills,
    rawSkills,
    resumeId,
  } = useTypedSelector((store) => store.resume);

  // Skills to display based on subscription status
  const isPaidUser = false;
  const resultData = useTypedSelector((store) => store.skillsSuggestions);
  const AISuggestions = resultData.length < 1 ? rawSkills : resultData;
  const displayedResults = isPaidUser
    ? AISuggestions
    : AISuggestions?.slice(0, 3);

  // Check if skill is selected or not
  const isSelected = useMemo(() => {
    return (result: string) => {
      if (skills) {
        return skills?.includes(result);
      }
      return false;
    };
  }, [skills]);

  // Add and remove skills
  const handleAddDescription = (result: string) => {
    dispatch(toggleSkill(result));
  };

  // Update skill through editor
  const handleUpdate = (newSkills: string[]) => {
    // Compare new skills with existing skills
    const existingSkills = new Set(skills);
    const newSkillsSet = new Set(newSkills);

    // Toggle skills that are in one set but not the other
    skills.forEach((skill) => {
      if (!newSkillsSet.has(skill)) {
        dispatch(toggleSkill(skill)); // Remove skill
      }
    });

    newSkills.forEach((skill) => {
      if (!existingSkills.has(skill)) {
        dispatch(toggleSkill(skill)); // Add skill
      }
    });
  };

  // Add Skills to Database
  const handleAddSkills = async () => {
    setLoading(true);
    const input = {
      resumeId,
      payload: skills,
    };

    const result = await addSkills(input);
    if (result.success) {
      setLoading(false);
      showToast("Skills added", "success");
      setTimeout(() => {
        handleNext();
      }, 3000);
    } else {
      setLoading(false);
      showToast("Skills addition failed!", "success");
      console.error(result.error);
    }
  };
  return (
    <>
      <div className="mb-10 flex flex-col gap-y-1 lg:gap-y-3 lg:mb-12">
        <h1 className="text-secondaryColor text-lg font-semibold lg:text-5xl">
          Select your top skills
        </h1>
        <p className="text-xs text-secondaryColor-100 lg:text-sm">
          Showcase your professional knowledge by adding your top skills.
        </p>
      </div>

      <div className="w-full flex justify-between flex-col gap-y-10 lg:flex-row lg:gap-x-5 xl:gap-x-8">
        <SearchBox
          role={role}
          AISuggestions={AISuggestions}
          displayedResults={displayedResults}
          isSelected={isSelected}
          handleAddDescription={handleAddDescription}
        />
        <RichTextEditor initialContent={skills} onUpdate={handleUpdate} />
      </div>
      <div className="w-full my-20 flex justify-center items-center">
        <Button
          currentIndex={currentIndex}
          handleNext={handleAddSkills}
          handlePrev={handlePrev}
          loading={loading}
        />
      </div>
      <Toast
        message={toastState.message}
        variant={toastState.variant}
        isVisible={toastState.visible}
      />
    </>
  );
};

export default Skills;
