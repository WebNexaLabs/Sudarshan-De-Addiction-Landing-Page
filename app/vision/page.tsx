import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function VisionPage() {
    const visionDirectives = [
        {
            title: "Scientific Rigor",
            desc: "Implementing bio-psycho-social models that treat addiction as a multifaceted clinical condition rather than a moral failing.",
            icon: "biotech"
        },
        {
            title: "Compassionate Care",
            desc: "Ensuring every resident is treated with the highest level of dignity, respect, and personalized attention throughout their journey.",
            icon: "favorite"
        },
        {
            title: "Zero-Stigma Environment",
            desc: "Fostering an institutional culture where recovery is celebrated and the individual's worth is reinforced daily.",
            icon: "verified_user"
        },
        {
            title: "Sustainable Integration",
            desc: "Focusing beyond detoxification to ensure every individual returns to society with a clear purpose and robust support system.",
            icon: "rebase_edit"
        }
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Hero Vision Section */}
                <section className="px-6 md:px-20 py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
                    <div className="mx-auto max-w-5xl relative z-10">
                        <div className="flex flex-col items-center text-center gap-8 animate-fade-in">
                            <div className="h-20 w-20 rounded-3xl bg-primary/20 text-primary flex items-center justify-center border border-primary/20 shadow-2xl">
                                <span className="material-symbols-outlined text-4xl font-bold">visibility</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-tight">
                                Our Vision for <br /> <span className="text-primary italic">Global Excellence</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed italic">
                                "To become a benchmark for clinical addiction treatment—where research-driven protocols meet the profound human need for transformation."
                            </p>
                        </div>
                    </div>
                    {/* Background Graphic */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
                    <div className="absolute -bottom-24 -left-24 h-96 w-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
                </section>

                {/* The Manifesto Section */}
                <section className="px-6 md:px-20 py-24 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                            <div className="flex flex-col gap-10">
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                                    The Sudarshan <br className="hidden md:block" /> Manifesto
                                </h2>
                                <div className="space-y-8">
                                    <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 relative group">
                                        <div className="absolute top-0 left-0 h-full w-2 bg-primary rounded-l-[2.5rem]"></div>
                                        <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed italic">
                                            We envision a world where addiction is no longer a life sentence. Our vision is to provide a sterile yet nurturing sanctuary where the neuro-biology of the patient finds its path to healing.
                                        </p>
                                    </div>
                                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                        At Sudarshan De-Addiction and Research Center, we believe that the current standard of care is just the beginning. Our long-term vision involves establishing a global scientific standard for addiction recovery that integrates advanced clinical research with traditional empathetic methodologies.
                                    </p>
                                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                        We are building more than a facility; we are building a movement that recognizes every human life's inherent value and its capacity for radical positive change.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {visionDirectives.map((item, idx) => (
                                    <div key={idx} className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 shadow-xl border border-slate-50 dark:border-slate-800 hover:translate-y-[-8px] transition-all group">
                                        <div className="h-14 w-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                            <span className="material-symbols-outlined text-3xl font-bold">{item.icon}</span>
                                        </div>
                                        <h4 className="text-lg font-black text-slate-900 dark:text-white mb-4 tracking-tight">{item.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Vision Statement */}
                <section className="px-6 md:px-20 py-32 bg-slate-50 dark:bg-background-dark/50 border-y border-slate-100 dark:border-slate-800">
                    <div className="mx-auto max-w-4xl text-center">
                        <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-10">Our 2030 Goal</h3>
                        <p className="text-xl md:text-3xl font-medium text-primary leading-tight italic mb-12">
                            "To assist 10,000+ families in achieving permanent sobriety through clinical excellence and community-driven reintegration."
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link href="/contact" className="px-10 py-5 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all text-center">
                                Join Our Mission
                            </Link>
                            <Link href="/about" className="px-10 py-5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all text-center">
                                Back to About Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
