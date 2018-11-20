window.addEventListener('DOMContentLoaded', function () {
  let target = $$('.list > div');
  for (let i = 0; i < target.length; i++) {
    target[i].addEventListener('click', function () {
      const href = this.getAttribute('href');
      if (href)
        location.href = href;
      else
        alert("아직 준비중입니다.");
    }, false);
  }
}, false);
