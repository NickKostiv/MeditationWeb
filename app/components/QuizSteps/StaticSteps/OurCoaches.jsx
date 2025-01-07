import React from "react";

export default function OurCoaches({ onContinue }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Our Coaches</h1>
      <p className="mb-8">Learn more about our amazing coaches...</p>
      <button
        onClick={onContinue}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
        Continue
      </button>
    </div>
  );
}
