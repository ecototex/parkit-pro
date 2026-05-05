"use client";
import React, { useState } from "react";
import { Users, LayoutGrid, DollarSign, Download, PieChart, Activity, ShieldAlert, CheckCircle2, AlertCircle } from "lucide-react";

export default function AdminDashboard() {
  const [exporting, setExporting] = useState(false);

  const handleExport = () => {
    setExporting(true);
    setTimeout(() => {
      setExporting(false);
      alert("Admin PDF Report generated successfully! Stored in artifacts/admin_report.pdf");
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight">Admin Console</h1>
            <p className="text-slate-500 font-medium">Platform overview and system health for Parkit Kerala.</p>
        </div>
        <button 
          onClick={handleExport}
          disabled={exporting}
          className={`flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 ${exporting ? 'bg-slate-200 text-slate-400' : 'bg-primary text-white hover:bg-secondary'}`}
        >
            {exporting ? (
                <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
            ) : (
                <Download className="w-4 h-4" />
            )}
            <span>Export PDF Report</span>
        </button>
      </div>

      {/* Platform Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="glass p-8 rounded-3xl border border-white dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                <Users className="text-blue-600 w-6 h-6" />
            </div>
            <div className="space-y-0.5">
                <h4 className="text-slate-400 font-black uppercase text-[10px] tracking-widest leading-none">Total Users</h4>
                <p className="text-3xl font-black">1,248</p>
                <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold uppercase tracking-widest">+12% this month</div>
            </div>
        </div>
        <div className="glass p-8 rounded-3xl border border-white dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center">
                <DollarSign className="text-emerald-600 w-6 h-6" />
            </div>
            <div className="space-y-0.5">
                <h4 className="text-slate-400 font-black uppercase text-[10px] tracking-widest leading-none">Gross Revenue</h4>
                <p className="text-3xl font-black">₹2.4M</p>
                <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold uppercase tracking-widest">+8.4% this week</div>
            </div>
        </div>
        <div className="glass p-8 rounded-3xl border border-white dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center">
                <LayoutGrid className="text-purple-600 w-6 h-6" />
            </div>
            <div className="space-y-0.5">
                <h4 className="text-slate-400 font-black uppercase text-[10px] tracking-widest leading-none">Total Listings</h4>
                <p className="text-3xl font-black">842</p>
                <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active: 712</div>
            </div>
        </div>
        <div className="glass p-8 rounded-3xl border border-white dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center">
                <Activity className="text-amber-600 w-6 h-6" />
            </div>
            <div className="space-y-0.5">
                <h4 className="text-slate-400 font-black uppercase text-[10px] tracking-widest leading-none">Active Bookings</h4>
                <p className="text-3xl font-black">156</p>
                <div className="flex items-center gap-1 text-[10px] text-amber-600 font-bold uppercase tracking-widest">Peak Load: High</div>
            </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Security / System Health */}
        <div className="col-span-1 space-y-6">
            <h3 className="text-xl font-bold">System Health</h3>
            <div className="glass p-8 rounded-3xl border border-white dark:border-slate-800 shadow-xl space-y-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-bold">API Services</span>
                    </div>
                    <span className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">Stable</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-bold">Payment Gateway</span>
                    </div>
                    <span className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">Online</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-500" />
                        <span className="text-sm font-bold">Verification Queue</span>
                    </div>
                    <span className="text-[10px] font-black uppercase text-amber-500 tracking-widest">12 Pending</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <ShieldAlert className="w-5 h-5 text-blue-500" />
                        <span className="text-sm font-bold">Security Scans</span>
                    </div>
                    <span className="text-[10px] font-black uppercase text-blue-500 tracking-widest">No Issues</span>
                </div>
            </div>
        </div>

        {/* User Activity */}
        <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-bold">Verification Requests</h3>
            <div className="glass rounded-3xl overflow-hidden border border-white dark:border-slate-800 shadow-xl">
                 <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
                        <tr>
                            <th className="px-6 py-4 font-black uppercase text-[10px] text-slate-400 tracking-widest">Requester</th>
                            <th className="px-6 py-4 font-black uppercase text-[10px] text-slate-400 tracking-widest">Location</th>
                            <th className="px-6 py-4 font-black uppercase text-[10px] text-slate-400 tracking-widest">Docs</th>
                            <th className="px-6 py-4 font-black uppercase text-[10px] text-slate-400 tracking-widest text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                        {[1, 2, 3].map((i) => (
                            <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900 group">
                                <td className="px-6 py-6">
                                    <p className="font-bold text-sm tracking-tight">Kochi Mall Annex</p>
                                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Owner: Rahul V.</p>
                                </td>
                                <td className="px-6 py-6">
                                    <p className="font-bold text-sm text-slate-600 dark:text-slate-400 tracking-tight">Edappally, Kochi</p>
                                </td>
                                <td className="px-6 py-6">
                                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-blue-600">3 Files</span>
                                </td>
                                <td className="px-6 py-6 text-right">
                                    <div className="flex gap-2 justify-end">
                                        <button className="px-4 py-2 bg-emerald-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600">Approve</button>
                                        <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200">View</button>
                                    </div>
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
