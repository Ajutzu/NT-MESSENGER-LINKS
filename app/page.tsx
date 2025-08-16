"use client"

import { useState } from "react"
import { SearchBar } from "@/components/atoms/search-bar"
import { CourseGrid } from "@/components/atoms/course-grid"
import { CourseHeader } from "@/components/atoms/course-header"
import type { Course } from "@/components/atoms/course-card"

const courses: Course[] = [
  {
    id: "IT 411",
    code: "https://m.me/j/AbYF08oiv6UEh3m5/",
    title: "Capstone Project 2",
    description: "Advanced project development and implementation in information technology",
    enrollment: "open",
    status: "active",
  },
  {
    id: "ENGG 405",
    code: "https://m.me/j/AbZt1wDsrrK5f-P6/",
    title: "Technopreneurship",
    description: "Entrepreneurship principles applied to technology-based ventures",
    enrollment: "open",
    status: "active",
  },
  {
    id: "IT 413",
    code: "IT 413",
    title: "Advanced Information Assurance and Security",
    description: "Advanced concepts in cybersecurity and information protection",
    enrollment: "closed",
    status: "disabled",
  },
  {
    id: "NTT 405",
    code: "https://m.me/j/AbY4ZSlliq_Y-AHC/",
    title: "Cybersecurity",
    description: "Comprehensive cybersecurity principles and practices",
    enrollment: "open",
    status: "active",
  },
  {
    id: "CS 423",
    code: "https://m.me/j/AbabVNxUzXDTPBhm/",
    title: "Social Issues and Professional Practice",
    description: "Ethics, social responsibility, and professional standards in computing",
    enrollment: "open",
    status: "active",
  },
  {
    id: "IT 412",
    code: "https://m.me/j/AbYUqaCt7QMBmew-/",
    title: "Platform Technologies",
    description: "Modern platform architectures and development frameworks",
    enrollment: "open",
    status: "active",
  },
  {
    id: "IT 414",
    code: "https://m.me/j/AbZJD_sEwOiy0H94/",
    title: "Systems Quality Assurance",
    description: "Quality assurance methodologies and testing strategies",
    enrollment: "open",
    status: "active",
  },
]

export default function CourseListing() {
  const [searchTerm, setSearchTerm] = useState("")
  const [enrollmentFilter, setEnrollmentFilter] = useState("all")

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = enrollmentFilter === "all" || course.enrollment === enrollmentFilter

    return matchesSearch && matchesFilter
  })

  const handleMessengerJoin = (courseCode: string) => {
    window.open(courseCode, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-6">
            <CourseHeader
              totalCourses={filteredCourses.length}
              openCourses={filteredCourses.filter((c) => c.enrollment === "open").length}
            />

            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              enrollmentFilter={enrollmentFilter}
              onFilterChange={setEnrollmentFilter}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <CourseGrid courses={filteredCourses} onMessengerJoin={handleMessengerJoin} />
      </main>
    </div>
  )
}
