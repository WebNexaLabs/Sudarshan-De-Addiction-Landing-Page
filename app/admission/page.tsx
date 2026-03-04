import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdmissionPage() {
    const steps = [
        { id: 1, title: "Clinical Intake Triage", desc: "First 24 hours focusing on physiological stabilization.", color: "primary" },
        { id: 2, title: "Psychological Mapping", desc: "Mapping neuro-behavioral patterns for recovery.", color: "secondary" },
        { id: 3, title: "Clinical Residence", desc: "Structured therapeutic stay with 24/7 care.", color: "blue-600" }
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Hero section */}
                <section className="px-6 md:px-20 py-20 lg:py-24 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary mb-8 lg:mb-10 translate-y-[-10px] animate-fade-in shadow-sm">
                            <span className="material-symbols-outlined text-sm font-bold">clinical_notes</span>
                            <span className="text-xs font-black uppercase tracking-widest italic">Standard Admission Protocol</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tighter mb-8 lg:mb-10">
                            A Clinical Pathway <br className="hidden md:block" /><span className="text-primary italic">To New Beginnings</span>
                        </h1>
                        <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
                            Our systematic admission process ensures every patient receives the exact medical prioritization and psychological care required from the moment they arrive.
                        </p>
                    </div>
                </section>

                {/* The Timeline Sweep - Stacked on Mobile */}
                <section className="px-6 md:px-20 py-20 lg:py-32 bg-slate-50 dark:bg-background-dark/50">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                            {steps.map((step) => (
                                <div key={step.id} className="group p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 hover:translate-y-[-10px] transition-all duration-500">
                                    <div className={`h-16 w-16 rounded-2xl flex items-center justify-center text-3xl font-black text-white mb-8 shadow-2xl shadow-${step.color}/30 bg-${step.color} group-hover:scale-110 transition-transform`}>
                                        {step.id}
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">{step.title}</h4>
                                    <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Critical Guidelines Banner - Specialized for Mobile */}
                <section className="px-6 md:px-20 py-20 lg:py-32 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                            {/* Medical Essentials */}
                            <div className="bg-secondary/5 rounded-[2.5rem] lg:rounded-[3rem] p-8 md:p-16 border border-secondary/10 hover:border-secondary/30 transition-all group">
                                <h3 className="text-3xl font-black mb-8 lg:mb-10 flex items-center gap-4 text-slate-900 dark:text-white tracking-tighter">
                                    <span className="material-symbols-outlined text-secondary text-4xl font-bold">check_circle</span>
                                    Clinical Essentials
                                </h3>
                                <ul className="space-y-5 lg:space-y-6">
                                    {["Identity Documentation", "Medical Prescriptions", "Minimal Comfort Wear", "Clinical History Pack"].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-center font-bold text-base lg:text-lg text-slate-600 dark:text-slate-400 group-hover:translate-x-2 transition-transform">
                                            <div className="h-2 w-2 rounded-full bg-secondary shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Prohibited Items */}
                            <div className="bg-red-50 dark:bg-red-950/10 rounded-[2.5rem] lg:rounded-[3rem] p-8 md:p-16 border border-red-100 dark:border-red-900/20 hover:border-red-600/30 transition-all group">
                                <h3 className="text-3xl font-black mb-8 lg:mb-10 flex items-center gap-4 text-slate-900 dark:text-white tracking-tighter">
                                    <span className="material-symbols-outlined text-red-600 text-4xl font-bold">dangerous</span>
                                    Prohibited Items
                                </h3>
                                <ul className="space-y-5 lg:space-y-6">
                                    {["Portable Electronics", "Unauthorized Meds", "Valuable Jewelry", "Cash > ₹5,000"].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-center font-bold text-base lg:text-lg text-slate-600 dark:text-slate-400 group-hover:translate-x-2 transition-transform">
                                            <div className="h-2 w-2 rounded-full bg-red-600 shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
