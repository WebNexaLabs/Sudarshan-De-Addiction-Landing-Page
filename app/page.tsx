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

        {/* Unified Trust Section - Optimized for mobile scroll */}
        <section className="px-6 md:px-20 py-12 lg:py-16 bg-slate-50 dark:bg-background-dark/30 border-y border-slate-100 dark:border-slate-800">
          <div className="mx-auto max-w-7xl">
            <div className="flex overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-8 lg:justify-between items-center no-scrollbar">
              {[
                { label: "ISO Certified", val: "9001:2015", icon: "verified" },
                { label: "NITI Aayog", val: "Verified", icon: "account_balance" },
                { label: "Registered NGO", val: "S0017424", icon: "gavel" },
                { label: "UNODC Standard", val: "Compliant", icon: "clinical_notes" }
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-3 shrink-0 lg:shrink">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl font-bold">{badge.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase text-slate-400">{badge.label}</span>
                    <span className="text-xs font-black text-slate-900 dark:text-white leading-none mt-0.5">{badge.val}</span>
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

        {/* Final Home CTA - Specialized for Mobile */}
        <section className="px-6 md:px-20 py-20 lg:py-32 bg-white dark:bg-background-dark">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-10 leading-tight">
              Take the First Step <br className="hidden md:block" /><span className="text-primary italic">Towards A Better Life</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
              <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-xs hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-primary/30 active:translate-y-0 transition-all">
                Get Confidential Help
              </button>
              <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-widest text-xs hover:translate-y-[-4px] hover:shadow-2xl active:translate-y-0 transition-all">
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
