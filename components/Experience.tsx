import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-xs uppercase tracking-widest text-[#6E6E73] mb-8">
        Experience
      </h2>
      <div className="space-y-4">
        {experience.map((job) => (
          <div key={job.company} className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-5">
              <div>
                <h3 className="text-base font-semibold text-[#1D1D1F]">{job.role}</h3>
                <p className="text-sm text-[#6E6E73] mt-0.5">{job.company}</p>
              </div>
              <span className="text-xs text-[#AEAEB2] tabular-nums shrink-0 sm:pt-1">
                {job.period}
              </span>
            </div>
            <ul className="space-y-3 border-l-2 border-[#F2F2F7] pl-4">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="text-sm text-[#3A3A3C] leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
