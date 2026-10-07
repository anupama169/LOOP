
"use client";

import { useState, useEffect } from "react";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [loggedIn, setLoggedIn] = useState(false);
  const [dashboardData, setDashboardData] = useState({
    users: 0,
    workspaces: 0,
    feedback: 0,
    themes: 0,
    reports: 0
});

const [loading, setLoading] = useState(true);
useEffect(() => {
    async function checkLoginStatus() {
        try {
            const response = await fetch("/api/auth/status");
            const data = await response.json();

            setLoggedIn(data.loggedIn);
        } catch (error) {
            console.error("Failed to check login status:", error);
        }
    }

    async function fetchDashboardData() {
        try {
            const response = await fetch("/api/dashboard");
            const data = await response.json();

            setDashboardData(data);
        } catch (error) {
            console.error("Failed to fetch dashboard data:", error);
        } finally {
            setLoading(false);
        }
    }

    checkLoginStatus();
    fetchDashboardData();
}, []);

  const menuItems = [
    "Dashboard",
    "Workspaces",
    "Reports",
    "Feedback",
    "Analytics",
    "Settings",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Top Bar */}
      <header className="h-16 border-b border-white/10 bg-slate-900/80 flex items-center justify-between px-6">

        <h1 className="text-2xl font-bold tracking-wider">
          LOOP1
        </h1>
<div className="flex items-center gap-4">

  <button
    className="text-gray-300 hover:text-white text-xl"
    type="button"
  >
    🔔
  </button>

  <button
    type="button"
    onClick={() => {
      window.location.href = "/loginpage";
    }}
    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
  >
    Login
  </button>

  <button
    type="button"
    onClick={() => {
      window.location.href = "/signup";
    }}
    className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-white"
  >
    Signup
  </button>

</div>
        
      </header>


      {/* Main Layout */}
      <div className="flex min-h-[calc(100vh-4rem)]">

        {/* Sidebar */}
        <aside className="w-64 border-r border-white/10 bg-slate-900 p-5">

          <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
            Menu
          </p>

          <nav className="space-y-2">

            {menuItems.map((item) => {

  const protectedItem = item !== "Dashboard";

  return (
    <button
      key={item}
      type="button"
      onClick={() => {
        if (protectedItem && !loggedIn) {
          alert("Please login or signup to access this feature.");
          return;
        }

        setActivePage(item);
      }}
      className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center justify-between ${
        activePage === item
          ? "bg-blue-600 text-white"
          : "text-gray-300 hover:bg-white/10 hover:text-white"
      }`}
    >
      <span>{item}</span>

      {protectedItem && !loggedIn && (
        <span className="text-sm">🔒</span>
      )}
    </button>
  );
})}

          </nav>
         

          

        </aside>


        {/* Dashboard Content */}
        <section className="flex-1 p-8">

          <div className="max-w-7xl mx-auto">

            {/* Page Heading */}
            <div className="mb-8">

              <p className="text-blue-400 text-sm font-medium">
                {activePage}
              </p>

              <h2 className="text-3xl font-bold mt-1">
                Welcome to LOOP1
              </h2>

              <p className="text-gray-400 mt-2">
                Manage your workspace, reports and analytics from one place.
              </p>

            </div>


            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-400 text-sm">
                  Users
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  {loading ? "..." : dashboardData.users}
                </h3>

                <p className="text-green-400 text-sm mt-2">
                  +12% this month
                </p>
              </div>


              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-400 text-sm">
                  Reports
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  {loading ? "..." : dashboardData.feedback}
                </h3>

                <p className="text-blue-400 text-sm mt-2">
                  5 new this week
                </p>
              </div>


              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-400 text-sm">
                  Feedback
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  {loading ? "..." : dashboardData.reports}
                </h3>

                <p className="text-yellow-400 text-sm mt-2">
                  8 awaiting review
                </p>
              </div>

            </div>


            {/* Main Dashboard Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

              {/* Analytics */}
              <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-6">

                <h3 className="text-xl font-semibold">
                  Activity Overview
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Recent activity across your workspace
                </p>


                {/* Simple chart */}
                <div className="mt-8 h-56 flex items-end gap-4">

                  {[40, 65, 45, 80, 60, 90, 70].map((height, index) => (

                    <div
                      key={index}
                      className="flex-1 bg-blue-600/70 hover:bg-blue-500 rounded-t-lg transition"
                      style={{ height: `${height}%` }}
                    />

                  ))}

                </div>

                <div className="flex justify-between text-xs text-gray-500 mt-3">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>

              </div>


              {/* Recent Activity */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">

                <h3 className="text-xl font-semibold">
                  Recent Activity
                </h3>

                <div className="mt-6 space-y-5">

                  <div>
                    <p className="text-sm">
                      New workspace created
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      10 minutes ago
                    </p>
                  </div>


                  <div>
                    <p className="text-sm">
                      New report generated
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      1 hour ago
                    </p>
                  </div>


                  <div>
                    <p className="text-sm">
                      Feedback received
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      3 hours ago
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}

