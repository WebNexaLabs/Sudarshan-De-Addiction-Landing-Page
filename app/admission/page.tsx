import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdmissionPage() {
    const steps = [
        {
            id: 1,
            title: "Medical & Psychological Assessment",
            description: "Initial screening and evaluation by our multidisciplinary team to understand specific needs.",
            color: "primary"
        },
        {
            id: 2,
            title: "Personalized Treatment Plan",
            description: "Customizing the recovery roadmap including detox, therapy, and holistic wellness sessions.",
            color: "secondary"
        },
        {
            id: 3,
            title: "Structured Residential Recovery",
            description: "Beginning the stay at our facility with 24/7 care, support groups, and clinical interventions.",
            color: "blue-600"
        }
    ];

    const packingItems = [
        { title: "Comfortable Clothing", desc: "7-10 days of modest, weather-appropriate attire." },
        { title: "Personal Toiletries", desc: "Unopened alcohol-free products (shampoo, soap, toothpaste)." },
        { title: "Valid Identification", desc: "Government-issued ID and insurance information if applicable." },
        { title: "Current Prescriptions", desc: "Medications in original pharmacy bottles for medical review." }
    ];

    const prohibitedItems = [
        { title: "Smartphones & Laptops", desc: "Electronic devices are stored securely upon arrival." },
        { title: "Alcohol & Tobacco", desc: "Strictly prohibited to ensure a safe environment." },
        { title: "Valuables & Jewelry", desc: "Expensive items or large amounts of cash are not allowed." },
        { title: "Outside Food & Drinks", desc: "Nutritious meals and snacks are provided by our facility." }
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative px-6 md:px-20 py-16 md:py-24 bg-white dark:bg-background-dark overflow-hidden border-b border-slate-100 dark:border-slate-800">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col items-center text-center gap-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary">
                                <span className="material-symbols-outlined text-sm">assignment_ind</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-primary">Enrollment Guide</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white max-w-4xl">
                                Compassionate <span className="text-primary">Admission</span> Process
                            </h1>
                            <p className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
                                A simple three-step journey toward recovery and healing. We are here to support you and your family every step of the way.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button className="rounded-xl bg-primary px-10 py-4 text-base font-bold text-white shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-all">
                                    Start Phone Assessment
                                </button>
                                <button className="rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-10 py-4 text-base font-bold text-slate-900 dark:text-white hover:bg-slate-50 transition-all">
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Journey Section */}
                <section className="px-6 md:px-20 py-24 bg-background-light dark:bg-background-dark/50">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Your Recovery Journey</h2>
                            <div className="h-1.5 w-20 rounded-full bg-primary mx-auto mb-6"></div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 relative items-start">
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-12 z-0"></div>
                            {steps.map((step) => (
                                <div key={step.id} className="relative z-10 flex flex-col items-center text-center p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <div className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full text-white text-3xl font-black shadow-lg ${step.color === 'primary' ? 'bg-primary shadow-primary/30' :
                                            step.color === 'secondary' ? 'bg-secondary shadow-secondary/30' :
                                                'bg-blue-600 shadow-blue-600/30'
                                        }`}>
                                        {step.id}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Packing Guidelines */}
                <section className="px-6 md:px-20 py-24 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Packing Guidelines</h2>
                            <p className="text-slate-600 dark:text-slate-400">Please review these items carefully to ensure a smooth transition into our facility.</p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div className="rounded-[2rem] bg-secondary/5 border border-secondary/20 p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-white">
                                        <span className="material-symbols-outlined">check_circle</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">What to Bring</h3>
                                </div>
                                <ul className="space-y-4">
                                    {packingItems.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800/50 rounded-xl">
                                            <span className="material-symbols-outlined text-secondary">check</span>
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white">{item.title}</p>
                                                <p className="text-sm text-slate-500">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-[2rem] bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-12 w-12 rounded-xl bg-red-600 flex items-center justify-center text-white">
                                        <span className="material-symbols-outlined">block</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Prohibited Items</h3>
                                </div>
                                <ul className="space-y-4">
                                    {prohibitedItems.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800/50 rounded-xl">
                                            <span className="material-symbols-outlined text-red-600">close</span>
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white">{item.title}</p>
                                                <p className="text-sm text-slate-500">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Checklist CTA */}
                <section className="px-6 md:px-20 py-20 bg-background-light dark:bg-background-dark/50">
                    <div className="mx-auto max-w-4xl">
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-blue-700 p-10 md:p-16 text-center text-white shadow-2xl">
                            <div className="relative z-10 flex flex-col items-center gap-6">
                                <span className="material-symbols-outlined text-5xl opacity-80">fact_check</span>
                                <h2 className="text-3xl md:text-4xl font-black">Ready for the first step?</h2>
                                <p className="text-lg opacity-90 max-w-xl">Download our comprehensive pre-admission checklist to make sure you have everything prepared for your journey.</p>
                                <button className="mt-4 rounded-xl bg-white px-10 py-4 text-base font-bold text-primary hover:bg-slate-50 transition-all hover:scale-105 active:scale-95">
                                    View Full Admission Checklist
                                </button>
                            </div>
                            <div className="absolute top-0 right-0 h-64 w-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 h-64 w-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
