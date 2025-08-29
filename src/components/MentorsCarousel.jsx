import React, { useEffect, useMemo, useRef, useState } from "react";
import facebookIcon from '/icons8-facebook-100.png'
import githubIcon from '/icons8-github-64.png'
import telegramIcon from '/icons8-telegram-100.png'
import inLogo from '/icons8-linkedin-32.png'
import instagramIcon from '/icons8-instagram-logo-50.png'

export default function MentorsCarousel({
  items = [],
  autoPlay = false,
  interval = 4000,
  className = "",
}) {
  const containerRef = useRef(null);
  const [perView, setPerView] = useState(1);
  const [page, setPage] = useState(0);
  const pages = useMemo(
    () => Math.max(1, Math.ceil(items.length / perView)),
    [items.length, perView]
  );

  useEffect(() => {
    const computePerView = () => (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    const update = () => {
      const pv = computePerView();
      setPerView(pv);
      setPage((prev) => Math.min(prev, Math.max(0, Math.ceil(items.length / pv) - 1)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [items.length]);

  const goTo = (n) => {
    const el = containerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(n, pages - 1));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    setPage(clamped);
  };
  const next = () => goTo(page + 1);
  const prev = () => goTo(page - 1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const current = Math.round(el.scrollLeft / el.clientWidth);
      if (current !== page) setPage(current);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [page]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [page, pages]);

  const hoverRef = useRef(false);
  useEffect(() => {
    if (!autoPlay || pages <= 1) return;
    const id = setInterval(() => {
      if (!hoverRef.current) goTo(page + 1 >= pages ? 0 : page + 1);
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, page, pages]);

  if (!items || items.length === 0) {
    return (
      <section className={`w-full ${className}`}>
        <div className="text-center text-sm text-slate-500">No mentors to show (items prop is empty).</div>
      </section>
    );
  }

  return (
    <section className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-6 px-2 sm:px-0">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Tajribali Mentorlar</h2>
          <p className="text-slate-500 mt-1">Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan</p>
        </div>
        <div className="hidden sm:flex gap-3">
          <button onClick={prev} disabled={page === 0} className="rounded-full cursor-pointer p-2 bg-slate-600 shadow disabled:opacity-50" aria-label="Previous">
            <ChevronLeft />
          </button>
          <button onClick={next} disabled={page >= pages - 1} className="rounded-full cursor-pointer p-2 bg-slate-600 shadow disabled:opacity-50" aria-label="Next">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
        className="relative overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
        tabIndex={0}
        aria-label="Mentors Carousel"
      >
        <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent dark:from-slate-900"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent dark:from-slate-900"></div>

        <div className="no-scrollbar flex gap-6 px-2 sm:px-0 snap-x snap-mandatory h-[400px]">
          {items.map((m) => (
            <article key={m.id} className="snap-start flex-none h-full w-full rounded-2xl overflow-hidden md:w-1/2 lg:w-1/3">
              <MentorCard mentor={m} />
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: Math.max(1, Math.ceil(items.length / perView)) }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full transition-all ${i === page ? "w-6 bg-slate-900 dark:bg-white" : "bg-slate-300"}`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function MentorCard({ mentor }) {
  const { name, title, avatar, telegram, instagram, facebook, linkedin, github } = mentor;

  return (
    <div className="relative group bg-white dark:bg-slate-900 rounded-2xl shadow-md overflow-hidden">
      {/* Mentor Image */}
      <img
        src={avatar}
        alt={name}
        className="h-full w-full object-cover rounded-2xl"
      />

      {/* Overlay Info */}
      <div className="
        absolute bottom-0 left-0 w-full 
        translate-y-full group-hover:translate-y-0 
        transition-transform duration-500 ease-in-out
        bg-gradient-to-t from-black/90 via-black/70 to-transparent
        text-white p-5 flex flex-col gap-3 
      ">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-white">{title}</p>

        <div className="flex gap-4 mt-2">
          <a href={telegram} target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" className="logoIMG " />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="logoIMG " />
          </a>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="logoIMG " />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="logoIMG " />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img src={inLogo} alt="LinkedIn" className="logoIMG" />
          </a>
        </div>
      </div>
    </div>
  );
}


function ChevronLeft() { return (<svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>); }
function ChevronRight() { return (<svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" /></svg>); }
