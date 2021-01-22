let d = new Date();
document.body.innerHTML = "<h1>Today's date is" + "<p>" + d + "</p>" + "</h1>";

let obj = {
  name: "John",
  age: 30,
};

let map = new Map(Object.entries(obj));

console.log(map);
