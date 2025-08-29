import React, { useEffect, useMemo, useRef, useState } from "react";
import quotes from '/icons8-quotes-60.png'

export default function CommentsCarousel({
    comments = [],
    autoPlay = false,
    interval = 4000,
    className = "",
}) {
    const containerRef = useRef(null);
    const hoverRef = useRef(false);
    const [perView, setPerView] = useState(1);
    const [page, setPage] = useState(0);

    // Compute pages based on perView
    const pages = useMemo(() => {
        const pv = Math.max(1, perView);
        return Math.max(1, Math.ceil(comments.length / pv));
    }, [comments.length, perView]);

    // Responsive perView (1 / 2 / 3)
    useEffect(() => {
        const computePerView = () =>
            window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

        const onResize = () => {
            const pv = computePerView();
            setPerView(pv);
            setPage((prev) => Math.min(prev, Math.max(0, Math.ceil(comments.length / pv) - 1)));
        };

        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [comments.length]);

    // Scroll helpers
    const goTo = (n) => {
        const el = containerRef.current;
        if (!el) return;
        const clamped = Math.max(0, Math.min(n, pages - 1));
        el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
        setPage(clamped);
    };
    const next = () => goTo(page + 1);
    const prev = () => goTo(page - 1);

    // Sync page with scroll position
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

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [page, pages]);

    // Autoplay (pauses on hover)
    useEffect(() => {
        if (!autoPlay || pages <= 1) return;
        const id = setInterval(() => {
            if (!hoverRef.current) {
                goTo(page + 1 >= pages ? 0 : page + 1);
            }
        }, interval);
        return () => clearInterval(id);
    }, [autoPlay, interval, page, pages]);

    if (!comments || comments.length === 0) {
        return (
            <section className={`w-full ${className}`}>
                <div className="text-center text-sm text-slate-500">
                    No comments to show.
                </div>
            </section>
        );
    }

    return (
        <section className={`w-full container ${className}`}>
            {/* Header + Controls */}
            <div className=" flex items-center justify-between mb-6 px-2 sm:px-0">
                <div className="hidden sm:flex gap-3">
                    <button
                        onClick={prev}
                        disabled={page === 0}
                        className="rounded-full p-2 bg-slate-900 cursor-pointer text-white dark:bg-white dark:text-slate-900 shadow disabled:opacity-40"
                        aria-label="Previous"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={next}
                        disabled={page >= pages - 1}
                        className="rounded-full p-2 bg-slate-900 cursor-pointer text-white dark:bg-white dark:text-slate-900 shadow disabled:opacity-40"
                        aria-label="Next"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>

            {/* Carousel viewport */}
            <div
                ref={containerRef}
                onMouseEnter={() => (hoverRef.current = true)}
                onMouseLeave={() => (hoverRef.current = false)}
                className="relative overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
                tabIndex={0}
                aria-label="Comments Carousel"
            >
                {/* hide webkit scrollbar */}
                <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>

                {/* Edge gradients */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent dark:from-slate-900"></div>
                <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent dark:from-slate-900"></div>

                {/* Slides container (snap by page width) */}
                <div className="no-scrollbar flex gap-6 px-2 sm:px-0 snap-x snap-mandatory h-[320px]">
                    {Array.from({ length: pages }).map((_, pageIndex) => {
                        const start = pageIndex * perView;
                        const visible = comments.slice(start, start + perView);
                        return (
                            <div
                                key={pageIndex}
                                className="snap-start flex-none h-full w-full rounded-2xl overflow-hidden"
                            >
                                <div className="grid h-full gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {visible.map((c) => (
                                        <CommentCard key={c.id} comment={c} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">
                {Array.from({ length: pages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`h-2 rounded-full transition-all ${i === page
                            ? "w-6 bg-slate-900 dark:bg-white"
                            : "w-2 bg-slate-300 dark:bg-slate-600"
                            }`}
                        aria-label={`Go to page ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

function CommentCard({ comment }) {
    const { name, text, avatar, course, rating = 0, date } = comment;

    return (
        <article className="flex-col h-full w-full rounded-2xl ring-1 ring-slate-200/60 dark:ring-white/10 bg-white dark:bg-slate-900 shadow-sm p-5 flex justify-between">
            {/* Quote icon */}
            <img src={quotes} alt="" className="w-[80px] h-[80px]" />

            {/* Comment text */}
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                “{text}”
            </p>

            {/* Rating stars */}
            <div className="flex items-center gap-1 text-yellow-400 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                        key={i}
                        className={`h-4 w-4 ${i < rating ? "fill-yellow-400" : "fill-gray-300 dark:fill-gray-600"
                            }`}
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.175L12 18.897l-7.336 3.856 1.402-8.175L.132 9.211l8.2-1.193z" />
                    </svg>
                ))}
            </div>
            
            {/* Student info */}
            <div className="flex gap-3 items-center mt-3">
                <img
                    src={avatar}
                    alt={name}
                    className="h-14 w-14 rounded-full object-cover ring-1 ring-slate-200/60 dark:ring-white/10"
                />


                <div className="flex flex-col">
                    <h3 className="text-base font-semibold">{name}</h3>
                    <p className="text-xs text-slate-500">{course}</p>


                    <span className="text-xs text-slate-500 mt-1">• {date}</span>
                </div>
            </div>
        </article>
    );
}


function ChevronLeft() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5">
            <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
    );
}
function ChevronRight() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5">
            <path fill="currentColor" d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
    );
}
