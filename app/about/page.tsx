import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    const missionPillars = [
        { title: "Clinical Support", desc: "Medically supervised detoxification and stabilization.", icon: "emergency" },
        { title: "Mental Mapping", desc: "Structured therapy programs addressing neuro-behavioral needs.", icon: "psychology" },
        { title: "Relapse Control", desc: "Advanced aftercare and long-term sobriety protocols.", icon: "verified" },
        { title: "Clinical Research", desc: "Evidence-based community awareness and health research.", icon: "biotech" },
        { title: "Family Support", desc: "Structured family guidance and systematic clinical counseling.", icon: "groups" }
    ];

    const coreTeam = [
        "Sharmistha Dhar", "Sangeeta Goswami", "S. Sanjay Rao",
        "Neelayan Dhar", "Uttiyaman Satra", "Preetam Sarkar", "Indranil Mukherjee"
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Institutional Introduction */}
                <section className="px-6 md:px-20 py-20 lg:py-24 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <div className="flex flex-col gap-10 animate-fade-in">
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary border border-primary/10 shadow-sm">
                                        <span className="material-symbols-outlined text-sm font-bold">account_balance</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest italic">Registered NGO • West Bengal</span>
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-secondary border border-secondary/10 shadow-sm">
                                        <span className="material-symbols-outlined text-sm font-bold">verified</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest italic">ISO 9001:2015 Certified</span>
                                    </div>
                                </div>
                                <h1 className="text-4xl md:text-7xl font-black leading-none tracking-tighter text-slate-900 dark:text-white">
                                    Restoring <span className="text-primary">Dignity</span>, Finding Hope
                                </h1>
                                <div className="space-y-6">
                                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                        Located in the heart of Kharagpur, West Bengal, **Sudarshan De-Addiction and Research Center** is an institutional sanctuary dedicated to evidence-based rehabilitation.
                                    </p>
                                    <p className="text-lg text-slate-500 dark:text-slate-500 leading-relaxed font-medium">
                                        We operate on the foundational belief that addiction is a complex clinical condition affecting physiological, mental, and emotional equilibria. Our programs merge medical supervision with international standards.
                                    </p>
                                </div>
                                <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center gap-8">
                                    <img src="https://unodc.org/favicon.ico" className="h-10 grayscale opacity-50" alt="UNODC" onerror="this.style.display='none'" />
                                    <p className="text-sm font-bold text-slate-600 dark:text-slate-400">
                                        Following international ethical guidelines provided by <span className="text-primary font-black uppercase tracking-tighter">The Colombo Plan</span> in collaboration with <span className="text-slate-900 dark:text-white font-black">UNODC</span>.
                                    </p>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl transition-all duration-700 relative z-10 border-8 border-white dark:border-slate-800">
                                    <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053" alt="Institutional Facility" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                </div>
                                {/* Technical Seal Backdrop */}
                                <div className="absolute -top-10 -right-10 h-64 w-64 bg-primary/5 rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-10 -left-10 h-64 w-64 bg-secondary/5 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Vision Manifesto */}
                <section className="px-6 md:px-20 py-24 bg-slate-900 text-white relative overflow-hidden">
                    <div className="mx-auto max-w-4xl text-center relative z-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-12">Institutional Vision</h2>
                        <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter mb-12 italic border-l-4 border-primary/30 pl-8 md:pl-12 py-4">
                            "To become a center of excellence in clinical addiction treatment—where compassionate care meets research-based reintegration."
                        </h3>
                        <p className="text-lg md:text-xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
                            We aim to create a sterile, safe, and nurturing environment where individuals regain cognitive control and return to society with confidence and purpose.
                        </p>
                    </div>
                    {/* Decorative Circuit Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" /></pattern></defs><rect width="100%" height="100%" fill="url(#dots)" /></svg>
                    </div>
                </section>

                {/* Our Mission Pillars */}
                <section className="px-6 md:px-20 py-32 bg-slate-50 dark:bg-background-dark/50 border-y border-slate-100 dark:border-slate-800">
                    <div className="mx-auto max-w-7xl text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-tight">The Pillars of <br /><span className="text-primary italic">Our Mission</span></h2>
                    </div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {missionPillars.map((pillar, idx) => (
                                <div key={idx} className="p-10 rounded-[3rem] bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 hover:translate-y-[-8px] transition-all group">
                                    <div className="h-14 w-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-3xl font-bold">{pillar.icon}</span>
                                    </div>
                                    <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">{pillar.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{pillar.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Oversight Committee */}
                <section className="px-6 md:px-20 py-32 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 uppercase">Our Core Team</h2>
                            <p className="text-lg text-slate-500 font-medium max-w-3xl mx-auto">
                                The institutional strength of Sudarshan Center lies in our collective governance and shared ethical mission.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {coreTeam.map((member, idx) => (
                                <div key={idx} className="text-center group p-6 rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                    <div className="h-20 w-20 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-black text-2xl mb-6 shadow-inner group-hover:scale-110 transition-transform border border-slate-200 dark:border-slate-700">
                                        {member.split(" ").map(n => n[0]).join("")}
                                    </div>
                                    <h5 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight mb-1">{member}</h5>
                                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Committee Member</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Commitment Seal */}
                <section className="px-6 md:px-20 py-32 bg-slate-50 dark:bg-background-dark/30">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="inline-block h-24 w-24 rounded-full border-4 border-primary/20 flex items-center justify-center text-primary mb-12 opacity-50">
                            <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" /></svg>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-10">Our Commitment</h2>
                        <p className="text-lg md:text-2xl font-medium leading-relaxed italic text-slate-600 dark:text-slate-400 mb-12">
                            "At Sudarshan Research Center, we believe that recovery is more than clinical—it's possible. Our center remains committed to creating the supportive environment where transformation begins."
                        </p>
                        <button className="px-12 py-5 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-sm shadow-2xl shadow-primary/20 hover:scale-105 transition-all active:scale-95">
                            Connect with our team
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
