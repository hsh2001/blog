function headerScrollEvent() {
  const SY = scrollY;
  let y = 0;

  if (SY < 150) y = 150 - SY;

  $('header').style.top = -y + 'px';
}
window.addEventListener('scroll', headerScrollEvent, false);
window.addEventListener('DOMContentLoaded', function () {
  let header = $('header'),
      prom;

  header.style.display = 'none';

  prom = ajax.fetch(
    '/blog/assets/css/global/menu.css'
  ).then(function (css) {
    let style = document.createElement('style');
    style.innerHTML = css;
    document.body.appendChild(style);
  });

  if (navigator.standalone) {
    let style = document.createElement('style');
    prom = prom.then(function () {
      return ajax.fetch(
        '/blog/assets/css/iOS/header-safe-area.css'
      );
    }).then(function (css) {
      style.innerHTML = css;
      document.head.appendChild(style);
    });
  }

  Promise.all([
    menu.init(),
    prom.then(function () {
      return ajax.fetch(
        '/blog/assets/html/global/header.html'
      )
    }).then(function (html) {
      header.style.top = '-999px';
      header.style.display = 'block';
      header.innerHTML = html;
      headerScrollEvent();
    })
  ]).then(function () {
    $('#menu-open-btn').onclick = menu.click;
    $('#blog-icon').onclick = function () {
      location.href = '/blog';
    }
  });
}, false);
