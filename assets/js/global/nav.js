window.addEventListener('DOMContentLoaded', function () {
  let nav = $('nav');

  ajax.fetchJSON(
    '/blog/assets/json/nav/main.json'
  ).then(function (menuList) {
    let html = '',
        callbacks = [];

    function reserveAddEvent(query, eventType, cb) {
      callbacks.push(function () {
        $(query).addEventListener(eventType, cb);
      });
    }

    for (let i = 0; i < menuList.length; i++) {
      html += '<div id="menu-'
            + i
            + '"><p class="name">'
            + menuList[i].name
            + '</p>'
            + '</div>';

      let query = '#menu-' + i;

      callbacks.push(function () {
        $(query).style.cursor = 'pointer';
      });

      if (menuList[i].href) {
        reserveAddEvent(query, 'click', function () {
          location.href = menuList[i].href;
        });
      } else if (menuList[i].load) {
        reserveAddEvent(query, 'click', function () {
          // ajax.fetchJSON(menuList[i].load)
          // .then(function (list) {
          //
          // });
        });
      } else {
        reserveAddEvent(query, 'click', function () {
          alert("서비스 준비중입니다! 기대해주세요.");
        });
      }
    }

    nav.innerHTML = html;
    callbacks.forEach(function (cb) {
      cb();
    });
  });
}, false);
