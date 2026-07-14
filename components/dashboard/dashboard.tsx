"use client";

import { motion } from "framer-motion";
import { StatCard } from "./stat-card";
import { Progress } from "./progress";

export function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-xl"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.45)]">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
              Portfolio Intelligence
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Live Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>

            <span className="text-sm text-green-400">
              Active
            </span>
          </div>

        </div>

        {/* KPI */}

        <div className="grid grid-cols-2 gap-4">

          <StatCard
            title="Projects"
            value="08"
          />

          <StatCard
            title="Dashboards"
            value="05"
          />

          <StatCard
            title="ML Models"
            value="07"
          />

          <StatCard
            title="Tech Stack"
            value="15+"
          />

        </div>

        {/* Fake Chart */}

        <div className="mt-8">

          <p className="mb-3 text-sm text-zinc-400">
            Learning Growth
          </p>

          <svg
            viewBox="0 0 400 120"
            className="w-full"
          >
            <motion.path
              d="M10 100 C80 40 130 70 180 50 C230 30 270 60 320 25 C350 10 380 20 390 15"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
              }}
            />
          </svg>

        </div>

        {/* Skills */}

        <div className="mt-8 space-y-5">

          <Progress
            title="Python"
            width="95%"
          />

          <Progress
            title="SQL"
            width="90%"
          />

          <Progress
            title="Power BI"
            width="85%"
          />

          <Progress
            title="Machine Learning"
            width="90%"
          />

        </div>

      </div>
    </motion.div>
  );
}