import { useRouter } from "next/router";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import ThemeToggle from "./ThemeToggle";

export default function HeaderComponent({ user }) {
  const router = useRouter();
  const { calendyUserName } = user;

  return (
    <div>
      <div className=" flex justify-end pt-8  cursor-pointer">
        <div className="flex gap-x-10 md:gap-x-12 ">
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
      </div>
    </div>
  );
}
