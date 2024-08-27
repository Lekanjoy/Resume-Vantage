"use client";
import { Suspense } from "react";
import DashboardContent from "@/components/dashboard/DashboardContent";

export default function Dashboard({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const id = searchParams?.resumeId;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent id={id} />
    </Suspense>
  );
}
