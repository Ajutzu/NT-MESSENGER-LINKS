import { Search } from "lucide-react"
import { CourseCard, type Course } from "./course-card"

interface CourseGridProps {
  courses: Course[]
  onMessengerJoin: (courseCode: string) => void
}

export function CourseGrid({ courses, onMessengerJoin }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-muted-foreground">
          <Search className="h-16 w-16 mx-auto mb-6 opacity-30" />
          <h3 className="text-xl font-semibold mb-3">No courses found</h3>
          <p className="text-base max-w-md mx-auto">
            Try adjusting your search terms or filter settings to find the courses you're looking for
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} onMessengerJoin={onMessengerJoin} />
      ))}
    </div>
  )
}
