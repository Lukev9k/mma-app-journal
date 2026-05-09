const students = [
    { name: "Rohit", weightClass: "lightweight", experience: "intermediate", active: true },
    { name: "Arjun", weightClass: "heavyweight", experience: "beginner", active: false },
    { name: "Priya", weightClass: "lightweight", experience: "advanced", active: true },
    { name: "Sana", weightClass: "featherweight", experience: "beginner", active: true }
  ]

// map - get just the names
const names = students.map(student => student.name)
console.log(names)

// filter - only active students
const activeStudents = students.filter(student => student.active === true)
console.log(activeStudents)

// filter - only lightweights
const lightweights = students.filter(student => student.weightClass === "lightweight")
console.log(lightweights)

// reduce - count total active students
const activeCount = students.reduce((acc, student) => {
    // if active, return acc + 1, otherwise return acc unchanged
    return student.active ? acc + 1 : acc
  }, 0)
console.log(activeCount)


// chaining map and filter together
const activeNames = students
  .filter(student => student.active === true)
  .map(student => student.name)

console.log(activeNames)