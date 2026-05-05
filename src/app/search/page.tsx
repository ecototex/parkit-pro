"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MOCK_SPACES, ParkingSpace } from "@/lib/mock-data";
import { Search, MapPin, Star, Filter, Layers, Navigation, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchPage() {
  const [spaces, setSpaces] = useState<ParkingSpace[]>(MOCK_SPACES);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLocating, setIsLocating] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [showPermissionModal, setShowPermissionModal] = useState(true);

  const handleAllowLocation = () => {
    setIsLocating(true);
    // Simulate geo-detection
    setTimeout(() => {
        setIsLocating(false);
        setHasPermission(true);
        setShowPermissionModal(false);
        // Sort by "closest" (simulated)
        const sorted = [...MOCK_SPACES].sort((a, b) => (a.id === "1" ? -1 : 1));
        setSpaces(sorted);
    }, 1500);
  };

  const filteredSpaces = spaces.filter((s) => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-full overflow-hidden relative">
      
      {/* Location Permission Overlay */}
      <AnimatePresence>
        {showPermissionModal && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-[100] bg-slate-900/60 backdrop-blur-xl flex items-center justify-center p-6"
            >
                <motion.div 
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    className="glass bg-white dark:bg-slate-900 p-10 rounded-[40px] max-w-md w-full text-center space-y-8 shadow-2xl border-none"
                >
                    <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto">
                        <Navigation className="text-primary w-10 h-10 animate-pulse" />
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-3xl font-black tracking-tight">Detect Your Location</h2>
                        <p className="text-slate-500 font-medium leading-relaxed">Parkit needs your GPS to find the absolute closest available slots in under 60 seconds.</p>
                    </div>
                    <div className="space-y-3 pt-4">
                        <button 
                            onClick={handleAllowLocation}
                            disabled={isLocating}
                            className="w-full py-5 bg-primary text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:bg-secondary active:scale-95 transition-all flex items-center justify-center gap-3"
                        >
                            {isLocating ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Allow GPS Access</span>
                                    <ShieldCheck className="w-5 h-5" />
                                </>
                            )}
                        </button>
                        <button 
                            onClick={() => setShowPermissionModal(false)}
                            className="w-full py-4 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] hover:text-slate-600 transition-colors"
                        >
                            Enter Manually
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar - Space List */}
      <aside className="w-full md:w-[450px] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
        {/* Search header inside sidebar */}
        <div className="p-8 space-y-6 border-b border-slate-50 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-black tracking-tight">Nearby Slots</h1>
            {hasPermission && (
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-900/20">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                    Live Location Active
                </div>
            )}
          </div>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search destination..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold focus:ring-4 focus:ring-primary/10 outline-none transition-all"
            />
          </div>
        </div>

        {/* Scrollable list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/30 dark:bg-slate-950/30">
          <div className="px-4 mb-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                {filteredSpaces.length} verified slots found
            </span>
          </div>
          {filteredSpaces.map((space) => (
            <Link key={space.id} href={`/space/${space.id}`} className="block group">
              <div className="parking-card glass p-4 rounded-3xl flex gap-5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-sm hover:border-primary/20">
                <div className="w-32 h-32 overflow-hidden rounded-2xl flex-shrink-0 relative">
                  <div className="absolute top-2 left-2 z-10 px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[8px] font-black text-white uppercase tracking-tighter">
                    {space.id === "1" ? "Closest" : "Verified"}
                  </div>
                  <img src={space.image} alt={space.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{space.title}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        <span className="text-xs font-black">{space.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase tracking-wide mb-3">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span className="truncate w-32">{space.address.split(',')[0]}</span>
                    </div>

                    <div className="flex gap-2">
                      {space.amenities.slice(0, 2).map((a, i) => (
                        <span key={i} className="px-2 py-0.5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-[8px] font-black rounded-md uppercase tracking-widest text-slate-500">{a}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-[8px] text-slate-400 font-black uppercase tracking-tighter">Hourly rate</span>
                      <span className="text-xl font-black text-slate-900 dark:text-white">₹{space.pricePerHour}</span>
                    </div>
                    <div className="px-3 py-1.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest group-hover:bg-primary transition-colors">Book</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </aside>

      {/* Map Placeholder */}
      <main className="hidden md:block flex-1 relative bg-slate-100 dark:bg-slate-950">
        <div className="absolute inset-0 z-0 bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
            {/* Simulated Digital Twin Map */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10 pointer-events-none">
                {Array.from({length: 144}).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-primary" />
                ))}
            </div>

            <div className="text-center z-10 p-12 glass rounded-[60px] max-w-md space-y-8 border-none shadow-2xl bg-white dark:bg-slate-900">
                <div className="w-24 h-24 bg-primary/10 rounded-[35px] flex items-center justify-center mx-auto border border-primary/20">
                    <Layers className="text-primary w-10 h-10" />
                </div>
                <div className="space-y-3">
                    <h2 className="text-3xl font-black tracking-tight">Digital Twin Map</h2>
                    <p className="text-slate-500 font-medium leading-relaxed uppercase text-[10px] tracking-[0.2em]">Platform Visualization Layer</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {filteredSpaces.map((s) => (
                        <motion.div 
                            key={s.id} 
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className={`w-14 h-14 ${s.id === '1' ? 'bg-primary' : 'bg-slate-900'} rounded-2xl flex items-center justify-center text-white shadow-2xl cursor-pointer border-4 border-white dark:border-slate-800 transition-all group overflow-hidden`}>
                                <span className="text-[12px] font-black">₹{s.pricePerHour}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
