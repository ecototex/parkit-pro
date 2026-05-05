"use client";
import React from "react";
import { Plus, TrendingUp, TrendingDown, Users, DollarSign, Edit3, Trash2, MapPin, ChevronRight, PlusCircle } from "lucide-react";
import Link from "next/link";
import { MOCK_SPACES } from "@/lib/mock-data";
import { motion } from "framer-motion";

export default function OwnerDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-3">
            <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Strategic Assets</span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Owner Dashboard</h1>
            <p className="text-slate-500 font-medium">Manage your parking infrastructure in the New Keralam model.</p>
        </div>
        
        <Link 
            href="/owner/new"
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 px-10 py-5 rounded-[25px] text-xs font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all active:scale-95 shadow-2xl shadow-emerald-500/10 group"
        >
            <PlusCircle className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            List New Space Now
        </Link>
      </div>

      {/* Revenue Snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
            { label: "Monthly Revenue", value: "₹42,800", trend: "+12.5%", icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-500/5" },
            { label: "Total Bookings", value: "156", trend: "+5.2%", icon: Users, color: "text-blue-600", bg: "bg-blue-500/5" },
            { label: "Avg Occupancy", value: "94%", trend: "-2.1%", icon: Edit3, color: "text-amber-600", bg: "bg-amber-500/5" },
            { label: "Active Assets", value: "3", trend: "Stable", icon: Plus, color: "text-purple-600", bg: "bg-purple-500/5" }
        ].map((stat, i) => (
            <div key={i} className="glass bg-slate-50 dark:bg-slate-950 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg space-y-4 relative overflow-hidden group">
                <div className={`absolute top-0 right-0 w-32 h-32 ${stat.bg} rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-110 transition-transform`} />
                <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-inner">
                        <stat.icon className={`${stat.color} w-6 h-6`} />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${stat.trend.includes('+') ? 'text-emerald-600' : stat.trend === 'Stable' ? 'text-slate-400' : 'text-red-600'}`}>
                        {stat.trend}
                    </span>
                </div>
                <div className="space-y-1">
                    <h4 className="text-slate-400 font-black uppercase text-[10px] tracking-widest leading-none">{stat.label}</h4>
                    <p className="text-3xl font-black tracking-tight">{stat.value}</p>
                </div>
            </div>
        ))}
      </div>

      <div className="space-y-10">
        <h3 className="text-2xl font-black tracking-tight">Active Infrastructure</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_SPACES.slice(0, 3).map((space) => (
                <div key={space.id} className="glass bg-slate-50 dark:bg-slate-950 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
                    <div className="h-60 relative overflow-hidden">
                        <div className="absolute top-6 left-6 z-10 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-widest border border-white/20">
                            PK-0{space.id}
                        </div>
                        <img src={space.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                    <div className="p-10 space-y-8">
                        <div className="space-y-2">
                            <h4 className="text-2xl font-black text-slate-800 dark:text-white leading-none tracking-tighter">{space.title}</h4>
                            <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span className="truncate">{space.address}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pricing</p>
                                <p className="text-2xl font-black">₹{space.pricePerHour}<span className="text-[10px] text-slate-400 ml-1">/hr</span></p>
                            </div>
                            <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Capacity</p>
                                <p className="text-2xl font-black">{space.slots}<span className="text-[10px] text-slate-400 ml-1">slots</span></p>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                                <Edit3 className="w-4 h-4" />
                                Modify
                            </button>
                            <button className="p-4 bg-red-50 text-red-600 dark:bg-red-900/10 rounded-2xl hover:bg-red-600 hover:text-white transition-colors">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
