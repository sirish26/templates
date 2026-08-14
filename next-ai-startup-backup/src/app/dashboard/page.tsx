import { ArrowUpRight, ArrowDownRight, Activity, Users, DollarSign } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { label: "Total Revenue", value: "$45,231.89", icon: DollarSign, trend: "+20.1%", positive: true },
           { label: "Active Users", value: "2,350", icon: Users, trend: "+15.2%", positive: true },
           { label: "API Calls", value: "1.2M", icon: Activity, trend: "-2.4%", positive: false }
         ].map((metric, i) => (
           <div key={i} className="glass-panel p-6 rounded-2xl border-t border-l border-white/10">
             <div className="flex justify-between items-start mb-4 text-white/60">
               <span className="font-medium">{metric.label}</span>
               <metric.icon size={20} />
             </div>
             <div className="text-4xl font-bold mb-2">{metric.value}</div>
             <div className={`flex items-center text-sm font-medium ${metric.positive ? 'text-emerald-400' : 'text-red-400'}`}>
               {metric.positive ? <ArrowUpRight size={16} className="mr-1"/> : <ArrowDownRight size={16} className="mr-1"/>}
               {metric.trend} from last month
             </div>
           </div>
         ))}
      </div>
      
      {/* Content Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl h-96 flex flex-col">
          <h3 className="text-xl font-bold mb-6">Revenue History</h3>
          <div className="flex-1 flex items-end gap-2 px-4 pb-4">
             {[30, 45, 25, 60, 75, 40, 90, 85, 100, 70, 80, 95].map((h, i) => (
               <div key={i} className="flex-1 bg-gradient-to-t from-blue-600/50 to-blue-400 rounded-t-md relative group hover:from-blue-500 hover:to-blue-300 transition-all cursor-pointer" style={{height: `${h}%`}}>
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">${h}k</div>
               </div>
             ))}
          </div>
        </div>
        
        <div className="glass-panel p-6 rounded-2xl flex flex-col">
          <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
          <div className="space-y-6 flex-1">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                   <Users size={16} className="text-white/60" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <div className="font-medium truncate">New user registered</div>
                   <div className="text-sm text-white/40 truncate">john.doe@example.com</div>
                 </div>
                 <div className="text-xs text-white/40">2m ago</div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  )
}