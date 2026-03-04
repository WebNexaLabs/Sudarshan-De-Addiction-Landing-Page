import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Admission from "@/components/Admission";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Treatments />
        <Features />
        <Admission />

        {/* Accreditations & Trust */}
        <section className="bg-white dark:bg-background-dark/30 px-6 md:px-20 py-24 border-t border-slate-100 dark:border-slate-800">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6 leading-tight">Accredited Excellence in Recovery</h2>
                <div className="space-y-8 mt-10">
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm">
                      <span className="material-symbols-outlined text-3xl">description</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Scientific Protocols</h4>
                      <p className="text-base text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Our treatment modules are based on international clinical benchmarks and peer-reviewed research.</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary shadow-sm">
                      <span className="material-symbols-outlined text-3xl">verified_user</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Govt. Certified Facility</h4>
                      <p className="text-base text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Officially registered and monitored by the Government of West Bengal and recognized by central bodies.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 p-4">
                <div className="rounded-[2.5rem] bg-white dark:bg-slate-800 p-10 shadow-xl border border-slate-100 dark:border-slate-700 text-center hover:scale-105 transition-transform">
                  <p className="text-5xl font-black text-primary mb-3">10+</p>
                  <p className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500">Years of Service</p>
                </div>
                <div className="rounded-[2.5rem] bg-white dark:bg-slate-800 p-10 shadow-xl border border-slate-100 dark:border-slate-700 text-center hover:scale-105 transition-transform">
                  <p className="text-5xl font-black text-secondary mb-3">1.2k</p>
                  <p className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500">Recovered Lives</p>
                </div>
                <div className="rounded-[2.5rem] bg-slate-900 dark:bg-slate-800 p-10 shadow-xl border border-slate-700 text-center col-span-2 hover:scale-[1.02] transition-transform">
                  <p className="text-5xl font-black text-white mb-3">24/7</p>
                  <p className="text-[12px] font-black uppercase tracking-[0.2em] text-primary">Medical Monitoring</p>
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
