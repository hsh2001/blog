setTimeout(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
    setTimeout(function () {
      console.log(3);
      setTimeout(function () {
        console.log(4);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
