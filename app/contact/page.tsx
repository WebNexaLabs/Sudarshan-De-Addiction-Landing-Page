import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section - Clean Clinical Design */}
                <section className="relative px-6 md:px-20 pt-20 pb-16 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col items-center text-center">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary mb-8 animate-fade-in shadow-sm border border-primary/10">
                                <span className="material-symbols-outlined text-sm">support_agent</span>
                                <span className="text-xs font-black uppercase tracking-widest italic">Clinical Support Services</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-8">
                                We are here to <br /><span className="text-primary">Support Your Recovery</span>
                            </h1>
                            <p className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
                                Direct connection to our medical intake specialists and clinical therapists.
                                Confidentiality and compassionate care are at the core of our communication.
                            </p>
                        </div>
                    </div>
                    {/* Background Detail */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent blur-3xl opacity-50"></div>
                </section>

                {/* Direct Contact Grid - More Professional Integration */}
                <section className="px-6 md:px-20 pb-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Contact Methods Stack */}
                            <div className="lg:col-span-1 flex flex-col gap-6">
                                <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none hover:translate-y-[-5px] transition-all">
                                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6">Helplines</h4>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 group">
                                            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined font-bold">call</span>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase text-slate-400">Primary Admission</p>
                                                <p className="text-lg font-black text-slate-900 dark:text-white">+91 98041 88668</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 group">
                                            <div className="h-12 w-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined font-bold">add_call</span>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase text-slate-400">Clinical Support</p>
                                                <p className="text-lg font-black text-slate-900 dark:text-white">+91 96351 33668</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="mt-8 w-full py-4 bg-slate-900 dark:bg-primary text-white font-bold rounded-xl hover:bg-primary dark:hover:bg-primary/90 transition-all text-sm uppercase tracking-widest">
                                        Immediate Callback
                                    </button>
                                </div>

                                <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Office Hours</h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-sm font-medium">
                                            <span className="text-slate-500">Emergency</span>
                                            <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-[10px] font-black uppercase tracking-widest">24/7 Service</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm font-medium">
                                            <span className="text-slate-500">Admin Desk</span>
                                            <span className="text-slate-900 dark:text-slate-300">10 AM - 6 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm font-medium">
                                            <span className="text-slate-500">Visiting</span>
                                            <span className="text-slate-900 dark:text-slate-300">By Appointment</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Message Form Area */}
                            <div className="lg:col-span-2 p-8 md:p-12 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-2xl shadow-slate-200/50 dark:shadow-none">
                                <div className="mb-10">
                                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">Send a Confidential Inquiry</h2>
                                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                        Our response team reviews every message within <span className="text-primary font-bold">2 business hours</span>.
                                        Your medical data and personal information are strictly encrypted.
                                    </p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Geographical Integration */}
                <section className="bg-slate-50 dark:bg-slate-900/30 px-6 md:px-20 py-24 border-y border-slate-200/50 dark:border-slate-800">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-5">
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Visit Our Clinical <br /><span className="text-primary">Facility</span></h2>
                                <div className="space-y-10">
                                    <div className="flex gap-6">
                                        <div className="h-14 w-14 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                                            <span className="material-symbols-outlined text-3xl font-bold">clinical_notes</span>
                                        </div>
                                        <div>
                                            <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Registered Address</h5>
                                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                                Sudarshan Building, Malancha Road,<br />
                                                Near Inda Overbridge, Kharagpur,<br />
                                                Paschim Medinipur, WB - 721301
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="h-14 w-14 rounded-2xl bg-secondary text-white flex items-center justify-center shrink-0 shadow-lg shadow-secondary/20">
                                            <span className="material-symbols-outlined text-3xl font-bold">mail</span>
                                        </div>
                                        <div>
                                            <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Digital Connection</h5>
                                            <p className="text-slate-600 dark:text-slate-400 font-medium">support@sudarshanrecovery.org</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-medium">official.sudarshan@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7">
                                <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white dark:border-slate-800 rotate-1">
                                    <iframe
                                        allowFullScreen={true}
                                        className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
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

                {/* Verification Bar - Professional Layout */}
                <section className="px-6 md:px-20 py-16 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { label: "ISO Certified Facility", val: "9001:2015", icon: "verified" },
                                { label: "NITI Aayog (Darpan)", val: "WB/2021/0285432", icon: "account_balance" },
                                { label: "Registered NGO No.", val: "S0017424 of 2020", icon: "gavel" },
                                { label: "Clinical Establishment", val: "WB/CE/22/01/223", icon: "medical_information" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm group">
                                    <div className="h-10 w-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-2xl font-black">{item.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{item.label}</p>
                                        <p className="text-xs font-black text-slate-900 dark:text-white">{item.val}</p>
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
