import React from "react";
import ClockConfigForm from "@/app/components/ClockConfigForm";
import ClockSelector from "@/app/components/Clocks/ClockSelector";

const Clock = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4 text-cyan-700">Your Clock</h1>
        <p className="mb-8 text-gray-600">Choose your style and colors below!</p>
        <div className="w-full space-y-8">
          <ClockConfigForm />
          <ClockSelector />
        </div>
      </div>
    </div>
  );
};

export default Clock;