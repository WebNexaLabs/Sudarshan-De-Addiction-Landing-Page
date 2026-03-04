import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    const sections = [
        {
            title: "1. Clinical Data Privacy",
            content: "As a registered medical de-addiction facility, we prioritize the confidentiality of patient health information. All medical records, clinical psychological assessments, and treatment progress data are stored in encrypted environments and are only accessible by authorized medical staff."
        },
        {
            title: "2. Personal Information Collection",
            content: "We collect information such as name, phone number, and medical history through our inquiry forms and intake assessments. This information is used strictly for clinical triage, admission planning, and personalized treatment coordination."
        },
        {
            title: "3. Third-Party Disclosure",
            content: "Sudarshan De-Addiction and Research Center does not sell, trade, or transfer patient data to outside parties. Data is only shared with authorized medical bodies or government agencies when required by law for clinical compliance or verified medical referrals."
        },
        {
            title: "4. Digital Security",
            content: "We implement a variety of security measures, including SSL encryption and secure server protocols, to maintain the safety of your personal and medical information during digital transmission."
        },
        {
            title: "5. Patient Consent",
            content: "By using our website and submitting inquiry forms, you consent to our privacy policy. For admitted residents, a more comprehensive medical consent and confidentiality agreement (HIPAA-compliant principles) is signed during the intake process."
        }
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Header section */}
                <section className="px-6 md:px-20 py-20 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary mb-8">
                            <span className="material-symbols-outlined text-sm">security</span>
                            <span className="text-xs font-bold uppercase tracking-widest">Confidentiality First</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
                            Privacy <span className="text-primary">Policy</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                            Last Updated: March 2024. Your trust is our most valuable asset in the journey to recovery.
                        </p>
                    </div>
                </section>

                {/* Content section */}
                <section className="px-6 md:px-20 py-24 bg-background-light dark:bg-background-dark/50">
                    <div className="mx-auto max-w-4xl">
                        <div className="bg-white dark:bg-slate-800 p-8 md:p-16 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-700">
                            <div className="space-y-12">
                                {sections.map((section, idx) => (
                                    <div key={idx} className="group">
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                                            {section.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">
                                            {section.content}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 pt-12 border-t border-slate-100 dark:border-slate-700">
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 italic text-center">Questions about your data?</h4>
                                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                    <div className="flex items-center gap-2 text-primary font-bold">
                                        <span className="material-symbols-outlined">mail</span>
                                        <span>privacy@sudarshanrecovery.org</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-secondary font-bold">
                                        <span className="material-symbols-outlined">call</span>
                                        <span>+91 98041 88668</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
