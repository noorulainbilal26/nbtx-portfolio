"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Code2,
    Truck,
    Disc,
    Building2,
    ArrowUpRight,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const shot = (url: string) =>
  `https://app.snap-render.com/v1/embed?url=${encodeURIComponent(url)}&format=png`;

const projects = [
    // ---------- FEATURED (TOP) ----------
    {
        id: 1,
        title: "Car Rental App",
        category: "Web App",
        tag: "Car Rental Web Application",
        desc: "A modern car rental application with a user-friendly interface for exploring vehicle rental services.",
        tech: ["Next.js", "JavaScript", "Web Development"],
        icon: Code2,
        live: "https://car-rental-app-fawn.vercel.app/",
        image: shot("https://car-rental-app-fawn.vercel.app/"),
    },
    {
        id: 2,
        title: "Truck Management System",
        category: "Web App",
        tag: "Management System",
        desc: "A truck management web application designed to organize transportation and vehicle-related operations.",
        tech: ["Next.js", "JavaScript", "Web Application"],
        icon: Code2,
        live: "https://truck-management-system-clean.vercel.app/",
        image: shot("https://truck-management-system-clean.vercel.app/"),
    },
    {
        id: 3,
        title: "Mobile Tyre Leicestershire",
        category: "Tyre",
        tag: "Business Website",
        desc: "A professional mobile tyre service website showcasing tyre fitting and roadside assistance services.",
        tech: ["Web Development", "Responsive Design"],
        icon: Disc,
        live: "https://mobiletyreleicestershire.co.uk/",
        image: shot("https://mobiletyreleicestershire.co.uk/"),
    },
    {
        id: 4,
        title: "Roadside Rescue Tyres",
        category: "Tyre",
        tag: "Business Website",
        desc: "A roadside tyre rescue website designed to present emergency tyre services and help customers find assistance.",
        tech: ["Web Development", "Responsive Design"],
        icon: Disc,
        live: "https://roadside-rescue-tyres.vercel.app/",
        image: shot("https://roadside-rescue-tyres.vercel.app/"),
    },
    {
        id: 5,
        title: "Recovery4You",
        category: "Recovery",
        tag: "Vehicle Recovery Website",
        desc: "A vehicle recovery service website designed to showcase recovery services and customer support.",
        tech: ["Web Development", "Responsive Design"],
        icon: Truck,
        live: "https://recovery4you.uk/",
        image: shot("https://recovery4you.uk/"),
    },
    {
        id: 6,
        title: "Roadside Rescue Tyres UK",
        category: "Tyre",
        tag: "Business Website",
        desc: "A business website for roadside rescue and tyre assistance services.",
        tech: ["Web Development", "Business Website"],
        icon: Disc,
        live: "https://roadsiderescuetyres.uk/",
        image: shot("https://roadsiderescuetyres.uk/"),
    },
    {
        id: 7,
        title: "Hilal Towing Service",
        category: "Recovery",
        tag: "Towing Service Website",
        desc: "A business website showcasing vehicle towing and roadside assistance services.",
        tech: ["Web Development", "Business Website"],
        icon: Truck,
        live: "https://hilaltowingservice.com/",
        image: shot("https://hilaltowingservice.com/"),
    },

    // ---------- REST ----------
    {
        id: 8,
        title: "UrgentPick",
        category: "Web App",
        tag: "SaaS Web Application",
        desc: "A modern service management platform designed to manage customer requests and operational workflows.",
        tech: ["Next.js", "Supabase", "JavaScript"],
        icon: Code2,
        live: "https://urgentpick.vercel.app/",
        image: shot("https://urgentpick.vercel.app/"),
    },
    {
        id: 9,
        title: "CityCary",
        category: "Web App",
        tag: "Ride Booking Application",
        desc: "A ride booking platform designed to connect customers with drivers and support ride management.",
        tech: ["Next.js", "Supabase", "Maps"],
        icon: Code2,
        live: "https://city-cary.vercel.app/",
        image: shot("https://city-cary.vercel.app/"),
    },
    {
        id: 10,
        title: "Mobile Tyre Leicestershire - Vercel",
        category: "Tyre",
        tag: "Business Website",
        desc: "An alternate deployment of the mobile tyre service website.",
        tech: ["Web Development", "Responsive Design"],
        icon: Disc,
        live: "https://mobile-tyre-leicestershire.vercel.app/",
        image: shot("https://mobile-tyre-leicestershire.vercel.app/"),
    },
    {
        id: 11,
        title: "Tyre Express",
        category: "Tyre",
        tag: "Tyre Service Website",
        desc: "A professional website for tyre-related services and customer enquiries.",
        tech: ["Web Development", "Responsive Design"],
        icon: Disc,
        live: "https://tyre-express.co.uk/",
        image: shot("https://tyre-express.co.uk/"),
    },
    {
        id: 12,
        title: "Qwik Recovery 247",
        category: "Recovery",
        tag: "Vehicle Recovery Website",
        desc: "A website presenting 24/7 vehicle recovery and roadside assistance services.",
        tech: ["Web Development", "Responsive Design"],
        icon: Truck,
        live: "https://qwikrecovery247.co.uk/",
        image: shot("https://qwikrecovery247.co.uk/"),
    },
    {
        id: 13,
        title: "MH Recovery Service LTD",
        category: "Recovery",
        tag: "Vehicle Recovery Website",
        desc: "A professional website for a vehicle recovery business serving customers in Sheffield and South Yorkshire.",
        tech: ["Web Development", "Responsive Design"],
        icon: Truck,
        live: "https://mhrecoveryserviceltd.co.uk/",
        image: shot("https://mhrecoveryserviceltd.co.uk/"),
    },
    {
        id: 14,
        title: "HS247 Mobile Tyres",
        category: "Tyre",
        tag: "Mobile Tyre Website",
        desc: "A mobile tyre service website designed to showcase tyre assistance and fitting services.",
        tech: ["Web Development", "Responsive Design"],
        icon: Disc,
        live: "https://hs247mobiletyres.co.uk/",
        image: shot("https://hs247mobiletyres.co.uk/"),
    },
    {
        id: 15,
        title: "Milk Walk Kove",
        category: "Business",
        tag: "Construction Website",
        desc: "A professional business website developed for a construction-related company.",
        tech: ["Web Development", "Responsive Design"],
        icon: Building2,
        live: "https://milkwalkkove.co.uk/",
        image: shot("https://milkwalkkove.co.uk/"),
    },
    {
        id: 16,
        title: "Joy Mace & Sons",
        category: "Business",
        tag: "Construction Website",
        desc: "A business website designed to present company information and construction services.",
        tech: ["Web Development", "Responsive Design"],
        icon: Building2,
        live: "https://joymacesons.co.uk/",
        image: shot("https://joymacesons.co.uk/"),
    },
    {
        id: 17,
        title: "Apex E Hallton",
        category: "Business",
        tag: "Construction Website",
        desc: "A professional company website showcasing construction-related business services.",
        tech: ["Web Development", "Responsive Design"],
        icon: Building2,
        live: "https://apexehallton.co.uk/",
        image: shot("https://apexehallton.co.uk/"),
    },
    {
        id: 18,
        title: "Fremantle Coving",
        category: "Business",
        tag: "Construction Website",
        desc: "A company website showcasing coving and related construction services.",
        tech: ["Web Development", "Responsive Design"],
        icon: Building2,
        live: "https://fremantlecoving.co.uk/",
        image: shot("https://fremantlecoving.co.uk/"),
    },
    {
        id: 19,
        title: "Colubase Minton",
        category: "Business",
        tag: "Construction Website",
        desc: "A business website developed to showcase company services and online presence.",
        tech: ["Web Development", "Responsive Design"],
        icon: Building2,
        live: "https://colubaseminton.co.uk/",
        image: shot("https://colubaseminton.co.uk/"),
    },
    {
        id: 20,
        title: "Plank Consultants",
        category: "Business",
        tag: "Business Website",
        desc: "A professional consulting business website designed to present company information and services.",
        tech: ["Web Development", "Responsive Design"],
        icon: Building2,
        live: "https://plankconsultants.co.uk/",
        image: shot("https://plankconsultants.co.uk/"),
    },
    {
        id: 21,
        title: "Patts Trade Co",
        category: "Business",
        tag: "Business Website",
        desc: "A professional business website showcasing company information and services.",
        tech: ["Web Development", "Responsive Design"],
        icon: Building2,
        live: "https://pattstradeco.co.uk/",
        image: shot("https://pattstradeco.co.uk/"),
    },
    {
        id: 22,
        title: "Muryna Qabe LTD",
        category: "Business",
        tag: "Business Website",
        desc: "A professional business website developed with a distinctive gold-themed visual identity.",
        tech: ["Web Development", "Responsive Design"],
        icon: Building2,
        live: "https://murynaqabe.co.uk/",
        image: shot("https://murynaqabe.co.uk/"),
    },

    // ---------- LAST ----------
    {
        id: 23,
        title: "Hussnain Car Recovery",
        category: "Recovery",
        tag: "Vehicle Recovery Website",
        desc: "A business website for car recovery and roadside assistance services.",
        tech: ["Web Development", "Responsive Design"],
        icon: Truck,
        live: "https://hacarrecoveryleicester.uk/",
        image: shot("https://hacarrecoveryleicester.uk/"),
    },
    {
        id: 24,
        title: "Digital ads pro",
        category: "Business",
        tag: "Business Website",
        desc: "A professional business website designed to establish an online company presence.",
        tech: ["Web Development", "Responsive Design"],
        icon: Building2,
        live: "https://digitaladsproagency.com/",
        image: shot("https://digitaladsproagency.com/"),
    },
    {
        id: 25,
        title: "Truck Management System - Deployment 2",
        category: "Web App",
        tag: "Management System",
        desc: "An alternate deployment of the truck management system project.",
        tech: ["Next.js", "JavaScript", "Web Application"],
        icon: Code2,
        live: "https://truck-management-system-clean-j3nf.vercel.app/",
        image: shot("https://truck-management-system-clean-j3nf.vercel.app/"),
    },
   {
    id: 26,
    title: "Online Free Calculator",
    category: "Web App",
    tag: "Web Application",
    desc: "An online calculator platform featuring mathematics, finance, fractions, percentages, mortgage and other useful tools.",
    tech: ["Next.js", "JavaScript", "Tailwind CSS"],
    icon: Code2,
    live: "https://free-calculator-xi.vercel.app/",
    image: shot("https://free-calculator-xi.vercel.app/"),
},
   {
    id: 27,
    title: "ROI Ads Agency",
    category: "Web App",
    tag: "Web Application",
    desc: "Engineering marketing excellence for high-growth enterprises. Our performance-driven approach combines deep technical SEO, surgical Google Ads, and high-conversion web experiences.",
    tech: ["Next.js", "JavaScript", "Tailwind CSS"],
    icon: Code2,
    live: "https://roiadsagency.com/",
    image: shot("https://roiadsagency.com/"),
},
];

const categories = [
    { key: "All", label: "All Projects" },
    { key: "Web App", label: "Web Apps" },
    { key: "Recovery", label: "Recovery & Towing" },
    { key: "Tyre", label: "Tyre Services" },
    { key: "Business", label: "Business & Construction" },
];

export default function ProjectsPage() {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All"
            ? projects
            : projects.filter((p) => p.category === active);

    return (
        <>
            <style>{`
                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(18px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes floatSlow {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-18px);
                    }
                }

                .project-card {
                    animation: fadeUp 0.55s ease-out both;
                }

                .animate-float-slow {
                    animation: floatSlow 9s ease-in-out infinite;
                }
            `}</style>

            <Header />

            {/* ================= SUBHEADER ================= */}
            <section
                className="relative h-[320px] flex items-center justify-center overflow-hidden"
                style={{
                    background:
                        "linear-gradient(135deg, #000714 0%, #010B1D 55%, #032B64 100%)",
                }}
            >
                <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#0AC8FC]/20 blur-[130px] animate-float-slow" />
                <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-[#0677E7]/20 blur-[130px] animate-float-slow" />

                <div className="relative text-center px-6">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-[#0677E7]" />
                        <span className="text-[11px] tracking-[0.35em] uppercase text-[#0AC8FC]">
                            Portfolio
                        </span>
                        <div className="h-px w-12 bg-[#0677E7]" />
                    </div>
                    <h1 className="text-[#F6F7F8] text-4xl md:text-5xl font-semibold mb-3">
                        Our Projects
                    </h1>
                    <p className="text-[#D2D6DD] max-w-xl mx-auto text-sm md:text-base">
                        26+ production projects shipped — real live websites, web
                        apps, recovery, tyre and business platforms.
                    </p>
                </div>
            </section>

            {/* ================= PROJECTS GRID ================= */}
            <section className="py-20 bg-[#010B1D] relative overflow-hidden">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#0AC8FC]/5 blur-[160px] pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-6">
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-14">
                        {categories.map((cat) => {
                            const isActive = active === cat.key;
                            const count =
                                cat.key === "All"
                                    ? projects.length
                                    : projects.filter(
                                          (p) => p.category === cat.key
                                      ).length;

                            return (
                                <button
                                    key={cat.key}
                                    onClick={() => setActive(cat.key)}
                                    aria-pressed={isActive}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 border ${
                                        isActive
                                            ? "bg-gradient-to-r from-[#179CEF] to-[#0AC8FC] text-[#000714] border-transparent shadow-[0_0_20px_rgba(10,200,252,0.35)]"
                                            : "bg-[#000714]/60 text-[#D2D6DD] border-[#0677E7]/30 hover:border-[#0AC8FC] hover:text-[#0AC8FC]"
                                    }`}
                                >
                                    {cat.label}
                                    <span
                                        className={`ml-2 text-xs ${
                                            isActive
                                                ? "text-[#000714]/70"
                                                : "text-[#0AC8FC]/70"
                                        }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filtered.map((p, index) => {
                            const Icon = p.icon;

                            return (
                                <div
                                    key={p.id}
                                    className="project-card group bg-[#000714]/60 border border-[#0677E7]/30 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#0AC8FC] hover:shadow-[0_0_30px_rgba(10,200,252,0.2)] flex flex-col"
                                    style={{
                                        animationDelay: `${index * 45}ms`,
                                    }}
                                >
                                    {/* Live Website Screenshot */}
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#0677E7]/30 via-[#010B1D] to-[#0AC8FC]/20 flex items-center justify-center">
                                        <Icon
                                            size={64}
                                            strokeWidth={1.2}
                                            className="absolute text-[#0AC8FC]/30 group-hover:scale-110 group-hover:text-[#0AC8FC]/50 transition duration-500"
                                        />

                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={p.image}
                                            alt={`${p.title} live website screenshot`}
                                            loading="lazy"
                                            onError={(e) => {
                                                e.currentTarget.style.display =
                                                    "none";
                                            }}
                                            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#000714] via-[#000714]/20 to-transparent opacity-70 group-hover:opacity-90 transition duration-500" />

                                        <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-[#000714]/80 text-[#0AC8FC] border border-[#0677E7]/40">
                                            {p.category}
                                        </span>
                                    </div>

                                    <div className="p-5 flex flex-col flex-1">
                                        <h4 className="font-semibold text-[#F6F7F8] text-lg leading-tight mb-1">
                                            {p.title}
                                        </h4>

                                        <p className="text-[#0AC8FC] text-xs mb-3">
                                            {p.tag}
                                        </p>

                                        <p className="text-[#D2D6DD] text-sm leading-relaxed mb-4 flex-1">
                                            {p.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {p.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-xs px-2 py-0.5 rounded border border-[#0677E7]/40 text-[#0AC8FC] bg-[#0677E7]/10"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <hr className="border-[#0677E7]/20 mb-4" />

                                        <a
                                            href={p.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-1 bg-gradient-to-r from-[#179CEF] to-[#0AC8FC] text-[#000714] px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_25px_rgba(10,200,252,0.35)]"
                                        >
                                            View Live <ArrowUpRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {filtered.length === 0 && (
                        <p className="text-center text-[#D2D6DD] mt-10">
                            No projects in this category yet.
                        </p>
                    )}
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
                        Have a project in mind?
                    </h2>
                    <p className="text-[#D2D6DD] mb-8 max-w-xl mx-auto">
                        From booking systems to AI tools — NBTEX builds beyond
                        code. Let&apos;s turn your idea into a shipped product.
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#179CEF] to-[#0AC8FC] text-[#000714] px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-[0_0_25px_rgba(10,200,252,0.4)]"
                        >
                            Start a Project <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 border border-[#179CEF] text-[#F6F7F8] px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-[#179CEF]/10 hover:-translate-y-0.5"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}