import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 flex flex-col items-center justify-center px-6 text-center">
      {!showLogin ? (
        <>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Make your planning easy with <span className="text-green-500">Kolega</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-green-300 max-w-xl">
            Kolega helps teams schedule shifts effortlessly. See who’s on duty, assign roles, and stay in sync — all in one place.
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition"
            onClick={() => setShowLogin(true)}
          >
            Start using the app
          </button>
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

function LoginForm() {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-xs">
      <h2 className="text-2xl font-bold mb-4 text-green-400">Login</h2>
      <p className="text-green-300 mb-6 text-center">Sign in to access your team's shift calendar</p>
      {/* This button will be replaced with Google login next */}
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition w-full mb-2">
        Login with Google
      </button>
    </div>
  );
}

export default App;
