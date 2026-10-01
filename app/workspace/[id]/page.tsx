import { prisma } from "@/lib/prisma";
import FeedbackForm from "./feedbackform";
import Themeform from "./Themeform";
import DeleteFeedback from "./DeleteFeedback";
import { cookies } from "next/headers";
import AISummary from "./AISummary";
import AIQA from "./AIQA";
import LogoutButton from "./LogoutButton";
export default async function WorkspacePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const cookieStore = await cookies();
const userId = cookieStore.get("userId")?.value;

if (!userId) {
    return <h1>Please login first</h1>;
}

const workspaceUser = await prisma.workspaceuser.findUnique({
    where: {
        workspaceid_userid: {
            workspaceid: Number(id),
            userid: Number(userId),
        },
    },
});

if (!workspaceUser) {
    return <h1>Access denied</h1>;
}

    const workspace = await prisma.workspace.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            feedback: {
                include: {
                    feedback: true,
                },
            },
            theme: {
                include: {
                    theme: true,
                },
            },
        },
    });

    if (!workspace) {
        return <h1>Workspace not found</h1>;
    }

    const positiveCount = workspace.feedback.filter(
        (item) => item.feedback.sentiment === "positive"
    ).length;

    const neutralCount = workspace.feedback.filter(
        (item) => item.feedback.sentiment === "neutral"
    ).length;

    const negativeCount = workspace.feedback.filter(
        (item) => item.feedback.sentiment === "negative"
    ).length;

    const newCount = workspace.feedback.filter(
        (item) => item.feedback.status === "new"
    ).length;

    const reviewedCount = workspace.feedback.filter(
        (item) => item.feedback.status === "reviewed"
    ).length;

    const actionedCount = workspace.feedback.filter(
        (item) => item.feedback.status === "actioned"
    ).length;

    return (
        <div className="min-h-screen bg-gray-950 text-white">

            {/* Header */}
            <div className="border-b border-gray-800 bg-gray-900">
                <div className="max-w-7xl mx-auto px-6 py-6">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                        <div>
                            <p className="text-sm text-gray-400 mb-1">
                                Workspace Dashboard
                            </p>

                            <h1 className="text-3xl font-bold">
                                {workspace.name}
                            </h1>

                            <p className="mt-2 text-sm text-gray-500">
                                Workspace ID: {workspace.id}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">

    <div className="flex items-center gap-3">

    <div className="px-4 py-2 rounded-xl bg-gray-800 border border-gray-700">
        <span className="text-sm text-gray-400">
            Total Feedback
        </span>

        <span className="ml-2 text-xl font-bold">
            {workspace.feedback.length}
        </span>
    </div>

    <LogoutButton />

</div>

    <form action="/api/logout" method="POST">
        <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium"
        >
            Logout
        </button>
    </form>

</div>

                    </div>

                </div>
            </div>

            {/* Main Dashboard */}
            <div className="max-w-7xl mx-auto px-6 py-8">

                {/* Feedback Overview */}
                <div className="flex items-center justify-between mb-6">

                    <div>
                        <h2 className="text-2xl font-bold">
                            Feedback Overview
                        </h2>

                        <p className="text-gray-400 mt-1">
                            Monitor feedback and track its status.
                        </p>
                    </div>

                </div>

                {/* Feedback Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    {/* Total */}
                    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg">

                        <p className="text-gray-400 text-sm font-medium">
                            Total Feedback
                        </p>

                       <p className="text-4xl font-bold mt-2">
    {workspace.feedback.length}
</p>



                        <p className="text-gray-500 text-sm mt-2">
                            All feedback
                        </p>

                    </div>

                    {/* Positive */}
                    <div className="bg-gray-900 border border-green-900 rounded-2xl p-6 shadow-lg">

                        <p className="text-green-400 text-sm font-medium">
                            Positive
                        </p>

                        <p className="text-4xl font-bold mt-2">
                            {positiveCount}
                        </p>

                        <p className="text-gray-500 text-sm mt-2">
                            Positive feedback
                        </p>

                    </div>

                    {/* Neutral */}
                    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg">

                        <p className="text-gray-400 text-sm font-medium">
                            Neutral
                        </p>

                        <p className="text-4xl font-bold mt-2">
                            {neutralCount}
                        </p>

                        <p className="text-gray-500 text-sm mt-2">
                            Neutral feedback
                        </p>

                    </div>

                    {/* Negative */}
                    <div className="bg-gray-900 border border-red-900 rounded-2xl p-6 shadow-lg">

                        <p className="text-red-400 text-sm font-medium">
                            Negative
                        </p>

                        <p className="text-4xl font-bold mt-2">
                            {negativeCount}
                        </p>

                        <p className="text-gray-500 text-sm mt-2">
                            Negative feedback
                        </p>

                    </div>

                </div>

                {/* Feedback Status */}
                <h3 className="text-lg font-semibold mt-10 mb-4">
                    Feedback Status
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    {/* New */}
                    <div className="bg-gray-900 border border-blue-900 rounded-2xl p-6 shadow-lg">

                        <p className="text-blue-400 text-sm font-medium">
                            New
                        </p>

                        <p className="text-4xl font-bold mt-2">
                            {newCount}
                        </p>

                        <p className="text-gray-500 text-sm mt-2">
                            New feedback
                        </p>

                    </div>

                    {/* Reviewed */}
                    <div className="bg-gray-900 border border-yellow-900 rounded-2xl p-6 shadow-lg">

                        <p className="text-yellow-400 text-sm font-medium">
                            Reviewed
                        </p>

                        <p className="text-4xl font-bold mt-2">
                            {reviewedCount}
                        </p>

                        <p className="text-gray-500 text-sm mt-2">
                            Reviewed feedback
                        </p>

                    </div>

                    {/* Actioned */}
                    <div className="bg-gray-900 border border-purple-900 rounded-2xl p-6 shadow-lg">

                        <p className="text-purple-400 text-sm font-medium">
                            Actioned
                        </p>

                        <p className="text-4xl font-bold mt-2">
                            {actionedCount}
                        </p>

                        <p className="text-gray-500 text-sm mt-2">
                            Action completed
                        </p>

                    </div>
                </div>
                 {/* AI Summary */}
                <div className="mt-12">
                    <AISummary workspaceid={workspace.id} />
                </div>

                {/* AI Q&A */}
<AIQA workspaceid={workspace.id} />

                {/* Feedback List */}
                <div className="mt-12">

                    <h2 className="text-2xl font-bold mb-6">
                        Feedback
                    </h2>

                    {workspace.feedback.length === 0 ? (

                        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">

                            <p className="text-gray-400">
                                No feedback available.
                            </p>

                        </div>

                    ) : (

                        <div className="space-y-4">

                            {workspace.feedback.map((item) => (

                                <div
                                    key={item.feedbackid}
                                    className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-gray-700 transition"
                                >

                                    <p className="text-lg font-medium">
                                        {item.feedback.content}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">

                                        {/* Channel */}
                                        <div>

                                            <p className="text-xs text-gray-500 uppercase">
                                                Channel
                                            </p>

                                            <p className="text-gray-300 mt-1">
                                                {item.feedback.channel}
                                            </p>

                                        </div>

                                        {/* Sentiment */}
                                        <div>

                                            <p className="text-xs text-gray-500 uppercase">
                                                Sentiment
                                            </p>

                                            <span
                                                className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                                                    item.feedback.sentiment === "positive"
                                                        ? "bg-green-900 text-green-300"
                                                        : item.feedback.sentiment === "negative"
                                                        ? "bg-red-900 text-red-300"
                                                        : "bg-gray-800 text-gray-300"
                                                }`}
                                            >
                                                {item.feedback.sentiment}
                                            </span>

                                        </div>

                                        {/* Status */}
                                        <div>

                                            <p className="text-xs text-gray-500 uppercase">
                                                Status
                                            </p>

                                            <span
                                                className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                                                    item.feedback.status === "new"
                                                        ? "bg-blue-900 text-blue-300"
                                                        : item.feedback.status === "reviewed"
                                                        ? "bg-yellow-900 text-yellow-300"
                                                        : "bg-purple-900 text-purple-300"
                                                }`}
                                            >
                                                {item.feedback.status}
                                            </span>

                                        </div>

                                    </div>

                                    <div className="mt-5 pt-4 border-t border-gray-800">

                                        <DeleteFeedback
                                            id={item.feedback.id}
                                        />

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

                {/* Add Feedback */}
                <div className="mt-12">

                    <h2 className="text-2xl font-bold mb-4">
                        Add Feedback
                    </h2>

                    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

                        <FeedbackForm
                            workspaceid={workspace.id}
                        />

                    </div>

                </div>

                {/* Themes */}
                <div className="mt-12">

                    <h2 className="text-2xl font-bold mb-4">
                        Themes
                    </h2>

                    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

                        <Themeform
                            workspaceid={workspace.id}
                        />

                    </div>

                    {workspace.theme.length === 0 ? (

                        <div className="mt-4 bg-gray-900 border border-gray-800 rounded-2xl p-6">

                            <p className="text-gray-400">
                                No themes available.
                            </p>

                        </div>

                    ) : (

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">

                            {workspace.theme.map((item) => (

                                <div
                                    key={item.theme.id}
                                    className={`p-6 rounded-2xl border shadow-lg ${
                                        item.theme.color === "red"
                                            ? "bg-red-950 border-red-900"
                                            : item.theme.color === "blue"
                                            ? "bg-blue-950 border-blue-900"
                                            : item.theme.color === "green"
                                            ? "bg-green-950 border-green-900"
                                            : item.theme.color === "yellow"
                                            ? "bg-yellow-950 border-yellow-900"
                                            : "bg-gray-900 border-gray-800"
                                    }`}
                                >

                                    <p className="text-xl font-semibold">
                                        {item.theme.name}
                                    </p>

                                    <p className="mt-2 text-gray-300">
                                        {item.theme.description}
                                    </p>

                                    <p className="mt-4 text-sm text-gray-500">
                                        Color: {item.theme.color}
                                    </p>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}