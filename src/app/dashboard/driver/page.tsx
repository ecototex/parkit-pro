"use client";
import React from "react";
import { MOCK_BOOKINGS } from "@/lib/mock-data";
import { Car, Clock, ShieldCheck, Download, History, MapPin, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function DriverDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight">Driver Dashboard</h1>
            <p className="text-slate-500 font-medium">Hello, Guest Driver. Manage your active sessions and view history.</p>
        </div>
        <div className="flex gap-4">
            <Link href="/search" className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl text-sm font-bold hover:shadow-xl transition-all active:scale-95">
                <Car className="w-4 h-4" />
                Find New Space
            </Link>
        </div>
      </div>

      {/* Analytics Summary */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="glass p-6 rounded-3xl border border-white dark:border-slate-800 shadow-lg space-y-4">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-blue-600 w-5 h-5" />
            </div>
            <div className="space-y-0.5">
                <h4 className="text-slate-400 font-black uppercase text-[10px] tracking-widest leading-none">Total Bookings</h4>
                <p className="text-3xl font-black">24</p>
            </div>
        </div>
        <div className="glass p-6 rounded-3xl border border-white dark:border-slate-800 shadow-lg space-y-4">
            <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center">
                <Clock className="text-amber-600 w-5 h-5" />
            </div>
             <div className="space-y-0.5">
                <h4 className="text-slate-400 font-black uppercase text-[10px] tracking-widest leading-none">Active Session</h4>
                <p className="text-3xl font-black">1</p>
            </div>
        </div>
        <div className="glass p-6 rounded-3xl border border-white dark:border-slate-800 shadow-lg space-y-4">
            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                <MapPin className="text-emerald-600 w-5 h-5" />
            </div>
            <div className="space-y-0.5">
                <h4 className="text-slate-400 font-black uppercase text-[10px] tracking-widest leading-none">Points Earned</h4>
                <p className="text-3xl font-black">120</p>
            </div>
        </div>
        <div className="glass p-6 rounded-3xl border border-white dark:border-slate-800 shadow-lg space-y-4">
             <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <History className="text-purple-600 w-5 h-5" />
            </div>
            <div className="space-y-0.5">
                <h4 className="text-slate-400 font-black uppercase text-[10px] tracking-widest leading-none">Total Spent</h4>
                <p className="text-3xl font-black">₹4,200</p>
            </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Active Booking Card */}
        <div className="col-span-1 space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Active Session
            </h3>
            <div className="glass p-8 rounded-3xl bg-primary text-white shadow-2xl space-y-8 relative overflow-hidden border-none animate-in zoom-in-95 duration-700">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                <div className="space-y-1">
                    <h2 className="text-2xl font-black tracking-tight leading-tight">MG Road Premium Parking</h2>
                    <p className="text-blue-100 text-xs font-bold uppercase tracking-widest opacity-80">Slot-32 / Floor-2</p>
                </div>
                
                <div className="flex justify-between items-center py-6 border-y border-white/10">
                    <div className="text-center space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Status</p>
                        <p className="font-extrabold">In Progress</p>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="text-center space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Remaining</p>
                        <p className="font-extrabold">01:45:22</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <button className="w-full py-4 bg-white text-primary rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/90 active:scale-95 transition-all shadow-lg">Get Entry Pass</button>
                    <button className="w-full py-4 bg-transparent border border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/5 active:scale-95 transition-all">Extend Time</button>
                </div>
            </div>
        </div>

        {/* History Table */}
        <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">Recent History</h3>
            <div className="glass rounded-3xl overflow-hidden border border-white dark:border-slate-800 shadow-xl">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
                        <tr>
                            <th className="px-6 py-4 font-black uppercase text-[10px] text-slate-400 tracking-widest">Space</th>
                            <th className="px-6 py-4 font-black uppercase text-[10px] text-slate-400 tracking-widest">Date</th>
                            <th className="px-6 py-4 font-black uppercase text-[10px] text-slate-400 tracking-widest">Status</th>
                            <th className="px-6 py-4 font-black uppercase text-[10px] text-slate-400 tracking-widest text-right">Amount</th>
                            <th className="px-6 py-4 font-black uppercase text-[10px] text-slate-400 tracking-widest text-right">Invoice</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                        {MOCK_BOOKINGS.map((booking, i) => (
                            <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900 group">
                                <td className="px-6 py-6">
                                    <p className="font-bold text-sm tracking-tight">{booking.spaceTitle}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">ID: {booking.id}</p>
                                </td>
                                <td className="px-6 py-6">
                                    <p className="font-bold text-sm text-slate-600 dark:text-slate-400 tracking-tight">{booking.date}</p>
                                </td>
                                <td className="px-6 py-6">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${booking.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="px-6 py-6 text-right font-black">₹{booking.amount}</td>
                                <td className="px-6 py-6 text-right">
                                    <button className="p-2 transition-all hover:text-primary active:scale-90">
                                        <Download className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
}
