"use client";

import {
  Bell,
  ChevronDown,
  CreditCard,
  DollarSign,
  LayoutDashboard,
  Menu,
  Package,
  Search,
  Settings,
  ShoppingCart,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const stats = [
  {
    title: "Total Revenue",
    value: "₹84,200",
    change: "+12.5%",
    icon: DollarSign,
    color: "bg-blue-500",
  },
  {
    title: "Total Users",
    value: "12,840",
    change: "+8.2%",
    icon: Users,
    color: "bg-violet-500",
  },
  {
    title: "Total Orders",
    value: "1,284",
    change: "+18.4%",
    icon: ShoppingCart,
    color: "bg-emerald-500",
  },
  {
    title: "Products",
    value: "548",
    change: "+4.6%",
    icon: Package,
    color: "bg-orange-500",
  },
];

const orders = [
  {
    customer: "Rahul Sharma",
    product: "MacBook Pro",
    amount: "₹1,49,999",
    status: "Completed",
  },
  {
    customer: "Priya Reddy",
    product: "iPhone 17 Pro",
    amount: "₹1,34,900",
    status: "Completed",
  },
  {
    customer: "Arjun Kumar",
    product: "AirPods Pro",
    amount: "₹24,900",
    status: "Pending",
  },
  {
    customer: "Sneha Patel",
    product: "iPad Air",
    amount: "₹64,900",
    status: "Completed",
  },
  {
    customer: "Vikram Singh",
    product: "Apple Watch",
    amount: "₹49,900",
    status: "Cancelled",
  },
];

const chartData = [45, 60, 48, 75, 65, 85, 72, 92, 78, 88, 76, 96];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-slate-950 text-white transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-800 px-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">LOOP</h1>
            <p className="text-xs text-slate-400">Admin Dashboard</p>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 hover:bg-slate-800 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="space-y-2 p-4">
          <NavItem icon={LayoutDashboard} label="Dashboard" active />
          <NavItem icon={TrendingUp} label="Analytics" />
          <NavItem icon={Users} label="Customers" />
          <NavItem icon={Package} label="Products" />
          <NavItem icon={ShoppingCart} label="Orders" />
          <NavItem icon={CreditCard} label="Payments" />

          <div className="my-6 border-t border-slate-800" />

          <NavItem icon={Settings} label="Settings" />
        </nav>

        <div className="absolute bottom-0 w-full border-t border-slate-800 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-slate-900 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-semibold">
              A
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">Admin User</p>
              <p className="truncate text-xs text-slate-400">
                admin@example.com
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur md:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
            >
              <Menu size={22} />
            </button>

            <div>
              <h2 className="text-xl font-bold md:text-2xl">Dashboard</h2>
              <p className="hidden text-sm text-slate-500 sm:block">
                Welcome back! Here's what's happening today.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Search */}
            <div className="hidden items-center rounded-xl border border-slate-200 bg-slate-50 px-3 md:flex">
              <Search size={18} className="text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search orders..."
                className="w-48 bg-transparent px-2 py-2.5 text-sm outline-none"
              />
            </div>

            <button className="relative rounded-xl p-2.5 hover:bg-slate-100">
              <Bell size={21} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <button className="hidden items-center gap-2 rounded-xl p-2 hover:bg-slate-100 sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                A
              </div>
              <ChevronDown size={16} />
            </button>
          </div>
        </header>

        <main className="p-4 md:p-8">
          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        {stat.title}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold">
                        {stat.value}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-emerald-600">
                        {stat.change}{" "}
                        <span className="font-normal text-slate-400">
                          from last month
                        </span>
                      </p>
                    </div>

                    <div
                      className={`rounded-xl p-3 text-white ${stat.color}`}
                    >
                      <Icon size={22} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts */}
          <div className="mt-6 grid gap-6 xl:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Revenue Overview</h3>
                  <p className="text-sm text-slate-500">
                    Monthly revenue performance
                  </p>
                </div>

                <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none">
                  <option>Last 12 months</option>
                  <option>Last 6 months</option>
                  <option>Last 30 days</option>
                </select>
              </div>

              {/* Simple interactive-looking chart */}
              <div className="mt-8 flex h-64 items-end gap-2 sm:gap-4">
                {chartData.map((height, index) => (
                  <div
                    key={index}
                    className="group flex h-full flex-1 items-end"
                  >
                    <div
                      style={{ height: `${height}%` }}
                      className="relative w-full rounded-t-lg bg-blue-500 transition-all duration-300 hover:bg-blue-600"
                    >
                      <span className="absolute -top-7 left-1/2 hidden -translate-x-1/2 rounded bg-slate-900 px-2 py-1 text-xs text-white group-hover:block">
                        ₹{height}k
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex justify-between text-xs text-slate-400">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Recent Activity</h3>
                  <p className="text-sm text-slate-500">Latest updates</p>
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <Activity
                  color="bg-blue-500"
                  title="New order received"
                  description="Rahul placed a new order"
                  time="5 min ago"
                />

                <Activity
                  color="bg-emerald-500"
                  title="Payment received"
                  description="₹45,000 payment confirmed"
                  time="20 min ago"
                />

                <Activity
                  color="bg-violet-500"
                  title="New customer"
                  description="Priya created an account"
                  time="1 hour ago"
                />

                <Activity
                  color="bg-orange-500"
                  title="Product updated"
                  description="MacBook Pro stock updated"
                  time="2 hours ago"
                />
              </div>
            </div>
          </div>

          {/* Orders */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold">Recent Orders</h3>
                <p className="text-sm text-slate-500">
                  Manage your latest orders
                </p>
              </div>

              <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Product</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredOrders.map((order) => (
                    <tr
                      key={`${order.customer}-${order.product}`}
                      className="transition hover:bg-slate-50"
                    >
                      <td className="px-6 py-4 font-medium">
                        {order.customer}
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        {order.product}
                      </td>

                      <td className="px-6 py-4 font-semibold">
                        {order.amount}
                      </td>

                      <td className="px-6 py-4">
                        <StatusBadge status={order.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredOrders.length === 0 && (
                <div className="p-10 text-center text-sm text-slate-500">
                  No orders found.
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function NavItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
        active
          ? "bg-blue-600 text-white"
          : "text-slate-400 hover:bg-slate-800 hover:text-white"
      }`}
    >
      <Icon size={19} />
      {label}
    </button>
  );
}

function Activity({
  color,
  title,
  description,
  time,
}: {
  color: string;
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="flex gap-3">
      <div className={`mt-1 h-2.5 w-2.5 rounded-full ${color}`} />

      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-xs text-slate-500">{description}</p>
        <p className="mt-1 text-xs text-slate-400">{time}</p>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    Completed: "bg-emerald-50 text-emerald-700",
    Pending: "bg-amber-50 text-amber-700",
    Cancelled: "bg-red-50 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        styles[status as keyof typeof styles]
      }`}
    >
      {status}
    </span>
  );
}