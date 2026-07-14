import Link from "next/link";
import { Container } from "@/components/ui/container";
import { contact } from "@/data/contact";
import { Mail, MapPin, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FadeIn } from "@/components/animations/fade-in";

export function ContactSection() {
  return (
    <FadeIn>
    <section id="contact" className="py-32">
      <Container>
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl">

          <p className="uppercase tracking-[0.35em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Let's Build Something Great Together.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            I'm actively looking for opportunities in Data Analytics,
            Business Intelligence, and AI. If you'd like to collaborate,
            discuss a project, or have an opportunity that matches my
            skills, I'd love to hear from you.
          </p>

          {/* Contact Details */}

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400" />
              <Link
                href={`mailto:${contact.email}`}
                className="hover:text-cyan-400"
              >
                {contact.email}
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400" />
              <span>{contact.location}</span>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-xl text-cyan-400" />
              <Link
                href={contact.github}
                target="_blank"
                className="hover:text-cyan-400"
              >
                GitHub
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-xl text-cyan-400" />
              <Link
                href={contact.linkedin}
                target="_blank"
                className="hover:text-cyan-400"
              >
                LinkedIn
              </Link>
            </div>

          </div>

          {/* Resume Buttons */}

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href={contact.resume}
              download
              className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
            >
              <Download size={20} />
              Resume (PDF)
            </a>

            <a
              href={contact.resumeDocx}
              download
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-white/10"
            >
              <Download size={20} />
              Resume (DOCX)
            </a>

          </div>

        </div>
      </Container>
    </section>
    </FadeIn>
  );
}