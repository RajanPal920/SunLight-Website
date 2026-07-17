import React from "react";

import { ShieldCheck } from "lucide-react";

const Quality = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-32 px-4">
      <div className="max-w-2xl w-full text-center flex flex-col items-center gap-6">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#46127B]/8 border border-[#46127B]/15">
          <ShieldCheck size={14} className="text-[#46127B]" />
          <span className="font-poppins font-semibold text-xs uppercase tracking-widest text-[#46127B]">
            Quality & Certifications
          </span>
        </span>
        <h1 className="font-poppins font-bold text-4xl md:text-5xl text-[#46127B] leading-tight">
          Quality &amp; Certifications
        </h1>
        <div className="flex gap-1.5 justify-center">
          <span className="block h-1 w-10 rounded-full bg-[#46127B]" />
          <span className="block h-1 w-4 rounded-full bg-[#03A58D]" />
        </div>
        <p className="font-poppins text-lg text-[#1F2430]/50 mt-2">
          Content coming soon.
        </p>
      </div>
    </div>
  );
};

export default Quality;
