import { aboutCards } from "@/data/about";
import { accentStyles } from "@/utils";

const About = () => {
    return (
      <section className="section flex flex-col gap-10" id="about">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-label text-primary font-bold uppercase">
            03 / About
          </span>

          <h2 className="text-headline-xl text-on-surface">About me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 flex flex-col gap-4 text-body lg:text-body-lg text-on-surface-variant">
                <p>
                I&apos;m a self-taught developer based in Nigeria, learning
                full-stack web development by building. I work mainly with
                Next.js, TypeScript, and Node.js, and I&apos;m comfortable with
                PostgreSQL.
                </p>
                <p>
                I&apos;m also an Electrical and Electronics Engineering student at
                Niger Delta University.
                </p>
                <p>
                I&apos;m looking for a junior frontend or full-stack role where I
                can keep learning on a real team. Next, I&apos;m building two
                full-stack projects, which you can see in the Projects section.
                </p>
            </div>

            <ul className="lg:col-span-6 grid grid-cols-1 gap-4">
                {aboutCards.map(({ icon: Icon, ...about }) => (
                    <li 
                        key={about.title}
                        className="p-6 rounded-xl bg-surface-container flex flex-col gap-1 shadow-sm"
                    >
                        <div className="flex items-center gap-1">
                            <Icon className={`size-5 ${accentStyles[about.accent]}`} />
                            
                            <h3 className="text-body-lg text-on-surface">
                                {about.title}
                            </h3>
                        </div>

                        <p className="text-body text-on-surface-variant">
                            {about.description}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
      </section>
    );
}

export default About