import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background-dark text-slate-400 py-16 px-6 md:px-20">
            <div className="mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
                                <span className="material-symbols-outlined text-sm">health_and_safety</span>
                            </div>
                            <h2 className="text-lg font-bold text-white">Sudarshan</h2>
                        </div>
                        <p className="text-sm leading-relaxed">
                            A leading non-profit medical rehab facility dedicated to restoring lives through evidence-based practices.
                        </p>
                        <div className="flex gap-4">
                            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
                            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
                            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">call</span></a>
                        </div>
                    </div>
                    <div>
                        <h6 className="text-white font-bold mb-6">Treatments</h6>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li><Link className="hover:text-primary transition-colors" href="/treatments">Alcohol Addiction</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/treatments">Drug Rehab</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/treatments">Mental Health</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/treatments">Aftercare Programs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-white font-bold mb-6">Organization</h6>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li><Link className="hover:text-primary transition-colors" href="/about">About Us</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/about">Director's Desk</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/career">Careers</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Research Papers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-white font-bold mb-6">Trust & Compliance</h6>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-xs text-primary">verified</span>
                                <span className="text-xs">ISO 9001:2015 Registered</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-xs text-primary">verified</span>
                                <span className="text-xs">NITI Aayog (Darpan) ID: WB/2021/0285432</span>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-2 italic leading-tight">
                                Disclaimer: Sudarshan is a registered NGO. All treatment processes comply with national health guidelines.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs">© 2024 Sudarshan De-Addiction and Research Center. All rights reserved.</p>
                    <div className="flex gap-8 text-xs font-medium uppercase tracking-widest">
                        <Link className="hover:text-white transition-colors" href="/privacy">Privacy Policy</Link>
                        <Link className="hover:text-white transition-colors" href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
