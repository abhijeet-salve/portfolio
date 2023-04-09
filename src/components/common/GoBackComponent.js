import { useRouter } from "next/router";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

export default function GoBackComponent() {
  const router = useRouter();
  return router?.pathname === "/lets-talk" ? (
    <div
      className="flex flex-1 gap-x-2 cursor-pointer mb-20"
      onClick={() => {
        router?.back();
      }}
    >
      <KeyboardBackspaceRoundedIcon />
      <button type="button" class=" text-base font-semibold leading-6 ">
        back
      </button>
    </div>
  ) : (
    <></>
  );
}
