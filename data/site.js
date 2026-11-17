// All your personal information lives in this one file.
// Edit the text here and the whole website updates.

export const site = {
  logo: "Ayman",
  name: "Umme Ayman Trina",
  role: "Frontend & React Developer",
  tagline:

  "I build responsive, user-friendly web applications from the interface to the database, using  TypeScript, Next.js, React, Node.js and MongoDB, backed by real experience running websites in the media industry.",

  photo: "/photo.png",
  resume: "/resume.pdf",

  email: "umme.12.ayman@gmail.com",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/Ummeaymanwebdev",
  linkedin: "https://www.linkedin.com/in/ayman-trina/",

  about: [
  
  "I studied Computer Science and Engineering at the University of Asia Pacific, then spent more than three years at Nexus Television as a Digital Executive. There I designed and launched the channel’s website on WordPress and kept it running every day, from daily publishing to SEO, caching and security.",
  "Working on a live website taught me how much a fast, clear interface matters to real visitors, so I moved into modern frontend development. Today I build with React, Next.js, TypeScript and Tailwind CSS. My recent projects include a Bangla market price tracker, a workout planner and a developer stack builder.",
  "I enjoy turning ideas into clean, responsive interfaces, and I like work where I can see real people use what I built. I am always learning, and I am now looking for a Frontend or React developer role where I can grow with a team and build products people use.",
],
  
  hobbies: ["Reading", "Cooking", "Travelling"], 

  // level is a number from 0 to 100. Set it honestly.
  skills: [
    {
      title: "Frontend",
      items: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 75 },
        { name: "Next.js", level: 70 },
        { name: "Typescript", level: 70 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Backend and Database",
      items: [
        { name: "Node.js", level: 60 },
        { name: "Express.js", level: 55 },
        { name: "MongoDB", level: 55 },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git and GitHub", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Vercel", level: 75 },
        { name: "Figma", level: 60 },
        { name: "WordPress", level: 85 },
      ],
    },
  ],

  experience: {
    role: "Digital Executive",
    company: "Nexus Television",
    period: "April 2022 to November 2025",
    points: [
      "Designed and developed the official Nexus Television website using WordPress, from setup to launch",
      "Customized the theme and layout to match the channel’s branding and make it responsive on mobile and desktop",
      "Configured plugins for SEO, security, caching and video embedding to improve performance and reliability",
      "Managed daily content publishing, including news, videos and program schedules, through the WordPress dashboard",
      "Maintained the website by handling updates, backups and troubleshooting",
    ],
    wordpressTags: [
      "Theme customization",
      "Responsive layout",
      "SEO",
      "Security",
      "Caching and speed",
      "Video embedding",
      "Daily publishing",
      "Backups and updates",
    ],
  },

  education: {
    degree: "B.Sc. in Computer Science and Engineering",
    institute: "University of Asia Pacific",
    period: "2012 to 2016",
    cgpa: "3.02",
  },

  // Put your screenshots in public/projects and change the image paths.
  projects: [
    {
      slug: "market-price",
      name: "Market-Price (বাজার দর)",
      image: "/market-price.png",
      stack: ["Next.js", "Tailwind CSS", "DaisyUI", "BetterAuth", "react-hot-toast"],
      summary: "Bangla web app to track daily prices of essential grocery items.",
      description:
        "A responsive Bangla web app to track today’s market prices of rice, lentils, oil, vegetables, fish, meat, eggs and spices across different bazars in Bangladesh. Visitors can see which prices rose or fell, browse by category and sort the list, and log in to open full product details.",
      features: [
        "Live price ticker and price movers with rise and fall percentages",
        "Category pages with sorting and Bengali numerals",
        "Email, Google and GitHub login with BetterAuth",
        "Protected product details pages for logged-in users",
      ],
      live: "https://market-price-q18w.vercel.app/",
      github: "https://github.com/Ummeaymanwebdev/Market-price",
      challenges: [
        "Setting up protected routes together with Google and GitHub login",
        "Showing prices and percentages in Bengali numerals",
      ],
      future: [
        "Real-time prices from a live API",
        "Price history charts for each product",
        "A favorites list for frequently bought items",
      ],
    },
    {
      slug: "fit-log",
      name: "FitLog",
      image: "/fit-log.png",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      summary: "Dark-themed workout library to build and save a daily plan.",
      description:
        "FitLog is a dark, no-nonsense gym companion. Browse a library of lifts, lock your favourites into today’s plan, save others for later, and watch your daily workout totals add up.",
      features: [
        "Library of 12 workouts with sorting by duration, calories and rating",
        "Workout details page for every lift",
        "My Plan page with Today’s Plan and Saved tabs",
        "Live plan and saved counters in the navbar",
      ],
      live: "https://fitlog-assmt6.vercel.app/",
      github: "https://github.com/Ummeaymanwebdev/Fitlog-assmt6",
      challenges: [
        "Sharing the Plan and Saved state across the whole app",
        "Sorting the library by more than one criterion",
      ],
      future: [
        "Logging sets and reps for every workout",
        "Weekly progress charts",
        "User accounts to keep plans across devices",
      ],
    },
    {
      slug: "dev-stack",
      name: "Dev Stack",
     image: "/dev-stack.png",
      stack: ["React", "TypeScript", "Tailwind CSS v4", "Vite", "react-toastify"],
      summary: "Tool explorer to build a personal developer tech stack.",
      description:
        "A tool explorer where developers browse technology cards and add the ones they use to a personal Your Stack sidebar.",
      features: [
        "Technology cards loaded from JSON data",
        "Add and remove tools in a Your Stack sidebar",
        "Duplicate prevention with toast notifications",
      ],
      live: "https://my-react-assignment5.vercel.app/",
      github: "https://github.com/Ummeaymanwebdev/Dev-Stack-Builder",
      challenges: [
        "Preventing duplicate entries in the stack",
        "Keeping the cards and the sidebar in sync",
      ],
      future: [
        "Saving and sharing a stack",
        "Category filters and search",
        "More tools and detailed tool pages",
      ],
    },
  ],
};
