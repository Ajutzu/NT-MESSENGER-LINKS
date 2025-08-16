import { Badge } from "@/components/ui/badge"

interface StatusBadgeProps {
  enrollment: "open" | "closed"
}

export function StatusBadge({ enrollment }: StatusBadgeProps) {
  return (
    <Badge
      variant={enrollment === "open" ? "default" : "secondary"}
      className={`text-xs font-medium ${
        enrollment === "open"
          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      }`}
    >
      {enrollment === "open" ? "Open" : "Closed"}
    </Badge>
  )
}
