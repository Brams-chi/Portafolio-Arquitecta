import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);
    const items = [
        { name: "Inicio", path: "/" },
        { name: "Proyectos destacados", path: "/proyectos-crc" },
        { name: "Portafolio", path: "/sobre-crc" },
        { name: "Contacto", path: "/contacto" },
    ];

    const handleNavigate = () => setOpen(false);

    return (
        <>
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="fixed top-4 right-4 z-50 text-black p-2 rounded-md focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            )}

            <AnimatePresence>
                {open && (
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg border-l p-6 space-y-6 z-40"
                    >
                        <div
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 text-neutral-500 hover:text-black"
                            style={{ cursor: 'pointer'}}
                        >
                            ✕
                        </div>
                        {items.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={handleNavigate}
                                className={cn(
                                    "block px-4 py-2 rounded-lg text-neutral-800 hover:bg-neutral-100 transition",
                                    pathname === item.path && "bg-neutral-200 font-semibold"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}
