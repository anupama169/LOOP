"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-3xl font-bold tracking-wider text-blue-400">
            LOOP
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-gray-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <div className="flex gap-3">
            <Link
              href="/loginpage"
              className="rounded-lg border border-white/20 px-4 py-2 hover:bg-white/10"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

        <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          AI Customer Feedback Intelligence Platform
        </span>

        <h2 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
          Transform Customer
          <span className="text-blue-400"> Feedback </span>
          Into Actionable Insights
        </h2>

        <p className="mt-8 max-w-3xl text-lg text-gray-400">
          Project LOOP helps businesses collect, organize and analyze customer
          feedback from multiple channels using Artificial Intelligence.
          Discover sentiment, identify recurring themes, detect emerging trends,
          and make smarter business decisions.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link
            href="/dashboard"
            className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500"
          >
            Launch Dashboard
          </Link>

          <Link
            href="/signup"
            className="rounded-xl border border-white/20 px-8 py-4 text-lg hover:bg-white/10"
          >
            Create Account
          </Link>

        </div>

      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <h3 className="text-center text-4xl font-bold">
          Powerful AI Features
        </h3>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {[
            {
              title: "Sentiment Analysis",
              desc: "Automatically classify customer feedback as positive, neutral or negative."
            },
            {
              title: "Theme Detection",
              desc: "Identify recurring issues and opportunities using AI-powered clustering."
            },
            {
              title: "Trend Analysis",
              desc: "Track customer satisfaction and emerging trends over time."
            },
            {
              title: "Interactive Dashboard",
              desc: "Monitor KPIs and feedback insights from one central location."
            },
            {
              title: "Reports",
              desc: "Generate comprehensive business reports with one click."
            },
            {
              title: "Secure Workspace",
              desc: "Manage multiple organizations securely with role-based access."
            }
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500 hover:bg-white/10"
            >
              <h4 className="text-xl font-semibold text-blue-400">
                {feature.title}
              </h4>

              <p className="mt-3 text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-slate-900 py-20"
      >
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h3 className="text-4xl font-bold">
            Why Project LOOP?
          </h3>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Customer feedback is one of the most valuable assets for every
            organization. Project LOOP centralizes feedback from multiple
            channels and leverages AI to uncover meaningful insights,
            helping businesses improve products, customer experience,
            and overall satisfaction.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-20"
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 px-8 py-16 text-center">

          <h3 className="text-4xl font-bold">
            Ready to Explore Project LOOP?
          </h3>

          <p className="mt-5 text-gray-400">
            Start analyzing customer feedback with AI today.
          </p>

          <Link
            href="/dashboard"
            className="mt-10 inline-block rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-500"
          >
            Open Dashboard
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 Project LOOP • AI Customer Feedback Intelligence Platform
      </footer>

    </main>
  );
}