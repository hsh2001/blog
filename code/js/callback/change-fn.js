log1();

function log1 () {
  console.log(1);
  setTimeout(log2, 1000);
}

function log2 () {
  console.log(2);
  setTimeout(log3, 1000);
}

function log3 () {
  console.log(3);
  setTimeout(log4, 1000);
}

function log4 () {
  console.log(4);
}
