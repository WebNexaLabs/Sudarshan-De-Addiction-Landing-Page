import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0a1118] text-slate-400 pt-24 pb-32 md:pb-24 px-6 md:px-20 border-t border-slate-800/50">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-16 border-b border-slate-800/50 pb-16">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-8 items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined font-black">health_and_safety</span>
                            </div>
                            <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Sudarshan</h2>
                        </div>
                        <p className="text-sm leading-relaxed font-medium max-w-xs text-slate-500">
                            A beacon of clinical excellence and research-driven recovery in Kharagpur. Restoring lives since 2020.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: "verified", label: "Verification", href: "/about#team" },
                                { icon: "mail", label: "Email", href: "mailto:support@sudarshanrecovery.org" },
                                { icon: "call", label: "Call", href: "tel:+919804188668" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="h-12 w-12 rounded-2xl border border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all group scale-90 md:scale-100"
                                >
                                    <span className="material-symbols-outlined text-xl">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation - 2 columns on all devices for better density */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-2 gap-8 md:gap-12">
                            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                <h6 className="text-[10px] text-white font-black uppercase tracking-[0.3em] mb-8 opacity-50">Discovery</h6>
                                <ul className="flex flex-col gap-6 text-[13px] font-bold text-slate-300">
                                    <li><Link className="hover:text-primary transition-colors block py-1" href="/treatments">Our Programs</Link></li>
                                    <li><Link className="hover:text-primary transition-colors block py-1" href="/admission">Admission</Link></li>
                                    <li><Link className="hover:text-primary transition-colors block py-1" href="/gallery">Facility Tour</Link></li>
                                    <li><Link className="hover:text-primary transition-colors block py-1" href="/contact">Get Help</Link></li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                <h6 className="text-[10px] text-white font-black uppercase tracking-[0.3em] mb-8 opacity-50">Institutional</h6>
                                <ul className="flex flex-col gap-6 text-[13px] font-bold text-slate-300">
                                    <li><Link className="hover:text-primary transition-colors block py-1" href="/about">About Center</Link></li>
                                    <li><Link className="hover:text-primary transition-colors block py-1" href="/vision">Medical Vision</Link></li>
                                    <li><Link className="hover:text-primary transition-colors block py-1" href="/about#team">Clinical Team</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Compliance Section */}
                    <div className="flex flex-col gap-8 items-center md:items-start text-center md:text-left">
                        <h6 className="text-[10px] text-white font-black uppercase tracking-[0.3em] mb-2 opacity-50">Accreditation</h6>
                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex items-center justify-center md:justify-start gap-4 group bg-white/5 p-4 rounded-2xl border border-white/5">
                                <span className="material-symbols-outlined text-primary font-black">verified</span>
                                <div className="flex flex-col items-start gap-0.5">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">ISO Standard</span>
                                    <span className="text-[11px] font-bold text-slate-200">9001:2015 Facility</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-4 group bg-white/5 p-4 rounded-2xl border border-white/5">
                                <span className="material-symbols-outlined text-primary font-black">account_balance</span>
                                <div className="flex flex-col items-start gap-0.5">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">NITI Aayog</span>
                                    <span className="text-[11px] font-bold text-slate-200">Darpan Verified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12 pt-4">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="flex flex-col items-center md:items-start gap-1">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-1">Authentic Care</p>
                            <p className="text-[11px] font-bold text-slate-400">©{new Date().getFullYear()} Sudarshan Center. KHG-WB.</p>
                        </div>

                        <div className="h-10 w-px bg-slate-800 hidden md:block"></div>

                        <div className="flex items-center gap-4 group">
                            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Designed by</span>
                            <a
                                href="https://webnexalabs.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2 rounded-full bg-primary/5 border border-primary/10 flex items-center gap-3 hover:bg-primary hover:border-primary transition-all duration-500 group"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse group-hover:bg-white transition-colors"></span>
                                <span className="text-[11px] font-black text-white tracking-tighter uppercase">WebNexaLabs</span>
                                <span className="material-symbols-outlined text-xs text-white opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">arrow_outward</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                        <Link className="hover:text-white transition-colors" href="/privacy">Privacy</Link>
                        <span className="h-1 w-1 bg-slate-800 rounded-full"></span>
                        <Link className="hover:text-white transition-colors" href="/terms">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
