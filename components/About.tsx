import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="bg-white dark:bg-background-dark/50 px-6 md:px-20 py-24 border-y border-slate-100 dark:border-slate-800">
            <div className="mx-auto max-w-4xl">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-primary/5 p-8 md:p-14 border border-primary/10 shadow-sm animate-fade-in">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="h-56 w-56 shrink-0 overflow-hidden rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white dark:border-slate-800">
                            <img
                                alt="S. Sanjay Rao, Director"
                                className="h-full w-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZPFkA58D0xqjy0QKmYmAtD9e8iSeuDCaNTYTxqoVfdeFH9BDYXRsQqecwO9g7fQLhy7aa6EaBTIjqc_p2k7Tr5yWYD8mFwuc15mURvtxXF004XCIEiS8lB1lNQM2OgjDzzoWCGu5KBQ9G7Wxlax9yqp2LiBv5257YfH3ZhG1Rm0k8XWzm_lGdnG9bI_qq80VGKfFQ2Vf4lz8ZNWUcxTPu_Bg_Q54PDUhsVynlmIonnzTCQTFMTMIatp5ah7WJ7cFLedh05wmU2Obb"
                            />
                        </div>
                        <div className="flex flex-col gap-6 text-center md:text-left">
                            <span className="material-symbols-outlined text-5xl text-primary opacity-30 mx-auto md:mx-0">format_quote</span>
                            <p className="text-xl md:text-2xl font-medium italic leading-relaxed text-slate-700 dark:text-slate-200">
                                "Our mission is to bridge the gap between addiction and a purposeful life through research-driven clinical excellence. Every individual deserves a second chance at happiness."
                            </p>
                            <div className="flex flex-col mt-4">
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white">S. Sanjay Rao</h4>
                                <p className="text-sm font-black text-primary uppercase tracking-[0.2em] mt-1">Executive Director & Clinical Lead</p>
                            </div>
                            <Link
                                href="/vision"
                                className="mt-4 flex items-center justify-center md:justify-start gap-2 text-sm font-bold text-primary group cursor-pointer"
                            >
                                Read Full Vision
                                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1 font-bold">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-12 -right-12 h-48 w-48 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-12 -left-12 h-48 w-48 bg-secondary/10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
}
