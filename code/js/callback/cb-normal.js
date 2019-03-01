function f(fn) {
  fn(300);
}

f(function g(n) {
  console.log(n * 2);
});

//콘솔에는 600이 출력된다.
