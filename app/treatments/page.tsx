import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Treatments from "@/components/Treatments";

export default function TreatmentsPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative px-6 md:px-20 py-20 lg:py-24 bg-white dark:bg-background-dark overflow-hidden">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col items-center text-center gap-8 lg:gap-10">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary animate-fade-in shadow-sm">
                                <span className="material-symbols-outlined text-sm font-bold">clinical_notes</span>
                                <span className="text-xs font-black uppercase tracking-widest italic">Science-Led Recovery</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black leading-none tracking-tighter text-slate-900 dark:text-white max-w-4xl">
                                Tailored <span className="text-primary">Treatment</span> for Every Pathway
                            </h1>
                            <p className="text-base md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl font-medium">
                                Our medical facility implements internationally recognized protocols combining psychiatric intervention, behavioral therapy, and holistic wellness.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Treatments Component */}
                <Treatments />

                {/* Multidisciplinary Approach Section - Stacked on Mobile */}
                <section id="clinical" className="px-6 md:px-20 py-24 lg:py-32 bg-slate-50 dark:bg-background-dark/50 border-y border-slate-100 dark:border-slate-800">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 lg:mb-10 tracking-tighter leading-tight text-center lg:text-left">Multidisciplinary <br /><span className="text-primary italic">Clinical Excellence</span></h2>
                                <div className="space-y-8 lg:space-y-10">
                                    {[
                                        { title: "Psychiatric Care", desc: "Dual-diagnosis support and medication management supervised by MD Psychiatrists.", icon: "psychology" },
                                        { title: "Cognitive Therapy", desc: "Evidence-based CBT and DBT sessions focused on relapse prevention.", icon: "clinical_notes" },
                                        { title: "Medical Supervision", desc: "24/7 nursing and emergency medical cover for safe physiological detox.", icon: "emergency" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex flex-col sm:flex-row gap-6 group hover:translate-x-2 transition-transform duration-300">
                                            <div className="h-14 w-14 rounded-2xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-primary shrink-0 transition-all group-hover:bg-primary group-hover:text-white mx-auto sm:mx-0">
                                                <span className="material-symbols-outlined text-3xl font-bold">{item.icon}</span>
                                            </div>
                                            <div className="text-center sm:text-left">
                                                <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h5>
                                                <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative order-first lg:order-last">
                                <div className="aspect-square rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 lg:border-8 border-white dark:border-slate-800 rotate-1">
                                    <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070" alt="Clinical Environment" className="h-full w-full object-cover" />
                                </div>
                                <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-left-10 bg-white dark:bg-slate-800 p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 max-w-[200px] lg:max-w-xs animate-bounce hidden sm:block">
                                    <p className="text-[10px] lg:text-sm font-black text-primary uppercase tracking-widest mb-1 lg:mb-2">Standards</p>
                                    <p className="text-sm lg:text-lg font-bold text-slate-900 dark:text-white">Complies with WHO & UNODC guidelines.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clinical CTA */}
                <section className="px-6 md:px-20 py-20 lg:py-24 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="p-8 md:p-20 rounded-[3rem] lg:rounded-[4rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-black mb-6 lg:mb-8 tracking-tighter">Ready to Begin Healing?</h2>
                                <p className="text-base md:text-lg opacity-80 mb-10 lg:mb-12 max-w-2xl mx-auto font-medium">Connect with an intake specialist for a confidential medical triage and assessment.</p>
                                <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/25">
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
