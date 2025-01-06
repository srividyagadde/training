console.log("start");

//global scope

var a = 10;
console.log(a);

//script/local scope

let b = 20;
console.log(b);

const c = 50;
console.log(c);

//block scope

{
  var m = 100;
  console.log(m);

  let n = 200;
  console.log(n);

  const o = 300;
  console.log(o);
}

console.log("end");
