// Class code examples

const student1 = {name: "Bob", age: 17}
const student2 = {name: "Susy", age: 18}
const student3 = {name: "Ted", age: 18}

const students = [
    {name: "Bob", age: 17},
    {name: "Susy", age: 18},
    {name: "Ted", age: 18}
]

console.log(students[1])

console.log(students[1].age)
console.log(students.indexOf("Susy"))// This will not work

const Bob = {name: "Bob", age: 17}
const Susy = {name: "Susy", age: 18}
const Ted = {name: "Ted", age: 18}

const studentsObj = {
    Bob: {name: "Bob", age: 17},
    Susy : {name: "Susy", age: 18},
    Ted : {name: "Ted", age: 19}
}

console.log(studentsObj.Susy.age)
studentsObj.hasOwnProperty("Susy")
studentsObj.hasOwnProperty("Marco")

const classroom = {
    Marco: { name: "Marco", friends: [{name: "Paolo", age: 49}]},
    Carlos: { name: "Carlos", friends: [{name: "Gabriel", age: 45}]},
    Carol: { name: "Carol", friends: [{name: "Bob", age: 17}, {name: "Susy", age: 18}, {name: "Ted", age: 18}]}
}

console.log(classroom.Carlos.friends.length)
for (const friend of classroom.Carol.friends) console.log(friend.name)