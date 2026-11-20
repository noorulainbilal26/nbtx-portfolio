"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Scroll effect
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Menu items
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#000714]/90 backdrop-blur-md border-b border-[#0677E7]/30 shadow-[0_4px_30px_rgba(0,7,20,0.4)]"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-20">
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

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`relative text-sm font-medium transition ${
                                    pathname === item.path
                                        ? "text-[#0AC8FC]"
                                        : "text-[#F6F7F8]/80 hover:text-[#0AC8FC]"
                                }`}
                            >
                                {item.name}
                                {pathname === item.path && (
                                    <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-gradient-to-r from-[#0677E7] to-[#0AC8FC] rounded-full" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side — CTA */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-[#179CEF] to-[#0AC8FC] text-[#000714] hover:opacity-90 transition shadow-[0_0_20px_rgba(10,200,252,0.35)]"
                        >
                            Hire Me <ArrowRight size={14} />
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-[#F6F7F8] p-2 rounded-md hover:bg-[#0677E7]/20 transition"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                        >
                            {menuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-[#010B1D]/95 backdrop-blur-md border-t border-[#0677E7]/30 shadow-lg">
                    <div className="flex flex-col px-6 py-4 gap-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`text-sm font-medium transition py-2 border-b border-[#0677E7]/20 ${
                                    pathname === item.path
                                        ? "text-[#0AC8FC]"
                                        : "text-[#F6F7F8]/85 hover:text-[#0AC8FC]"
                                }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-[#179CEF] to-[#0AC8FC] text-[#000714]"
                            onClick={() => setMenuOpen(false)}
                        >
                            Hire Me <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}