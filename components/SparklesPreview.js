"use client";
import React from "react";
import DotGrid from './DotGrid'

export function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md relative">
      {/* Background DotGrid */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={12}
          gap={18}
          baseColor="#4C1D95"
          activeColor="#06FFA5"
          proximity={150}
          speedTrigger={100}
          shockRadius={250}
          shockStrength={5}
          maxSpeed={5000}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Acme
      </h1>
    </div>
  );
}

export function SparklesPreviewDark() {
  return (
    <div className="h-[40rem] relative w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* Background DotGrid */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={12}
          gap={18}
          baseColor="#4C1D95"
          activeColor="#06FFA5"
          proximity={150}
          speedTrigger={100}
          shockRadius={250}
          shockStrength={5}
          maxSpeed={5000}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Build faster
      </h1>
    </div>
  );
}

export function SparklesPreviewColorful() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* Background DotGrid */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={12}
          gap={18}
          baseColor="#4C1D95"
          activeColor="#06FFA5"
          proximity={150}
          speedTrigger={100}
          shockRadius={250}
          shockStrength={5}
          maxSpeed={5000}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 relative z-20">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          The Future
        </h1>
        <p className="text-neutral-300 cursor-default text-center">
          is brighter than you think
        </p>
      </div>
    </div>
  );
}
