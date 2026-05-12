interface Student {
    name: string
    weightClass: string
    experience: string
    active: boolean
    age?: number
}

const students: Student[] = [
    { name: "Rohit", weightClass: "lightweight", experience: "intermediate", active: true },
    { name: "Arjun", weightClass: "heavyweight", experience: "beginner", active: false },
    { name: "Priya", weightClass: "featherweight", experience: "advanced", active: true, age: 24 }
  ]

const getActiveStudents = (students: Student[]): Student[] => {
    return students.filter(student => student.active === true)
}

const getStudentLabel = (student: Student): string => {
    return student.name + "-" + student.experience
}

console.log(getActiveStudents(students))
console.log(getStudentLabel(students[0]))