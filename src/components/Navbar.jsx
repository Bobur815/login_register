import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import logoSite from "../../public/logo-dark (1).svg";

const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const baseLink = "px-3 py-2 text-md font-medium transition";
    const active = "text-blue-600 border-b border-blue-600";
    const inactive = "text-black hover:text-blue-600";

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-black/10">
            <nav className="container ">
                <div className="flex h-16 items-center justify-between">
                    {/* Brand */}
                    <Link to="/" className="shrink-0">
                        <img src={logoSite} alt="logo" className="h-8 w-auto" />
                    </Link>

                    {/* Desktop nav */}
                    <ul className="hidden md:flex items-center gap-2">
                        {links.map((l) => (
                            <li key={l.to}>
                                <NavLink
                                    to={l.to}
                                    end={l.to === "/"}
                                    className={({ isActive }) =>
                                        [baseLink, isActive ? active : inactive].join(" ")
                                    }
                                >
                                    {l.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop actions (visible ≥ md) */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            variant="text"
                            sx={{ color: "text.primary" }}
                            component={Link}
                            to="/auth"
                        >
                            Log in
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ bgcolor: "primary.main", ":hover": { bgcolor: "primary.dark" } }}
                            component={Link}
                            to="/auth"
                        >
                            Register
                        </Button>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-black/5 focus:outline-none"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen((s) => !s)}
                    >
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                            {open ? (
                                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" />
                            ) : (
                                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div className="md:hidden pb-4 space-y-2">
                        <ul className="space-y-1">
                            {links.map((l) => (
                                <li key={l.to}>
                                    <NavLink
                                        to={l.to}
                                        end={l.to === "/"}
                                        className={({ isActive }) =>
                                            ["block", baseLink, isActive ? active : inactive].join(" ")
                                        }
                                        onClick={() => setOpen(false)}
                                    >
                                        {l.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <Stack spacing={1.5} direction="row">
                            <Button
                                fullWidth
                                variant="outlined"
                                component={Link}
                                to="/auth"
                                onClick={() => setOpen(false)}
                            >
                                Log in
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ bgcolor: "primary.main", ":hover": { bgcolor: "primary.dark" } }}
                                component={Link}
                                to="/auth"
                                onClick={() => setOpen(false)}
                            >
                                Register
                            </Button>
                        </Stack>
                    </div>
                )}
            </nav>
        </header>
    );
}
