import type { Project, ProjectStatus } from "@/types";
import { Check, Code, Eye } from "lucide-react";
import { Chip } from "@/components/ui/Chips";
import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";
import Image from "next/image";

const statusLabel: Record<ProjectStatus, string> = {
  planned: "Planned",
  "in-progress": "In progress",
  live: "Live",
};

const ProjectsCard = ({
  status,
  title,
  purpose,
  description,
  plannedFeatures,
  stacks,
  liveUrl,
  sourceUrl,
  preview,
}: Project) => {
  const isLive = status === "live";

  return (
    <li className="p-6 lg:p-10 rounded-xl bg-surface-container flex flex-col lg:flex-row gap-1 shadow-md">
      <div className="flex-1 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <Chip variant="status" status={status}>
              {isLive && (
                <span
                  aria-hidden
                  className="size-1.5 rounded-full bg-tertiary motion-safe:animate-pulse"
                ></span>
              )}
              Status: {statusLabel[status]}
            </Chip>
          </div>

          <h3 className="text-headline text-on-surface">{title}</h3>

          <p
            className={`text-body font-medium ${isLive ? "text-tertiary" : "text-secondary"}`}
          >
            {purpose}
          </p>

          <p className="text-body text-on-surface-variant">{description}</p>

          <div className="flex flex-col gap-1">
            <h4 className="font-mono text-caption text-outline uppercase">
              {isLive ? "Features" : "Planned features"}
            </h4>
            <ul className="pt-1 flex flex-col gap-1.5">
              {plannedFeatures.map((feature) => (
                <li key={feature} className="flex gap-2">
                  {isLive ? (
                    <Check aria-hidden className="size-5 text-tertiary" />
                  ) : (
                    <span
                      aria-hidden
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-outline"
                    />
                  )}

                  <span className="text-body text-on-surface-variant">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="pt-1 flex items-center flex-wrap gap-2">
            {stacks.map((stack) => (
              <li key={stack}>
                <Chip variant="tags">{stack}</Chip>
              </li>
            ))}
          </ul>

          {liveUrl || sourceUrl && (
            <div className="flex items-center gap-5 pt-3">
              {liveUrl && (
                <Link
                  href={liveUrl}
                  className={buttonStyles("primary")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Eye className="size-5" />
                  Live Demo
                  <span className="sr-only"> (opens in a new tab)</span>
                </Link>
              )}

              {sourceUrl && (
                <Link
                  href={sourceUrl}
                  className={buttonStyles("secondary")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code className="size-5" />
                  Source Code
                  <span className="sr-only"> (opens in a new tab)</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {preview && (
        <figure className="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-surface-container-high/40 bg-surface-container-lowest lg:flex-1">
          <Image
            src={preview.src}
            alt={preview.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
          {preview.kind === "design" && (
            <figcaption className="absolute left-3 top-3">
              <Chip variant="badge">Design preview</Chip>
            </figcaption>
          )}
        </figure>
      )}
    </li>
  );
};

export default ProjectsCard;
