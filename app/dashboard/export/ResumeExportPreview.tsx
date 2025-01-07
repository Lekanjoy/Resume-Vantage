"use client";
import React, { useEffect } from "react";
import { fetchResumeData } from "@/features/resumeSlice";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import ResumePreview1 from "@/components/resume-preview-1";
import ResumePreview3 from "@/components/resume-preview-3";
import ResumePreview2 from "@/components/resume-preview-2";

const ResumeExportPreview = ({ id }: { id: string | string[] | undefined }) => {
  const dispatch = useAppDispatch();
  const resumeData = useTypedSelector((store) => store.resume);

  useEffect(() => {
    if (id) dispatch(fetchResumeData(id as string));
  }, [dispatch, id]);

  return (
      <section className="bg-white overflow-y-auto scrollbar-hide">
        {/* <ResumePreview1/> */}
        {/* <ResumePreview2/> */}
        <ResumePreview3/>
      </section>
  );
};

export default ResumeExportPreview;
