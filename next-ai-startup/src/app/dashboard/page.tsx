import { Activity, Zap, HardDrive, Cpu } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Welcome back, Developer</h1>
        <p className="text-zinc-400 mt-1">Here is what's happening with your compute resources.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "API Calls (24h)", value: "1.2M", icon: Activity, trend: "+12%" },
          { label: "Tokens Used", value: "845M", icon: Zap, trend: "+5%" },
          { label: "Storage", value: "1.4 TB", icon: HardDrive, trend: "Stable" },
          { label: "Active Models", value: "4", icon: Cpu, trend: "-1" }
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
            <div className="flex items-center justify-between text-zinc-400 mb-4">
              <span className="font-medium text-sm">{stat.label}</span>
              <stat.icon size={16} />
            </div>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold">{stat.value}</span>
              <span className="text-xs font-medium text-[#32CD32]">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 border border-zinc-800 bg-zinc-900/50 rounded-xl p-6 h-96 flex flex-col">
           <h2 className="text-lg font-bold mb-4">Compute Usage</h2>
           <div className="flex-1 flex items-end gap-2 pt-4">
             {Array.from({length: 24}).map((_, i) => (
                <div key={i} className="flex-1 bg-[#32CD32]/20 hover:bg-[#32CD32]/40 rounded-t-sm transition-all" style={{height: `${Math.random() * 80 + 20}%`}}></div>
             ))}
           </div>
        </div>
        <div className="border border-zinc-800 bg-zinc-900/50 rounded-xl p-6 h-96">
           <h2 className="text-lg font-bold mb-4">Recent Inferences</h2>
           <div className="space-y-4">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="flex justify-between items-center pb-4 border-b border-zinc-800 last:border-0">
                  <div>
                    <div className="font-medium text-sm text-zinc-200">nexus-vision-v2</div>
                    <div className="text-xs text-zinc-500">2 mins ago</div>
                  </div>
                  <div className="text-sm font-mono text-[#32CD32]">200 OK</div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  )
}