const USERS = {
  curryshma: {
    customEmoji: "🌻",
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
  },
  abhijeet: {
    customEmoji: "💤",
    fName: "Abhijeet",
    lName: "Salve",
    skills: ["design", "code", "sing", "play guitar"],
    shortIntro:
      "I'm a full stack frontend developer who likes to build seamless and beautiful user experiences\nby harnessing my development and design skills. I also created this platform.",
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
  },
  kuki: {},
  ajinkya: {
    customEmoji: "🖥️",
    fName: "Ajinkya",
    lName: "Salve",
    skills: [
      "code",
      "lead engineering teams",
      "build products",
      "am an ex-founder",
    ],
    shortIntro:
      "I've Built/developed multiple products from scratch as a founding member of 0-1 startups and\nI have a rich Experience in not only designing but also building \ncomplex, robust, scalable, and clean architectures/frameworks",
    calendyUserName: "",
    socialLinks: [
      {
        name: "linkedIn",
        url: "https://www.linkedin.com/in/ajinkya-salve-2840ab55",
        isActive: true,
      },
      {
        name: "twitter",
        url: "https://twitter.com/9dogen",
        isActive: true,
      },
    ],
  },
  jash: {
    customEmoji: "💸",
    fName: "Jash",
    lName: "Ravaya",
    skills: ["do finance", "research", "regulate", "play cricket"],
    shortIntro:
      "I am Chartered Accountant by profession who likes to learn macro and micro things going in and around the market.\nBeing a finance enthusiast, like to understand the reports of the company.",
    calendyUserName: "",
    socialLinks: [
      {
        name: "linkedIn",
        url: "https://www.linkedin.com/in/ca-jash-ravaya-4a206a190",
        isActive: true,
      },
      {
        name: "twitter",
        url: "https://twitter.com/jash_ravaya",
        isActive: true,
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/ca_jash_ravaya",
        isActive: true,
      },
    ],
  },
  ayushi: {
    customEmoji: "👩‍🏫",
    fName: "Ayushi",
    lName: "Dani",
    skills: ["teach", "dance", "read", "I'am cool 😛"],
    shortIntro:
      "I am a teacher who is currently teaching in a primary school. My job is to help the children accomplish and identify their skills.",
    calendyUserName: "",
    socialLinks: [
      {
        name: "instagram",
        url: "https://instagram.com/dani_ayushi",
        isActive: true,
      },
    ],
  },
  kaushal: {
    customEmoji: "💵",
    fName: "Kaushal",
    lName: "Baat",
    skills: ["do risk analysis", "underwriting", "handle team", "mortgage "],
    shortIntro:
      "I am an Mortgage professional with 10 years of experience and 2 years of team handling experience.",
    calendyUserName: "kaushalbaat",
    socialLinks: [
      {
        name: "linkedIn",
        url: "https://www.linkedin.com/in/kaushal-baat-411a0576",
        isActive: true,
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/kaushal_baat/",
        isActive: true,
      },
    ],
  },
  akshat: {
    customEmoji: "🍺",
    fName: "Akshat",
    lName: "Pasbola",
    skills: ["mix", "produce", "master", "drink beer"],
    shortIntro:
      "I'm a beer-loving mixing and mastering wizard who can turn your tracks into gold while turning up with his favorite brews 😉",
    calendyUserName: "",
    socialLinks: [
      {
        name: "instagram",
        url: "https://www.instagram.com/akshatpasbola/",
        isActive: true,
      },
      {
        name: "linkedIn",
        url: "https://www.linkedin.com/in/akshat-pasbola-b20044112/",
        isActive: true,
      },
      {
        name: "twitter",
        url: "https://twitter.com/akshat_pasbola",
        isActive: true,
      },
    ],
  },
};

export const getUserDetails = (username) => {
  return USERS[username] || {};
};

export const getCalendyUserName = (username) => {
  return USERS[username]?.calendyUserName;
};

export const getCustomEmoji = (username) => {
  return USERS[username]?.customEmoji ?? "🌟";
};
