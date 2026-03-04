import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const team = [
    {
        name: "Dr. A. Mukhopadhyay",
        role: "Chief Psychiatrist",
        description: "Specialist in addiction medicine with 12+ years of clinical practice.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj6fN44Qcq7_Yu3NESaO3Pn_rzlr7d_XDHkGLzEE_tkVimkAjsIlIl3TALaSQounM0nlUAa4Z1n0qaBraY8k06vaUGDNiMRdU0YhjQNDij8XtLJsDpVH_Tl2zYyG3oPX1r1yW86LLBm_-G-R18I79c-3oFeEHt3l0P6zz-S2MlvsZySfyvAxxAYHfXP0RbU87B0t5lWt8DsVnOg86zDZkovI9Brjn7AOnhPtVurkh3BwdZm5_c__BGKueNr6sREXoSeg0wdFJmjT9B"
    },
    {
        name: "Meera Das",
        role: "Lead Counselor",
        description: "Expert in Cognitive Behavioral Therapy and family system healing.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDrfLPH_7q4cmr5aCIHIF4J3yiWtILE8ckfYjVnbx0P1EA3CmT0vC9P7vs6NjtM9cxG_QamBqh7GoYuc-mpQkDm3qiwFtuSX1mUGbqIIa_-jfgu5Jq17kCE7fvBulpNWDw0l7M56F0ThCMdIBNLpOG2PKO5qVjCip52LtUsyQjwOupKWZR3L-3Y2LWHbnoS6A09vU6_jXK5tzlkTBhc9-ox2aM8kWyfGyOCK0KOivvkHWvSO1UVvmRqELL3oOUbkfXVNKsQvxdMaSH"
    },
    {
        name: "R. K. Singh",
        role: "Operations Head",
        description: "Ensuring smooth logistics and 24/7 patient safety and care.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-OKTd-pTGacasajkQs-9xVfVzvld43BYOyHVp3XZ6plh61q3mFa2C-iCvrIbAql6zLhDga2IYAvVNpZ6ZCBY-kjIto73viX3-NcUwnNDmbp3v5L1xrnBQFFtn9EhMWxiW84zJaC8JWWE6R1_8yEWQJqw0d6yRkxUtaqZFFHibXPTXRiroUdCQL59MQ3nQYMdT8DACqezXFqQ35P6FLFjlc4AHlo1b1n-ONgyMmGDU16Mquvd4u1elsDZdTcOwtTbX-bKI5mhXek7L"
    },
    {
        name: "Dr. S. Chatterjee",
        role: "Clinical Researcher",
        description: "Leading our de-addiction research and protocol development.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB50_sQWZHMy4Uzt-5fpfjwRpmhAXeS0rf70Mw-PeRF4tW5hKHsERYjsMElRLKxCFNVj0Je6GDrevQm7rE1kYqZZpytn1kLgGXBe6BeRHn_q74UB3IvM2H7HApWMA8iJa3XGaj7hxPnsAT0VZyRaicOA8cjAIfMuDPzu32IOb6AhW8WPy5JgurJMMh0UhuVjsvcSlSeH4nsWuWVV2CL1WKRHq4G9HvSlysSfPVMQ6iTU_oQa7dZzhsTnKunDUi4bPCc6nap6vw5j5f2"
    }
];

export default function AboutPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Hero Gradient Section */}
                <section className="relative px-6 md:px-20 py-24 md:py-40 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
                            className="w-full h-full object-cover opacity-10 dark:opacity-20"
                            alt="Hospital Interior Background"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark"></div>
                    </div>

                    <div className="mx-auto max-w-7xl text-center relative z-10">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-primary mb-10 animate-fade-in shadow-sm">
                            <span className="material-symbols-outlined text-sm">verified</span>
                            <span className="text-xs font-black uppercase tracking-[0.2em]">ISO 9001:2015 Certified NGO</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-10">
                            Restoring Lives through <br /><span className="text-primary">Science & Compassion</span>
                        </h1>
                        <p className="mx-auto max-w-4xl text-lg md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-medium italic">
                            Founded in the heart of Kharagpur, Sudarshan De-Addiction and Research Center has been a beacon of hope for over a decade. As a registered NGO, we bridge the gap between clinical excellence and humanitarian care to foster sustainable recovery.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="px-6 md:px-20 py-16 -mt-20 relative z-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="bg-white dark:bg-slate-800 p-12 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-slate-100 dark:border-slate-700 transform hover:scale-[1.02] transition-all">
                                <div className="h-16 w-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                                    <span className="material-symbols-outlined text-4xl">biotech</span>
                                </div>
                                <h3 className="text-3xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">Our Mission</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">
                                    To provide accessible, evidence-based clinical interventions and rehabilitative care that empower individuals to overcome chemical dependency and reclaim their social and personal identity.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-12 rounded-[2.5rem] shadow-2xl shadow-secondary/5 border border-slate-100 dark:border-slate-700 transform hover:scale-[1.02] transition-all">
                                <div className="h-16 w-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                                    <span className="material-symbols-outlined text-4xl">public</span>
                                </div>
                                <h3 className="text-3xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">Our Vision</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">
                                    A drug-free society where every individual has access to high-quality mental health support and addiction recovery services, fostering a culture of health, dignity, and purpose.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Director's Story */}
                <section className="px-6 md:px-20 py-24 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid lg:grid-cols-12 gap-20 items-center">
                            <div className="lg:col-span-5">
                                <div className="relative group">
                                    <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-700 border-8 border-white dark:border-slate-800">
                                        <img
                                            alt="S. Sanjay Rao"
                                            className="w-full h-full object-cover"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZPFkA58D0xqjy0QKmYmAtD9e8iSeuDCaNTYTxqoVfdeFH9BDYXRsQqecwO9g7fQLhy7aa6EaBTIjqc_p2k7Tr5yWYD8mFwuc15mURvtxXF004XCIEiS8lB1lNQM2OgjDzzoWCGu5KBQ9G7Wxlax9yqp2LiBv5257YfH3ZhG1Rm0k8XWzm_lGdnG9bI_qq80VGKfFQ2Vf4lz8ZNWUcxTPu_Bg_Q54PDUhsVynlmIonnzTCQTFMTMIatp5ah7WJ7cFLedh05wmU2Obb"
                                        />
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 bg-primary p-10 rounded-[2rem] text-white hidden md:block shadow-2xl animate-bounce-slow">
                                        <p className="text-5xl font-black">15+</p>
                                        <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80 mt-1">Years of Impact</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 flex flex-col gap-8">
                                <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">Biography</span>
                                <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-none tracking-tight">The Director's Story</h2>
                                <div className="h-2 w-24 bg-primary rounded-full"></div>
                                <p className="text-xl font-bold text-primary">S. Sanjay Rao, Executive Director</p>
                                <div className="prose prose-slate dark:prose-invert max-w-none">
                                    <p className="text-slate-700 dark:text-slate-300 italic text-2xl leading-relaxed mb-8 border-l-4 border-primary/20 pl-8 font-medium">
                                        "Our commitment goes beyond detoxification. We are dedicated to the science of recovery. By integrating global research with localized care protocols, we ensure that every patient at Sudarshan receives world-class clinical excellence."
                                    </p>
                                    <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                        <p>
                                            S. Sanjay Rao established Sudarshan with a vision to professionalize de-addiction services in the region. With a background in social research and clinical management, he has spent over a decade advocating for mental health awareness and evidence-based treatment models.
                                        </p>
                                        <p>
                                            Under his leadership, the center has transitioned into an ISO-certified facility, collaborating with international bodies and government agencies to implement the latest therapeutic techniques in Cognitive Behavioral Therapy and therapeutic community models.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="px-6 md:px-20 py-32 bg-primary/5 border-y border-primary/5">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center mb-20 animate-fade-in">
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">Our Core Values</h2>
                            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
                                The fundamental principles that guide every interaction and treatment plan at our facility.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group">
                                <div className="h-16 w-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-4xl">clinical_notes</span>
                                </div>
                                <h4 className="text-2xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">Clinical Excellence</h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">We strictly adhere to evidence-based medical protocols and continuous research to provide the highest standard of care.</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group">
                                <div className="h-16 w-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-4xl">person_celebrate</span>
                                </div>
                                <h4 className="text-2xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">Patient Dignity</h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Treating every individual with unconditional respect and privacy, regardless of their background or history.</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group">
                                <div className="h-16 w-16 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-4xl">family_restroom</span>
                                </div>
                                <h4 className="text-2xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">Family Support</h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">We believe healing is a collective journey. We actively involve and support families throughout the recovery process.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Accreditations */}
                <section className="px-6 md:px-20 py-24 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center mb-16">
                            <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-4">Recognized & Accredited By</p>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                            {[
                                { icon: "gavel", label: "NITI Aayog" },
                                { icon: "account_balance", label: "Govt. of West Bengal" },
                                { icon: "language", label: "Colombo Plan" },
                                { icon: "groups_3", label: "UNODC Affiliate" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-4 group">
                                    <div className="h-20 w-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                                        <span className="material-symbols-outlined text-5xl text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">{item.icon}</span>
                                    </div>
                                    <span className="text-sm font-black text-slate-600 dark:text-slate-400 uppercase tracking-widest">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Committee */}
                <section className="px-6 md:px-20 py-32 bg-background-light dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                            <div className="max-w-2xl text-center md:text-left">
                                <span className="text-primary font-black uppercase tracking-[0.3em] text-sm block mb-4">Leadership</span>
                                <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">Our Core Committee</h2>
                                <p className="text-slate-600 dark:text-slate-400 mt-6 text-xl font-medium leading-relaxed">
                                    A multi-disciplinary team of experts dedicated to clinical excellence and compassionate service.
                                </p>
                            </div>
                            <button className="px-10 py-5 bg-primary text-white font-black rounded-[1.5rem] shadow-xl shadow-primary/20 hover:scale-105 transition-all">Join Our Mission</button>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, idx) => (
                                <div key={idx} className="bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group border border-slate-100 dark:border-slate-700 transform hover:translate-y-[-10px]">
                                    <div className="aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <img alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={member.image} />
                                    </div>
                                    <div className="p-8">
                                        <h5 className="font-black text-xl text-slate-900 dark:text-white tracking-tight">{member.name}</h5>
                                        <p className="text-primary text-[10px] font-black uppercase tracking-widest mt-2 mb-4 bg-primary/5 inline-block px-3 py-1 rounded-full">{member.role}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{member.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
