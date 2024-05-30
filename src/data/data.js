import renklar from "../assets/projects/renklar.jpeg";
import wyngo from "../assets/projects/wyngo.png";
import ReactImg from "../assets/react.png";
import ReactNativeImg from "../assets/reactnative.png";
import TailwindImg from "../assets/tailwind.png";
import NodeImg from "../assets/node.png";
import MongoImg from "../assets/mongo.png";
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
      { title: "react native", img: ReactNativeImg },
      { title: "node", img: NodeImg },
      { title: "MongoDb", img: MongoImg },
    ],
  },
  {
    id: 2,
    name: "renklar.dk",
    image: renklar,
    live: "http://renklar.dk",
    date: "April 2024",
    country: "Denmark",
    technologies: [
      { title: "react", img: ReactImg },
      { title: "tailwindcss", img: TailwindImg },
    ],
  },
];
