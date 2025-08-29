import React from 'react'
import CommentsCard from './CommentsCard';

const commentsByStudents = [
  {
    id: 1,
    name: "Dilshod Karimov",
    text: "Kurs juda ham tushunarli, o‘qituvchi yaxshi tushuntiradi 👍",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating:5,
    course: "JavaScript Asoslari",
    date: "12/03/2025",
  },
  {
    id: 2,
    name: "Madina Tursunova",
    text: "Darslar amaliyotga asoslangan, menga juda foydali bo‘ldi 👌",
    avatar: "https://i.pravatar.cc/150?img=20",
    rating:5,
    course: "React JS",
    date: "28/03/2025",
  },
  {
    id: 3,
    name: "Rustam Ismoilov",
    text: "Avval tushunmagan narsalarim endi aniq bo‘ldi, rahmat!",
    avatar: "https://i.pravatar.cc/150?img=15",
    rating:5,
    course: "Node.js & Express",
    date: "05/04/2025",
  },
  {
    id: 4,
    name: "Shahnoza Nurmatova",
    text: "Backend bo‘yicha katta tajriba oldim, loyiha qilishni ham o‘rgandim 🚀",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating:5,
    course: "NestJS & Prisma",
    date: "10/04/2025",
  },
  {
    id: 5,
    name: "Jahongir Akhmedov",
    text: "Har bir mavzu ketma-ketlikda yaxshi tushuntirilgan. Tavsiya qilaman!",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating:5,
    course: "Full-Stack JS",
    date: "17/04/2025",
  },
  {
    id: 6,
    name: "Nilufar Karimova",
    text: "Mentorlar juda professional, darslar interaktiv bo‘ldi 😊",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating:5,
    course: "Database & SQL",
    date: "22/04/2025",
  },
];


function Comments() {

    return (
        <div className='flex flex-col justify-between gap-4 items-center mt-12'>
            <h1 className='text-5xl font-bold'>Izohlar</h1>
            <p className='text-[20px] text-gray-500'>O’quvchilarimiz tomonidan qoldirilgan izohlar</p>
            <CommentsCard comments={commentsByStudents}/> 
        </div>
    )
}

export default Comments