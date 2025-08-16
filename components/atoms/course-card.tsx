"use client"

import { MessageCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "./status-badge"

export interface Course {
  id: string
  code: string
  title: string
  description: string
  enrollment: "open" | "closed"
  status: "active" | "disabled"
}

interface CourseCardProps {
  course: Course
  onMessengerJoin: (courseCode: string) => void
}

export function CourseCard({ course, onMessengerJoin }: CourseCardProps) {
  return (
    <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
              {course.id}
            </CardTitle>
            <CardDescription className="font-semibold text-foreground text-base leading-tight">
              {course.title}
            </CardDescription>
          </div>
          <StatusBadge enrollment={course.enrollment} />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{course.description}</p>

        <div className="flex gap-2">
          <Button
            onClick={() => onMessengerJoin(course.code)}
            disabled={course.status === "disabled"}
            className="flex-1 gap-2 font-medium"
            variant={course.status === "disabled" ? "secondary" : "default"}
          >
            <MessageCircle className="h-4 w-4" />
            {course.status === "disabled" ? "Unavailable" : "Join Messenger Group"}
            {course.status === "active" && <ExternalLink className="h-3 w-3" />}
          </Button>
        </div>

        {course.status === "disabled" && (
          <p className="text-xs text-muted-foreground text-center bg-muted/50 rounded-md py-2">
            This group chat is currently unavailable. 
          </p>
        )}
      </CardContent>
    </Card>
  )
}
