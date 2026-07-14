"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { AuroraBackground } from "@/components/effects/aurora-background";
import { Dashboard } from "@/components/dashboard/dashboard";
import { Container } from "@/components/ui/container";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <AuroraBackground />

      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Decorative Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[120px]"
      />

      <Container>
        <div className="relative z-10 grid items-center gap-16 py-24 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-sm font-medium text-zinc-300">
                Available for opportunities
              </span>
            </motion.div>

            {/* Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-lg font-medium text-cyan-400"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="mt-3 text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl xl:text-8xl"
            >
              Navadeep
              <br />

              <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                Thirunagari
              </span>
            </motion.h1>

            {/* Main Tagline */}
            <motion.div variants={itemVariants} className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Data • Intelligence • Products
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight text-white md:text-5xl">
                Transforming data into{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  intelligent products.
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-xl text-lg leading-8 text-zinc-400"
            >
              I build analytics dashboards, machine learning solutions, and
              AI-powered applications that turn complex data into clear,
              actionable business insights.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-[0_15px_50px_rgba(6,182,212,0.25)]"
              >
                Explore Projects

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="/Navadeep_Thirunagari_Data_Analyst_Resume.pdf"
                download="Navadeep_Thirunagari_Data_Analyst_Resume.pdf"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.08]"
              >
                <Download
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />

                Download Resume
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7"
            >
              <div>
                <p className="text-2xl font-black text-white">4</p>

                <p className="mt-1 text-sm text-zinc-500">
                  Featured Projects
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">Power BI</p>

                <p className="mt-1 text-sm text-zinc-500">
                  Business Intelligence
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">Python + SQL</p>

                <p className="mt-1 text-sm text-zinc-500">
                  Analytics Stack
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Dashboard */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              x: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Dashboard Glow */}
            <div
              aria-hidden="true"
              className="absolute inset-10 rounded-full bg-cyan-500/10 blur-[100px]"
            />

            {/* Floating Dashboard */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <Dashboard />
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.a
        href="#projects"
        aria-label="Scroll to projects"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-600 md:flex"
      >
        <span>Explore</span>

        <motion.span
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-cyan-400"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}