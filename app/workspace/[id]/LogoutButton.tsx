"use client";

export default function LogoutButton() {
    async function handleLogout() {
        await fetch("/api/logout", {
            method: "POST",
        });

        window.location.href = "/loginpage";
    }

    return (
        <button
            type="button"
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium"
        >
            Logout
        </button>
    );
}