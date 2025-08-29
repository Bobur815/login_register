import React from "react";
import { Stack } from "@mui/material";
import { ModeButton } from "../components/ModeButton";
import CourseCards from "../components/CourseCards";
import { Button } from "@mui/material";

export default function Courses({ page }) {
  const tags = [
    "Barcha kurslar",
    "Backend",
    "Frontend",
    "Foundation",
    "Mobil",
    "IT Matematika",
    "Buxgalteriya",
  ];

  async function getCourses(filter = {}) {
    const res = await fetch(`/api/course?${filter}`)
    const courses = res.json()
    console.log(courses);


  }
  const [activeTag, setActiveTag] = React.useState(tags[0]);
  const subtitle = page === 'home'
    ? <h1 className="text-5xl font-bold">Ommabop kurslar</h1>
    : <h1 className="text-5xl font-bold self-start">Kurslar</h1>
  
    return (
    <div className="container flex flex-col justify-center items-center gap-6 mt-6">
      {subtitle}
      <p className="text-center text-gray-400 text-[18px] font-bold">
        Kasbga yo&apos;naltirilgan amaliy mashg&apos;ulotlar yordamida tez va
        samarali ravishda mutaxassislar safiga qo&apos;shiling. Har bir
        mashg&apos;ulot sohaning yetakchi mutaxassislari tomonidan eng
        zamonaviy o&apos;quv dasturi asosida tayyorlangan.
      </p>

      <Stack
        direction="row"
        spacing={1.5}
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
      >
        {tags.map((t) => (
          <ModeButton
            key={t}
            active={activeTag === t}
            onClick={() => setActiveTag(t)}
            aria-pressed={activeTag === t}
          >
            {t}
          </ModeButton>
        ))}
      </Stack>
      <CourseCards />
      <Button sx={{ borderRadius: 6, paddingX: 4, color: 'white', paddingY: 1, bgcolor: 'darkblue', fontWeight: 900 }} variant="contained">Ko'proq ko'rish</Button>
    </div>
  );
}
