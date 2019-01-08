window.addEventListener('DOMContentLoaded', function () {
  let target = $$('.list > div');
  for (let i = 0; i < target.length; i++) {
    target[i].addEventListener('click', function () {
      const href = this.getAttribute('href');
      if (href === 'spin') {
        let deg;
        deg = +this.getAttribute('deg') || 0;
        deg = deg + 10;
        this.setAttribute('deg', deg);
        this.style.transform = 'rotate('+deg+'deg)';
      } else if (href) {
        location.href = href;
      } else {
        alert("아직 준비중입니다.");
      }
    }, false);
  }
}, false);
