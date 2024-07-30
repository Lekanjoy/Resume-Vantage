import DashboardContent from "@/components/dashboard/DashboardContent";
import { Suspense } from "react";

export default function Dashboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent/>
    </Suspense>
  );
}