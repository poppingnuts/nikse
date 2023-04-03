import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  shopify1,
  carrent,
  jobit,
  tripguide,
  threejs,
  wordpress,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "App Devlopment",
    icon: mobile,
  },
  {
    title: "Digital Marketing",
    icon: backend,
  },
  {
    title: "Graphic Desigining",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "wordpress",
    icon: wordpress,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "shopify1",
    icon: shopify1,
  },
  // {
  //   name: "python",
  //   icon: python,
  // },
];

const experiences = [
  {
    title: "Graphic-Design",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Step-1",
    points: [
      "Creative designs - Professional graphic designing services using the latest tools and technologies",
      "Custom graphic design - Tailored to your brand's identity and business needs with cutting-edge software like Adobe Creative Cloud",
      "Affordable graphic design - High-quality solutions with the latest tools and technologies like Canva and Figma",
      "Modern designs - Stay up-to-date with the latest design trends and techniques to enhance your brand's visual presence",
      "Expert graphic designers - Your partner for visual success with experience in creating engaging designs for print and digital media.",
    ],
  },
  {
    title: "Web-Devlopment",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Step-2",
    points: [
      "Expertly crafted websites - Professional website development services using the latest web development technologies like HTML5, CSS3, and JavaScript",
      "Custom web development - Tailored to your business needs with cutting-edge web development technologies like Angular, React, and Node.js",
      "Affordable website design and development - High-quality solutions with the latest web development technologies like PHP, Laravel, and WordPress",
      "Mobile-optimized websites - Reach customers on any device with the latest responsive design technologies like Bootstrap and Foundation",
      "Expert web developers - Your partner for online success with the latest web development technologies like AWS, Firebase, and Docker",
    ],
  },
  {
    title: "App-Devlopment",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Step-3",
    points: [
      "Expertly crafted mobile apps - Professional app development services using the latest technologies",
      "Custom app development - Tailored to your business needs with cutting-edge technologies like React Native, Flutter, and Xamarin",
      "Affordable app design and development - High-quality solutions with the latest technologies like Java, Kotlin, and Swift",
      "Mobile-optimized apps - Reach users on any device with the latest responsive design technologies like Ionic and NativeScript",
      "Expert app developers - Your partner for mobile success with the latest technologies like AWS, Firebase, and Docker",
    ],
  },
  {
    title: "Digital Marketing",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Step-4",
    points: [
      "Effective strategies - Professional digital marketing services using the latest techniques and technologies",
      "Custom marketing plans - Tailored to your business goals and target audience with cutting-edge software like Google Analytics and SEMrush",
      "Affordable marketing solutions - High-quality campaigns with the latest tools and technologies like Facebook Ads and Google AdWords",
      "Data-driven marketing - Maximize ROI with insights from analytics and A/B testing for continuous optimization",
      "Expert digital marketers - Your partner for online success with experience in SEO, PPC, social media, and email marketing",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
