import { useState } from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-green-400 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Make your planning easy with <span className="text-green-500">Kolega</span>
      </h1>
      <p className="text-lg md:text-xl mb-10 text-green-300 max-w-xl">
        Kolega helps teams schedule shifts effortlessly. See who’s on duty, assign roles, and stay in sync — all in one place.
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition">
        Start using the app
      </button>
    </div>
  );
}

export default App;
