import { Badge } from "@/components/ui/badge"

interface CourseHeaderProps {
  totalCourses: number
  openCourses: number
}

export function CourseHeader({ totalCourses, openCourses }: CourseHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Course Messenger Links
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">BSIT 4101 - Network Technology Track</p>
      </div>
      <div className="flex gap-2">
        <Badge variant="secondary" className="hidden sm:flex text-sm px-3 py-1">
          {totalCourses} Groups
        </Badge>
        <Badge variant="outline" className="hidden md:flex text-sm px-3 py-1">
          {openCourses} Open
        </Badge>
      </div>
    </div>
  )
}
