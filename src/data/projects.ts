import { Project } from "@/types";

export const projects: Project[] = [
    {
        status: "planned",
        title: "Project Management SaaS",
        purpose: "Task management app with workspaces and role-based access.",
        description:
            "A full-stack app for organizing workspaces, projects, and tasks, with assignments, due dates, and permissions by role.",
        plannedFeatures: [
            "Workspaces with owner / admin / member roles",
            "Projects and tasks with assignees and due dates",
            "JWT authentication and server-side validation",
            "Automated tests, API docs, and deployment",
        ],
        stacks: [
            "Next.js",
            "TypeScript",
            "NestJS",
            "PostgreSQL",
            "Prisma",
            "Tailwind CSS",
        ],
    },
    {
        status: "planned",
        title: "Market Analytics Dashboard",
        purpose: "Track financial assets with historical price charts and a personal watchlist.",
        description:
            "A full-stack dashboard that pulls market data from a free-tier API and shows price history across timeframes. Users can save a watchlist of assets.",
        plannedFeatures: [
            "Historical price charts across multiple timeframes",
            "User watchlist saved to the database",
            "Server-side caching to stay within API rate limits",
            "Graceful handling of API errors and rate limiting",
            "Automated tests, API docs, and deployment",
        ],
        stacks: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Tailwind CSS"],    
    },
];