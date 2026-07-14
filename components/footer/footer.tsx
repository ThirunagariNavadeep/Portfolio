import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

          {/* Left */}

          <div>
            <h2 className="text-2xl font-black">
              Navadeep Thirunagari
            </h2>

            <p className="mt-3 max-w-md text-zinc-400">
              Data Analyst • Analytics Engineer • AI Developer
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Building analytics dashboards, machine learning
              solutions, and AI-powered applications.
            </p>
          </div>

          {/* Right */}

          <div className="flex flex-col items-center gap-5 md:items-end">

            <div className="flex items-center gap-6">

              <Link
                href="https://github.com/ThirunagariNavadeep"
                target="_blank"
                className="transition hover:text-cyan-400"
              >
                <FaGithub size={24} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/thirunagari-navadeep"
                target="_blank"
                className="transition hover:text-cyan-400"
              >
                <FaLinkedin size={24} />
              </Link>

              <Link
                href="mailto:thirunagarinavadeep4@gmail.com"
                className="transition hover:text-cyan-400"
              >
                <Mail size={24} />
              </Link>

            </div>

            <p className="text-sm text-zinc-500">
              Built with Next.js • TypeScript • Tailwind CSS • Framer Motion
            </p>

            <p className="text-xs text-zinc-600">
              © 2026 Navadeep Thirunagari. All rights reserved.
            </p>

          </div>

        </div>
      </Container>
    </footer>
  );
}