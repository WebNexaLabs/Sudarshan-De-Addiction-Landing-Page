import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryPage() {
    const categories = ["All", "Clinical", "Residential", "Therapeutic", "Facility"];

    const galleryItems = [
        {
            title: "Private Consultation Suite",
            category: "Clinical",
            src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070",
            span: "md:col-span-1 md:row-span-1"
        },
        {
            title: "Main Treatment Center",
            category: "Facility",
            src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053",
            span: "md:col-span-2 md:row-span-2"
        },
        {
            title: "Meditation Hall",
            category: "Therapeutic",
            src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069",
            span: "md:col-span-1 md:row-span-2"
        },
        {
            title: "Premium Residential Room",
            category: "Residential",
            src: "https://images.unsplash.com/photo-1560341062-90f029f5a703?q=80&w=2070",
            span: "md:col-span-1 md:row-span-1"
        },
        {
            title: "Psychological Assessment Unit",
            category: "Clinical",
            src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
            span: "md:col-span-1 md:row-span-1"
        },
        {
            title: "Holistic Yoga Space",
            category: "Therapeutic",
            src: "https://images.unsplash.com/photo-1545208393-216c7addb3da?q=80&w=1974",
            span: "md:col-span-2 md:row-span-1"
        },
        {
            title: "Secure Medical Wing",
            category: "Clinical",
            src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070",
            span: "md:col-span-1 md:row-span-1"
        }
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Hero Header */}
                <section className="px-6 md:px-20 py-24 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col items-center text-center gap-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary">
                                <span className="material-symbols-outlined text-sm">photo_library</span>
                                <span className="text-xs font-black uppercase tracking-widest italic">Facility Showcase</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
                                Our Therapeutic <span className="text-primary">Environment</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl font-medium">
                                Explore our world-class medical facilities and serene recovery spaces designed to promote healing and long-term sobriety.
                            </p>

                            {/* Category Filter */}
                            <div className="flex flex-wrap justify-center gap-3 mt-4">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${cat === "All"
                                                ? "bg-primary text-white shadow-lg shadow-primary/25"
                                                : "bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Masonry-Style Gallery */}
                <section className="px-6 md:px-20 py-24 bg-background-light dark:bg-background-dark/50">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6">
                            {galleryItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`group relative overflow-hidden rounded-[2.5rem] bg-slate-200 dark:bg-slate-800 shadow-xl transition-all hover:scale-[1.02] active:scale-95 cursor-zoom-in ${item.span}`}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-10 left-10 right-10">
                                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2">{item.category}</p>
                                            <h4 className="text-xl font-bold text-white leading-tight">{item.title}</h4>
                                        </div>
                                    </div>
                                    <div className="absolute top-8 right-8">
                                        <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined font-bold">fullscreen</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust Footer CTA */}
                <section className="px-6 md:px-20 py-24 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-5xl">
                        <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-primary to-blue-700 text-center text-white shadow-2xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tighter">Experience Our Care <br />In Person</h2>
                                <p className="text-lg opacity-90 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                                    We encourage families to schedule a confidential physical tour of our facility to witness the standards of clinical excellence first-hand.
                                </p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <button className="px-10 py-4 rounded-2xl bg-white text-primary font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-all hover:scale-105 shadow-xl shadow-black/10">
                                        Schedule Facility Tour
                                    </button>
                                    <button className="px-10 py-4 rounded-2xl bg-primary/20 backdrop-blur-md border border-white/30 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                                        Contact Intake Team
                                    </button>
                                </div>
                            </div>
                            {/* Decorative Blur */}
                            <div className="absolute -top-20 -right-20 h-80 w-80 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-20 -left-20 h-80 w-80 bg-white/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
