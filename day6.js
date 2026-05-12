// simulating a database fetch that takes 1 second
const fetchStudents = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: "Rohit", weightClass: "lightweight" },
          { name: "Priya", weightClass: "featherweight" }
        ])
      }, 1000)
    })
  }
  
  const getStudents = async () => {
    console.log("fetching students...")
    const students = await fetchStudents()
    console.log(students)
  }
  
  getStudents()

  const fetchWithError = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Database connection failed")
      }, 1000)
    })
  }
  
  const getStudentsWithError = async () => {
    try {
      const students = await fetchWithError()
      console.log(students)
    } catch (error) {
      console.log("Something went wrong:", error)
    }
  }
  
  getStudentsWithError()