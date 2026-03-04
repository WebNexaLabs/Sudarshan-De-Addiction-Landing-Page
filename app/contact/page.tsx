import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    const protocols = [
        { title: "Secure Inquiry", desc: "Your message is encrypted and sent to our clinical oversight team.", icon: "lock" },
        { title: "Medical Triage", desc: "Our staff clinicians review the urgency of the recovery request.", icon: "clinical_notes" },
        { title: "Direct Contact", desc: "A specialist calls you back within 2 business hours for assistance.", icon: "call" }
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Enhanced Hero Section - Institutional Sanctuary */}
                <section className="relative px-6 md:px-20 pt-24 pb-20 bg-[#f8fafc] dark:bg-[#0a1118] overflow-hidden">
                    <div className="mx-auto max-w-7xl relative z-10">
                        <div className="flex flex-col items-center text-center">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2 text-primary mb-10 animate-fade-in shadow-sm border border-primary/10">
                                <span className="material-symbols-outlined text-sm animate-pulse">quick_reference_all</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] italic">Compassionate Access Center</span>
                            </div>
                            <h1 className="text-4xl md:text-8xl font-black leading-[0.95] tracking-[ -0.05em] text-slate-900 dark:text-white mb-10 uppercase italic">
                                Healing Starts <br /><span className="text-primary italic">With a Conversation</span>
                            </h1>
                            <p className="text-lg md:text-2xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-medium italic border-l-4 border-primary/30 pl-8 text-left md:text-center">
                                "Recovery is an institutional priority. Whether you are seeking immediate admission or clinical information, our specialized medical intake team is ready to guide you."
                            </p>
                        </div>
                    </div>
                    {/* Background Sanctuary Gradients */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent blur-[120px] opacity-60"></div>
                </section>

                {/* Priority Contact Grid */}
                <section className="px-6 md:px-20 pb-24 -mt-10 relative z-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Crisis Intervention Card */}
                            <div className="p-10 rounded-[3rem] bg-slate-900 dark:bg-slate-800 text-white shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-all group">
                                <h4 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-10">Emergency 24/7</h4>
                                <div className="space-y-10">
                                    <div className="flex flex-col gap-4">
                                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest leading-none">Primary helpline</p>
                                        <a href="tel:+919804188668" className="text-3xl font-black hover:text-primary transition-colors">+91 98041 88668</a>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest leading-none">Clinical desk</p>
                                        <a href="tel:+919635133668" className="text-xl font-black text-slate-300 hover:text-primary transition-colors">+91 96351 33668</a>
                                    </div>
                                </div>
                                <div className="mt-12 pt-10 border-t border-white/5 flex items-center gap-4">
                                    <span className="h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Active Admission Support</span>
                                </div>
                            </div>

                            {/* Digital Connection Card */}
                            <div className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl hover:translate-y-[-8px] transition-all">
                                <h4 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-10">Digital Intake</h4>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">support@sudarshanrecovery.org</p>
                                            <p className="text-xs text-slate-500 mt-1">Medical Records & Inquiries</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-slate-300 text-2xl">official_government_building</span>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">Kharagpur, WB</p>
                                            <p className="text-xs text-slate-500 mt-1">Main Clinical Campus</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <div className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">Office Hours</div>
                                    <div className="flex justify-between text-sm py-2 border-b border-slate-50 dark:border-slate-800">
                                        <span className="text-slate-500">Admin</span>
                                        <span className="font-bold text-slate-900 dark:text-white">10 AM - 6 PM</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-2">
                                        <span className="text-slate-500">Facility</span>
                                        <span className="font-bold text-primary italic lowercase">24/7 access</span>
                                    </div>
                                </div>
                            </div>

                            {/* Message Panel Area */}
                            <div className="p-10 md:p-12 rounded-[3rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-2xl">
                                <div className="mb-10">
                                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase italic">Secure Messenger</h2>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium text-xs leading-relaxed">
                                        All submissions reach our clinical oversight committee directly.
                                    </p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Response Protocol - New High-Fidelity Section */}
                <section className="bg-slate-900 py-32 relative overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 md:px-20 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 italic">The Response <span className="text-primary">Protocol</span></h2>
                                <p className="text-slate-400 text-lg mb-12 max-w-md italic">What happens after you reach out? We ensure a systematic, medical approach to every inquiry.</p>
                                <div className="space-y-4">
                                    {protocols.map((step, idx) => (
                                        <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                                            <div className="h-12 w-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined font-bold text-2xl">{step.icon}</span>
                                            </div>
                                            <div>
                                                <h5 className="font-black text-white italic tracking-tighter uppercase text-sm mb-1">{step.title}</h5>
                                                <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-[4rem] overflow-hidden border-[16px] border-white/5 rotate-2">
                                    <iframe
                                        allowFullScreen={true}
                                        className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117911.39673977505!2d87.21855608226012!3d22.335359144805743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d409cfa16bb21%3A0x672013d90932fd37!2sKharagpur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin"
                                        style={{ border: 0 }}
                                    >
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clinical Credentials Bar */}
                <section className="px-6 md:px-20 py-24 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-12 p-12 rounded-[3.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                            {[
                                { label: "ISO Certified Facility", val: "9001:2015", icon: "verified" },
                                { label: "NITI Aayog (Darpan)", val: "WB/2021/0285432", icon: "account_balance" },
                                { label: "Registered NGO No.", val: "S0017424", icon: "gavel" },
                                { label: "Clinical Establishment", val: "WB/CE/22/01/223", icon: "medical_information" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="h-10 w-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-all">
                                        <span className="material-symbols-outlined text-xl font-black">{item.icon}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider leading-none mb-1">{item.label}</span>
                                        <span className="text-xs font-black text-slate-900 dark:text-white uppercase italic">{item.val}</span>
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
