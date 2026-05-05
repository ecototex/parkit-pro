"use client";
import React, { useState } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, Legend
} from "recharts";
import { Download, Activity, Users, MapPin, TrendingUp, Clock, Star, ClipboardList, Target, AlertTriangle, Search, Filter } from "lucide-react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

// Official Data for Urban Planning
const HOURLY_UTILIZATION = [
  { name: "00:00", occupancy: 12, supply: 100 },
  { name: "04:00", occupancy: 8, supply: 100 },
  { name: "08:00", occupancy: 65, supply: 100 },
  { name: "12:00", occupancy: 92, supply: 100 },
  { name: "16:00", occupancy: 88, supply: 100 },
  { name: "20:00", occupancy: 45, supply: 100 },
  { name: "23:59", occupancy: 15, supply: 100 },
];

const ZONE_DISTRIBUTION = [
  { name: "Core Business District", value: 320, color: "#1e293b" },
  { name: "Residential Zones", value: 450, color: "#334155" },
  { name: "Heritage Protected", value: 72, color: "#64748b" },
];

const PERFORMANCE_INDICATORS = [
  { metric: "Efficiency Index", value: "94.2%", status: "Optimal", color: "text-emerald-600" },
  { metric: "Booking Success", value: "99.8%", status: "High", color: "text-blue-600" },
  { metric: "Avg Wait Time", value: "42s", status: "Low", color: "text-slate-600" },
  { metric: "Revenue Target", value: "102%", status: "Exceeded", color: "text-emerald-700" },
];

const MOCK_TABLE_DATA = [
  { id: "S-001", zone: "MG Road", total: 40, active: 38, occupied: 35, available: 3, rate: "92%" },
  { id: "S-002", zone: "Fort Kochi", total: 25, active: 25, occupied: 12, available: 13, rate: "48%" },
  { id: "S-003", zone: "Marine Drive", total: 60, active: 55, occupied: 50, available: 5, rate: "91%" },
  { id: "S-004", zone: "Lulu Mall Area", total: 100, active: 100, occupied: 88, available: 12, rate: "88%" },
];

export const CityIntelligence = () => {
  const [filter, setFilter] = useState("");

  const generateOfficialReport = () => {
    const doc = new jsPDF() as any;
    const timestamp = new Date().toLocaleString();
    
    // Header
    doc.setFillColor(30, 41, 59); // slate-800
    doc.rect(0, 0, 210, 30, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("CITY PARKING INTELLIGENCE REPORT", 14, 18);
    doc.setFontSize(8);
    doc.text("KERALA SMART URBAN PLANNING DIVISION", 14, 25);
    
    // Body - Summary
    doc.setTextColor(30, 41, 59);
    doc.setFontSize(12);
    doc.text("1. EXECUTIVE SUMMARY", 14, 45);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Report Timestamp: ${timestamp}`, 14, 52);
    doc.text("System Status: Operational - High Efficiency", 14, 58);
    
    // Table - Key Metrics
    const metricsHead = [["Strategic Metric", "Value", "Benchmark Status"]];
    const metricsBody = [
      ["Total Capacity", "842 Slots", "Verified"],
      ["Avg Occupancy Rate", "88.4%", "+2.1% YoY"],
      ["Turnover Rate", "1.4 Vehicles/Slot/Day", "Target: 1.2"],
      ["System Availability", "99.92%", "Service Level Met"],
    ];

    autoTable(doc, {
      startY: 65,
      head: metricsHead,
      body: metricsBody,
      theme: 'grid',
      headStyles: { fillColor: [51, 65, 85] }
    });

    // 2. Zone Analysis
    const finalY1 = (doc as any).lastAutoTable.finalY + 15;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("2. GEOGRAPHIC DISTRIBUTION DATA", 14, finalY1);
    
    autoTable(doc, {
      startY: finalY1 + 7,
      head: [["Zone ID", "District", "Capacity", "Active", "Utilization"]],
      body: MOCK_TABLE_DATA.map(d => [d.id, d.zone, d.total, d.active, d.rate]),
      theme: 'striped',
      headStyles: { fillColor: [71, 85, 105] }
    });

    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for(let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text("Confidential Urban Planning Data - For Official Use Only", 14, 285);
        doc.text(`Page ${i} of ${pageCount}`, 190, 285);
    }

    doc.save(`PARKIT-CITY-REPORT-${new Date().toISOString().split('T')[0]}.pdf`);
  };

  return (
    <section id="intelligence" className="py-24 bg-slate-50 dark:bg-slate-950 px-6 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Official Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-900 dark:bg-slate-100 rounded-full" />
                    <span className="text-slate-500 font-black uppercase text-[12px] tracking-[0.3em]">Urban Mobility Division</span>
                </div>
                <h2 className="text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-none">City Parking Intelligence Report</h2>
                <p className="text-slate-500 font-medium max-w-2xl text-sm leading-relaxed">Official analytical dashboard for urban planning and public transparency. Real-time monitoring of Kochi district infrastructure.</p>
            </div>
            <button 
                onClick={generateOfficialReport}
                className="flex items-center gap-3 px-8 py-5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-700 dark:hover:bg-slate-300 transition-all active:scale-95 shadow-2xl"
                suppressHydrationWarning
            >
                <Download className="w-5 h-5" />
                Generate Official PDF Report
            </button>
        </div>

        {/* 1. Key Metrics Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                { label: "Total Capacity", value: "842", sub: "Slots Verified", icon: MapPin, color: "text-slate-900 dark:text-white" },
                { label: "Active Nodes", value: "812", sub: "Online (96%)", icon: Activity, color: "text-emerald-700 dark:text-emerald-400" },
                { label: "Current Occupancy", value: "682", sub: "81.4% Fill Rate", icon: Target, color: "text-slate-900 dark:text-white" },
                { label: "Bookings Today", value: "1,242", sub: "+12% vs Avg", icon: ClipboardList, color: "text-blue-700 dark:text-blue-400" },
            ].map((stat, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <stat.icon className={`${stat.color} w-5 h-5 opacity-60`} />
                        <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">{stat.label}</span>
                    </div>
                    <div>
                        <p className={`text-4xl font-black ${stat.color}`}>{stat.value}</p>
                        <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-1">{stat.sub}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* 2. Utilization & Demand Analysis */}
        <div className="grid md:grid-cols-3 gap-8">
            {/* Supply vs Demand Line Chart */}
            <div className="md:col-span-2 bg-white dark:bg-slate-900 p-10 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-10">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h4 className="text-xl font-black tracking-tight">System Utilization Profile</h4>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Temporal Analysis (Last 24 Hours)</p>
                    </div>
                    <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest">
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-900 dark:bg-slate-100 rounded-sm" /> Occupancy %</div>
                        <div className="flex items-center gap-2 text-slate-300"><div className="w-3 h-3 bg-slate-100 dark:bg-slate-700 rounded-sm" /> System Cap.</div>
                    </div>
                </div>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={HOURLY_UTILIZATION}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#80808012" />
                            <XAxis 
                                dataKey="name" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{fontSize: 10, fontWeight: 900, fill: "#94a3b8"}} 
                            />
                            <YAxis 
                                hide 
                                domain={[0, 110]}
                            />
                            <Tooltip 
                                contentStyle={{ borderRadius: '4px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}
                            />
                            <Line type="monotone" dataKey="occupancy" stroke="#1e293b" strokeWidth={4} dot={{ r: 4, fill: "#1e293b" }} activeDot={{ r: 6 }} />
                            <Line type="monotone" dataKey="supply" stroke="#e2e8f0" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Performance KPIs */}
            <div className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 p-10 rounded-3xl space-y-8 flex flex-col justify-between">
                <div>
                    <h4 className="text-xl font-black tracking-tight mb-2">KPI Compliance</h4>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Operational Performance</p>
                </div>
                <div className="space-y-8">
                    {PERFORMANCE_INDICATORS.map((kpi, i) => (
                        <div key={i} className="flex items-center justify-between pb-4 border-b border-white/10 dark:border-slate-900/10">
                            <div>
                                <p className="text-[8px] font-black uppercase tracking-widest opacity-40">{kpi.metric}</p>
                                <p className="text-2xl font-black">{kpi.value}</p>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-80">{kpi.status}</span>
                        </div>
                    ))}
                </div>
                <div className="pt-4 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">System Synchronized</span>
                </div>
            </div>
        </div>

        {/* 3. Geographic & Data explorer */}
        <div className="grid md:grid-cols-3 gap-8">
             {/* Pie Chart Distribution */}
             <div className="bg-white dark:bg-slate-900 p-10 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-8">
                <h4 className="text-lg font-black tracking-tight text-center">Infrastructural Distribution</h4>
                <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={ZONE_DISTRIBUTION}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={70}
                                paddingAngle={10}
                                dataKey="value"
                            >
                                {ZONE_DISTRIBUTION.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="space-y-3 font-black">
                    {ZONE_DISTRIBUTION.map((entry, i) => (
                        <div key={i} className="flex justify-between text-[11px] uppercase tracking-widest">
                            <span className="text-slate-400">{entry.name}</span>
                            <span>{entry.value}u</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Data Explorer Table */}
            <div className="md:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
                <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/20">
                    <div className="flex items-center gap-4">
                        <Search className="w-4 h-4 text-slate-400" />
                        <input 
                            placeholder="Filter by zone or district..." 
                            className="bg-transparent border-none outline-none font-bold text-sm"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            suppressHydrationWarning
                        />
                    </div>
                    <button 
                        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-sm"
                        suppressHydrationWarning
                    >
                        <Filter className="w-3 h-3" />
                        Filter
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                            <tr>
                                <th className="px-8 py-5">Node ID</th>
                                <th className="px-8 py-5">Designated Zone</th>
                                <th className="px-8 py-5">Total Cap.</th>
                                <th className="px-8 py-5">Occupancy</th>
                                <th className="px-8 py-5">Index</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-bold divide-y divide-slate-100 dark:divide-slate-800">
                            {MOCK_TABLE_DATA.filter(d => d.zone.toLowerCase().includes(filter.toLowerCase())).map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-8 py-5 text-primary">#{row.id}</td>
                                    <td className="px-8 py-5">{row.zone}</td>
                                    <td className="px-8 py-5">{row.total}</td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                <div 
                                                    className={`h-full ${parseInt(row.rate) > 80 ? 'bg-red-500' : 'bg-slate-900 dark:bg-slate-100'}`} 
                                                    style={{ width: row.rate }} 
                                                />
                                            </div>
                                            <span className="text-[10px]">{row.rate}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-emerald-600">Verified</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* Transparency Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-6 opacity-40 grayscale group hover:grayscale-0 transition-all">
                <span className="text-[10px] font-black tracking-[0.2em] uppercase">Digital India</span>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase">Smart Cities Mission</span>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase">K-DISC Kerala</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                Data provided by aggregated urban sensors and verified providers.
            </div>
        </div>
      </div>
    </section>
  );
};
