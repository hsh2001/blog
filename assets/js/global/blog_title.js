window.addEventListener('DOMContentLoaded', function () {
  ajax
  .fetch('/blog/assets/css/global/blog_title.css')
  .then(function (cssCode) {
    let style = document.createElement('style');
    style.innerHTML = cssCode;
    document.head.appendChild(style);
    return ajax.fetch(
      '/blog/assets/html/global/blog_title.html'
    );
  }).then(function (html) {
    ($('#blog-title') || {}).innerHTML = html;
  });
}, false);
