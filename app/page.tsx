import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Features from "@/components/Features";
import Admission from "@/components/Admission";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Unified Trust/Accreditation Section */}
        <section className="px-6 md:px-20 py-16 bg-slate-50 dark:bg-background-dark/50 border-y border-slate-100 dark:border-slate-800">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
              {[
                { label: "ISO Certified Facility", val: "9001:2015", icon: "verified" },
                { label: "NITI Aayog (Darpan)", val: "WB/2021/0285432", icon: "account_balance" },
                { label: "Registered NGO No.", val: "S0017424 of 2020", icon: "gavel" },
                { label: "UNODC Clinical Standards", val: "Compliant", icon: "clinical_notes" }
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl font-bold">{badge.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{badge.label}</span>
                    <span className="text-xs font-black text-slate-900 dark:text-white">{badge.val}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <About />
        <Treatments />
        <Features />
        <Admission />

        {/* Quick Connect Floating CTA for Home */}
        <section className="px-6 md:px-20 py-24 bg-white dark:bg-background-dark">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-12">
              Take the First Step <br /><span className="text-primary italic">Towards A Better Life</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-12 py-5 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-sm hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-primary/30 active:translate-y-0 transition-all">
                Get Confidential Help
              </button>
              <button className="px-12 py-5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-widest text-sm hover:translate-y-[-4px] hover:shadow-2xl active:translate-y-0 transition-all">
                View Facility Gallery
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
