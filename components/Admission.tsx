export default function Admission() {
    const steps = [
        {
            id: 1,
            title: "Confidential Consultation",
            description: "Call our 24/7 helpline or visit us for a free, confidential assessment with our medical team.",
        },
        {
            id: 2,
            title: "Clinical Intake",
            description: "Formal admission includes medical checkups, psych-evaluation, and room assignment in our center.",
        },
        {
            id: 3,
            title: "Start Transformation",
            description: "Begin your customized treatment plan under the supervision of our expert therapists and doctors.",
        }
    ];

    return (
        <section className="px-6 md:px-20 py-24 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white leading-tight">Your Path to Healing</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">Starting recovery is a brave choice. We've made our admission process as simple and supportive as possible.</p>
                        <button className="flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-bold text-white shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-all">
                            <span className="material-symbols-outlined">description</span>
                            Request Info Pack
                        </button>
                    </div>
                    <div className="flex-1 grid gap-8">
                        {steps.map((step) => (
                            <div key={step.id} className="flex gap-6 items-start group">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">{step.id}</div>
                                <div className="flex flex-col gap-2">
                                    <h5 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h5>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
