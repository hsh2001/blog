window.addEventListener('DOMContentLoaded', function () {
  let header = $('header'),
      prom = Promise.resolve();

  header.style.display = 'none';
  header.className += ' glass-bg shadow';

  if (navigator.standalone) {
    let style = document.createElement('style');
    prom = ajax.fetch(
      '/blog/assets/css/iOS/header-safe-area.css'
    ).then(function (css) {
      style.innerHTML = css;
      document.head.appendChild(style);
    });
  }

  prom.then(function () {
    return ajax.fetch(
      '/blog/assets/html/global/header.html'
    )
  }).then(function (html) {
    header.style.top = '-999px';
    header.style.display = 'block';
    header.innerHTML = html;

    // $('#menu-open-btn').onclick = menu.open;
    $('#blog-icon').onclick = function () {
      location.href = '/blog';
    }
  });

}, false);

window.addEventListener('scroll', function () {
  const SY = scrollY;
  let y = 0;

  if (SY < 150) y = 150 - SY;

  $('header').style.top = -y + 'px';
}, false);
