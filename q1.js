const getRandom = (a) => {
  return Math.floor(Math.random() * a) + 1;
};

let a=getRandom(30);
console.log(a);