"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, MapPin, ArrowRight } from "lucide-react";

const LANGUAGES = [
  { text: "KERALAM", lang: "English" },
  { text: "കേരളം", lang: "Malayalam" },
  { text: "கேரளம்", lang: "Tamil" },
  { text: "కేరళం", lang: "Telugu" },
  { text: "केरल", lang: "Hindi" },
  { text: "كيرالا", lang: "Arabic" },
];

export const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % LANGUAGES.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 px-6">
      {/* Background Effects: Stripe-inspired Grid & Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-10">
        {/* Top Product Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-black uppercase tracking-widest text-slate-500"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          Parkit Marketplace
        </motion.div>

        {/* Main Headline */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex flex-col items-center text-center gap-4"
          >
            <span className="text-4xl md:text-7xl font-black tracking-tight text-slate-800 dark:text-white leading-none">THE NEW</span>
            
            <div className="relative h-[80px] md:h-[140px] flex items-center justify-center overflow-visible w-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={LANGUAGES[index].text}
                  initial={{ opacity: 0, y: 15, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(12px)" }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  className="gradient-text text-5xl md:text-9xl font-black drop-shadow-[0_15px_45px_rgba(59,130,246,0.3)] inline-block select-none py-1"
                >
                  {LANGUAGES[index].text}
                </motion.span>
              </AnimatePresence>
            </div>
            
            <span className="mt-4 text-slate-400 dark:text-slate-600 text-xl md:text-5xl font-extrabold tracking-tighter">Model of Urban Planning</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Access parking anywhere in Kerala, Instantly. <br className="hidden md:block"/> 
            Book, list, and monetize under the <span className="text-primary font-bold">New Keralam</span> model.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4"
        >
          <Link href="/search" className="w-full md:w-auto group relative px-8 md:px-12 py-5 md:py-6 bg-slate-950 dark:bg-primary text-white font-black rounded-[25px] md:rounded-[30px] overflow-hidden hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
            <span className="flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-[10px] md:text-[12px]">
              Find Parking <Search className="w-5 h-5 pointer-events-none" />
            </span>
          </Link>
          
          <Link href="/owner/new" className="w-full md:w-auto px-8 md:px-12 py-5 md:py-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-800 font-black rounded-[25px] md:rounded-[30px] hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-[10px] md:text-[12px] group">
            List Your Space <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform pointer-events-none" />
          </Link>
        </motion.div>

        {/* Global Access Map Overlay Sim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="pt-16 pointer-events-none select-none"
        >
          <div className="flex justify-center gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-[10px] font-black uppercase tracking-widest">Kochi</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Trivandrum</span>
            <span className="text-[10px] font-black uppercase tracking-widest">Kozhikode</span>
            <span className="text-[10px] font-black uppercase tracking-widest">Thrissur</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
