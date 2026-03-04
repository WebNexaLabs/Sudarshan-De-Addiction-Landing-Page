import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative bg-white dark:bg-background-dark px-6 md:px-20 py-20 lg:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
                    <div className="text-center lg:text-left order-1 lg:order-1">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary mb-8 animate-fade-in shadow-sm">
                            <span className="material-symbols-outlined text-sm font-bold">verified</span>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest italic">ISO 9001:2015 Certified Facility</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black leading-none tracking-tighter text-slate-900 dark:text-white mb-8 lg:mb-10">
                            Evidence-Based <span className="text-primary italic">Recovery</span> for a Brighter Tomorrow
                        </h1>
                        <p className="mx-auto lg:mx-0 max-w-2xl text-base md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 mb-10 font-medium">
                            Sudarshan De-Addiction and Research Center provides professional, compassionate care for sustainable sobriety in Kharagpur. We combine medical expertise with holistic healing.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                            <Link href="/admission" className="w-full sm:w-auto px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-sm rounded-2xl shadow-2xl shadow-primary/25 hover:translate-y-[-4px] active:translate-y-0 transition-all text-center">
                                Start Your Recovery
                            </Link>
                            <Link href="/treatments" className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-black uppercase tracking-widest text-sm rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-center">
                                View Our Programs
                            </Link>
                        </div>

                        {/* Accreditation Badges - Centered on Mobile */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary font-bold">gavel</span>
                                <span className="text-[9px] font-black uppercase tracking-widest">NITI Aayog</span>
                            </div>
                            <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary font-bold">account_balance</span>
                                <span className="text-[9px] font-black uppercase tracking-widest">WB Govt. Regd.</span>
                            </div>
                            <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-blue-400 font-bold">public</span>
                                <span className="text-[9px] font-black uppercase tracking-widest">UNODC Partner</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Section - Simplified for Mobile to prevent "Tiling/Tilting" issues */}
                    <div className="relative order-2 lg:order-2 px-4 md:px-0">
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl md:rotate-3 hover:rotate-0 transition-transform duration-700 border-4 border-white dark:border-slate-800">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT9-4jDgdZPxEj_wTF1KXqS4qpn-kBt1l6r_M5ryLZttquoAF0yYYTc03_fm3YdPHpYzBnH0XHiZA-eoxoffeKMfszvmBArpmkdJvuNefeSE_cs-badvXNaYksxVdEpGujaN-_Hj_c3a3bsMOlsa51K0pukvbVcmAQjpMURP8E3fBM6cAfdjx4lPydxby5l2VhlEJABTNjgOdk8rQr4Ll9nXMs92TKaaPNUmCEimwBk0Dut9RdCqbmgaRb_mDhwgP6kCdL9gWMKUez"
                                alt="Modern Recovery Facility"
                                className="w-full h-full object-cover scale-105"
                            />
                        </div>

                        {/* Floating Badges - Repositioned for Mobile safety */}
                        <div className="absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 bg-white dark:bg-slate-800 p-4 lg:p-6 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 md:-rotate-3 active:scale-95 transition-all">
                            <div className="flex items-center gap-3 lg:gap-4">
                                <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                                    <span className="material-symbols-outlined font-bold">pill</span>
                                </div>
                                <div>
                                    <p className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white leading-none">100%</p>
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Medically Safe</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-4 lg:-top-6 -right-4 lg:-right-6 bg-white dark:bg-slate-800 p-4 lg:p-6 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 md:rotate-3 active:scale-95 transition-all">
                            <div className="flex items-center gap-3 lg:gap-4">
                                <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined font-bold">support_agent</span>
                                </div>
                                <div>
                                    <p className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white leading-none">24/7</p>
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Support Avail.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
