export default function Hero() {
    return (
        <section className="relative bg-white dark:bg-background-dark px-6 md:px-20 py-20 md:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary mb-8 animate-fade-in">
                            <span className="material-symbols-outlined text-sm">verified</span>
                            <span className="text-xs font-bold uppercase tracking-widest">ISO 9001:2015 Certified Facility</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-8">
                            Evidence-Based <span className="text-primary">Recovery</span> for a Brighter Tomorrow
                        </h1>
                        <p className="mx-auto lg:mx-0 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 mb-10">
                            Sudarshan De-Addiction and Research Center provides professional, compassionate care for sustainable sobriety in Kharagpur. We combine medical expertise with holistic healing.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button className="w-full sm:w-auto px-10 py-5 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/25 hover:translate-y-[-2px] transition-all">
                                Start Your Recovery
                            </button>
                            <button className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                View Our Programs
                            </button>
                        </div>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-12 opacity-70 grayscale hover:grayscale-0 transition-all">
                            <div className="flex items-center gap-2 text-slate-500">
                                <span className="material-symbols-outlined text-primary">gavel</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest">NITI Aayog</span>
                            </div>
                            <div className="flex items-center gap-2 border-l border-slate-300 dark:border-slate-700 pl-8 text-slate-500">
                                <span className="material-symbols-outlined text-secondary">account_balance</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest">WB Govt. Regd.</span>
                            </div>
                            <div className="flex items-center gap-2 border-l border-slate-300 dark:border-slate-700 pl-8 text-slate-500">
                                <span className="material-symbols-outlined text-blue-400">public</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest">UNODC Partner</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT9-4jDgdZPxEj_wTF1KXqS4qpn-kBt1l6r_M5ryLZttquoAF0yYYTc03_fm3YdPHpYzBnH0XHiZA-eoxoffeKMfszvmBArpmkdJvuNefeSE_cs-badvXNaYksxVdEpGujaN-_Hj_c3a3bsMOlsa51K0pukvbVcmAQjpMURP8E3fBM6cAfdjx4lPydxby5l2VhlEJABTNjgOdk8rQr4Ll9nXMs92TKaaPNUmCEimwBk0Dut9RdCqbmgaRb_mDhwgP6kCdL9gWMKUez"
                                alt="Modern Recovery Facility"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 -rotate-3">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                                    <span className="material-symbols-outlined">pill</span>
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white">100%</p>
                                    <p className="text-xs font-bold text-slate-500 uppercase">Medically Safe</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 rotate-3">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined">support_agent</span>
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white">24/7</p>
                                    <p className="text-xs font-bold text-slate-500 uppercase">Support Available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
