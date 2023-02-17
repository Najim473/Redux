// spread operator
const employee = {
    name: "Herly",
    age: 34,
    company: { country: "Canada", city: "Toronto" },
}
const newEmployee = {
    ...employee,
    name: "Martin",
    company: { ...employee.company, city: 'Calgary' }
}
console.log(employee)
console.log(newEmployee)