import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function VisionPage() {
    const visionDirectives = [
        {
            title: "Bio-Behavioral Rigor",
            desc: "Treating addiction as a complex neurobiological condition requiring multifaceted clinical intervention.",
            icon: "biotech"
        },
        {
            title: "Radical Empathy",
            desc: "Ensuring every resident is treated as a clinical priority with absolute dignity and personalized attention.",
            icon: "clinical_notes"
        },
        {
            title: "Stigma Eradication",
            desc: "Leading community research to shift public perception from moral failure to medical recovery.",
            icon: "verified_user"
        },
        {
            title: "Functional Reintegration",
            desc: "Focusing on sustainable long-term outcomes to ensure every individual returns to society with purpose.",
            icon: "rebase_edit"
        }
    ];

    const roadmap = [
        { year: "2020-2024", goal: "Institutional Foundation", desc: "Establishing a Safe, ISO Certified sanctuary for residential recovery.", icon: "account_balance" },
        { year: "2025-2027", goal: "Clinical Research Phase", desc: "Implementing Mental Mapping and DNA-level behavioral research protocols.", icon: "psychology" },
        { year: "2030 Landmark", goal: "The 10,000 Milestone", desc: "Restoring hope to 10,000+ local families through scientific excellence.", icon: "groups" }
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Hero Vision Section - Deep Clinical Focus */}
                <section className="px-6 md:px-20 py-24 lg:py-32 bg-[#0a1118] relative overflow-hidden">
                    <div className="mx-auto max-w-5xl relative z-10">
                        <div className="flex flex-col items-center text-center gap-10 animate-fade-in">
                            <div className="h-20 w-20 rounded-3xl bg-primary/20 text-primary flex items-center justify-center border border-primary/20 shadow-2xl relative">
                                <span className="material-symbols-outlined text-4xl font-bold animate-pulse">auto_awesome</span>
                                <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-xl scale-125 -z-10"></div>
                            </div>
                            <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] uppercase italic transition-all">
                                The Roadmap to <br /> <span className="text-primary">Radical Recovery</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-slate-400 max-w-2xl font-medium leading-relaxed italic border-l-2 border-primary/30 pl-8">
                                "Sudarshan is not just building a facility; we are engineering a benchmark for how human transformation is achieved through science."
                            </p>
                        </div>
                    </div>
                    {/* Background Detail Patterns */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -mr-96 -mt-96 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -ml-64 -mb-64 opacity-50"></div>
                </section>

                {/* The Manifesto - Integrated Clinical Narrative */}
                <section className="px-6 md:px-20 py-24 bg-white dark:bg-background-dark border-b border-slate-50 dark:border-slate-800">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="flex flex-col gap-10">
                                <span className="text-xs font-black text-primary uppercase tracking-[0.4em]">The Institutional Manifesto</span>
                                <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight italic">
                                    Why We <span className="text-primary italic">Exist</span>
                                </h2>
                                <div className="space-y-8">
                                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                        For too long, addiction has been treated as a peripheral issue. At Sudarshan, we place it at the center of **Medical Innovation**.
                                    </p>
                                    <p className="text-base text-slate-500 dark:text-slate-500 leading-relaxed font-medium">
                                        We envision a future where high-fidelity psychiatric care and compassionate community reintegration are not luxuries, but standards. Our center works at the intersection of neuroscience and soul-level healing.
                                    </p>
                                    <div className="grid grid-cols-2 gap-8 pt-8">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-3xl font-black text-slate-900 dark:text-white">100%</span>
                                            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Medical Compliance</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-3xl font-black text-primary">2.4k+</span>
                                            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Lives Impacted</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white dark:border-slate-800 transition-all duration-700 hover:rotate-1">
                                    <img src="https://images.unsplash.com/photo-1576089172869-4f5f6f315620?q=80&w=2126" alt="Clinical Excellence" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 text-white">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Our Clinical Standard</p>
                                        <p className="text-2xl font-bold italic tracking-tight">"Where recovery meets research."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visionary Roadmap Section */}
                <section className="px-6 md:px-20 py-24 bg-slate-50 dark:bg-background-dark/30 overflow-hidden">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-6 italic">The Road Ahead</h2>
                            <p className="text-slate-500 font-medium max-w-xl mx-auto uppercase text-[10px] tracking-[0.3em]">Strategic Horizons for Sudarshan Recovery</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {/* Decorative Line (Desktop) */}
                            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 dark:bg-slate-700 hidden md:block -z-10"></div>

                            {roadmap.map((item, idx) => (
                                <div key={idx} className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl group transition-all hover:translate-y-[-10px]">
                                    <div className="h-12 w-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-8 group-hover:bg-primary transition-all">
                                        <span className="material-symbols-outlined text-2xl font-bold">{item.icon}</span>
                                    </div>
                                    <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 italic tracking-tight">{item.goal}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                    <div className="mt-8 flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                                        <span className="text-[10px] font-black uppercase text-primary tracking-widest italic">{item.year}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Directives Grid */}
                <section className="px-6 md:px-20 py-24 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {visionDirectives.map((item, idx) => (
                                <div key={idx} className="p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-all group">
                                    <span className="material-symbols-outlined text-4xl text-primary/50 group-hover:text-primary transition-all mb-8 block">{item.icon}</span>
                                    <h4 className="text-lg font-black text-slate-900 dark:text-white mb-4 uppercase italic tracking-tighter">{item.title}</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Vision Statement */}
                <section className="px-6 md:px-20 py-32 bg-slate-900 text-white relative">
                    <div className="mx-auto max-w-4xl text-center">
                        <h3 className="text-3xl md:text-6xl font-black tracking-tighter mb-12 italic border-y border-white/10 py-10 uppercase">
                            Empowering <span className="text-primary italic">Recovery</span> <br /> Shaping the Future
                        </h3>
                        <p className="text-xl md:text-3xl font-medium text-slate-400 leading-tight italic mb-16">
                            "To assist 10,000+ families in achieving permanent sobriety through clinical excellence and community-driven reintegration."
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link href="/contact" className="px-12 py-5 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all text-center">
                                Be part of the mission
                            </Link>
                            <Link href="/admission" className="px-12 py-5 rounded-2xl bg-white text-slate-900 font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all text-center">
                                Start your pathway
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
