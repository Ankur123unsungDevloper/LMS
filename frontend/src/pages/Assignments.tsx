import React from 'react';
import { ClipboardCheck, FileText } from 'lucide-react';

const Assignments: React.FC = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-white mb-6">Assignments</h1>
      
      <div className="bg-[#181c31] w-80 rounded-[24px] p-5 border border-gray-800/50 shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full border border-green-500/30 flex items-center justify-center">
              <ClipboardCheck className="w-3.5 h-3.5 text-green-400" />
            </div>
            <span className="text-white text-[11px] font-bold tracking-wider">ASSIGNMENTS</span>
          </div>
          <span className="bg-[#1c3a2f] text-green-400 text-[10px] px-2.5 py-1 rounded-full font-medium">
            3 Pending
          </span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-7 h-7 text-blue-400 stroke-[1.5]" />
          <div>
            <h3 className="text-white font-medium text-sm">React Project</h3>
            <p className="text-gray-400 text-[11px] mt-0.5">May 10,2026</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-1.5 bg-white rounded-full overflow-hidden">
            <div className="h-full bg-green-400 rounded-full" style={{ width: '60%' }}></div>
          </div>
          <span className="text-white text-xs font-semibold">60%</span>
        </div>

        <button className="w-full bg-[#3b82f6] hover:bg-blue-600 text-white py-2.5 rounded-xl text-sm font-medium transition-colors">
          View All Assignments
        </button>
      </div>
    </div>
  );
};

export default Assignments;
