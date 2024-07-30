import Link from "next/link";
import Button from "@/components/button";
import { navItems } from "@/data";
import { useAuthStatus } from "@/hooks/useAuthStatus";
import { logOutUser } from "@/app/actions/auth";
import { useRouter } from "next/navigation";

const MobileNav = () => {
  const { isLoggedIn } = useAuthStatus();
  const router = useRouter();

  async function logout() {
    await logOutUser();
    // Clear session
    sessionStorage.removeItem("token");
    router.push("/auth/login");
  }
  return (
    <aside className="z-50 absolute top-[0] left-0 px-6 w-full bg-white h-[90dvh] bg- shadow flex flex-col gap-y-14 lg:hidden">
      <div className="flex flex-col gap-y-8 mt-[120px]">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm 
                text-secondaryColor hover:text-primaryColor-200"
          >
            {item.name}
          </Link>
        ))}
      </div>
      {!isLoggedIn ? (
        <div className="flex flex-col gap-y-4">
          <Link
            href="/auth/login"
            className="text-primaryColor text-sm font-medium"
          >
            Log in
          </Link>
          <Button
            text="Get Started"
            bgColor={"bg-primaryColor"}
            textColor={"text-white"}
            stroke={"#FFFFFF"}
          />
        </div>
      ) : (
        <button
          onClick={logout}
          className="w-fit py-3 px-10 bg-primaryColor text-white text-xs rounded-md "
        >
          Logout
        </button>
      )}
    </aside>
  );
};

export default MobileNav;
