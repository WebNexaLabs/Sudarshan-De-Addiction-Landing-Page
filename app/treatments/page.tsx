import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Treatments from "@/components/Treatments";

export default function TreatmentsPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative px-6 md:px-20 py-20 md:py-32 bg-white dark:bg-background-dark overflow-hidden">
                    <div className="mx-auto max-w-7xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary mb-8 animate-fade-in">
                            <span className="material-symbols-outlined text-sm">science</span>
                            <span className="text-xs font-bold uppercase tracking-widest">Research-Driven Clinical Excellence</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-8">
                            Evidence-Based Treatment & <span className="text-primary">Holistic Recovery</span>
                        </h1>
                        <p className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                            At Sudarshan, we provide 24/7 medical supervision and specialized therapy tailored to individual needs. Our programs are designed by experts to ensure safe detoxification and sustainable mental wellness.
                        </p>
                    </div>
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                </section>

                {/* Programs Grid (Reusing Component) */}
                <Treatments />

                {/* Multidisciplinary Approach */}
                <section className="bg-white dark:bg-background-dark px-6 md:px-20 py-24 border-y border-slate-100 dark:border-slate-800">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6">Our Multi-Disciplinary Approach</h2>
                                <div className="h-1.5 w-20 rounded-full bg-primary mb-8"></div>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                                    Recovery is a complex puzzle. That's why our team isn't just one doctor—it's a collaborative ecosystem of medical professionals, clinical psychologists, and experienced counselors working in synergy.
                                </p>
                                <div className="grid gap-6">
                                    <div className="flex gap-5 p-6 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                                        <div className="h-12 w-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined">groups</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-900 dark:text-white text-lg">Collaborative Case Reviews</h5>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Weekly team meetings to review patient progress from medical and psychological perspectives.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 p-6 rounded-2xl bg-secondary/5 border border-secondary/10 hover:bg-secondary/10 transition-colors">
                                        <div className="h-12 w-12 rounded-xl bg-secondary text-white flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined">clinical_notes</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-900 dark:text-white text-lg">Integrated Care Delivery</h5>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Doctors manage physical stability while counselors work on mental triggers simultaneously.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-video overflow-hidden rounded-[3rem] shadow-2xl">
                                    <img
                                        alt="Multi-disciplinary medical team"
                                        className="h-full w-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT9-4jDgdZPxEj_wTF1KXqS4qpn-kBt1l6r_M5ryLZttquoAF0yYYTc03_fm3YdPHpYzBnH0XHiZA-eoxoffeKMfszvmBArpmkdJvuNefeSE_cs-badvXNaYksxVdEpGujaN-_Hj_c3a3bsMOlsa51K0pukvbVcmAQjpMURP8E3fBM6cAfdjx4lPydxby5l2VhlEJABTNjgOdk8rQr4Ll9nXMs92TKaaPNUmCEimwBk0Dut9RdCqbmgaRb_mDhwgP6kCdL9gWMKUez"
                                    />
                                </div>
                                <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 p-10 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-700 animate-fade-in">
                                    <p className="text-sm font-black text-primary uppercase tracking-widest mb-2">Patient Focused</p>
                                    <p className="text-3xl font-black text-slate-900 dark:text-white">1:4 Staff Ratio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Standards Banner */}
                <section className="bg-primary px-6 md:px-20 py-20 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 opacity-10 scale-150 rotate-12">
                        <span className="material-symbols-outlined text-[300px]">verified</span>
                    </div>
                    <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
                        <div className="max-w-2xl text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-black mb-6">Adhering to Global Standards</h2>
                            <p className="text-xl text-blue-50 opacity-90 leading-relaxed font-medium">
                                Our facility is ISO 9001:2015 certified and strictly follows the UNODC (United Nations Office on Drugs and Crime) guidelines for ethical treatment and care.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-12">
                            <div className="flex flex-col items-center gap-3">
                                <div className="h-20 w-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <span className="material-symbols-outlined text-4xl">verified</span>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">ISO 9001:2015</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="h-20 w-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <span className="material-symbols-outlined text-4xl">public</span>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">UNODC Protocols</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="h-20 w-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <span className="material-symbols-outlined text-4xl">gavel</span>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">WB Govt. Regd.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Speak with a Specialist */}
                <section className="px-6 md:px-20 py-24 bg-background-light dark:bg-background-dark/30">
                    <div className="mx-auto max-w-5xl rounded-[3.5rem] bg-slate-900 p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -ml-40 -mb-40"></div>
                        <h2 className="text-3xl md:text-6xl font-black text-white mb-8 relative z-10 tracking-tight">Speak with a Specialist</h2>
                        <p className="text-slate-400 text-lg md:text-xl mb-14 relative z-10 max-w-2xl mx-auto leading-relaxed">
                            Ready to take the first step? Our medical intake team is available 24/7 for a confidential, no-obligation consultation.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10 font-bold">
                            <a
                                className="flex items-center gap-4 bg-primary hover:bg-primary/90 px-10 py-6 rounded-2xl text-white transition-all transform hover:scale-105 shadow-xl shadow-primary/20"
                                href="tel:+919804188668"
                            >
                                <span className="material-symbols-outlined text-3xl">call</span>
                                <div className="text-left">
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-80">24/7 Helpline</p>
                                    <p className="text-2xl font-black">+91 98041 88668</p>
                                </div>
                            </a>
                            <button className="bg-white text-slate-900 hover:bg-slate-50 px-10 py-7 rounded-2xl transition-all shadow-xl text-lg">
                                Schedule an Intake
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
