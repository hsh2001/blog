//async await keyword 사용.

logNumbers();

function wait(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function logNumbers() {
  for (let i = 1; i <= 4; i++) {
    console.log(i);
    await wait(1000);
  }
}
