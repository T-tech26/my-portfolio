import { Chip } from "../ui/chips";
import { SkillGroup } from "../../types";
import { accentStyles } from "@/utils";

const SkillsCard = ({ icon: Icon, accent, tag, skill, description, stacks }: SkillGroup) => {
    return (
        <li className="p-6 rounded-xl bg-surface-container flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center ${accentStyles[accent]}`}>
                    <Icon className="size-5" aria-hidden />
                </div>
                <span className="font-mono text-caption text-outline">{tag}</span>
            </div>

            <div>
                <h3 className="text-body-lg text-on-surface">{skill}</h3>
                <p className="text-caption text-on-surface-variant mt-0.5">{description}</p>
            </div>

            <ul className="flex flex-wrap gap-1.5 mt-auto pt-1">
                {stacks.map(stack => (
                    <li
                        key={stack}
                    >
                        <Chip>
                            {stack}
                        </Chip>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default SkillsCard