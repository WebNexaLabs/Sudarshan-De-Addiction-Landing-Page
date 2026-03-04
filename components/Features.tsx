export default function Features() {
    const features = [
        {
            title: "Clinical Research",
            description: "Our protocols are backed by ongoing research and international recovery standards.",
            icon: "magnification_small",
        },
        {
            title: "Safety First",
            description: "Secure, drug-free environment with 24/7 security and empathetic staff support.",
            icon: "security",
        },
        {
            title: "Digital Detox",
            description: "Structured disconnection from social media and technology to refocus on inner self.",
            icon: "phonelink_off",
        },
        {
            title: "Family System",
            description: "Healing doesn't happen in isolation. We include family education and support sessions.",
            icon: "family_restroom",
        },
    ];

    return (
        <section className="bg-primary/5 px-6 md:px-20 py-24 border-y border-primary/5">
            <div className="mx-auto max-w-7xl">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col gap-5 group hover:translate-y-[-5px] transition-all duration-300">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-lg shadow-primary/10 text-primary transition-transform group-hover:scale-110">
                                <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h4>
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
