import React from "react";
import { Activity, ArrowUpRight, DollarSign } from "lucide-react";

export const DashboardMockup = () => {
  return (
    <div className="w-full rounded-2xl bg-[#030014]/90 border border-white/10 shadow-[var(--shadow-glass)] overflow-hidden backdrop-blur-md">
      {/* Mockup Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-slate-700" />
            <div className="w-3 h-3 rounded-full bg-slate-700" />
            <div className="w-3 h-3 rounded-full bg-slate-700" />
          </div>
          <div className="h-4 w-32 bg-white/10 rounded-full" />
        </div>
        <div className="flex items-center gap-3">
          <div className="h-6 w-24 bg-white/10 rounded-full" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#a855f7] to-[#06b6d4]" />
        </div>
      </div>

      {/* Mockup Body Grid */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Chart Area */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400 mb-1">Total Liquidity</p>
              <h4 className="text-3xl font-heading font-bold text-white">$142,405.00</h4>
            </div>
            <div className="flex items-center gap-1 text-[#06b6d4] bg-[#06b6d4]/10 px-3 py-1.5 rounded-full">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-sm font-medium">+14.5%</span>
            </div>
          </div>
          {/* Faux Chart */}
          <div className="h-48 w-full rounded-xl bg-gradient-to-t from-[#06b6d4]/10 to-transparent border-b border-[#06b6d4]/30 relative flex items-end justify-between px-2">
            {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
              <div
                key={i}
                className="w-1/12 bg-[#06b6d4]/20 rounded-t-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Side Panel Area */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-[#a855f7]/20 text-[#a855f7]">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Network Status</p>
              <p className="text-sm font-medium text-white">Optimal</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-[#06b6d4]/20 text-[#06b6d4]">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">24h Volume</p>
              <p className="text-sm font-medium text-white">$4.2B</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
