"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        q: "What services does NBTEX Technologies offer?",
        a: "We build production-grade web apps (React/Next.js), AI-powered tools, custom software, and SaaS platforms. Every build includes SEO optimization, mobile-first responsive design, and deployment on Vercel or Netlify.",
    },
    {
        q: "How long does a typical project take?",
        a: "Timelines vary by scope — a landing page or portfolio can ship in 1–2 weeks, a full SaaS MVP in 3–6 weeks, and custom software depends on complexity. We share a detailed roadmap after the discovery call.",
    },
    {
        q: "Do you integrate AI tools into websites?",
        a: "Absolutely. We integrate ChatGPT, Claude, DeepSeek and other AI APIs for chatbots, content generation, smart search and automation — always with cost and performance in mind.",
    },
    {
        q: "Is SEO included in every project?",
        a: "Yes. Every NBTEX build ships with semantic HTML, optimized meta tags, sitemaps, alt text, and 90+ Lighthouse scores. SEO is engineering, not an afterthought.",
    },
    {
        q: "Which tech stack do you use?",
        a: "Frontend: HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind, Bootstrap. Backend: Node.js, Express. Database: MongoDB, Mongoose. Deployment: Vercel, Netlify. Plus Git/GitHub for version control and AI tools (ChatGPT, Claude, Cursor, v0) for acceleration.",
    },
    {
        q: "Do you offer post-launch support and maintenance?",
        a: "Yes. We offer ongoing maintenance, bug fixes, performance monitoring and feature updates. Flexible monthly or per-project support plans are available.",
    },
];

export default function FAQSection() {
    return (
        <section className="py-20 bg-[#010B1D] relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0AC8FC]/10 blur-[140px] pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-[#0677E7]" />
                        <span className="text-[11px] tracking-[0.35em] uppercase text-[#0AC8FC]">
                            FAQ
                        </span>
                        <div className="h-px w-12 bg-[#0677E7]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F6F7F8] mb-3">
                        Have Any Questions?
                    </h2>
                    <p className="text-[#D2D6DD] text-sm md:text-base">
                        Quick answers about working with NBTEX Technologies.
                    </p>
                </div>

                {/* FAQ Grid */}
                <Accordion
                    type="single"
                    collapsible
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6"
                >
                    {faqs.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border-b border-[#0677E7]/30 pb-4 group"
                        >
                            <AccordionTrigger className="flex w-full items-center justify-between text-left hover:no-underline [&>svg]:text-[#0AC8FC]">
                                <span className="text-[#F6F7F8] font-medium pr-4 group-hover:text-[#0AC8FC] transition">
                                    {item.q}
                                </span>
                            </AccordionTrigger>

                            <AccordionContent>
                                <p className="mt-4 text-[#D2D6DD] text-sm leading-relaxed max-w-[95%]">
                                    {item.a}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}