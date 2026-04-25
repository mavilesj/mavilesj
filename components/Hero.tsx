import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto px-6 pt-20">
      <p className="text-sm text-[#6E6E73] mb-3 flex items-center gap-1.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#34C759]" />
        {profile.location}
      </p>
      <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-[#1D1D1F] mb-3">
        {profile.name}
      </h1>
      <p className="text-xl text-[#6E6E73] mb-8 font-light">{profile.title}</p>
      <div className="w-10 h-px bg-[#E5E5EA] mb-8" />
      <p className="max-w-lg text-[15px] text-[#3A3A3C] leading-relaxed mb-10">
        {profile.summary}
      </p>
      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="px-6 py-2.5 bg-[#007AFF] text-white text-sm font-medium rounded-full hover:bg-[#0066DD] transition-colors"
        >
          Get in touch
        </a>
        <a
          href="#projects"
          className="text-sm text-[#007AFF] hover:text-[#0066DD] transition-colors"
        >
          View projects →
        </a>
      </div>
    </section>
  );
}
