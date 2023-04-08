import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LaunchIcon from "@mui/icons-material/Launch";

export default function GreetingsComponent({ user }) {
  const { fName, lName, shortIntro, skills, socialLinks } = user;

  const renderSocialMediaIcon = (type) => {
    switch (type) {
      case "linkedIn":
        return <LinkedInIcon />;
      case "dribble":
        return <SportsBasketballIcon />;
      case "twitter":
        return <TwitterIcon />;
      case "youtube":
        return <YouTubeIcon />;
      case "instagram":
        return <InstagramIcon />;
      default:
        return <LaunchIcon />;
    }
  };

  return (
    <div className="mt-64 flex ">
      <div>
        <span className="flex">
          <p className=" text-2xl lg:text-5xl  antialiased font-bold tracking-wide">
            Hi, I'm {fName} {lName}
          </p>
        </span>

        <span className="flex flex-wrap text-2xl lg:text-5xl pt-4 antialiased font-bold drop-shadow-md">
          <p>I </p>
          <p className="cursor-pointer hover:text-amber-500	transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
            {skills[0]}
          </p>
          <p>, </p>
          <p className="cursor-pointer hover:text-lime-500	transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
            {skills[1]}
          </p>
          <p>, </p>
          <p className="cursor-pointer hover:text-cyan-500	transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
            {skills[2]}
          </p>
          <p> & </p>
          <p className="cursor-pointer hover:text-cyan-500	transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
            {skills[3]}
          </p>
          <p>.</p>
        </span>
        <p className="text-base text-clip pt-8 antialiased tracking-wide whitespace-normal lg:whitespace-pre sm:break-words">
          {shortIntro}
        </p>

        <div className="flex mt-12 gap-x-10 cursor-pointer ">
          {socialLinks?.map((link) => {
            if (link?.isActive)
              return (
                <Link
                  href={link?.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {renderSocialMediaIcon(link?.name)}
                </Link>
              );
          })}
        </div>
      </div>
    </div>
  );
}
