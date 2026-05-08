// Array of student objects
const students = [
    { name: "Rohit", weightClass: "lightweight", experience: "intermediate" },
    { name: "Arjun", weightClass: "heavyweight", experience: "beginner" },
    { name: "Priya", weightClass: "featherweight", experience: "advanced" }
  ]

// Accessing
console.log(students[0].name)

// Object destructuring
const {name, experience} = students[0]
console.log(name, experience)

// Array destructuring
const [first, , third] = students
console.log(first.name, third.name )

// Spread -- update without mutation
const updatedStudent = { ...students[0], experience: "advanced"}
console.log(updatedStudent)

// experimenting with stash