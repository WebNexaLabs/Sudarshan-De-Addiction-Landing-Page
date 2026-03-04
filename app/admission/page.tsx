import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdmissionForm from "@/components/AdmissionForm";

export default function AdmissionPage() {
    const admissionSteps = [
        { id: 1, title: "Initial Contact", desc: "Contact our intake center via phone or the inquiry form below." },
        { id: 2, title: "Clinical Assessment", desc: "A brief screening to understand medical and behavioral needs." },
        { id: 3, title: "Admission Approval", desc: "Review of medical history and confirmation of bed availability." },
        { id: 4, title: "Payment Confirmation", desc: "Finalize financial arrangements to secure the residential slot." },
        { id: 5, title: "Begin Recovery", desc: "Immediate start of the medically-supervised recovery program." }
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Hero section */}
                <section className="px-6 md:px-20 py-20 lg:py-32 bg-[#020817] text-white relative overflow-hidden">
                    <div className="mx-auto max-w-5xl relative z-10">
                        <div className="flex flex-col items-center text-center">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-primary mb-8 border border-primary/20 animate-fade-in shadow-lg shadow-primary/10">
                                <span className="material-symbols-outlined text-sm font-bold">medical_services</span>
                                <span className="text-xs font-black uppercase tracking-widest italic">Clinical Intake Gateway</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black leading-[0.85] tracking-[-0.05em] mb-10 italic">
                                Start Your <br /><span className="text-primary italic">Healing Journey</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed italic border-l-2 border-primary/30 pl-6 md:pl-8 text-left md:text-center">
                                "The hardest step is the first one. We've engineered our admission process to be as fast, confidential, and supportive as possible."
                            </p>
                        </div>
                    </div>
                </section>

                {/* 1. Admission Process */}
                <section className="px-6 md:px-20 py-20 md:py-32 bg-white dark:bg-background-dark border-b border-slate-50 dark:border-slate-800">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center mb-16 md:mb-20">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-4 italic">Admission Process</h2>
                            <p className="text-slate-500 font-medium max-w-xl mx-auto uppercase text-[10px] tracking-[0.3em]">5 Steps to Clinical Enrollment</p>
                        </div>

                        {/* Vertical Stack on Mobile | Grid on Desktop */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 relative">
                            {/* Connector Line (Desktop Only) */}
                            <div className="absolute top-[1.75rem] left-0 w-full h-px bg-slate-100 dark:bg-slate-800 hidden md:block -z-10"></div>

                            {admissionSteps.map((step) => (
                                <div key={step.id} className="relative group">
                                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                        <div className="h-14 w-14 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center mb-8 font-black border-4 border-white dark:border-background-dark group-hover:bg-primary transition-all shadow-xl group-hover:shadow-primary/30 shrink-0 z-10">
                                            {step.id}
                                        </div>
                                        <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight italic uppercase leading-none">{step.title}</h4>
                                        <div className="bg-slate-50 dark:bg-slate-800/40 p-6 md:p-0 rounded-3xl md:rounded-none md:bg-transparent w-full">
                                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                    {/* Mobile Connector (Vertical Dot Line) */}
                                    {step.id !== 5 && (
                                        <div className="w-px h-10 bg-slate-100 dark:bg-slate-800 mx-auto my-2 md:hidden"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2 & 3. What to Bring & Prohibited Items */}
                <section className="px-6 md:px-20 py-20 md:py-32 bg-slate-50 dark:bg-background-dark/30 overflow-hidden">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {/* What to Bring */}
                            <div className="p-8 md:p-12 rounded-[3rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl group transition-all">
                                <div className="flex items-center gap-4 mb-10 lg:mb-12">
                                    <div className="h-14 w-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-3xl font-bold">check_circle</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">What to Bring</h3>
                                </div>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { text: "Comfortable clothing", icon: "apparel" },
                                        { text: "Personal hygiene items", icon: "sanitizer" },
                                        { text: "Medical records", icon: "clinical_notes" },
                                        { text: "Government ID copy", icon: "id_card" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-center group-hover:translate-x-2 transition-transform">
                                            <span className="material-symbols-outlined text-secondary opacity-40 text-xl">{item.icon}</span>
                                            <span className="font-bold text-slate-600 dark:text-slate-300">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Prohibited Items */}
                            <div className="p-8 md:p-12 rounded-[3rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl group transition-all">
                                <div className="flex items-center gap-4 mb-10 lg:mb-12">
                                    <div className="h-14 w-14 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-3xl font-bold">dangerous</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic text-red-500">Prohibited</h3>
                                </div>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { text: "Alcohol or drugs", icon: "no_drinks" },
                                        { text: "Mobile/laptops", icon: "phonelink_off" },
                                        { text: "Sharp objects", icon: "content_cut" },
                                        { text: "Expensive valuables", icon: "savings" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-center group-hover:translate-x-2 transition-transform">
                                            <span className="material-symbols-outlined text-red-500 opacity-40 text-xl">{item.icon}</span>
                                            <span className="font-bold text-slate-600 dark:text-slate-300">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Payment Details */}
                <section className="px-6 md:px-20 py-20 md:py-32 bg-white dark:bg-background-dark border-y border-slate-50 dark:border-slate-800">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center mb-16 md:mb-20">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-4 italic">Secure Payment</h2>
                            <p className="text-slate-500 font-medium max-w-xl mx-auto uppercase text-[10px] tracking-[0.3em]">Institutional Financial Details</p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Bank Details */}
                            <div className="p-8 md:p-12 rounded-[3.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-10">
                                        <span className="material-symbols-outlined text-primary text-4xl font-bold">account_balance</span>
                                        <h4 className="text-2xl font-black uppercase italic tracking-tight">Bank Transfer</h4>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex flex-col border-b border-white/10 pb-4">
                                            <span className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Account Name</span>
                                            <span className="text-xl font-bold">S Sanjay Rao</span>
                                        </div>
                                        <div className="flex flex-col border-b border-white/10 pb-4">
                                            <span className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Bank</span>
                                            <span className="text-xl font-bold">State Bank of India</span>
                                            <span className="text-sm font-medium text-slate-400 italic">IIT Kharagpur Branch</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Account Number</span>
                                                <span className="text-2xl font-black tracking-widest">10224491284</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">IFSC Code</span>
                                                <span className="text-2xl font-black tracking-widest text-primary font-mono">SBIN000202</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                            </div>

                            {/* Digital/UPI & Notice */}
                            <div className="flex flex-col gap-8 w-full">
                                <div className="p-8 md:p-12 rounded-[3.5rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl">
                                    <div className="flex items-center gap-4 mb-8 text-slate-900 dark:text-white">
                                        <span className="material-symbols-outlined text-primary text-3xl font-bold">qr_code_2</span>
                                        <h4 className="text-xl font-black uppercase italic tracking-tight">UPI Payment</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {['Google Pay', 'PhonePe', 'Paytm'].map((p, i) => (
                                            <span key={i} className="px-4 py-1.5 rounded-full bg-slate-50 dark:bg-background-dark text-[10px] font-black uppercase tracking-widest border border-slate-100 dark:border-slate-700">{p}</span>
                                        ))}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 text-left">Mobile Number</span>
                                        <span className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 dark:text-white">+91 98041 88668</span>
                                    </div>
                                </div>

                                <div className="p-8 rounded-[3rem] bg-primary/5 border border-primary/10 flex gap-6 items-start">
                                    <span className="material-symbols-outlined text-primary text-3xl font-black shrink-0 mt-1">info</span>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="text-sm font-black uppercase tracking-widest text-primary italic leading-none">Status: Required</h5>
                                        <p className="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">
                                            Please contact the admissions office before making any payment. share transaction details for confirmation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Admission Inquiry Form */}
                <section className="px-6 md:px-20 py-24 bg-[#0a1118] relative">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                            <div className="lg:col-span-4 lg:pt-12 text-white">
                                <span className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-6 block opacity-60">Final Phase</span>
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-8 uppercase italic">
                                    Submit <br /> <span className="text-primary italic">Inquiry</span> form
                                </h2>
                                <p className="text-base text-slate-400 font-medium leading-relaxed italic border-l-2 border-primary/30 pl-8">
                                    Ready to take the first step? Complete the secure assessment form.
                                </p>
                            </div>
                            <div className="lg:col-span-8 p-6 md:p-14 rounded-[3.5rem] bg-white dark:bg-slate-800 shadow-2xl relative z-10">
                                <AdmissionForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
