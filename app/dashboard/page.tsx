import CardWrapper from "@/components/dashboard/add-upload-resume/CardWrapper";
import Sidebar from "@/components/dashboard/sidebar";

const Dashboard = () => {
  return (
    <section className="relative w-full h-dvh flex">
      <Sidebar />
      <CardWrapper />
    </section>
  );
};

export default Dashboard;
