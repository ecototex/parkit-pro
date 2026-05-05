import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { CityIntelligence } from "@/components/CityIntelligence";
import { Activity, MapPin, ShieldCheck, Zap, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      {/* Intelligence Dashboard - Data-driven City Experience */}
      <CityIntelligence />

      {/* Multi-Facet Performance Features */}
      <section className="py-32 bg-slate-50 dark:bg-slate-930 px-6 relative overflow-hidden backdrop-blur-3xl border-t border-slate-200 dark:border-slate-800">
        {/* Immersive BG Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-7 group">
                    <div className="glass p-12 rounded-[60px] bg-white dark:bg-slate-900 border-none shadow-2xl space-y-8 relative overflow-hidden transition-all duration-700 hover:shadow-primary/10">
                        <div className="absolute top-0 right-0 p-8">
                            <div className="w-16 h-16 bg-primary/10 rounded-[25px] flex items-center justify-center border border-primary/20">
                                <Activity className="text-primary w-8 h-8 group-hover:rotate-12 transition-transform" />
                            </div>
                        </div>
                        <div className="space-y-4 max-w-xl">
                            <span className="text-[10px] font-black uppercase text-primary tracking-[0.4em]">Proprietary Algorithm</span>
                            <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-slate-800 dark:text-white">Fastest Find. <br/><span className="text-primary/60">Under 60 Seconds.</span></h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed pt-2">Our auto-location engine pinpoint the most efficient slot across Kerala's urban grid instantly. Zero hesitation, one tap booking.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                            {[
                                { title: "Auto-GPS", desc: "Instant detection", icon: MapPin },
                                { title: "Confirmation", desc: "Zero-wait verify", icon: ShieldCheck },
                                { title: "Checkout", desc: "One-tap payment", icon: Zap }
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <item.icon className="w-4 h-4 text-primary" />
                                        <p className="font-black text-[10px] uppercase tracking-widest">{item.title}</p>
                                    </div>
                                    <p className="text-[11px] font-bold text-slate-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="md:col-span-5 h-full">
                    <div className="h-full glass p-12 rounded-[60px] bg-slate-900 dark:bg-slate-950 border-none shadow-2xl text-white space-y-10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative z-10 space-y-8">
                            <div className="w-16 h-16 bg-white/10 rounded-[25px] flex items-center justify-center backdrop-blur-md border border-white/10">
                                <TrendingUp className="text-white w-8 h-8" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-4xl font-black tracking-tighter leading-[0.95]">List & Earn. <br/> Modern Monetization.</h3>
                                <p className="text-slate-400 font-medium text-base leading-relaxed">Unlock the hidden revenue in your infrastructure. Transform space into an autonomous asset engine.</p>
                            </div>
                            <ul className="space-y-4 pt-10 border-t border-white/10">
                                {[
                                    "Simple Asset Registry",
                                    "Live Earnings Monitor",
                                    "Guaranteed Secure Access"
                                ].map((li, i) => (
                                    <li key={i} className="flex items-center gap-4 group/li">
                                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,1)] group-hover/li:scale-150 transition-transform" />
                                        <span className="text-[11px] font-black uppercase tracking-[0.2em]">{li}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
