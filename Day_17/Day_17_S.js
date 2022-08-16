console.log("\n")
console.log("======================== Setting item to the sessionStorage ========================")
console.log("\n")



sessionStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(sessionStorage)





sessionStorage.setItem('age', 200)
console.log(sessionStorage)






sessionStorage.setItem('age', 350)
console.log(sessionStorage)







const skills = ['HTML', 'CSS', 'JS', 'React']

const skillsJSON = JSON.stringify(skills, undefined, 4)
sessionStorage.setItem('skills', skillsJSON)
console.log(sessionStorage)







const skills1 = ['HTML', 'CSS', 'JS', 'React']

sessionStorage.setItem('skills', skills1)
console.log(sessionStorage)







let skills2 = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 }
]

let skillJSON = JSON.stringify(skills2)
sessionStorage.setItem('skills', skillJSON)







const user = {
  firstName: 'Asabeneh',
  age: 250,
  skills: ['HTML', 'CSS', 'JS', 'React']
}

const userText = JSON.stringify(user, undefined, 4)
sessionStorage.setItem('user', userText)





console.log("\n")
console.log("======================== Getting item from sessionStorage ========================")
console.log("\n")



let firstName3 = sessionStorage.getItem('firstName')
let age3 = sessionStorage.getItem('age')
let skills3 = sessionStorage.getItem('skills')
console.log(firstName3, age3, skills3)





let skills4 = sessionStorage.getItem('user')
let skillsObj4 = JSON.parse(skills, undefined, 4)
console.log(skillsObj4)





let skills5 = sessionStorage.getItem('user')
let skillsObj5 = JSON.parse(skills, undefined, 4)
console.log(skillsObj5)





let skills6 = sessionStorage.getItem('user')
let skillsObj6 = JSON.parse(skills, undefined, 4)
console.log(skillsObj6)




console.log("\n")
console.log("======================== Clearing the sessionStorage ========================")
console.log("\n")


sessionStorage.clear()
