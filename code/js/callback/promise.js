//Promsie만 사용.

function wait(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

console.log(1);
wait(1000).then(function () {
  console.log(2);
  return wait(1000);
}).then(function () {
  console.log(3);
  return wait(1000);
}).then(function () {
  console.log(4);
});
