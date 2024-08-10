import { Suspense } from "react";
import ResetContent from "./ResetContent";

export type statusState = "pending" | "success" | "failed";

export default function ResetPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetContent />
    </Suspense>
  );
}
