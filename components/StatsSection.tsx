"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
    { value: 23, label: "Projects Delivered", suffix: "+" },
    { value: 2, label: "Softwares Shipped", suffix: "" },
    { value: 15, label: "AI Tools Mastered", suffix: "+" },
    { value: 100, label: "SEO Optimized", suffix: "%" },
];

export default function StatsSection() {
    const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let observer: IntersectionObserver;
        if (ref.current) {
            observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        stats.forEach((stat, index) => {
                            let start = 0;
                            const end = stat.value;
                            const duration = 2000; // 2 seconds
                            const increment = Math.max(
                                1,
                                Math.ceil(end / (duration / 50))
                            ); // update every 50ms

                            const interval = setInterval(() => {
                                start += increment;
                                if (start >= end) {
                                    start = end;
                                    clearInterval(interval);
                                }
                                setCounts((prev) => {
                                    const newCounts = [...prev];
                                    newCounts[index] = start;
                                    return newCounts;
                                });
                            }, 50);
                        });
                        observer.disconnect();
                    }
                },
                { threshold: 0.3 }
            );
            observer.observe(ref.current);
        }
        return () => observer && observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-[#000714]/60 border border-[#0677E7]/30 backdrop-blur-sm rounded-lg p-5 text-center hover:border-[#0AC8FC] hover:shadow-[0_0_25px_rgba(10,200,252,0.2)] transition"
                    >
                        <div className="text-4xl font-semibold mb-1 bg-gradient-to-r from-[#179CEF] to-[#0AC8FC] bg-clip-text text-transparent">
                            {counts[index]}
                            {stat.suffix}
                        </div>
                        <p className="text-[#D2D6DD] text-xs">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}