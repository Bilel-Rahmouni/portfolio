import renklar from "../assets/projects/renklar.jpeg";
import renklarPro from "../assets/projects/renklarpro.png";
import dustbusters from "../assets/projects/dustbusters.png";
import iconmaker from "../assets/projects/iconmaker.png";
import wyngo from "../assets/projects/wyngo.png";
import ReactImg from "../assets/react.png";
import ReactNativeImg from "../assets/reactnative.png";
import Rnpaper1 from "../assets/rnpaper1.png";
import TailwindImg from "../assets/tailwind.png";
import NodeImg from "../assets/node.png";
import MongoImg from "../assets/mongo.png";
import Aws from "../assets/aws.png";
import Stripe from "../assets/stripe.png";
export const data = [
  {
    id: 1,
    name: "wyngo",
    image: wyngo,
    article: "wyngoarticle",
    live: "https://play.google.com/store/apps/details?id=com.foregroundserviceapplication",
    date: "January 2024",
    country: "Tunisia",
    technologies: [
      { title: "React native", img: ReactNativeImg },
      { title: "Rn paper", img: Rnpaper1 },
      { title: "Node", img: NodeImg },
      { title: "MongoDb", img: MongoImg },
      { title: "Aws", img: Aws },
    ],
  },
  {
    id: 2,
    name: "wyngo Business Suite",
    image: wyngo,
    article: "wyngoBusinessarticle",
    live: "https://wyngo.co",
    date: "January 2024",
    country: "Tunisia",
    technologies: [
      { title: "React", img: ReactImg },
      { title: "Node", img: NodeImg },
      { title: "MongoDb", img: MongoImg },
      { title: "Aws", img: Aws },
    ],
  },
  {
    id: 3,
    name: "renklar.dk",
    image: renklar,
    live: "http://renklar.dk",
    date: "April 2024",
    country: "Denmark",
    technologies: [
      { title: "React", img: ReactImg },
      { title: "Tailwindcss", img: TailwindImg },
    ],
  },
  {
    id: 4,
    name: "renklar.pro",
    image: renklarPro,
    live: "http://renklar.pro",
    date: "January 2025",
    country: "Denmark",
    technologies: [
      { title: "React", img: ReactImg },
      { title: "Tailwindcss", img: TailwindImg },
      { title: "Node", img: NodeImg },
      { title: "MongoDb", img: MongoImg },
    ],
  },
  {
    id: 5,
    name: "dustbusters",
    image: dustbusters,
    live: "http://dustbusters.dk",
    date: "January 2025",
    country: "Denmark",
    technologies: [
      { title: "React", img: ReactImg },
      { title: "Tailwindcss", img: TailwindImg },
    ],
  },
  {
    id: 5,
    name: "iconmaker",
    image: iconmaker,
    live: "http://iconmaker.pro",
    date: "January 2025",
    country: "world",
    technologies: [
      { title: "React", img: ReactImg },
      { title: "Tailwindcss", img: TailwindImg },
      { title: "Node", img: NodeImg },
      { title: "MongoDb", img: MongoImg },
      { title: "Aws", img: Aws },
      { title: "Stripe", img: Stripe },
    ],
  },
];
