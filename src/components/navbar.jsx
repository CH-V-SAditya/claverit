import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navlinks = [
        {
            href: "#features",
            text: "Features",
        },
        {
            href: "#ecosystem",
            text: "Ecosystem",
        },
        {
            href: "#impact",
            text: "Impact",
        },
        {
            href: "#contact",
            text: "Contact",
        },
    ];
    return (
        <>
            <motion.nav className="sticky top-0 z-50 flex items-center justify-between w-full h-18 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <a href="#!" className="text-2xl font-bold text-white tracking-tight">
                    <span className="text-green-500">Cla</span>verit
                </a>

                <div className="hidden lg:flex items-center gap-8 transition duration-500">
                    {navlinks.map((link) => (
                        <a key={link.href} href={link.href} className="hover:text-green-400 transition text-sm font-medium">
                            {link.text}
                        </a>
                    ))}
                </div>

                <div className="hidden lg:block space-x-3">
                    <button className="px-6 py-2 bg-green-600 hover:bg-green-700 transition text-white rounded-md active:scale-95 text-sm font-medium">
                        Get started
                    </button>
                    <button className="hover:bg-slate-300/20 transition px-6 py-2 border border-slate-400 rounded-md active:scale-95 text-sm font-medium">
                        Login
                    </button>
                </div>
                <button onClick={() => setIsMenuOpen(true)} className="lg:hidden active:scale-90 transition">
                    <MenuIcon className="size-6.5" />
                </button>
            </motion.nav>
            <div className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 lg:hidden transition-transform duration-400 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {navlinks.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="hover:text-green-400 transition">
                        {link.text}
                    </a>
                ))}
                <button onClick={() => setIsMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex">
                    <XIcon />
                </button>
            </div>
        </>
    );
}
