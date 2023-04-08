import type { AppProps } from "next/app";
import Header from "../components/HeaderComponent";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";

const ABHIJEET = {
  fName: "Abhijeet",
  lName: "Salve",
  skills: ["design", "code", "sing", "play guitar"],
  shortIntro:
    "I'm a full stack frontend developer who likes to build seamless and beautiful user experiences\nby harnessing my development and design skills.",
  calendyUserName: "abhijeetsalve",
  socialLinks: [
    {
      name: "linkedIn",
      url: "https://in.linkedin.com/in/abhijeet-salve-25850a84",
      isActive: true,
    },
    {
      name: "dribble",
      url: "https://dribbble.com/_abhijeetsalve",
      isActive: true,
    },
    {
      name: "twitter",
      url: "https://twitter.com/_abhijeetsalve",
      isActive: true,
    },
    {
      name: "youtube",
      url: "https://www.youtube.com/channel/UCUjeh9W8J8LHP1qWcsCGNqA",
      isActive: true,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/abhijeet.sol/",
      isActive: true,
    },
  ],
  technicalSkills: [
    "ReactJs",
    "React Native",
    "NextJs",
    "Strapi",
    "Redux",
    "Apollo GraphQL",
    "REST API Integrations",
    "Solana web3.js ",
    "Design System",
    "Wireframing",
    "Figma",
    "tailwind css",
    "CSS3",
    "SaSS",
    "JavaScript",
    "HTML5",
  ],
};

const KARISHMA = {
  fName: "Karishma",
  lName: "Baat",
  skills: ["hire", "research", "read", "explore"],
  shortIntro:
    "End-to-End Recruitment, Candidate Lifecycle Management, Stakeholder Management, \nDiversity and Inclusion.",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <div className=" mx-6 sm:mx-24 lg:mx-32 xl:mx-80 whitespace-pre font-Poppins">
          <Header user={ABHIJEET} />
          <Component {...pageProps} user={ABHIJEET} />
        </div>
      </ThemeProvider>
    </>
  );
}
