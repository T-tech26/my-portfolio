import { Chip } from "../ui/chips"

interface BadgeProps {
    text: string
}

const AvailabilityBadge = ({ text }: BadgeProps) => {
  return (
    <Chip variant="badge">
        <span className="size-2 rounded-full bg-tertiary animate-pulse"></span>

        <span className="text-label font-mono text-tertiary">{text}</span>
    </Chip>
  )
}

export default AvailabilityBadge