import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-xs uppercase tracking-widest text-[#6E6E73] mb-8">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-sm font-semibold text-[#1D1D1F] mb-2 leading-snug">
              {project.title}
            </h3>
            <p className="text-[13px] text-[#6E6E73] mb-5 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 bg-blue-50 text-[#007AFF] rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#007AFF] hover:text-[#0066DD] transition-colors"
                >
                  Live ↗
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#007AFF] hover:text-[#0066DD] transition-colors"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
