import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-xs uppercase tracking-widest text-[#6E6E73] mb-8">
        Contact
      </h2>
      <div className="max-w-sm">
        <p className="text-[15px] text-[#3A3A3C] leading-relaxed mb-8">
          Whether it&apos;s a QA challenge, an iOS project, or something else —
          I&apos;m happy to talk.
        </p>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center justify-between px-5 py-4 border-b border-[#F2F2F7] hover:bg-[#F5F5F7] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#6E6E73] w-16">Email</span>
              <span className="text-sm text-[#007AFF]">{profile.email}</span>
            </div>
            <span className="text-[#AEAEB2] text-base leading-none">›</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-5 py-4 border-b border-[#F2F2F7] hover:bg-[#F5F5F7] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#6E6E73] w-16">GitHub</span>
              <span className="text-sm text-[#007AFF]">{profile.github.replace("https://github.com/", "")}</span>
            </div>
            <span className="text-[#AEAEB2] text-base leading-none">›</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-5 py-4 hover:bg-[#F5F5F7] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#6E6E73] w-16">LinkedIn</span>
              <span className="text-sm text-[#007AFF]">miguel-aviles-jenkins</span>
            </div>
            <span className="text-[#AEAEB2] text-base leading-none">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}
