import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background-dark text-slate-400 pt-20 pb-32 md:pb-20 px-6 md:px-20 border-t border-slate-800/50">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 border-b border-slate-800 pb-16">
                    <div className="flex flex-col gap-8 items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined">health_and_safety</span>
                            </div>
                            <h2 className="text-xl font-black text-white tracking-tighter">Sudarshan</h2>
                        </div>
                        <p className="text-sm leading-relaxed font-medium max-w-xs">
                            Premium medical de-addiction facility dedicated to evidence-based recovery and clinical excellence since 2020.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: "verified", label: "Certificates/Team", href: "/about#team" },
                                { icon: "mail", label: "Email Support", href: "mailto:support@sudarshanrecovery.org" },
                                { icon: "call", label: "Call Center", href: "tel:+919804188668" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="h-10 w-10 rounded-xl border border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all group"
                                >
                                    <span className="material-symbols-outlined text-lg">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="text-center md:text-left lg:col-span-2">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h6 className="text-white font-black uppercase tracking-widest text-xs mb-8">Navigation</h6>
                                <ul className="flex flex-col gap-5 text-sm font-medium">
                                    <li><Link className="hover:text-primary transition-colors" href="/treatments">Our Programs</Link></li>
                                    <li><Link className="hover:text-primary transition-colors" href="/admission">Admission</Link></li>
                                    <li><Link className="hover:text-primary transition-colors" href="/gallery">Gallery</Link></li>
                                    <li><Link className="hover:text-primary transition-colors" href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h6 className="text-white font-black uppercase tracking-widest text-xs mb-8">Institutional</h6>
                                <ul className="flex flex-col gap-5 text-sm font-medium">
                                    <li><Link className="hover:text-primary transition-colors" href="/about">About Us</Link></li>
                                    <li><Link className="hover:text-primary transition-colors" href="/vision">Our Vision</Link></li>
                                    <li><Link className="hover:text-primary transition-colors" href="/about#team">Medical Team</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h6 className="text-white font-black uppercase tracking-widest text-xs mb-8">Trust & Compliance</h6>
                        <div className="flex flex-col gap-5 items-center md:items-start">
                            <div className="flex items-center gap-3 group">
                                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-xs">verified</span>
                                </div>
                                <span className="text-xs font-bold text-slate-300">ISO 9001:2015 Facility</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-xs">account_balance</span>
                                </div>
                                <span className="text-xs font-bold text-slate-300">NITI Aayog Darpan Verified</span>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-4 italic leading-relaxed border-l-2 border-slate-800 pl-4 text-left">
                                Registered NGO. Compliance with Ministry of Health & Family Welfare guidelines.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 pt-10 border-t border-slate-800/30">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                        <div className="flex flex-col items-center md:items-start gap-1">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Official Facility</p>
                            <p className="text-xs font-bold text-slate-300">© {new Date().getFullYear()} Sudarshan Center.</p>
                        </div>
                        <div className="h-8 w-px bg-slate-800 hidden md:block"></div>
                        <div className="flex items-center gap-3 group">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Designed by</span>
                            <a
                                href="https://webnexalabs.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500 cursor-pointer"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-[11px] font-black text-white tracking-tighter">WebNexaLabs</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[9px] font-black uppercase tracking-[0.2em] items-center">
                        <Link className="hover:text-primary transition-colors" href="/privacy">Privacy Protocol</Link>
                        <div className="h-3 w-px bg-slate-800 hidden sm:block"></div>
                        <Link className="hover:text-primary transition-colors" href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
