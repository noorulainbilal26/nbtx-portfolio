'use client';

import { useEffect, useRef } from 'react';
import type { CSSProperties, ComponentType } from 'react';
import {
    Code2, Brain, Cloud, Cpu, ArrowRight,
    Sparkles, Zap, Star,
} from 'lucide-react';
import heroAnimation from '@/data/hero-animation.json';
import { Lottie } from 'lottie-react';

/* ============================================================
   SMOKE BACKGROUND — dark navy + cyan fog (cursor + scroll)
   ============================================================ */
function SmokeBackground() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let mx = 0, my = 0, tx = 0, ty = 0;
        let sy = window.scrollY;
        let raf = 0;

        const onMove = (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            tx = ((e.clientX - r.left) / Math.max(r.width, 1) - 0.5) * 2;
            ty = ((e.clientY - r.top) / Math.max(r.height, 1) - 0.5) * 2;
        };
        const onScroll = () => { sy = window.scrollY; };

        const tick = () => {
            mx += (tx - mx) * 0.06;
            my += (ty - my) * 0.06;
            el.style.setProperty('--mx', mx.toFixed(4));
            el.style.setProperty('--my', my.toFixed(4));
            el.style.setProperty('--sy', sy.toFixed(1));
            raf = requestAnimationFrame(tick);
        };
        tick();

        window.addEventListener('mousemove', onMove);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div ref={ref} className="smoke-bg" aria-hidden="true">
            <div className="smoke-parallax p-far">
                <span className="smoke-blob b1" />
                <span className="smoke-blob b2" />
                <span className="smoke-blob b3" />
            </div>
            <div className="smoke-parallax p-mid">
                <span className="smoke-blob b4" />
                <span className="smoke-blob b5" />
            </div>
            <div className="smoke-parallax p-near">
                <span className="smoke-blob b6" />
                <span className="smoke-blob b7" />
            </div>
        </div>
    );
}

/* ============================================================
   FLOATING DECORATIONS — icons + particles
   ============================================================ */
type FloatIcon = {
    Icon: ComponentType<{ size?: number; strokeWidth?: number }>;
    top: string;
    left?: string;
    right?: string;
    size: number;
    delay: string;
    dur: string;
    rot: number;
};

type CSSVars = CSSProperties & { '--rot'?: string };

function FloatingDecorations() {
    const icons: FloatIcon[] = [
        { Icon: Code2,    top: '16%', left: '6%',   size: 26, delay: '0s',   dur: '18s', rot: -12 },
        { Icon: Brain,    top: '70%', left: '4%',   size: 22, delay: '2s',   dur: '22s', rot: 8   },
        { Icon: Cloud,    top: '30%', right: '5%',  size: 24, delay: '4s',   dur: '20s', rot: -8  },
        { Icon: Cpu,      top: '78%', right: '9%',  size: 20, delay: '1s',   dur: '24s', rot: 12  },
        { Icon: Sparkles, top: '10%', right: '28%', size: 18, delay: '3s',   dur: '16s', rot: -5  },
        { Icon: Zap,      top: '88%', left: '40%',  size: 20, delay: '5s',   dur: '19s', rot: 6   },
        { Icon: Star,     top: '42%', left: '46%',  size: 16, delay: '2.5s', dur: '21s', rot: -4  },
    ];

    const particles = Array.from({ length: 22 }, (_, i) => ({
        left: `${(i * 37) % 100}%`,
        top: `${(i * 53) % 100}%`,
        delay: `${(i * 0.4) % 8}s`,
        duration: `${8 + (i % 5) * 2}s`,
        size: 2 + (i % 3),
    }));

    return (
        <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
            {icons.map((item, i) => {
                const Icon = item.Icon;
                return (
                    <div
                        key={`i-${i}`}
                        className="absolute float-icon text-[#05B8FC]"
                        style={
                            {
                                top: item.top,
                                left: item.left,
                                right: item.right,
                                animationDelay: item.delay,
                                animationDuration: item.dur,
                                '--rot': `${item.rot}deg`,
                            } as CSSVars
                        }
                    >
                        <Icon size={item.size} strokeWidth={1.4} />
                    </div>
                );
            })}

            {particles.map((p, i) => (
                <span
                    key={`p-${i}`}
                    className="absolute rounded-full particle"
                    style={{
                        left: p.left,
                        top: p.top,
                        width: p.size,
                        height: p.size,
                        animationDelay: p.delay,
                        animationDuration: p.duration,
                    }}
                />
            ))}
        </div>
    );
}

/* ============================================================
   1) HERO BRAND SECTION
   ============================================================ */
function HeroBrandSection() {
    return (
        <div className="relative overflow-hidden pt-24 md:pt-32">
            <SmokeBackground />
            <FloatingDecorations />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
                {/* LEFT: BRAND TEXT */}
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6 fade-in-up stagger-1">
                        <div className="h-px w-12 bg-gradient-to-r from-[#05B8FC] to-transparent" />
                        <span className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#02E3FD] font-medium">
                            Next • Beyond • Technology
                        </span>
                    </div>

                    <h1 className="hero-title fade-in-up stagger-2 text-[#F5F8FB] text-4xl md:text-5xl font-semibold leading-tight">
                        Welcome to{' '}
                        <span className="whitespace-nowrap font-bold">
                            <span className="text-[#F5F8FB]">NBT</span>
                            <span className="bg-gradient-to-r from-[#05B8FC] to-[#02E3FD] bg-clip-text text-transparent">
                                X
                            </span>
                        </span>{' '}
                        Technologies —{' '}
                        <span className="italic font-serif text-[#02E3FD]">beyond</span>{' '}
                        code, into the future.
                    </h1>
                </div>

                {/* RIGHT: LOTTIE + RINGS */}
                <div className="relative flex items-center justify-center min-h-[280px] md:min-h-[400px] lg:min-h-[500px] fade-in-up stagger-3">
                    <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-[#05B8FC]/15 rounded-full blur-[100px]" />

                    <div className="absolute inset-0">
                        <div className="hero-ring r1" />
                        <div className="hero-ring r2" />
                        <div className="hero-ring r3" />
                    </div>

                    <div className="relative z-10 w-full max-w-[550px]">
                        <Lottie
                            src={heroAnimation}
                            loop
                            autoplay
                            className="w-full h-full"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ============================================================
   2) SERVICE FORM SECTION
   ============================================================ */
function ServiceFormSection() {
    return (
        <div className="fade-in-up stagger-4 bg-[#040C1C]/85 backdrop-blur-md border border-[#05B8FC]/25 rounded-xl shadow-2xl shadow-[#016AFA]/20 p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* LEFT: SERVICE ICONS */}
                <div>
                    <h5 className="font-semibold mb-4 text-[#F5F8FB]">
                        What can we build for you?
                    </h5>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                            { id: 'web', label: 'Web Apps', Icon: Code2 },
                            { id: 'ai', label: 'AI Tools', Icon: Brain },
                            { id: 'cloud', label: 'Cloud', Icon: Cloud },
                            { id: 'software', label: 'Software', Icon: Cpu },
                        ].map(({ id, label, Icon }) => (
                            <label
                                key={id}
                                className="service-card group bg-gradient-to-br from-[#05B8FC]/15 to-[#02E3FD]/5 border border-[#05B8FC]/35 text-[#F5F8FB] rounded-xl p-4 text-center cursor-pointer hover:border-[#02E3FD] hover:shadow-[0_0_25px_rgba(2,227,253,0.35)] transition-all duration-300"
                            >
                                <input type="radio" name="service" className="hidden" />
                                <Icon
                                    size={34}
                                    strokeWidth={1.6}
                                    className="mx-auto mb-2 text-[#02E3FD] group-hover:scale-110 group-hover:text-[#05B8FC] transition-all duration-300"
                                />
                                <span className="font-semibold text-sm">{label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* RIGHT: INFO FIELDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { label: 'Projects Delivered', value: '23+', hint: 'Production-ready builds' },
                        { label: 'Softwares Shipped', value: '2', hint: 'Real-world products' },
                        { label: 'AI Tools Mastered', value: '15+', hint: 'ChatGPT · Claude · DeepSeek' },
                        { label: 'SEO Optimized', value: '100%', hint: 'Vercel · Netlify deploy' },
                    ].map((f) => (
                        <div key={f.label}>
                            <h5 className="font-semibold mb-2 text-[#F5F8FB]">{f.label}</h5>
                            <div className="w-full border border-[#05B8FC]/35 rounded-md px-3 py-2 bg-[#040414]/60 hover:border-[#02E3FD]/80 transition-colors duration-300">
                                <div className="text-lg font-bold bg-gradient-to-r from-[#05B8FC] to-[#02E3FD] bg-clip-text text-transparent">
                                    {f.value}
                                </div>
                                <div className="text-[11px] text-[#DDEBF6] mt-0.5">{f.hint}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3 justify-end">
                <a
                    href="#projects"
                    className="inline-flex items-center gap-2 border border-[#05B8FC] text-[#F5F8FB] px-6 py-2 rounded-md font-semibold hover:bg-[#05B8FC]/10 transition-all duration-300 shadow-[0_0_20px_rgba(5,184,252,0.25)]"
                >
                    View Projects
                </a>
                <a
                    href="#contact"
                    className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-[#016AFA] to-[#02E3FD] text-[#040414] px-8 py-2 rounded-md font-bold hover:opacity-95 transition-all duration-300 shadow-[0_0_25px_rgba(2,227,253,0.5)]"
                >
                    Work with NBTEX
                    <ArrowRight size={18} />
                </a>
            </div>
        </div>
    );
}

/* ============================================================
   3) PROCESS TIMELINE SECTION
   ============================================================ */
function ProcessTimelineSection() {
    return (
        <div className="relative text-[#F5F8FB] mt-20">
            <div className="hidden md:block absolute top-5 left-0 w-full h-[2px] bg-gradient-to-r from-[#016AFA] via-[#02E3FD] to-[#016AFA] opacity-60" />

            <ul className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center relative">
                {[
                    { step: '1', title: 'Discover & Plan', text: 'We map your vision, define the scope and choose the right stack to bring your idea to life.' },
                    { step: '2', title: 'Design & Build', text: 'Clean, scalable code with React, Next.js, Node.js and MongoDB — mobile-first by default.' },
                    { step: '3', title: 'AI Integration', text: 'Powering products with ChatGPT, Claude & DeepSeek APIs — plus AI-assisted testing and debugging.' },
                    { step: '4', title: 'Deploy & Grow', text: 'Shipping on Vercel or Netlify with full SEO optimization, performance tuning and ongoing support.' },
                ].map((item) => (
                    <li key={item.step} className="relative px-4">
                        <div className="timeline-dot relative z-10 w-10 h-10 mx-auto mb-6 rounded-lg bg-gradient-to-br from-[#016AFA] to-[#02E3FD] flex items-center justify-center font-bold text-[#040414] shadow-[0_0_20px_rgba(2,227,253,0.5)]">
                            {item.step}
                        </div>
                        <h4 className="font-semibold mb-3 text-[#F5F8FB]">{item.title}</h4>
                        <p className="text-sm text-[#DDEBF6] leading-relaxed">{item.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ============================================================
   MAIN PAGE
   ============================================================ */
export default function HeroSection() {
    return (
        <section
            id="section-hero"
            className="relative overflow-hidden"
            style={{
                background:
                    'linear-gradient(135deg, #040414 0%, #040C1C 55%, #04040C 100%)',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 z-[1] bg-[#040414]/30 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* SECTION 1: HERO BRAND */}
                <HeroBrandSection />

                {/* Gap */}
                <div className="h-8 md:h-12" />
                <div className="h-6" />

                {/* SECTION 2: SERVICE FORM */}
                <ServiceFormSection />

                {/* Spacer */}
                <div className="h-24" />

                {/* SECTION 3: PROCESS TIMELINE */}
                <ProcessTimelineSection />

                <div className="h-24" />
            </div>
        </section>
    );
}