window.addEventListener('DOMContentLoaded', function () {
  ajax.fetch(
    '/blog/assets/html/global/footer.html'
  ).then(function (footer) {
    $('footer').innerHTML = footer;
  });
}, false);
