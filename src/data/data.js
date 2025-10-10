import img from '/src/assets/car.png';
import logo from "/src/assets/vehicle.png";

const projects = [
  {
    id: 1,
    title: "Vehicle Info App",
    description:
      " A responsive app that fetches and displays detailed vehicle information using registration numbers, ensuring fast access and accurate data presentation.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image:img,
    logo: logo,
    live: "https://drive.google.com/file/d/1SWCQyHJOCwLOu88HCWVGF_y4JKtGMKKH/view?usp=sharing",
  },
  {
    id: 2,
    title: "Spotify clone",
    description:
      "A Spotify clone with music playback, playlists, and responsive UI built to deliver smooth streaming and modern user experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image:"https://cdn.prod.website-files.com/64830736e7f43d491d70ef30/64bfca46b1569eeda774403d_64a57f4512ee9430c0ea7cf8_64a2cf43ee15ed8228d585a0_Business_Model_Examples-Spotify.webp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
    live: "https://noiseraft.onrender.com",
  },
  {
    id: 3,
    title: "Youtube Clone",
    description:
      "A YouTube-inspired web app with video streaming, search, channels, and responsive UI, built to replicate core platform features.",
    technologies: ["React", "API Integration", "CSS3"],
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAH2RS9mgy682GWPmY9Fo6mOnx1xUnfyOO2A&s",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/YouTube_social_red_circle_%282024%29.svg/2048px-YouTube_social_red_circle_%282024%29.svg.png",
    live: "https://username-portfolio.vercel.app/",
  },
  {
    id: 4,
    title: "Task Manager",
    description:
      "A task management web app for organizing daily work with drag-and-drop functionality and dark mode.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    image:img,
    logo: logo,
    live: "https://username-portfolio.vercel.app/",
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "A full-featured blogging platform with markdown support, authentication, and comment system.",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    image:img,
    logo: logo,
    live: "https://username-portfolio.vercel.app/",
  },
  {
    id: 6,
    title: "Chat Application",
    description:
      "A real-time chat application built with Socket.io and Node.js, supporting group and private messaging.",
    technologies: ["React", "Node.js", "Socket.io"],
    image:img,
    logo: logo,
    live: "https://username-portfolio.vercel.app/",
  },
];

export default projects