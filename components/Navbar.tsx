import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Treatments", href: "/treatments" },
        { name: "About Us", href: "/about" },
        { name: "Admission", href: "/admission" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/5 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl px-6 md:px-20 py-4 transition-all duration-300">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform shrink-0" aria-label="Sudarshan Recovery Center Home">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/25">
                        <span className="material-symbols-outlined font-bold">health_and_safety</span>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-black leading-none tracking-tighter text-slate-900 dark:text-white">Sudarshan</h2>
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.25em]">Recovery Center</span>
                    </div>
                </Link>

                {/* Links hidden on Mobile - moved to Bottom Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-black text-slate-600 dark:text-slate-300 hover:text-primary transition-colors group py-2"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    {/* CTAs hidden on small mobile - icons handled by Bottom Nav */}
                    <a
                        href="tel:+919804188668"
                        aria-label="Call our helpline"
                        className="hidden sm:flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-black text-white transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                    >
                        Call Now
                    </a>
                    <button
                        aria-label="Get emergency psychiatric help"
                        className="hidden sm:flex items-center justify-center rounded-xl bg-red-600 px-5 py-2.5 text-sm font-black text-white shadow-xl shadow-red-600/20 transition-all hover:bg-red-700 hover:scale-105 active:scale-95"
                    >
                        Emergency
                    </button>
                </div>
            </div>
        </header>
    );
}
