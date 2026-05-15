import React from 'react';
import { Calendar, ArrowRight, Radio } from 'lucide-react';
import meetLogo from '../components/ui/meet_logo.png';

const liveClassesData = [
  {
    id: 1,
    title: "Programming with Python Beginner to Advanced",
    time: "Today 9:00 AM",
    isLive: true,
  },
  {
    id: 2,
    title: "Data Structures & Algorithms Mastery",
    time: "Today 12:00 PM",
    isLive: true,
  }
];

const LiveClasses: React.FC = () => {
  return (
    <div className="">
      <h1 className="text-[22px] font-bold text-white mb-6">Live Classes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveClassesData.map((cls) => (
          <div
            key={cls.id}
            className="bg-[#12141a] border border-[#1e222a] rounded-[20px] p-6 flex flex-col relative overflow-hidden group shadow-lg"
          >
            {/* Live Badge */}
            <div className="flex items-center gap-1.5 bg-[#ef44441a] text-red-500 text-[11px] font-semibold px-2 py-1 rounded w-max mb-5">
              <Radio className="w-3 h-3 animate-pulse" />
              Live
            </div>

            <div className="flex justify-between items-start mb-6">
              <div className="pr-4">
                <h3 className="text-white font-medium text-[15px] leading-snug mb-3 max-w-[200px]">
                  {cls.title}
                </h3>
                <div className="flex items-center text-gray-400 text-[12px] font-medium">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 opacity-70" />
                  {cls.time}
                </div>
              </div>

              {/* Google Meet icon replacement with border */}
              <div className="flex items-center justify-center w-[46px] h-[46px] rounded-full border-[3px] border-[#1e222a] shrink-0 bg-[#0f1115] shadow-sm overflow-hidden">
                <img src={meetLogo} alt="Meet Logo" className="w-[38px] h-[38px] object-contain" />
              </div>
            </div>

            {/* Join Button */}
            <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium text-[13px] py-2.5 rounded-lg flex items-center justify-center transition-all duration-200 mt-auto">
              Join Class
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveClasses;
