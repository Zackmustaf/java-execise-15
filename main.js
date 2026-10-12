// const classStudent  = [

//     {name:'zakariye', age: 20, city:'nairobi'},
//     {name: 'abdiasis', age: 18, city: 'Galkacyo',},
//     {name:'yahya', age: 30, city: 'garawe'},
//     {name: 'halima', age: 99 , city: 'Qardho'}

// ]

// for(const i of classStudent){
//     const.log(i)
// }

// for(const key in of classStudent){
//     console.log(key)
// }

// const people = [
//   { name: "Alice", age: 25, city: "Wonderland" },
//   { name: "Bob", age: 30, city: "Builderland" },
//   { name: "Charlie", age: 35, city: "Chocolate Factory" },
// ];

// for (const person of people) {
//   console.log(
//     `${person.name} is ${person.age} years old and lives in ${person.city}.`,
//   );
// }
const people = [
  { name: "Alice", age: 25, city: "Wonderland" },
  { name: "Bob", age: 30, city: "Builderland" },
  { name: "Charlie", age: 35, city: "Chocolate Factory" },
];

for (const person of people) {
  console.log("---");
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}
