// import Image from "next/image";
// import myDp from "../../assets/svgs/me.svg";
import { useRouter } from "next/router";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import ThemeToggle from "./ThemeToggle";

export default function HeaderComponent({ user }) {
  const router = useRouter();
  const { calendyUserName } = user;

  return (
    <header>
      <nav className=" flex pt-8  cursor-pointer" aria-label="Global">
        <div className="flex flex-1">
          {/* <a href="/">
            <Image src={myDp} height={48} width={48} alt="Abhijeet Salve" />
          </a> */}
        </div>

        <div className="flex gap-x-10 md:gap-x-12 absolute right-4 lg:right-20">
          {router?.pathname !== "/lets-talk" && (
            <div
              className="flex"
              onClick={() => {
                router.push({
                  pathname: "/lets-talk",
                  query: {
                    userName: calendyUserName,
                    type: "",
                    showDetails: true,
                    showCookies: true,
                  },
                });
              }}
            >
              <CalendarDaysIcon className="h-6 w-6" />
            </div>
          )}
          <div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
