"use client";
import React, { useEffect } from "react";
import { fetchResumeData } from "@/features/resumeSlice";
import { useAppDispatch } from "@/store/store";
import ResumePreview1 from "@/components/resume-preview-1";
import ResumePreview3 from "@/components/resume-preview-3";
import ResumePreview2 from "@/components/resume-preview-2";

const ResumeExportPreview = ({
  id,
  template,
}: {
  id: string | string[] | undefined;
  template: string | string[] | undefined;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(fetchResumeData(id as string));
  }, [dispatch, id]);

  return (
    <section className="bg-white overflow-y-auto scrollbar-hide">
      {template === "template1" && <ResumePreview1 />}
      {template === "template2" && <ResumePreview2 />}
      {template === "template3" && <ResumePreview3 />}
    </section>
  );
};

export default ResumeExportPreview;
