
"use client";

import { SubmitEvent } from "react";

async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch("/api/loginpage", {
    method: "POST",

    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify({
      email,
      password,
    }),
  });
const data = await response.json();

alert(data.message);
if (response.ok) {
    window.location.href = `/workspace/${data.workspaceId}`;
}
}

export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-4">

      <div className="w-full max-w-md">

        {/* Project Name */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white tracking-wider">
            LOOP1
          </h1>

          <p className="text-blue-200 mt-2">
            Welcome back
          </p>

        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">

          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-blue-100 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-lg bg-white/10 border border-white/20
                px-4 py-3 text-white placeholder-gray-400
                outline-none focus:border-blue-400
                focus:ring-2 focus:ring-blue-400/30"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-blue-100 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full rounded-lg bg-white/10 border border-white/20
                px-4 py-3 text-white placeholder-gray-400
                outline-none focus:border-blue-400
                focus:ring-2 focus:ring-blue-400/30"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600
              hover:bg-blue-500 active:bg-blue-700
              text-white font-semibold py-3
              transition duration-200 shadow-lg"
            >
              Login
            </button>

          </form>

          {/* Signup Link */}
          <div className="text-center mt-6">

            <p className="text-gray-300 text-sm">
              Don't have an account?
            </p>

            <a
              href="/signup"
              className="inline-block mt-2 text-blue-300
              hover:text-white font-semibold"
            >
              Create an account
            </a>

          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-6">
          © 2026 LOOP1. All rights reserved.
        </p>

      </div>

    </main>
  );
}
