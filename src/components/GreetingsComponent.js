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
    <div className=" xl:lg:md:mt-64 mt-48 flex">
      <div>
        {fName && lName && (
          <span className="flex">
            <p className=" text-2xl lg:text-5xl  antialiased font-bold tracking-wide">
              Hi, I'm {fName} {lName}
            </p>
          </span>
        )}

        {skills && skills.length > 0 && (
          <>
            <span className="flex flex-wrap text-2xl lg:text-5xl pt-4 antialiased font-bold drop-shadow-md">
              <p>I </p>
              {skills.map((skill, index) => (
                <>
                  {index !== 0 && index !== skills.length - 1 && (
                    <span>, </span>
                  )}
                  {index === skills.length - 1 && <span> & </span>}
                  <span>
                    <p
                      className={`cursor-pointer hover:text-${
                        index % 3 === 0
                          ? "lime"
                          : index % 3 === 1
                          ? "amber"
                          : "cyan"
                      }-500	transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none `}
                    >
                      {skill}
                    </p>
                  </span>
                </>
              ))}
              <p>.</p>
            </span>
          </>
        )}
        <p className="text-base text-clip pt-8 antialiased tracking-wide whitespace-normal lg:whitespace-pre sm:break-words">
          {shortIntro}
        </p>

        <div className="flex mt-12 gap-x-10 cursor-pointer ">
          {socialLinks?.map((link) => {
            if (link?.isActive)
              return (
                <Link
                  key={link?.url}
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
