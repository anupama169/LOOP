"use client";

import EditFeedback from "../[id]/editfeedback";
import DeleteFeedback from "../[id]/DeleteFeedback";
import { useEffect, useState } from "react";

type Feedback = {
    id: number;
    content: string;
    channel: string;
    sentiment: string;
    status: string;
};

export default function FeedbackInbox() {
    const [feedback, setFeedback] = useState<Feedback[]>([]);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    useEffect(() => {
        async function getFeedback() {
            const response = await fetch("/api/feedback");
            const data = await response.json();

            console.log("Feedback API:", data);

            if (Array.isArray(data)) {
                setFeedback(data);
            } else {
                console.log("Feedback API did not return an array");
            }
        }

        getFeedback();
    }, []);
    const filteredFeedback = feedback.filter((item) => {
    const matchesSearch = item.content
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
        statusFilter === "all" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
});
    const totalPages = Math.ceil(filteredFeedback.length / itemsPerPage);

const startIndex = (currentPage - 1) * itemsPerPage;

const paginatedFeedback = filteredFeedback.slice(
    startIndex,
    startIndex + itemsPerPage
);
    return (
        <div>
            <h1>Feedback Inbox</h1>
            <input
    type="text"
    placeholder="Search feedback"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>
        <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
>
    <option value="all">All Status</option>
    <option value="new">New</option>
    <option value="reviewed">Reviewed</option>
    <option value="actioned">Actioned</option>
</select>

                {paginatedFeedback.length === 0 ? (
    <p>No feedback found.</p>
) : (
    paginatedFeedback.map((item) => (
                <div key={item.id}>
                    <p>Feedback ID: {item.id}</p>
                    <p>Content: {item.content}</p>
                    <p>Channel: {item.channel}</p>
                    <p>Sentiment: {item.sentiment}</p>
                    <p>Status: {item.status}</p>

                    <EditFeedback
                        id={item.id}
                        oldContent={item.content}
                        oldChannel={item.channel}
                        oldSentiment={item.sentiment}
                        oldStatus={item.status}
                    />

                    <DeleteFeedback id={item.id} />

                    <hr />
                </div>
            ))
               )}

        {totalPages > 1 && (
            <div>
                <button
                    onClick={() =>
                        setCurrentPage((page) => Math.max(page - 1, 1))
                    }
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                <span>
                    {" "} Page {currentPage} of {totalPages} {" "}
                </span>

                <button
                    onClick={() =>
                        setCurrentPage((page) =>
                            Math.min(page + 1, totalPages)
                        )
                    }
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        )}
        </div>
    );
}