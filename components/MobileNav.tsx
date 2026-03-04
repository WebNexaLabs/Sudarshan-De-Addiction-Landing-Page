"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
    const pathname = usePathname();

    const tabs = [
        { name: "Home", href: "/", icon: "home" },
        { name: "Gallery", href: "/gallery", icon: "photo_library" },
        { name: "Call", href: "tel:+919804188668", icon: "call", isAction: true },
        { name: "Location", href: "/contact", icon: "location_on" },
        { name: "Menu", href: "/about", icon: "clinical_notes" },
    ];

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-primary/5 pb-safe animate-fade-in">
            <div className="flex items-center justify-around h-20 px-4">
                {tabs.map((tab) => {
                    const isActive = pathname === tab.href;

                    if (tab.isAction) {
                        return (
                            <a
                                key={tab.name}
                                href={tab.href}
                                aria-label="Call Helpline Now"
                                className="relative flex flex-col items-center justify-center -translate-y-6"
                            >
                                <div className="h-16 w-16 rounded-full bg-primary text-white shadow-2xl shadow-primary/40 flex items-center justify-center active:scale-90 transition-all border-4 border-white dark:border-background-dark">
                                    <span className="material-symbols-outlined text-3xl font-bold">call</span>
                                </div>
                                <span className="absolute -bottom-6 text-[10px] font-black uppercase text-primary tracking-widest">Intake</span>
                            </a>
                        );
                    }

                    return (
                        <Link
                            key={tab.name}
                            href={tab.href}
                            className={`flex flex-col items-center justify-center gap-1 transition-all active:scale-95 ${isActive ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}
                        >
                            <span className={`material-symbols-outlined text-2xl ${isActive ? 'fill-1 font-bold' : ''}`}>
                                {tab.icon}
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-tighter">{tab.name}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
