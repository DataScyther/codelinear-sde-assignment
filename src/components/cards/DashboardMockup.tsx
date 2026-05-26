import React from "react";
import { Activity, ArrowUpRight, DollarSign, TrendingUp } from "lucide-react";

// Intentionally irregular bar heights to mimic real trading volume data.
// Pattern: gradual uptrend with natural dips — not mathematically smooth.
const chartBars = [
  28, 34, 22, 45, 38, 52, 41, 63, 55, 48,
  70, 58, 75, 62, 80, 68, 85, 72, 90, 78,
  88, 82, 95, 87,
];

export const DashboardMockup = () => {
  return (
    <div className="w-full rounded-2xl bg-[#030014]/90 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 md:px-5 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
          </div>
          <div className="h-3 w-24 bg-white/[0.04] rounded" />
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block h-4 w-16 bg-white/[0.04] rounded" />
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#a855f7] to-[#06b6d4]" />
        </div>
      </div>

      {/* Dashboard body */}
      <div className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Chart area */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] text-slate-500 mb-0.5 uppercase tracking-wider">
                Total Liquidity
              </p>
              <h4 className="text-xl md:text-2xl font-heading font-bold text-white tabular-nums">
                $142,405.00
              </h4>
            </div>
            <div className="flex items-center gap-1 text-[#06b6d4] bg-[#06b6d4]/[0.08] px-2 py-0.5 rounded-full">
              <ArrowUpRight className="w-3 h-3" />
              <span className="text-[11px] font-medium">+14.5%</span>
            </div>
          </div>

          {/* Chart with axes */}
          <div className="flex gap-2.5">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between text-[9px] text-slate-600 font-mono h-32 md:h-36 pb-2.5 select-none text-right w-8">
              <span>$150k</span>
              <span>$100k</span>
              <span>$50k</span>
              <span>$0</span>
            </div>

            <div className="flex-1 space-y-1.5">
              {/* Chart container */}
              <div className="h-32 md:h-36 w-full rounded-lg relative">
                {/* Horizontal grid hints */}
                <div className="absolute inset-0 flex flex-col justify-between py-1 pointer-events-none">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="w-full h-px bg-white/[0.03]" />
                  ))}
                </div>

                {/* Bars */}
                <div className="relative h-full flex items-end gap-px px-0.5">
                  {chartBars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#06b6d4]/[0.18] hover:bg-[#06b6d4]/30 rounded-t-[1px] transition-colors"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* X-axis labels */}
              <div className="flex justify-between text-[9px] text-slate-600 font-mono select-none px-1">
                <span>08:00 AM</span>
                <span>12:00 PM</span>
                <span>04:00 PM</span>
                <span>08:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Side widgets - distributed evenly to balance the left column height on desktop */}
        <div className="flex flex-col justify-between gap-3 md:gap-0">
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
              className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-3"
            >
              <div
                className="p-1.5 rounded-md"
                style={{ backgroundColor: `${widget.color}10` }}
              >
                <widget.icon
                  className="w-3.5 h-3.5"
                  style={{ color: widget.color }}
                />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-slate-500 leading-none mb-1.5">
                  {widget.label}
                </p>
                <p className="text-[13px] font-medium text-white leading-none tabular-nums">
                  {widget.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
