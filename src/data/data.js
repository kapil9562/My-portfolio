import img from '/src/assets/car.png';
import logo from "/src/assets/vehicle.png";

const projects = [
  {
    id: 1,
    title: "Avenza – E-Commerce Platform",
    description:
      "Responsive e-commerce app with product catalog, shopping cart, authentication, and secure payments. Built with React, Node.js, MongoDB, Stripe API.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/avenzaPreImg.png",
    logo: "/avenza2.png",
    live: "https://myavenza.onrender.com/",
  },
  {
    id: 2,
    title: "Vehicle Info App",
    description:
      " A responsive app that fetches and displays detailed vehicle information using registration numbers, ensuring fast access and accurate data presentation.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: img,
    logo: logo,
    live: "https://drive.google.com/uc?export=download&id=1SWCQyHJOCwLOu88HCWVGF_y4JKtGMKKH",
  }
];

export default projects