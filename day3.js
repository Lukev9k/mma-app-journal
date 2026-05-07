// Function declaration
function getStudentStatus(name) {
    return name + " is an active student "
}

// Arrow function
const calculateMonthsActive = (joinMonth, currentMonth) => currentMonth - joinMonth

console.log(getStudentStatus("Rohit"))
console.log(calculateMonthsActive(2,7))

const printGymName = (name) => {
    console.log(name)
  }
  
const result = printGymName("Kinsou MMA")
  console.log(result)

const getExperienceLevel = (name, level = "beginner") => {
    return name + " is at " + level + " level"
  }

  console.log(getExperienceLevel("Rohit", "advanced"))
  console.log(getExperienceLevel("Arjun"))