"use client";

import { useState , useEffect} from "react";
import EditReport from "./editreport";

export default function ReportPage() {
    const [title, setTitle] = useState("");
    const [periodstart, setPeriodstart] = useState("");
    const [periodend, setPeriodend] = useState("");
    const [contentJson, setContentJson] = useState("");
    const [userid, setUserid] = useState("");
    const [reports, setReports] = useState<any[]>([]);
    useEffect(() => {
    async function getReports() {
        const response = await fetch("/api/report");
        const data = await response.json();

        setReports(data);
    }

    getReports();
}, []);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const response = await fetch("/api/report", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                periodstart,
                periodend,
                contentJson,
                userid,
            }),
        });

        const data = await response.json();

       if (response.ok) {
    alert("Report created successfully!");

    setTitle("");
    setPeriodstart("");
    setPeriodend("");
    setContentJson("");
    setUserid("");

    const response2 = await fetch("/api/report");
    const data2 = await response2.json();

    setReports(data2);

        } else {
            alert(data.error || "Failed to create report");
        }
    }

    return (
        <div>
            <h1>Report</h1>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Report title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="datetime-local"
                    value={periodstart}
                    onChange={(e) => setPeriodstart(e.target.value)}
                />

                <input
                    type="datetime-local"
                    value={periodend}
                    onChange={(e) => setPeriodend(e.target.value)}
                />

                <textarea
                    placeholder="Content JSON"
                    value={contentJson}
                    onChange={(e) => setContentJson(e.target.value)}
                />

                <input
                    placeholder="User ID"
                    value={userid}
                    onChange={(e) => setUserid(e.target.value)}
                />

                <button type="submit">
                    Create Report
                </button>
            </form>
            {reports.map((report) => (
    <div key={report.id}>
        <p>Title: {report.title}</p>
        <p>Period Start: {report.periodstart}</p>
        <p>Period End: {report.periodend}</p>
        <p>Content: {report.contentJson}</p>
        <p>User ID: {report.userid}</p>
        <EditReport
    id={report.id}
    oldTitle={report.title}
    oldPeriodstart={report.periodstart}
    oldPeriodend={report.periodend}
    oldContentJson={report.contentJson}
/>

        <hr />
    </div>
))}
        </div>
    );
}