"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, MapPin, Navigation, Package, DollarSign, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function NewListingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [address, setAddress] = useState("");

  const handleAutoLocate = () => {
    setIsLocating(true);
    setTimeout(() => {
      setIsLocating(false);
      setAddress("MG Road, Kochi, Kerala (Auto-detected)");
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2); // Success step
    }, 2000);
  };

  return (
    <div className="min-h-full bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass bg-white dark:bg-slate-900 p-10 rounded-[40px] shadow-2xl border-none space-y-10"
            >
              <div className="flex items-center gap-4">
                <Link href="/dashboard/owner" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:bg-slate-200 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div className="space-y-1">
                    <h2 className="text-3xl font-black tracking-tight tracking-tighter">List Your Space</h2>
                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Minimal Friction Onboarding</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Location */}
                <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Exact Location</label>
                    <div className="relative group">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                        <input 
                            required
                            type="text" 
                            placeholder="Street Name, Building Name..." 
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full pl-12 pr-12 py-5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl font-bold focus:ring-4 focus:ring-primary/10 transition-all"
                            suppressHydrationWarning
                        />
                        <button 
                            type="button"
                            onClick={handleAutoLocate}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-slate-700 rounded-xl hover:bg-slate-100 shadow-sm transition-all"
                        >
                            <Navigation className={`w-4 h-4 text-primary ${isLocating && 'animate-spin'}`} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-500">Total Slots</label>
                        <div className="relative group">
                            <Package className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input 
                                required
                                type="number" 
                                placeholder="e.g. 5" 
                                className="w-full pl-12 py-5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl font-bold focus:ring-4 focus:ring-primary/10 transition-all"
                                suppressHydrationWarning
                            />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-500">Price / Hour</label>
                        <div className="relative group">
                            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input 
                                required
                                type="number" 
                                placeholder="₹30" 
                                className="w-full pl-12 py-5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl font-bold focus:ring-4 focus:ring-primary/10 transition-all"
                                suppressHydrationWarning
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Availability</label>
                    <div className="relative group">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <select 
                            className="w-full pl-12 py-5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl font-bold focus:ring-4 focus:ring-primary/10 transition-all appearance-none cursor-pointer"
                            suppressHydrationWarning
                        >
                            <option>Always Open (24/7)</option>
                            <option>Weekdays (8 AM - 8 PM)</option>
                            <option>Night Only (8 PM - 8 AM)</option>
                            <option>Weekends Only</option>
                        </select>
                    </div>
                </div>

                <button 
                    disabled={isSubmitting}
                    className="w-full py-6 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-2xl active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
                    suppressHydrationWarning
                >
                    {isSubmitting ? (
                        <div className="w-6 h-6 border-4 border-slate-400 border-t-white rounded-full animate-spin" />
                    ) : (
                        <span>Verify & List Slot</span>
                    )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass bg-white dark:bg-slate-900 p-12 rounded-[50px] shadow-2xl text-center space-y-10 border-none"
            >
                <div className="w-24 h-24 bg-emerald-500 rounded-[35px] flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30">
                    <CheckCircle2 className="text-white w-12 h-12" />
                </div>
                <div className="space-y-3">
                    <h2 className="text-4xl font-black tracking-tight">Slot is Live!</h2>
                    <p className="text-slate-500 font-medium leading-relaxed">Your parking space has been verified and added to the New Keralam digital twin map.</p>
                </div>
                
                <div className="pt-4 space-y-3">
                    <Link href="/dashboard/owner" className="block w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:opacity-90 shadow-xl transition-all">Go To Dashboard</Link>
                    <button 
                        onClick={() => setStep(1)}
                        className="text-[10px] font-black uppercase text-slate-400 tracking-widest hover:text-slate-600"
                    >
                        List Another
                    </button>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
