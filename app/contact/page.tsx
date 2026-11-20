"use client";

import { Mail } from "lucide-react";
import { FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
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
                            Get in Touch
                        </span>
                        <div className="h-px w-12 bg-[#0677E7]" />
                    </div>
                    <h1 className="text-[#F6F7F8] text-4xl md:text-5xl font-semibold mb-3">
                        Contact Us
                    </h1>
                    <p className="text-[#D2D6DD] max-w-xl mx-auto text-sm md:text-base">
                        Have a project, question or idea? NBTEX Technologies responds
                        within 24 hours.
                    </p>
                </div>
            </section>

            {/* ================= CONTACT BODY ================= */}
            <section className="py-20 bg-[#010B1D] relative overflow-hidden">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#0AC8FC]/5 blur-[160px] pointer-events-none" />

                <div className="relative max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* CONTACT INFO */}
                    <div className="bg-[#000714]/60 border border-[#0677E7]/30 rounded-lg p-8 hover:border-[#0AC8FC] hover:shadow-[0_0_30px_rgba(10,200,252,0.15)] transition">
                        <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#179CEF]/20 to-[#0AC8FC]/10 border border-[#0AC8FC]/40 flex items-center justify-center mb-5">
                            <Mail size={20} className="text-[#0AC8FC]" />
                        </div>
                        <h4 className="text-lg font-semibold text-[#F6F7F8] mb-2">
                            NBTEX Technologies
                        </h4>
                        <p className="text-[#D2D6DD] text-sm mb-5">
                            Drop us an email and we&apos;ll get back within 24 hours.
                        </p>
                        <a
                            href="mailto:nbtx26@gmail.com"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#179CEF] to-[#0AC8FC] text-[#000714] px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition break-all"
                        >
                            <Mail size={14} /> nbtx26@gmail.com
                        </a>
                    </div>

                    {/* SOCIAL */}
                    <div className="bg-[#000714]/60 border border-[#0677E7]/30 rounded-lg p-8 hover:border-[#0AC8FC] hover:shadow-[0_0_30px_rgba(10,200,252,0.15)] transition">
                        <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#179CEF]/20 to-[#0AC8FC]/10 border border-[#0AC8FC]/40 flex items-center justify-center mb-5">
                            <FaLinkedinIn size={20} className="text-[#0AC8FC]" />
                        </div>
                        <h4 className="text-lg font-semibold text-[#F6F7F8] mb-2">
                            Follow NBTEX
                        </h4>
                        <p className="text-[#D2D6DD] text-sm mb-5">
                            Build logs, AI experiments and new launches.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://www.linkedin.com/in/nbtx-technologies-930612444/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-11 h-11 bg-[#010B1D] border border-[#0677E7]/40 flex items-center justify-center rounded-md text-[#0AC8FC] hover:bg-gradient-to-br hover:from-[#179CEF] hover:to-[#0AC8FC] hover:text-[#000714] hover:border-[#0AC8FC] transition"
                            >
                                <FaLinkedinIn size={18} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@nbtex"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                                className="w-11 h-11 bg-[#010B1D] border border-[#0677E7]/40 flex items-center justify-center rounded-md text-[#0AC8FC] hover:bg-gradient-to-br hover:from-[#179CEF] hover:to-[#0AC8FC] hover:text-[#000714] hover:border-[#0AC8FC] transition"
                            >
                                <FaTiktok size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}