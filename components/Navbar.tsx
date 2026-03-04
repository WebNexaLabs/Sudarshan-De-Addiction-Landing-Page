import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-6 md:px-20 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined">health_and_safety</span>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold leading-none tracking-tight text-slate-900 dark:text-white">Sudarshan</h2>
                        <span className="text-[10px] font-extrabold text-primary uppercase tracking-[0.2em]">Recovery Center</span>
                    </div>
                </Link>
                <nav className="hidden lg:flex items-center gap-8">
                    <Link href="/" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">Home</Link>
                    <Link href="/treatments" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">Treatments</Link>
                    <Link href="/about" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">About Us</Link>
                    <Link href="/admission" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">Admission</Link>
                    <Link href="/contact" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">Contact</Link>
                </nav>
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <a href="tel:+919804188668" className="hidden sm:flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25">
                        Call Now
                    </a>
                    <button className="flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-all hover:bg-red-700 hover:shadow-red-700/30">
                        Emergency Help
                    </button>
                </div>
            </div>
        </header>
    );
}
