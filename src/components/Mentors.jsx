import React from "react";
import MentorsCarousel from "../components/MentorsCarousel";

const mentors = [
  { 
    id: 1, 
    name: "Nilufar Karimova", 
    title: "Senior Backend (NestJS, Prisma)", 
    avatar: "https://i.pravatar.cc/150?img=47",
    telegram: "https://t.me/nilufar_karimova",
    instagram: "https://instagram.com/nilufar_karimova",
    facebook: "https://facebook.com/nilufar.karimova",
    linkedin: "https://linkedin.com/in/nilufar-karimova",
    github: "https://github.com/nilufar-karimova"
  },
  { 
    id: 2, 
    name: "Jahongir Akhmedov", 
    title: "Full-Stack JS Mentor", 
    avatar: "https://i.pravatar.cc/150?img=32",
    telegram: "https://t.me/jahongir_akhmedov",
    instagram: "https://instagram.com/jahongir_akhmedov",
    facebook: "https://facebook.com/jahongir.akhmedov",
    linkedin: "https://linkedin.com/in/jahongir-akhmedov",
    github: "https://github.com/jahongir-akhmedov"
  },
  { 
    id: 3, 
    name: "Shahnoza Nurmatova", 
    title: "DevOps & Cloud", 
    avatar: "https://i.pravatar.cc/150?img=5",
    telegram: "https://t.me/shahnoza_nurmatova",
    instagram: "https://instagram.com/shahnoza_nurmatova",
    facebook: "https://facebook.com/shahnoza.nurmatova",
    linkedin: "https://linkedin.com/in/shahnoza-nurmatova",
    github: "https://github.com/shahnoza-nurmatova"
  },
  { 
    id: 4, 
    name: "Rustam Ismoilov", 
    title: "Database & Prisma", 
    avatar: "https://i.pravatar.cc/150?img=15",
    telegram: "https://t.me/rustam_ismoilov",
    instagram: "https://instagram.com/rustam_ismoilov",
    facebook: "https://facebook.com/rustam.ismoilov",
    linkedin: "https://linkedin.com/in/rustam-ismoilov",
    github: "https://github.com/rustam-ismoilov"
  },
  { 
    id: 5, 
    name: "Madina Tursunova", 
    title: "Frontend React", 
    avatar: "https://i.pravatar.cc/150?img=20",
    telegram: "https://t.me/madina_tursunova",
    instagram: "https://instagram.com/madina_tursunova",
    facebook: "https://facebook.com/madina.tursunova",
    linkedin: "https://linkedin.com/in/madina-tursunova",
    github: "https://github.com/madina-tursunova"
  },
  { 
    id: 6, 
    name: "Bekzod Alimov", 
    title: "Security", 
    avatar: "https://i.pravatar.cc/150?img=68",
    telegram: "https://t.me/bekzod_alimov",
    instagram: "https://instagram.com/bekzod_alimov",
    facebook: "https://facebook.com/bekzod.alimov",
    linkedin: "https://linkedin.com/in/bekzod-alimov",
    github: "https://github.com/bekzod-alimov"
  },
];


export default function Mentors() {
  return (
    <div className="container mx-auto py-10">
      <MentorsCarousel items={mentors} autoPlay interval={4500} />
    </div>
  );
}
