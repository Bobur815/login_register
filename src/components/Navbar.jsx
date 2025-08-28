import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button, Stack, IconButton, Box } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import logoSite from "/logo-dark (1).svg";
import darkLogo from '/logo.svg'

const links = [
    { to: "/", label: "Asosiy" },
    { to: "/about", label: "Biz haqimizda" },
    { to: "/services", label: "Kurslar" },
    { to: "/contact", label: "Bog'lanish" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { mode, setMode } = useColorScheme();

    if (!mode) {
        return null;
    }

    const baseLink =
        "px-3 py-2 text-md font-medium transition-colors !text-[--mui-palette-text-primary]";
    const active =
        "!text-blue-500 border-b border-[--mui-palette-primary-main]";
    const inactive =
        "hover:!text-blue-500 dark:!text-[--mui-palette-primary-main]";


    const toggleMode = () => setMode(mode === "dark" ? "light" : "dark");

    return (
        <Box component="header"
            sx={{
                position: "sticky",
                top: 0,
                zIndex: (t) => t.zIndex.appBar,
                bgcolor: "background.paper",
                color: "text.primary",
                borderBottom: 1,
                borderColor: "divider",
                backdropFilter: "blur(8px)",
                width: "100%",
            }}>
            <nav className="container ">
                <div className="flex h-16 items-center justify-between">
                    {/* Brand */}
                    <Link to="/" className="shrink-0">
                        {mode === 'light' ? <img src={logoSite} alt="logo" className="h-8 w-auto" /> :
                            <img src={darkLogo} alt="logo" className="h-8 w-auto" />
                        }
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

                    {/* Desktop actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <IconButton onClick={toggleMode} color="inherit" aria-label="Toggle dark mode">
                            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                        </IconButton>
                        <Button variant="contained" component={Link} to="/auth">
                            Kirish
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
                            <IconButton onClick={toggleMode} color="inherit" aria-label="Toggle dark mode" sx={{ mr: 1 }}>
                                {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                            </IconButton>
                            <Button fullWidth variant="contained" component={Link} to="/auth" onClick={() => setOpen(false)}>
                                Kirish
                            </Button>
                        </Stack>
                    </div>
                )}
            </nav>
        </Box>
    );
}

