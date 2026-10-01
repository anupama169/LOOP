
"use client";

export default function DeleteFeedback({ id }: { id: number }) {
    
const handleDelete = async () => {
    console.log("Deleting feedback:", id);
    const confirmDelete = window.confirm(
    "Are you sure you want to delete this feedback?"
);

if (!confirmDelete) {
    return;
}
    const response = await fetch("/api/feedback", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
    });

    console.log("Response status:", response.status);

    if (response.ok) {
        window.location.reload();
    } else {
        console.log("Delete failed");
    }
};

    return (
        <button
            type="button"
            onClick={handleDelete}
            className="mt-4 bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg"
        >
            Delete
        </button>
    );
}

