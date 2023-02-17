import { produce } from "immer";
const employee = {
    name: "Herly",
    age: 34,
    company: { country: "Canada", city: "Toronto" },
};
// const newEmployee = {
//     ...employee,
//     name: "Martin",
//     company: { ...employee.company, city: 'Calgary' }
// }
const newEmployee = produce(employee, (draftState) => {
    (draftState.name = "Najim"), (draftState.company.city = "Dhaka");
});
console.log(employee);
console.log(newEmployee);
