import { projects } from "@/data/projects";
import ProjectsCard from "../layouts/ProjectsCard";

const Projects = () => {
    return (
      <section className="section flex flex-col gap-10" id="projects">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-label text-primary font-bold uppercase">
            02 / Projects
          </span>

          <h2 className="text-headline-xl text-on-surface">
            Live demo projects and what I&apos;m building next
          </h2>
          <p className="text-body text-on-surface-variant max-w-2xl">
            A live demo donation website with two full-stack projects in planning. Previews are design mockups for the planned project, not finished apps.
          </p>
        </div>

        <ul className="flex flex-col gap-10">
          {projects.map((item) => (
            <ProjectsCard key={item.title} {...item} />
          ))}
        </ul>
      </section>
    );
}

export default Projects