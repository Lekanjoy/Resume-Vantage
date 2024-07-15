import CardWrapper from "@/components/dashboard/add-upload-resume/CardWrapper";
import UserHeader from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";

const Dashboard = () => {
  return (
    <section className="relative w-full h-dvh flex">
      <Sidebar />
      <section className="mt-[72px] w-full pr-4 pl-[96px] lg:pl-[calc(20%+56px)] lg:pr-14 2xl:lg:pl-[calc(20%+64px)] 2xl:pr-16">
        {/* <CardWrapper /> */}
        <UserHeader />
      </section>
    </section>
  );
};

export default Dashboard;
