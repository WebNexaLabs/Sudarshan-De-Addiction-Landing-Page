import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
    const sections = [
        {
            title: "1. Medical Disclaimer",
            content: "The content on this website, including text, graphics, and images, is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of our clinical team or other qualified health providers with any questions you may have regarding a medical condition."
        },
        {
            title: "2. Admission & Intake",
            content: "Submission of an inquiry form or phone assessment does not constitute formal admission into our facility. Formal admission is finalized only after a physical clinical evaluation, psychological assessment, and signing of internal residential agreements by the patient or their legal guardian."
        },
        {
            title: "3. Use of Website",
            content: "You agree to use this website for lawful purposes only. We reserve the right to restrict access to our digital services if we detect any misuse, fraudulent inquiries, or attempts to compromise our secure clinical data systems."
        },
        {
            title: "4. Liability Limitation",
            content: "Sudarshan De-Addiction and Research Center shall not be held liable for any decisions made based solely on the information provided on this website without a direct clinical consultation with our medical staff."
        },
        {
            title: "5. Intellectual Property",
            content: "All logos, clinical research summaries, and content displayed on this site are the property of Sudarshan Recovery Center (Registered NGO). Unauthorized reproduction or distribution is strictly prohibited."
        },
        {
            title: "6. Governing Law",
            content: "These terms are governed by and construed in accordance with the laws of India and the jurisdiction of the West Bengal judicial system."
        }
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Header section */}
                <section className="px-6 md:px-20 py-20 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-secondary mb-8">
                            <span className="material-symbols-outlined text-sm">gavel</span>
                            <span className="text-xs font-bold uppercase tracking-widest">Legal Framework</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
                            Terms of <span className="text-secondary">Service</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                            Please review the guidelines for using our clinical information and facility services.
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
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-secondary transition-colors">
                                            {section.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">
                                            {section.content}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 pt-12 border-t border-slate-100 dark:border-slate-700 text-center">
                                <p className="text-slate-500 font-medium italic mb-2">Effective Date: March 2024</p>
                                <p className="text-slate-400 text-sm">Sudarshan De-Addiction and Research Center (NGO Registered)</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
