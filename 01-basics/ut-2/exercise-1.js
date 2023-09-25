let texto1="Welcome to the aplication";
let texto2="This is an informational message";
let warning="This is a warnig. Becautious";
let error="Error ! Something went wrong";

console.log("%c "+texto1,"color:blue ; font-weight:bold");
console.log("%c "+texto2,"color:green");
console.warn(warning);
console.error(error);

const tabla = {
    name: ["John","Jane","Bob"],
    age: [30,25,40],
    city:["New York","San Francisco"]
  };

  console.table(tabla);