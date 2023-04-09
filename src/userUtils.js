const KARISHMA = {
  fName: "Karishma",
  lName: "Baat",
  skills: ["hire", "research", "read", "doodle"],
  shortIntro:
    "I am an HR professional who likes to solve human capital issues & the kick of finding the\nright person for the right job.",
  calendyUserName: "curryshma",
  socialLinks: [
    {
      name: "linkedIn",
      url: "https://www.linkedin.com/in/karishmabaat/",
      isActive: true,
    },
    {
      name: "twitter",
      url: "https://twitter.com/curry_shma",
      isActive: true,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/curry.shma/",
      isActive: true,
    },
  ],
};
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
const KUKI = {};
const AJU = {};

export const getUserDetails = (username) => {
  return USERS[username] || {};
};

export const getCalendyUserName = (username) => {
  return USERS[username]?.calendyUserName;
};
