"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Star, Shield, Calendar, ChevronLeft, Navigation, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ParkingSpace } from "@/lib/mock-data";

export default function SpaceDetailClient({ space }: { space: ParkingSpace }) {
  const router = useRouter();
  
  // State for time selection
  const [duration, setDuration] = useState(1);
  const [startTime, setStartTime] = useState("10:00");
  const [isBooking, setIsBooking] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const total = space.pricePerHour * duration + 10;

  const handleSimulatedPay = () => {
    setIsBooking(true);
    // Simulate API + Payment latency
    setTimeout(() => {
        setIsBooking(false);
        setShowSuccess(true);
        // Automatic redirect after 5 seconds if they don't click anything
        setTimeout(() => {
            router.push("/");
        }, 5000);
    }, 1500);
  };

  const openNavigation = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${space.lat},${space.lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 relative">
      
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
                />
                <motion.div 
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    className="relative glass bg-slate-50 dark:bg-slate-950 p-12 rounded-[50px] max-w-md w-full text-center space-y-10 border border-slate-200 dark:border-slate-800 shadow-2xl"
                >
                    <div className="w-24 h-24 bg-emerald-500 rounded-[35px] flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20">
                        <CheckCircle2 className="text-white w-12 h-12" />
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-4xl font-black tracking-tight">Booking Confirmed!</h2>
                        <p className="text-slate-500 font-medium">Your slot at <strong>{space.title}</strong> is reserved starting {startTime} for {duration} hours.</p>
                    </div>

                    <div className="pt-4 space-y-3 font-black">
                        <button 
                            onClick={openNavigation}
                            className="w-full py-5 bg-primary text-white rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:scale-105 active:scale-95 transition-all"
                        >
                            <Navigation className="w-5 h-5" />
                            Navigate to Slot
                        </button>
                        <Link href="/" className="block w-full py-4 text-[10px] uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors">
                            Return Home
                        </Link>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>

      <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
        <Link href="/search" className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-[0.3em] mb-4">
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Map</span>
        </Link>
        
        {/* Gallery */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[400px] md:h-[500px]">
          <div className="col-span-4 md:col-span-3 row-span-2 rounded-[40px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl group">
            <img src={space.image} alt={space.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="hidden md:block rounded-[30px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md">
            <img src="https://images.unsplash.com/photo-1545179605-1296651e9d43?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Detail 1" />
          </div>
          <div className="hidden md:block rounded-[30px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md">
            <img src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Detail 2" />
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
            <div className="flex justify-between items-start">
            <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">{space.title}</h1>
                <div className="flex items-center gap-2 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="truncate">{space.address}</span>
                </div>
            </div>
            <div className="flex items-center gap-1.5 bg-amber-50 dark:bg-amber-900/10 px-4 py-2 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                <Star className="text-amber-500 w-5 h-5 fill-amber-500" />
                <span className="text-xl font-black">{space.rating}</span>
            </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {space.amenities.map((a, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <Shield className="w-4 h-4 text-primary" />
                    {a}
                </div>
            ))}
            </div>
        </div>
      </div>

      {/* Booking Form Card */}
      <div className="w-full md:w-[420px]">
        <div className="glass bg-slate-50 dark:bg-slate-950 sticky top-28 p-10 rounded-[50px] space-y-8 shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-700">
          <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl">
            <span className="text-slate-500 font-black uppercase text-[10px] tracking-widest">Rate</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black">₹{space.pricePerHour}</span>
              <span className="text-slate-400 font-bold text-xs">/ hour</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Time Configuration</label>
              
              <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl space-y-1">
                      <p className="text-[8px] font-black uppercase text-slate-400 tracking-tighter">Start Time</p>
                      <input 
                        type="time" 
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="bg-transparent font-black text-lg outline-none w-full"
                        suppressHydrationWarning
                      />
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl space-y-1">
                      <p className="text-[8px] font-black uppercase text-slate-400 tracking-tighter">Hours</p>
                      <select 
                        value={duration}
                        onChange={(e) => setDuration(parseInt(e.target.value))}
                        className="bg-transparent font-black text-lg outline-none w-full cursor-pointer"
                        suppressHydrationWarning
                      >
                          {[1,2,3,4,5,6,12,24].map(h => <option key={h} value={h}>{h} h</option>)}
                      </select>
                  </div>
              </div>

                <div className="w-full p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-between border border-transparent">
                    <div className="flex items-center gap-3">
                        <Calendar className="text-primary w-5 h-5" />
                        <span className="font-black text-sm">March 28, 2026</span>
                    </div>
                </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center text-sm font-black">
              <span className="text-slate-400 uppercase tracking-widest text-[10px]">Total Amount</span>
              <span className="text-3xl font-black text-emerald-600">₹{total}</span>
            </div>
          </div>

          <button 
            disabled={isBooking}
            onClick={handleSimulatedPay}
            className="w-full py-6 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 rounded-3xl text-[12px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-white hover:shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3 shadow-2xl"
            suppressHydrationWarning
          >
            {isBooking ? (
                <div className="w-6 h-6 border-4 border-slate-300 border-t-slate-950 rounded-full animate-spin" />
            ) : (
                <>
                    <span>Confirm & Pay Now</span>
                    <Navigation className="w-5 h-5" />
                </>
            )}
          </button>
          
          <p className="text-center text-[8px] font-black uppercase text-slate-400 tracking-[0.3em] leading-relaxed">Verified by the New Keralam <br/> Mobility Intelligence Unit</p>
        </div>
      </div>
    </div>
  );
}
