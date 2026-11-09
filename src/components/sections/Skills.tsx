import { skills } from '@/data/skills';
import SkillsCard from '../layouts/SkillsCard';

const Skills = () => {
    return (
      <section className="flex flex-col gap-6 section" id="skills">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-label text-primary font-bold uppercase">
            01 / Skills
          </span>

          <h2 className="text-headline-xl text-on-surface">
            Tools I build with
          </h2>

          <p className="text-body-md text-on-surface-variant max-w-2xl">
            I build full-stack apps with TypeScript end to end, and I’m still
            deepening my backend and testing skills.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1. Frontend Card */}
          {skills.map((item) => (
            <SkillsCard
              key={item.skill}
              {...item}
            />
          ))}
        </ul>
      </section>
    );
}

export default Skills