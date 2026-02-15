"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navItems } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.25
  });

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      if (open) {
        setHidden(false);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY <= 24) {
        setHidden(false);
      } else if (currentY > lastScrollY.current + 4) {
        setHidden(true);
      } else if (currentY < lastScrollY.current) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setHidden(false);
    lastScrollY.current = 0;
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300 will-change-transform",
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100",
        scrolled
          ? "border-navy/10 bg-white/90 backdrop-blur-lg"
          : "border-transparent bg-white/55 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex w-[min(1500px,92vw)] items-center justify-between gap-6 py-4">
        <Link href="/" className="group flex flex-col">
          <Image
            src="/images/source/compete-training-logo-final.png"
            alt="Compete Training Academy logo"
            width={116}
            height={78}
            className="h-auto w-24 rounded-md object-cover transition-transform group-hover:scale-[1.02]"
            priority
          />
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">Training Academy</span>
        </Link>

        <button
          className="rounded-full border border-navy/25 p-2 text-navy lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative py-1 transition-colors hover:text-gold after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100",
                      isActive ? "text-gold" : "text-navy"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <nav
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-navy/10 bg-white transition-all duration-300 lg:hidden",
          open ? "max-h-[70vh]" : "max-h-0"
        )}
        aria-label="Mobile"
      >
        <ul className="mx-auto flex w-[min(1500px,92vw)] flex-col gap-1 py-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium",
                    isActive ? "bg-navy text-white" : "text-navy hover:bg-navy/5"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <motion.div
        aria-hidden
        className="h-[2px] origin-left bg-gradient-to-r from-gold via-[#f0c799] to-gold/40"
        style={{ scaleX: progressScaleX }}
      />
    </header>
  );
}
