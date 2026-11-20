'use client';

import * as React from 'react';
import StatsSection from './StatsSection';
import Autoplay from 'embla-carousel-autoplay';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import {
    Code2,
    Rocket,
    Brain,
    Shield,
    Globe,
    Layers,
    Star,
    Sparkles,
    Server,
    Database,
    Cloud,
    Cpu,
    Zap,
    Terminal,
    ExternalLink,
    Building2,
    Truck,
} from 'lucide-react';

/* ============================================================
   DATA
   ============================================================ */
const stackItems = [
    { label: 'Full Stack Development', Icon: Layers },
    { label: 'React & Next.js', Icon: Code2 },
    { label: 'Node & Express', Icon: Server },
    { label: 'MongoDB', Icon: Database },
    { label: 'AI Integration', Icon: Brain },
    { label: 'ChatGPT & Claude', Icon: Sparkles },
    { label: 'SEO Optimization', Icon: Globe },
    { label: 'Vercel & Netlify', Icon: Rocket },
    { label: 'TypeScript', Icon: Terminal },
    { label: 'Tailwind CSS', Icon: Zap },
    { label: 'Cloud Solutions', Icon: Cloud },
    { label: 'Custom Software', Icon: Cpu },
];


const shot = (url: string) =>
  `https://app.snap-render.com/v1/embed?url=${encodeURIComponent(url)}&format=png`;

const fallbackShot = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;

const projects = [
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

/* ============================================================
   HOOKS & HELPERS
   ============================================================ */
function useRevealOnScroll() {
    React.useEffect(() => {
        const els = document.querySelectorAll('.reveal');
        if (!els.length) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
}

function ParticleField({ count = 18 }: { count?: number }) {
    const particles = React.useMemo(
        () =>
            Array.from({ length: count }).map((_, i) => ({
                left: `${(i * 37 + 11) % 100}%`,
                top: `${(i * 53 + 7) % 100}%`,
                size: 2 + ((i * 13) % 4),
                delay: `${(i * 0.7) % 5}s`,
                duration: `${5 + ((i * 3) % 6)}s`,
            })),
        [count]
    );
    return (
        <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            aria-hidden="true"
        >
            {particles.map((p, i) => (
                <span
                    key={i}
                    className="absolute rounded-full bg-[#02E3FD]/60"
                    style={{
                        left: p.left,
                        top: p.top,
                        width: p.size,
                        height: p.size,
                        boxShadow: '0 0 8px rgba(2,227,253,0.6)',
                        animation: `particleFloat ${p.duration} ease-in-out ${p.delay} infinite`,
                    }}
                />
            ))}
        </div>
    );
}

function TiltCard({
    children,
    className = '',
    maxTilt = 7,
}: {
    children: React.ReactNode;
    className?: string;
    maxTilt?: number;
}) {
    const ref = React.useRef<HTMLDivElement>(null);
    const [hovering, setHovering] = React.useState(false);

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const rx = ((y - r.height / 2) / (r.height / 2)) * -maxTilt;
        const ry = ((x - r.width / 2) / (r.width / 2)) * maxTilt;
        el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
        el.style.setProperty('--mx', `${x}px`);
        el.style.setProperty('--my', `${y}px`);
    };

    const onLeave = () => {
        setHovering(false);
        const el = ref.current;
        if (el)
            el.style.transform =
                'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    };

    return (
        <div
            ref={ref}
            onMouseEnter={() => setHovering(true)}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={`tilt-card ${className}`}
            style={{
                transition: hovering
                    ? 'transform 0.08s linear'
                    : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
        >
            {children}
        </div>
    );
}

/* ============================================================
   STACK CAROUSEL
   ============================================================ */
function StackCarousel() {
    const plugin = React.useRef(
        Autoplay({
            delay: 1400,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
        })
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            opts={{ loop: true, align: 'start' }}
            className="w-full"
        >
            <CarouselContent className="-ml-3">
                {stackItems.map(({ label, Icon }, i) => (
                    <CarouselItem
                        key={i}
                        className="pl-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                    >
                        <div className="group relative flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-br from-[#05B8FC]/10 to-[#02E3FD]/5 border border-[#05B8FC]/30 hover:border-[#02E3FD] hover:shadow-[0_0_25px_rgba(2,227,253,0.3)] transition-all duration-500 hover:-translate-y-1 overflow-hidden shine">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#02E3FD]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative w-9 h-9 shrink-0 rounded-lg bg-gradient-to-br from-[#016AFA] to-[#02E3FD] flex items-center justify-center text-[#040414] shadow-[0_0_15px_rgba(2,227,253,0.4)] group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_25px_rgba(2,227,253,0.8)] transition-all duration-500">
                                <Icon size={18} strokeWidth={2.2} />
                            </div>
                            <span className="relative text-sm md:text-base font-semibold text-[#F5F8FB] truncate">
                                {label}
                            </span>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export default function MarqueeSection() {
    useRevealOnScroll();

    return (
        <>
            {/* ==== GLOBAL STYLES (animations) ==== */}
            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes softGlow {
                    0%,
                    100% {
                        opacity: 0.4;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.85;
                        transform: scale(1.05);
                    }
                }
                @keyframes float45 {
                    0%,
                    100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-15px) rotate(2deg);
                    }
                }
                @keyframes iconPulse {
                    0%,
                    100% {
                        box-shadow: 0 0 25px rgba(2, 227, 253, 0.4);
                    }
                    50% {
                        box-shadow: 0 0 40px rgba(2, 227, 253, 0.75);
                    }
                }
                @keyframes particleFloat {
                    0%,
                    100% {
                        transform: translateY(0) translateX(0);
                        opacity: 0.25;
                    }
                    50% {
                        transform: translateY(-30px) translateX(15px);
                        opacity: 0.7;
                    }
                }
                @keyframes gradientShift {
                    0%,
                    100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                .reveal {
                    opacity: 0;
                    transform: translateY(35px);
                    transition:
                        opacity 0.85s cubic-bezier(0.4, 0, 0.2, 1),
                        transform 0.85s cubic-bezier(0.4, 0, 0.2, 1);
                    will-change: opacity, transform;
                }
                .reveal.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .fade-in-up {
                    animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
                }
                .animate-float-45 {
                    animation: float45 6s ease-in-out infinite;
                }
                .animate-soft-glow {
                    animation: softGlow 4s ease-in-out infinite;
                }
                .animate-icon-pulse {
                    animation: iconPulse 3s ease-in-out infinite;
                }
                .hover-lift {
                    transition:
                        transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                        box-shadow 0.4s,
                        border-color 0.4s;
                }
                .hover-lift:hover {
                    transform: translateY(-6px);
                }

                .tilt-card {
                    transform-style: preserve-3d;
                    will-change: transform;
                }

                .spotlight {
                    position: relative;
                    overflow: hidden;
                }
                .spotlight::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(
                        380px circle at var(--mx, 50%) var(--my, 50%),
                        rgba(2, 227, 253, 0.18),
                        transparent 65%
                    );
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                    z-index: 1;
                    border-radius: inherit;
                }
                .spotlight:hover::before {
                    opacity: 1;
                }
                .spotlight > * {
                    position: relative;
                    z-index: 2;
                }

                .shine {
                    position: relative;
                    overflow: hidden;
                }
                .shine::after {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(
                        115deg,
                        transparent 40%,
                        rgba(255, 255, 255, 0.18) 50%,
                        transparent 60%
                    );
                    transform: translateX(-120%) rotate(25deg);
                    transition: transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
                    pointer-events: none;
                    z-index: 3;
                }
                .shine:hover::after {
                    transform: translateX(120%) rotate(25deg);
                }

                .card-glow {
                    position: relative;
                }
                .card-glow::after {
                    content: '';
                    position: absolute;
                    inset: -1px;
                    border-radius: inherit;
                    padding: 1px;
                    background: linear-gradient(
                        135deg,
                        #05b8fc,
                        #02e3fd,
                        #016afa,
                        #02e3fd
                    );
                    background-size: 300% 300%;
                    -webkit-mask:
                        linear-gradient(#000 0 0) content-box,
                        linear-gradient(#000 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    animation: gradientShift 5s ease infinite;
                    pointer-events: none;
                }
                .card-glow:hover::after {
                    opacity: 1;
                }

                @media (prefers-reduced-motion: reduce) {
                    .reveal,
                    .fade-in-up,
                    .animate-float-45,
                    .animate-soft-glow,
                    .animate-icon-pulse,
                    .shine::after {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>

            {/* ================= STACK CAROUSEL ================= */}
            <section className="relative bg-[#040414] py-10 overflow-hidden border-y border-[#05B8FC]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#016AFA]/5 to-transparent pointer-events-none" />
                <div className="relative w-full">
                    <StackCarousel />
                </div>
            </section>

            {/* ================= FEATURES ================= */}
            <section className="relative py-20 bg-[#040C1C] overflow-hidden">
                <ParticleField count={14} />
                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-14 reveal">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-12 bg-[#05B8FC]" />
                            <span className="text-[11px] tracking-[0.35em] uppercase text-[#02E3FD]">
                                Why NBTX
                            </span>
                            <div className="h-px w-12 bg-[#05B8FC]" />
                        </div>
                        <h2 className="text-4xl font-bold text-[#F5F8FB] mb-3">
                            Built Beyond Code
                        </h2>
                        <p className="text-[#DDEBF6] text-base leading-relaxed">
                            NBTX Technologies delivers production-grade web apps,
                            AI tools and software — engineered for speed, SEO and
                            scale.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
                        {/* LEFT FEATURES */}
                        <div className="space-y-10">
                            {[
                                {
                                    Icon: Code2,
                                    title: 'Production-Grade Code',
                                    text: 'Clean, scalable codebases with React, Next.js and Node — tested, typed and deploy-ready.',
                                },
                                {
                                    Icon: Brain,
                                    title: 'AI-Powered Development',
                                    text: 'Building smarter products with ChatGPT, Claude, Cursor and v0 — AI integrated end to end.',
                                },
                            ].map(({ Icon, title, text }, i) => (
                                <div
                                    key={title}
                                    className={`flex gap-4 items-start group reveal`}
                                    style={{ transitionDelay: `${i * 0.12}s` }}
                                >
                                    <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#05B8FC] to-[#02E3FD] text-[#040414] shadow-[0_0_20px_rgba(2,227,253,0.35)] group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_0_35px_rgba(2,227,253,0.7)] transition-all duration-500">
                                        <Icon size={22} strokeWidth={2.2} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#F5F8FB] mb-1 group-hover:text-[#02E3FD] transition-colors">
                                            {title}
                                        </h4>
                                        <p className="text-[#DDEBF6] text-sm leading-relaxed">
                                            {text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CENTER VISUAL */}
                        <div className="flex justify-center reveal">
                            <div className="relative w-64 h-64 md:w-72 md:h-72 animate-float-45">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#016AFA]/40 to-[#02E3FD]/25 blur-2xl animate-soft-glow" />
                                <div className="relative w-full h-full rounded-2xl border border-[#05B8FC]/40 bg-[#040414]/70 backdrop-blur flex items-center justify-center rotate-45 shadow-[0_0_50px_rgba(2,227,253,0.25)] hover:shadow-[0_0_80px_rgba(2,227,253,0.55)] transition-shadow duration-700">
                                    <div className="-rotate-45 text-center">
                                        <Code2
                                            size={72}
                                            className="mx-auto text-[#02E3FD] mb-2"
                                            strokeWidth={1.5}
                                        />
                                        <div className="text-2xl font-bold">
                                            <span className="text-[#F5F8FB]">
                                                NBT
                                            </span>
                                            <span className="bg-gradient-to-r from-[#05B8FC] to-[#02E3FD] bg-clip-text text-transparent">
                                                X
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT FEATURES */}
                        <div className="space-y-10">
                            {[
                                {
                                    Icon: Globe,
                                    title: 'SEO-First Engineering',
                                    text: 'Semantic HTML, meta optimization and 90+ Lighthouse scores built into every page.',
                                },
                                {
                                    Icon: Rocket,
                                    title: 'Deploy Anywhere',
                                    text: 'One-click deploys on Vercel or Netlify with CI/CD and zero-downtime releases.',
                                },
                            ].map(({ Icon, title, text }, i) => (
                                <div
                                    key={title}
                                    className="flex gap-4 items-start flex-row-reverse text-right group reveal"
                                    style={{ transitionDelay: `${i * 0.12}s` }}
                                >
                                    <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#05B8FC] to-[#02E3FD] text-[#040414] shadow-[0_0_20px_rgba(2,227,253,0.35)] group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_35px_rgba(2,227,253,0.7)] transition-all duration-500">
                                        <Icon size={22} strokeWidth={2.2} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#F5F8FB] mb-1 group-hover:text-[#02E3FD] transition-colors">
                                            {title}
                                        </h4>
                                        <p className="text-[#DDEBF6] text-sm leading-relaxed">
                                            {text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STATS ================= */}
            <section
                className="relative py-20 overflow-hidden"
                style={{
                    background:
                        'radial-gradient(circle at 20% 20%, #040C1C 0%, #040414 45%, #04040C 100%)',
                }}
            >
                <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#02E3FD]/15 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#016AFA]/20 blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 bg-[#040414]/40" />
                <ParticleField count={16} />

                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16 reveal">
                        <h2 className="text-[#F5F8FB] text-3xl md:text-4xl font-semibold leading-snug">
                            We build beyond code — from{' '}
                            <span className="bg-gradient-to-r from-[#05B8FC] to-[#02E3FD] bg-clip-text text-transparent">
                                AI-powered tools
                            </span>{' '}
                            to{' '}
                            <span className="bg-gradient-to-r from-[#05B8FC] to-[#02E3FD] bg-clip-text text-transparent">
                                enterprise software
                            </span>
                            , NBTEX delivers technology that moves you forward.
                        </h2>

                        <p className="text-[#DDEBF6] leading-relaxed text-sm md:text-base">
                            At NBTX Technologies, we believe great software should
                            be fast, accessible and intelligent. Our work spans 23+
                            production projects, 2 shipped softwares and AI tools
                            integrated with ChatGPT, Claude and DeepSeek. From idea
                            to deployment on Vercel or Netlify, we engineer
                            SEO-friendly, mobile-first and scalable solutions — so
                            your business stays ahead of the curve.
                        </p>
                    </div>

                    <StatsSection />
                </div>
            </section>

            {/* ================= FEATURED PROJECTS ================= */}
            <section className="relative py-14 md:py-20 bg-[#040C1C] overflow-hidden">
                <ParticleField count={10} />
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 reveal">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-12 bg-[#05B8FC]" />
                            <span className="text-[11px] tracking-[0.35em] uppercase text-[#02E3FD]">
                                Featured Work
                            </span>
                            <div className="h-px w-12 bg-[#05B8FC]" />
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F8FB] mb-3">
                            Our Flagship Products
                        </h2>
                        <p className="text-[#DDEBF6] text-base md:text-lg">
                            Real products. Real users. A glimpse of what NBTX
                            ships.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {projects.map((p, idx) => (
                            <div
                                key={p.title}
                                className="reveal"
                                style={{ transitionDelay: `${idx * 0.08}s` }}
                            >
                                <TiltCard className="card-glow spotlight shine bg-[#040414]/60 border border-[#05B8FC]/30 rounded-xl overflow-hidden hover:border-[#02E3FD] hover:shadow-[0_25px_60px_-15px_rgba(2,227,253,0.35)] group transition-colors duration-500 h-full">
                                    {/* ===== PREVIEW AREA — image yahan dikhegi ===== */}
                                    <div className="relative h-48 md:h-52 overflow-hidden bg-gradient-to-br from-[#05B8FC]/30 via-[#040C1C] to-[#02E3FD]/20">
                                        {/* Fallback icon (agar image fail ho) */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Code2
                                                size={64}
                                                className="text-[#02E3FD]/40"
                                                strokeWidth={1.2}
                                            />
                                        </div>

                                        {/* Real screenshot */}
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={p.image}
                                            alt={`${p.title} live preview`}
                                            loading="lazy"
                                            onError={(e) => {
                                                const img = e.currentTarget;
                                                const fb = fallbackShot(p.live);
                                                if (img.src !== fb) {
                                                    img.src = fb;
                                                } else {
                                                    img.style.display = 'none';
                                                }
                                            }}
                                            className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                                        />

                                        {/* Bottom gradient for readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#040414]/80 via-transparent to-transparent pointer-events-none z-10" />

                                        {/* Hover glow */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
                                            style={{
                                                background:
                                                    'radial-gradient(circle at center, rgba(2,227,253,0.22), transparent 70%)',
                                            }}
                                        />

                                        {/* Live badge */}
                                        <span className="absolute top-3 right-3 z-20 text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-[#040414]/80 text-[#02E3FD] border border-[#05B8FC]/40">
                                            Live
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 relative">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-semibold text-[#F5F8FB] text-lg group-hover:text-[#02E3FD] transition-colors">
                                                {p.title}
                                            </h4>
                                            <span className="text-[#DDEBF6] text-sm flex items-center gap-1">
                                                <Star
                                                    size={14}
                                                    className="text-[#02E3FD]"
                                                />{' '}
                                                Live
                                            </span>
                                        </div>

                                        <p className="text-[#DDEBF6] text-sm leading-relaxed mb-4">
                                            {p.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {p.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-xs px-2 py-0.5 rounded border border-[#05B8FC]/40 text-[#02E3FD] bg-[#05B8FC]/10 hover:bg-[#05B8FC]/30 hover:-translate-y-0.5 hover:border-[#02E3FD] transition-all duration-300 cursor-default"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <hr className="border-[#05B8FC]/20 mb-4" />

                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-[#DDEBF6] text-xs">
                                                    Category
                                                </p>
                                                <p className="text-lg font-bold text-[#F5F8FB]">
                                                    {p.tag}
                                                </p>
                                            </div>
                                            <a
                                                href={p.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn inline-flex items-center gap-1 bg-gradient-to-r from-[#05B8FC] to-[#02E3FD] text-[#040414] px-4 py-2 rounded-md text-sm font-semibold hover:opacity-95 transition-all shadow-[0_0_15px_rgba(2,227,253,0.35)] hover:shadow-[0_0_25px_rgba(2,227,253,0.65)] hover:-translate-y-0.5"
                                            >
                                                View Live{' '}
                                                <ExternalLink
                                                    size={14}
                                                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </TiltCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section
                className="relative w-full min-h-[50vh] md:min-h-[70vh] flex items-center overflow-hidden"
                style={{
                    background:
                        'linear-gradient(135deg, #040414 0%, #040C1C 50%, #04040C 100%)',
                }}
            >
                <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#02E3FD]/20 blur-[130px] pointer-events-none animate-soft-glow" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#016AFA]/25 blur-[130px] pointer-events-none" />
                <ParticleField count={20} />
                <div className="absolute inset-0 bg-[#040414]/30" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex justify-center">
                        <div className="w-full max-w-6xl reveal">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                <div className="flex justify-center lg:justify-center">
                                    <h1 className="text-[#F5F8FB] text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-center lg:text-left max-w-sm">
                                        <span className="block">Let&apos;s Take</span>
                                        <span className="block">Your Idea</span>
                                        <span className="block bg-gradient-to-r from-[#05B8FC] to-[#02E3FD] bg-clip-text text-transparent">
                                            Beyond
                                        </span>
                                    </h1>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {[
                                        {
                                            Icon: Rocket,
                                            title: 'Ship Faster',
                                            text: 'From idea to production in days — not months.',
                                        },
                                        {
                                            Icon: Shield,
                                            title: 'Reliable Support',
                                            text: 'Ongoing maintenance and 24/7 responsiveness.',
                                        },
                                        {
                                            Icon: Sparkles,
                                            title: 'AI-First Approach',
                                            text: 'Every project is enhanced with AI tooling.',
                                        },
                                    ].map(({ Icon, title, text }, i) => (
                                        <div
                                            key={title}
                                            className="text-center sm:text-left group reveal"
                                            style={{
                                                transitionDelay: `${i * 0.1}s`,
                                            }}
                                        >
                                            <div className="w-14 h-14 bg-gradient-to-br from-[#05B8FC] to-[#02E3FD] rounded-lg flex items-center justify-center mx-auto sm:mx-0 mb-4 shadow-[0_0_25px_rgba(2,227,253,0.4)] group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_0_40px_rgba(2,227,253,0.75)] transition-all duration-500 animate-icon-pulse">
                                                <Icon
                                                    className="text-[#040414]"
                                                    size={24}
                                                />
                                            </div>
                                            <h4 className="text-[#F5F8FB] font-semibold mb-2 group-hover:text-[#02E3FD] transition-colors">
                                                {title}
                                            </h4>
                                            <p className="text-[#DDEBF6] text-sm leading-relaxed">
                                                {text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}