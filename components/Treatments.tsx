export default function Treatments() {
    const programs = [
        {
            title: "Medically Supervised Detox",
            description: "Safety is our priority. We offer 24/7 nursing care and withdrawal management under the direct supervision of experienced physicians to ensure a comfortable transition.",
            icon: "medical_services",
            color: "primary",
            list: ["Round-the-clock nursing", "Pain management protocols"]
        },
        {
            title: "Cognitive Behavioral Therapy",
            description: "Identify triggers and develop powerful coping mechanisms. Our CBT sessions help residents rewire negative thought patterns into positive lifestyle choices.",
            icon: "psychology",
            color: "secondary",
            list: ["Behavioral restructuring", "Relapse prevention tools"]
        },
        {
            title: "Psychological Assessment",
            description: "In-depth clinical evaluations that form the foundation of recovery. We assess co-occurring disorders to create a data-driven roadmap for healing.",
            icon: "clinical_notes",
            color: "orange",
            list: ["Diagnostic testing", "Multi-axial evaluations"]
        },
        {
            title: "Personalized Recovery Plans",
            description: "No two journeys are the same. We offer structured 30, 60, and 90-day residential programs tailored to the severity and specific needs of each individual.",
            icon: "calendar_today",
            color: "blue",
            list: ["30/60/90 Day residential", "Individualized pacing"]
        },
        {
            title: "Yoga & Mindfulness",
            description: "Integration of physical wellness and stress reduction. Our mindfulness practices help regulate the nervous system and foster inner peace.",
            icon: "self_improvement",
            color: "green",
            list: ["Breathwork & Meditation", "Somatic healing"]
        },
        {
            title: "Creative & Expressive Therapy",
            description: "Heal beyond words. We use music, poetry, and art therapy to help residents process complex emotions and discover new forms of self-expression.",
            icon: "palette",
            color: "purple",
            list: ["Art & Music workshops", "Narrative poetry sessions"]
        }
    ];

    return (
        <section id="treatments" className="px-6 md:px-20 py-24 bg-background-light dark:bg-slate-900/50">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">Our Treatment Programs</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Comprehensive, research-backed programs designed for sustainable recovery.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, idx) => (
                        <div key={idx} className="group rounded-[2.5rem] bg-white dark:bg-slate-800 p-10 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all hover:translate-y-[-8px]">
                            <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${program.color === 'primary' ? 'bg-primary/10 text-primary' :
                                    program.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                                        program.color === 'orange' ? 'bg-orange-100 text-orange-500' :
                                            program.color === 'blue' ? 'bg-blue-100 text-blue-500' :
                                                program.color === 'green' ? 'bg-green-100 text-green-600' :
                                                    'bg-purple-100 text-purple-600'
                                }`}>
                                <span className="material-symbols-outlined text-4xl">{program.icon}</span>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white leading-tight">{program.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                                {program.description}
                            </p>
                            <ul className="space-y-3">
                                {program.list.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-bold">
                                        <span className="material-symbols-outlined text-secondary text-lg font-black">check_circle</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
