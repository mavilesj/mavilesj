import { education, certifications, languages } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-xs uppercase tracking-widest text-[#6E6E73] mb-8">
        Education
      </h2>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
        {education.map((edu, i) => (
          <div
            key={edu.degree}
            className={`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 px-8 py-6 ${
              i < education.length - 1 ? "border-b border-[#F2F2F7]" : ""
            }`}
          >
            <div>
              <h3 className="text-sm font-semibold text-[#1D1D1F] leading-snug">
                {edu.degree}
              </h3>
              <p className="text-sm text-[#6E6E73] mt-0.5">{edu.institution}</p>
            </div>
            <span className="text-xs text-[#AEAEB2] tabular-nums shrink-0 sm:pt-1">
              {edu.year}
            </span>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <p className="px-6 pt-5 pb-2 text-xs uppercase tracking-widest text-[#6E6E73]">
            Certifications
          </p>
          {certifications.map((cert, i) => (
            <div
              key={cert}
              className={`px-6 py-4 text-sm text-[#3A3A3C] ${
                i < certifications.length - 1 ? "border-b border-[#F2F2F7]" : "pb-5"
              }`}
            >
              {cert}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <p className="px-6 pt-5 pb-2 text-xs uppercase tracking-widest text-[#6E6E73]">
            Languages
          </p>
          {languages.map((lang, i) => (
            <div
              key={lang.name}
              className={`px-6 py-4 flex justify-between items-center ${
                i < languages.length - 1 ? "border-b border-[#F2F2F7]" : "pb-5"
              }`}
            >
              <span className="text-sm text-[#3A3A3C]">{lang.name}</span>
              <span className="text-xs text-[#AEAEB2]">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
