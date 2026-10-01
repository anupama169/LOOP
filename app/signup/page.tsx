
"use client";

import { SubmitEvent } from "react";

async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const name = formData.get("name");
  const email = formData.get("email");
  const passwordHash = formData.get("password1");
  const confirmpassword = formData.get("confirmpassword");

  if (passwordHash !== confirmpassword) {
    alert("Passwords do not match");
    return;
  }

  const response = await fetch("/api/signup", {
    method: "POST",

    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify({
      name,
      email,
      passwordHash,
      role: "viewer",
    }),
  });

  const data = await response.json();

  alert(data.message);
}

export default function Signup() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-4">

      <div className="w-full max-w-md">

        {/* Project Name */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white tracking-wider">
            LOOP1
          </h1>

          <p className="text-blue-200 mt-2">
            Create your account
          </p>

        </div>

        {/* Signup Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">

          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-blue-100 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full rounded-lg bg-white/10 border border-white/20
                px-4 py-3 text-white placeholder-gray-400
                outline-none focus:border-blue-400
                focus:ring-2 focus:ring-blue-400/30"
              />
            </div>

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
                name="password1"
                placeholder="Create a password"
                required
                className="w-full rounded-lg bg-white/10 border border-white/20
                px-4 py-3 text-white placeholder-gray-400
                outline-none focus:border-blue-400
                focus:ring-2 focus:ring-blue-400/30"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-blue-100 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmpassword"
                placeholder="Confirm your password"
                required
                className="w-full rounded-lg bg-white/10 border border-white/20
                px-4 py-3 text-white placeholder-gray-400
                outline-none focus:border-blue-400
                focus:ring-2 focus:ring-blue-400/30"
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600
              hover:bg-blue-500 active:bg-blue-700
              text-white font-semibold py-3
              transition duration-200 shadow-lg"
            >
              Create Account
            </button>

          </form>

          {/* Login Link */}
          <div className="text-center mt-6">

            <p className="text-gray-300 text-sm">
              Already have an account?
            </p>

            <a
              href="/loginpage"
              className="inline-block mt-2 text-blue-300
              hover:text-white font-semibold"
            >
              Login here
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

