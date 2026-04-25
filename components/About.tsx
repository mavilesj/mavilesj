import { skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-xs uppercase tracking-widest text-[#6E6E73] mb-8">
        Skills
      </h2>
      <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
        {skills.map((group, i) => (
          <div key={group.category}>
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
              <span className="text-xs text-[#6E6E73] sm:w-44 shrink-0 pt-1">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 bg-blue-50 text-[#007AFF] rounded-full font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {i < skills.length - 1 && (
              <div className="mt-6 border-b border-[#F2F2F7]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
