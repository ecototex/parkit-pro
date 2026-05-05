"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Car, User, Navigation, ShieldCheck, ChevronRight, BarChart3, PlusCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [showRoleModal, setShowRoleModal] = useState(false);

  return (
    <>
      <nav className="glass sticky top-0 z-[100] px-6 md:px-12 py-3.5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary transition-colors">
            <Car className="text-primary w-5 h-5 group-hover:text-white transition-colors" />
          </div>
          <span className="text-xl font-black tracking-tighter hidden sm:block">
            Park<span className="text-primary">it</span>
          </span>
        </Link>

        {/* Core Task-Focused CTAs */}
        <div className="flex items-center gap-2 md:gap-2.5">
          <Link href="/search" className="flex items-center gap-1.5 bg-primary/5 hover:bg-primary text-primary hover:text-white px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
            <Navigation className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Book Parking</span>
            <span className="md:hidden">Book</span>
          </Link>
          <Link href="/owner/new" className="flex items-center gap-1.5 bg-emerald-500/5 hover:bg-emerald-600 text-emerald-600 hover:text-white px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
            <PlusCircle className="w-3.5 h-3.5" />
            <span className="hidden md:inline">List Parking</span>
            <span className="md:hidden">List</span>
          </Link>
          <Link href="/#intelligence" className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300 px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
            <BarChart3 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">City Overview</span>
            <span className="md:hidden">City</span>
          </Link>
          
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1.5" />
          
          <button 
            onClick={() => setShowRoleModal(true)}
            className="w-9 h-9 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 rounded-full flex items-center justify-center hover:bg-primary transition-all active:scale-95 shadow-lg"
            suppressHydrationWarning
          >
            <User className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Role Selection Modal */}
      <AnimatePresence>
        {showRoleModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowRoleModal(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="relative glass bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[40px] max-w-sm w-full space-y-8 shadow-2xl border-none"
            >
              <div className="space-y-2 text-center">
                <h3 className="text-3xl font-black tracking-tight">Identity</h3>
                <p className="text-slate-500 font-medium text-sm">Choose your mode for the New Keralam model.</p>
              </div>

              <div className="space-y-4">
                <Link 
                  href="/dashboard/driver" 
                  onClick={() => setShowRoleModal(false)}
                  className="group flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-800 hover:bg-primary hover:text-white rounded-[30px] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Car className="w-6 h-6" />
                    <div className="text-left">
                      <p className="font-black text-sm uppercase tracking-widest">Driver</p>
                      <p className="text-[10px] font-bold opacity-60">I need to park.</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 opacity-40 group-hover:opacity-100" />
                </Link>

                <Link 
                  href="/dashboard/owner" 
                  onClick={() => setShowRoleModal(false)}
                  className="group flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white rounded-[30px] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="w-6 h-6" />
                    <div className="text-left">
                      <p className="font-black text-sm uppercase tracking-widest">Owner</p>
                      <p className="text-[10px] font-bold opacity-60">I have space.</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 opacity-40 group-hover:opacity-100" />
                </Link>
              </div>

              <button 
                onClick={() => setShowRoleModal(false)}
                className="w-full text-center text-[10px] font-black uppercase text-slate-400 tracking-widest pt-2 hover:text-slate-600 transition-colors"
                suppressHydrationWarning
              >
                Close Panel
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
