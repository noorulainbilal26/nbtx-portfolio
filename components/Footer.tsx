import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const socials = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/nbtx-technologies-930612444/",
        Icon: FaLinkedinIn,
    },
    {
        name: "TikTok",
        href: "https://www.tiktok.com/@nbtex",
        Icon: FaTiktok,
    },
];

export default function Footer() {
    return (
        <>
            {/* ================= CTA SECTION ================= */}
            <section className="relative overflow-hidden bg-gradient-to-r from-[#0677E7] to-[#0AC8FC] py-10">
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#000714]/20 blur-3xl pointer-events-none" />

                <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    {/* Left */}
                 
                    <div>
                        <span className="inline-block bg-[#000714]/25 backdrop-blur text-[#F6F7F8] text-xs px-3 py-1 rounded-full mb-3 border border-white/20">
                            Next • Beyond • Technology
                        </span>

                        <h2 className="text-[#F6F7F8] text-2xl md:text-3xl font-bold leading-snug">
                            Have an idea? Let&apos;s build <br />
                            something beyond the ordinary.
                        </h2>
                    </div>

                    {/* Right */}
                    <div className="text-left md:text-right">
                        <div className="flex md:justify-end items-center gap-3 mb-2">
                            <Mail className="text-[#F6F7F8]" size={20} />
                            <span className="text-[#F6F7F8] uppercase tracking-widest text-xs">
                                Talk to NBTEX
                            </span>
                        </div>

                        <a
                            href="mailto:nbtx26@gmail.com"
                            className="block text-[#F6F7F8] text-xl md:text-2xl font-bold mb-3 hover:underline break-all"
                        >
                            nbtx26@gmail.com
                        </a>

                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-[#000714] text-[#F6F7F8] px-6 py-2 rounded-md text-sm font-semibold hover:bg-[#010B1D] transition shadow-[0_0_25px_rgba(0,7,20,0.4)]"
                        >
                            Contact Us <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="bg-[#000714] text-[#D2D6DD] pt-20 border-t border-[#0677E7]/20">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">

                    {/* About */}
                    <div>
                           {/* Logo — logo.png from /public */}
                    <Link href="/" className="flex items-center group">
                        <Image
                            src="/logo.png"
                            alt="NBTEX Technologies"
                            width={160}
                            height={64}
                            priority
                            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>
                        <p className="text-sm leading-relaxed">
                            Beyond code, into the future. NBTEX Technologies builds
                            production-grade web apps, AI-powered tools and custom
                            software — engineered for speed, SEO and scale. 23+ projects
                            shipped, 2 softwares delivered, always AI-first.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[#F6F7F8] font-semibold mb-5">Contact Info</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-[#0AC8FC] shrink-0" />
                                <a
                                    href="mailto:nbtx26@gmail.com"
                                    className="hover:text-[#0AC8FC] transition break-all"
                                >
                                    nbtx26@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#F6F7F8] font-semibold mb-5">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="/about" className="hover:text-[#0AC8FC] transition">About</a></li>
                            <li><a href="/projects" className="hover:text-[#0AC8FC] transition">Projects</a></li>
                            <li><a href="/services" className="hover:text-[#0AC8FC] transition">Services</a></li>
                            <li><a href="/contact" className="hover:text-[#0AC8FC] transition">Contact</a></li>
                            <li><a href="/blog" className="hover:text-[#0AC8FC] transition">Blog</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-[#F6F7F8] font-semibold mb-5">Connect</h4>
                        <div className="flex gap-3">
                            {socials.map(({ name, href, Icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="w-10 h-10 bg-[#010B1D] border border-[#0677E7]/40 flex items-center justify-center rounded-md text-[#0AC8FC] hover:bg-gradient-to-br hover:from-[#179CEF] hover:to-[#0AC8FC] hover:text-[#000714] hover:border-[#0AC8FC] transition"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                        <p className="text-xs text-[#D2D6DD]/70 mt-4 leading-relaxed">
                            Follow NBTEX for build logs, AI experiments and new launches.
                        </p>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#0677E7]/20 py-6">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
                        <span>
                            © {new Date().getFullYear()}{" "}
                            <span className="text-[#F6F7F8] font-medium">NBTEX Technologies</span>{" "}
                            — All rights reserved.
                        </span>
                        <div className="flex gap-6">
                            <a href="/terms" className="hover:text-[#0AC8FC] transition">
                                Terms &amp; Conditions
                            </a>
                            <a href="/privacy" className="hover:text-[#0AC8FC] transition">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}