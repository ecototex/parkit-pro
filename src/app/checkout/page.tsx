"use client";
import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { MOCK_SPACES } from "@/lib/mock-data";
import { CreditCard, ShieldCheck, Lock, ChevronLeft, CreditCard as CardIcon } from "lucide-react";
import Link from "next/link";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");
  const hours = searchParams.get("hours");
  const total = searchParams.get("total");
  const space = MOCK_SPACES.find((s) => s.id === id);

  const [loading, setLoading] = useState(false);

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard/driver");
    }, 2000);
  };

  if (!space) return <div className="p-12 text-center text-2xl font-bold">Checkout invalid!</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
      <div className="flex-1 space-y-8 animate-in slide-in-from-left-5 duration-500">
        <Link href={`/space/${id}`} className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest mb-4">
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Space</span>
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight">Booking Summary</h1>

        <div className="glass bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          <div className="flex gap-4">
            <div className="w-24 h-24 overflow-hidden rounded-2xl flex-shrink-0">
                <img src={space.image} className="w-full h-full object-cover" />
            </div>
            <div>
                <h3 className="text-xl font-bold mb-1">{space.title}</h3>
                <p className="text-slate-500 text-sm font-medium">{space.address}</p>
                <div className="flex items-center gap-2 mt-2">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold uppercase tracking-wider">DuratIon: {hours} hrs</span>
                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/10 rounded-full text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Confirmed Slot</span>
                </div>
            </div>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-4">
            <h4 className="font-bold flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-500" />
                Payment Method (Secure)
            </h4>
            <div className="p-4 border-2 border-primary bg-primary/5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <CardIcon className="text-primary w-6 h-6" />
                    <div>
                        <p className="font-bold text-sm">Cards, UPI, Netbanking</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Powered by Razorpay</p>
                    </div>
                </div>
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[350px]">
        <div className="glass bg-slate-50 dark:bg-slate-950 sticky top-24 p-8 rounded-3xl space-y-8 shadow-2xl border border-slate-200 dark:border-slate-800 animate-in slide-in-from-right-5 duration-700">
          <h2 className="text-xl font-bold">Total Payable</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Base Amount</span>
                <span className="font-bold">₹{parseInt(total!) - 10}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Service Fee</span>
                <span className="font-bold">₹10</span>
            </div>
            <div className="flex justify-between items-center pt-4">
                <span className="text-2xl font-black">₹{total}</span>
            </div>
          </div>

          <button 
            disabled={loading}
            onClick={handlePay}
            className={`w-full py-5 rounded-2xl text-lg font-black tracking-tight flex items-center justify-center gap-3 shadow-xl transition-all ${loading ? 'bg-slate-300 dark:bg-slate-700' : 'bg-primary text-white hover:bg-secondary hover:shadow-2xl active:scale-95'}`}
          >
            {loading ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
                <>
                <span>Pay via Razorpay</span>
                <CreditCard className="w-5 h-5" />
                </>
            )}
          </button>
          
          <div className="flex items-start gap-2 bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
            <ShieldCheck className="text-emerald-500 w-5 h-5 flex-shrink-0" />
            <p className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest leading-relaxed">Safety First: Payments are held in escrow until booking is completed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xl font-bold">Loading Checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
