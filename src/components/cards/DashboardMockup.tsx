import React from "react";
import { Activity, ArrowUpRight, DollarSign, TrendingUp } from "lucide-react";

export const DashboardMockup = () => {
  return (
    <div className="w-full rounded-2xl bg-[#030014]/90 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-white/[0.03]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="h-3.5 w-28 bg-white/[0.06] rounded-full" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-20 bg-white/[0.06] rounded-full" />
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#a855f7] to-[#06b6d4]" />
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Main chart */}
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">
                Total Liquidity
              </p>
              <h4 className="text-2xl md:text-3xl font-heading font-bold text-white tabular-nums">
                $142,405.00
              </h4>
            </div>
            <div className="flex items-center gap-1 text-[#06b6d4] bg-[#06b6d4]/10 px-2.5 py-1 rounded-full">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">+14.5%</span>
            </div>
          </div>

          {/* Bar chart */}
          <div className="h-40 md:h-44 w-full rounded-xl bg-gradient-to-t from-[#06b6d4]/[0.06] to-transparent border-b border-[#06b6d4]/20 relative flex items-end gap-[3%] px-3">
            {[35, 55, 42, 78, 60, 72, 88, 50, 65, 82, 70, 95].map(
              (h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#06b6d4]/20 rounded-t-sm transition-all hover:bg-[#06b6d4]/35"
                  style={{ height: `${h}%` }}
                />
              )
            )}
          </div>
        </div>

        {/* Side widgets */}
        <div className="space-y-3">
          {[
            {
              icon: Activity,
              color: "#a855f7",
              label: "Network Status",
              value: "Operational",
            },
            {
              icon: DollarSign,
              color: "#06b6d4",
              label: "24h Volume",
              value: "$4.2B",
            },
            {
              icon: TrendingUp,
              color: "#3b82f6",
              label: "Active Pools",
              value: "1,247",
            },
          ].map((widget) => (
            <div
              key={widget.label}
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3"
            >
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: `${widget.color}15` }}
              >
                <widget.icon
                  className="w-4 h-4"
                  style={{ color: widget.color }}
                />
              </div>
              <div>
                <p className="text-[11px] text-slate-500">{widget.label}</p>
                <p className="text-sm font-medium text-white">{widget.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
