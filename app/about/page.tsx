import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    const values = [
        { title: "Empathetic Care", desc: "Treating every individual with the dignity and respect they deserve.", icon: "favorite" },
        { title: "Clinical Rigor", desc: "Implementing only proven, science-led medical protocols.", icon: "biotech" },
        { title: "Research Driven", desc: "Innovating treatment through continuous mental health research.", icon: "menu_book" }
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Hero section */}
                <section className="px-6 md:px-20 py-24 bg-white dark:bg-background-dark overflow-hidden">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="flex flex-col gap-8 animate-fade-in">
                                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary">
                                    <span className="material-symbols-outlined text-sm">verified</span>
                                    <span className="text-xs font-black uppercase tracking-widest italic">Since 2020 • Paschim Medinipur</span>
                                </div>
                                <h1 className="text-4xl md:text-7xl font-black leading-none tracking-tighter text-slate-900 dark:text-white">
                                    Leading the Science <br /><span className="text-primary italic">of Recovery</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                    Sudarshan De-Addiction and Research Center provides a sanctuary for transformation, merging advanced psychiatry with holistic humanitarian care.
                                </p>
                            </div>
                            <div className="relative group">
                                <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 dark:border-slate-800">
                                    <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053" alt="Sudarshan Facility" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="h-20 w-20 rounded-full bg-primary/95 flex items-center justify-center text-white shadow-2xl cursor-pointer hover:scale-110 active:scale-95 transition-all">
                                        <span className="material-symbols-outlined text-4xl fill-1">play_arrow</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Sweep */}
                <section className="px-6 md:px-20 py-32 bg-slate-50 dark:bg-background-dark/50 border-y border-slate-100 dark:border-slate-800">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid md:grid-cols-3 gap-10">
                            {values.map((v, i) => (
                                <div key={i} className="p-10 rounded-[3rem] bg-white dark:bg-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 hover:translate-y-[-8px] transition-all">
                                    <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
                                        <span className="material-symbols-outlined text-3xl font-bold">{v.icon}</span>
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">{v.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Director's Perspective */}
                <section className="px-6 md:px-20 py-32 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col lg:flex-row gap-20 items-start">
                            <div className="lg:w-2/3">
                                <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 animate-pulse">Leadership Perspective</h6>
                                <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-10 tracking-tighter leading-tight">Empowering Families, <br /><span className="text-primary italic">Transforming Lives.</span></h2>
                                <div className="space-y-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic border-l-4 border-primary/20 pl-10">
                                    <p>"Recovery is not a destination; it's a profound physiological and psychological shift. We built Sudarshan to be more than a clinic—it's a clinical research sanctuary where data meets human empathy."</p>
                                    <footer className="not-italic flex flex-col gap-1">
                                        <span className="text-slate-900 dark:text-white font-black text-2xl">— Dr. Manoranjan Samanta</span>
                                        <span className="text-sm font-bold text-primary uppercase">Director & Chief Clinician</span>
                                    </footer>
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full">
                                <div className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl border-4 border-primary/10 grayscale hover:grayscale-0 transition-all duration-1000">
                                    <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070" alt="Director Signature Photo" className="h-full w-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
