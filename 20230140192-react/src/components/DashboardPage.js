import React from "react";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 p-6">

      <div className="bg-white/80 backdrop-blur-md p-12 rounded-2xl shadow-xl border border-green-100 text-center w-full max-w-lg animate-fadeIn">

        {/* Title */}
        <h1 className="text-4xl font-bold text-green-700 drop-shadow-sm mb-4">
          Login Berhasil
        </h1>

        {/* Decorative line */}
        <div className="h-1 w-20 bg-green-500 mx-auto rounded-full mb-8"></div>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-10">
        Have a nice day! ^_______^
        </p>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="py-3 px-10 bg-red-500 text-white font-semibold text-lg rounded-xl shadow-md hover:scale-105 hover:bg-red-600 active:scale-95 transition-all duration-200">
          Logout
        </button>
      </div>

      {/* Animasi */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default DashboardPage;
