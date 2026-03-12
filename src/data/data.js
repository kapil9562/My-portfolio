import img from '/src/assets/car.png';
import logo from "/src/assets/vehicle.png";

const projects = [
  {
    id: 1,
    title: "Avenza – E-Commerce",
    description:
      "Responsive e-commerce app with product catalog, shopping cart, authentication, and secure payments. Built with React, Node.js, MongoDB, Stripe API.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/avenzaPreImg.png",
    live: "https://myavenza.onrender.com/",
    tools: [
      "React",
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "MongoDB"
    ],
    year: "2026"
  },
  {
    id: 2,
    title: "Vehicle Info App",
    description:
      " A responsive app that fetches and displays detailed vehicle information using registration numbers, ensuring fast access and accurate data presentation.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: img,
    live: "https://drive.google.com/uc?export=download&id=1SWCQyHJOCwLOu88HCWVGF_y4JKtGMKKH",
    tools: [
      "ReactNative",
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "SQL"
    ],
    year: "2025"
  }
];

export default projects