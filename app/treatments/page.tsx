import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Treatments from "@/components/Treatments";

export default function TreatmentsPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative px-6 md:px-20 py-24 bg-white dark:bg-background-dark overflow-hidden">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col items-center text-center gap-10">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary animate-fade-in">
                                <span className="material-symbols-outlined text-sm">clinical_notes</span>
                                <span className="text-xs font-black uppercase tracking-widest italic">Science-Led Recovery</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black leading-none tracking-tighter text-slate-900 dark:text-white max-w-4xl">
                                Tailored <span className="text-primary">Treatment</span> for Every Pathway
                            </h1>
                            <p className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl font-medium">
                                Our medical facility implements internationally recognized protocols combining psychiatric intervention, behavioral therapy, and holistic wellness.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Treatments Component */}
                <Treatments />

                {/* Multidisciplinary Approach Section */}
                <section className="px-6 md:px-20 py-32 bg-slate-50 dark:bg-background-dark/50 border-y border-slate-100 dark:border-slate-800">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">Multidisciplinary <br /><span className="text-primary italic">Clinical Excellence</span></h2>
                                <div className="space-y-10">
                                    {[
                                        { title: "Psychiatric Care", desc: "Dual-diagnosis support and medication management supervised by MD Psychiatrists.", icon: "psychology" },
                                        { title: "Cognitive Therapy", desc: "Evidence-based CBT and DBT sessions focused on relapse prevention.", icon: "clinical_notes" },
                                        { title: "Medical Supervision", desc: "24/7 nursing and emergency medical cover for safe physiological detox.", icon: "emergency" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-6 group hover:translate-x-2 transition-transform duration-300">
                                            <div className="h-14 w-14 rounded-2xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-primary shrink-0 transition-all group-hover:bg-primary group-hover:text-white">
                                                <span className="material-symbols-outlined text-3xl font-bold">{item.icon}</span>
                                            </div>
                                            <div>
                                                <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h5>
                                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 rotate-2">
                                    <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070" alt="Clinical Environment" className="h-full w-full object-cover" />
                                </div>
                                <div className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 max-w-xs animate-bounce">
                                    <p className="text-sm font-black text-primary uppercase tracking-widest mb-2">Accredited Standard</p>
                                    <p className="text-lg font-bold text-slate-900 dark:text-white">Complies with WHO & UNODC treatment guidelines.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clinical CTA */}
                <section className="px-6 md:px-20 py-24 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="p-12 md:p-20 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter">Ready to Begin Healing?</h2>
                                <p className="text-lg opacity-80 mb-12 max-w-2xl mx-auto font-medium">Connect with an intake specialist for a confidential medical triage and assessment.</p>
                                <button className="px-12 py-5 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/25">
                                    Consult a Specialist
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
