"use client";

import {
    Code2,
    Palette,
    Server,
    Database,
    Brain,
    GitBranch,
    Cloud,
    Sparkles,
    Shield,
    Gauge,
    Globe,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ================== SERVICES ==================
const services = [
    {
        title: "Full Stack Web Development",
        desc: "End-to-end web apps built with React, Next.js, Node and MongoDB — production-ready, scalable and fast.",
        Icon: Code2,
        color: "from-[#179CEF] to-[#0AC8FC]",
    },
    {
        title: "UI/UX & Responsive Design",
        desc: "Pixel-perfect, mobile-first interfaces with Tailwind CSS and Bootstrap. Every page responsive on every screen.",
        Icon: Palette,
        color: "from-[#0AC8FC] to-[#0677E7]",
    },
    {
        title: "Backend & REST APIs",
        desc: "Robust APIs and server logic with Node.js and Express — auth, payments, real-time and clean architecture.",
        Icon: Server,
        color: "from-[#0677E7] to-[#179CEF]",
    },
    {
        title: "Database Architecture",
        desc: "MongoDB & Mongoose schema design, queries, aggregation pipelines and performance optimization.",
        Icon: Database,
        color: "from-[#0AC8FC] to-[#179CEF]",
    },
    {
        title: "AI Tool Development",
        desc: "AI-powered products using ChatGPT, Claude, DeepSeek APIs — chatbots, content tools, smart search and automation.",
        Icon: Brain,
        color: "from-[#179CEF] to-[#0AC8FC]",
    },
    {
        title: "DevOps & Deployment",
        desc: "One-click deploys on Vercel or Netlify with Git/GitHub workflows, CI/CD and zero-downtime releases.",
        Icon: Cloud,
        color: "from-[#0677E7] to-[#0AC8FC]",
    },
    {
        title: "SEO Optimization",
        desc: "Semantic HTML, meta tags, sitemaps, schema markup and 90+ Lighthouse scores on every build.",
        Icon: Globe,
        color: "from-[#0AC8FC] to-[#0677E7]",
    },
    {
        title: "Custom Software",
        desc: "Bespoke software solutions tailored to business workflows — dashboards, ERPs, automation tools and more.",
        Icon: Sparkles,
        color: "from-[#179CEF] to-[#0677E7]",
    },
];

// ================== SKILLS (categorized) ==================
const skillGroups = [
    {
        title: "Frontend",
        Icon: Palette,
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Bootstrap",
        ],
    },
    {
        title: "Backend",
        Icon: Server,
        skills: ["Node.js", "Express.js", "REST APIs", "Auth (JWT)", "Stripe Integration"],
    },
    {
        title: "Database",
        Icon: Database,
        skills: ["MongoDB", "Mongoose", "MongoDB Atlas", "Schema Design", "Aggregation"],
    },
    {
        title: "AI Tools",
        Icon: Brain,
        skills: [
            "ChatGPT",
            "DeepSeek",
            "Claude",
            "Cursor",
            "v0 by Vercel",
            "AI API Integration",
        ],
    },
    {
        title: "DevOps & Deploy",
        Icon: GitBranch,
        skills: ["Git", "GitHub", "Vercel", "Netlify", "CI/CD", "Environment Config"],
    },
    {
        title: "Quality & Performance",
        Icon: Gauge,
        skills: ["SEO", "Responsive Design", "Lighthouse 90+", "Accessibility", "Performance Tuning"],
    },
];

export default function ServicesPage() {
    return (
        <>
            <Header />

            {/* ================= SUBHEADER ================= */}
            <section
                className="relative h-[320px] flex items-center justify-center overflow-hidden"
                style={{
                    background:
                        "linear-gradient(135deg, #000714 0%, #010B1D 55%, #032B64 100%)",
                }}
            >
                <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#0AC8FC]/20 blur-[130px]" />
                <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-[#0677E7]/20 blur-[130px]" />

                <div className="relative text-center px-6">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-[#0677E7]" />
                        <span className="text-[11px] tracking-[0.35em] uppercase text-[#0AC8FC]">
                            What We Do
                        </span>
                        <div className="h-px w-12 bg-[#0677E7]" />
                    </div>
                    <h1 className="text-[#F6F7F8] text-4xl md:text-5xl font-semibold mb-3">
                        Our Services
                    </h1>
                    <p className="text-[#D2D6DD] max-w-xl mx-auto text-sm md:text-base">
                        From idea to deployment — NBTEX Technologies ships fast, SEO-friendly
                        and AI-powered digital products.
                    </p>
                </div>
            </section>

            {/* ================= SERVICES GRID ================= */}
            <section className="py-20 bg-[#010B1D] relative overflow-hidden">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#0AC8FC]/5 blur-[160px] pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F6F7F8] mb-3">
                            What We Build
                        </h2>
                        <p className="text-[#D2D6DD] text-sm md:text-base">
                            Full-cycle development services — engineered for speed, scale and
                            search visibility.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map(({ title, desc, Icon, color }) => (
                            <div
                                key={title}
                                className="group bg-[#000714]/60 border border-[#0677E7]/30 rounded-xl p-6 hover:border-[#0AC8FC] hover:shadow-[0_0_30px_rgba(10,200,252,0.2)] transition"
                            >
                                <div
                                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(10,200,252,0.3)] group-hover:scale-110 transition`}
                                >
                                    <Icon size={22} className="text-[#000714]" strokeWidth={2.2} />
                                </div>

                                <h3 className="text-[#F6F7F8] font-semibold text-lg mb-2 leading-tight">
                                    {title}
                                </h3>
                                <p className="text-[#D2D6DD] text-sm leading-relaxed">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SKILLS / TECH STACK ================= */}
            <section className="py-20 bg-[#000714] relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#0AC8FC]/10 blur-[130px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#0677E7]/10 blur-[130px] pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-12 bg-[#0677E7]" />
                            <span className="text-[11px] tracking-[0.35em] uppercase text-[#0AC8FC]">
                                Tech Stack
                            </span>
                            <div className="h-px w-12 bg-[#0677E7]" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F6F7F8] mb-3">
                            Skills &amp; Technologies
                        </h2>
                        <p className="text-[#D2D6DD] text-sm md:text-base">
                            Every tool NBTEX uses to ship production-grade products.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillGroups.map(({ title, Icon, skills }) => (
                            <div
                                key={title}
                                className="bg-[#010B1D]/80 border border-[#0677E7]/30 rounded-xl p-6 hover:border-[#0AC8FC] transition group"
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#179CEF] to-[#0AC8FC] flex items-center justify-center shadow-[0_0_15px_rgba(10,200,252,0.35)] group-hover:scale-110 transition">
                                        <Icon
                                            size={18}
                                            className="text-[#000714]"
                                            strokeWidth={2.4}
                                        />
                                    </div>
                                    <h3 className="text-[#F6F7F8] font-semibold text-lg">
                                        {title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {skills.map((s) => (
                                        <span
                                            key={s}
                                            className="text-xs px-2.5 py-1 rounded-md border border-[#0677E7]/40 text-[#0AC8FC] bg-[#0677E7]/10 hover:bg-[#0AC8FC]/15 hover:border-[#0AC8FC] transition cursor-default"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="py-20 bg-[#010B1D] relative overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F6F7F8] mb-3">
                            Why Choose NBTEX
                        </h2>
                        <p className="text-[#D2D6DD] text-sm md:text-base">
                            Beyond code — a partner invested in your product&apos;s success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                Icon: Shield,
                                title: "Production-Grade Quality",
                                desc: "Tested, typed and deploy-ready code. Zero-shortcut engineering on every project.",
                            },
                            {
                                Icon: Gauge,
                                title: "Speed & Performance",
                                desc: "90+ Lighthouse scores, optimized bundles and fast response times by default.",
                            },
                            {
                                Icon: Brain,
                                title: "AI-First Approach",
                                desc: "Every build leverages ChatGPT, Claude, Cursor and v0 to ship faster and smarter.",
                            },
                        ].map(({ Icon, title, desc }) => (
                            <div
                                key={title}
                                className="bg-[#000714]/60 border border-[#0677E7]/30 rounded-xl p-6 hover:border-[#0AC8FC] transition text-center"
                            >
                                <div className="w-14 h-14 mx-auto rounded-lg bg-gradient-to-br from-[#179CEF] to-[#0AC8FC] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(10,200,252,0.35)]">
                                    <Icon size={24} className="text-[#000714]" strokeWidth={2.2} />
                                </div>
                                <h3 className="text-[#F6F7F8] font-semibold text-lg mb-2">
                                    {title}
                                </h3>
                                <p className="text-[#D2D6DD] text-sm leading-relaxed">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-20 bg-[#000714] relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#0AC8FC]/15 blur-[130px] pointer-events-none" />

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <Sparkles
                        className="text-[#0AC8FC] mx-auto mb-4"
                        size={36}
                        strokeWidth={1.5}
                    />
                    <h2 className="text-[#F6F7F8] text-3xl md:text-4xl font-semibold mb-4">
                        Ready to build something beyond?
                    </h2>
                    <p className="text-[#D2D6DD] mb-8 max-w-xl mx-auto">
                        Tell us your idea — we&apos;ll turn it into a fast, SEO-ready,
                        AI-powered product shipped on Vercel or Netlify.
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#179CEF] to-[#0AC8FC] text-[#000714] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition shadow-[0_0_25px_rgba(10,200,252,0.4)]"
                        >
                            Start a Project <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 border border-[#179CEF] text-[#F6F7F8] px-6 py-3 rounded-md font-semibold hover:bg-[#179CEF]/10 transition"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}