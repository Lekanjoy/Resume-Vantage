import Link from "next/link";
import Button from "@/components/button";
import { navItems } from "@/data";

const MobileNav = () => {
  return (
    <aside className="z-50 absolute top-[0] left-0 px-6 w-full bg-white h-[90dvh] bg- shadow flex flex-col gap-y-14 lg:hidden">
      <div className="flex flex-col gap-y-8 mt-[120px]">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm 
                text-secondary hover:text-primary-200"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-y-4">
        <Link href="/login" className="text-primary text-sm font-medium">
          Log in
        </Link>
        <Button
          text="Get Started"
          bgColor={"bg-primary"}
          textColor={"text-white"}
          stroke={"#FFFFFF"}
        />
      </div>
    </aside>
  );
};

export default MobileNav;
