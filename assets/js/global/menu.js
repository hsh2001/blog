let menu = {};

menu.init = (function () {
  let domLoad = new Promise(function (r) {
    document.addEventListener('DOMContentLoaded', r, false);
  });
  return function () {
    return domLoad.then(function () {
      return ajax.fetch(
        '/blog/assets/html/global/menu.html'
      );
    }).then(function (html) {
      let div = document.createElement('div');
      div.innerHTML = html;
      div.id = 'menu';
      document.body.appendChild(div);
    }).then(function () {
      return ajax.fetchJSON(
        '/blog/assets/json/menu/main.json'
      )
    }).then(function (menuList) {
      let menuItems = $('#menu-items');
      menuList.forEach(function (elem) {
        let div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = elem.name;
        div.setAttribute('href', elem.href);
        div.setAttribute('script', elem.script);
        div.addEventListener('click', function () {
          const href = this.getAttribute('href'),
                script = this.getAttribute('script');
          if (href)
            location.href = href;
          else if (script)
            eval(script);
        }, false);
        menuItems.appendChild(div);
      });
    });
  }
})();

menu.open = function () {
  let menu = $('#menu');
  if (!menu) return;
  menu.isOpen = true;
  menu.className = 'open';
}

menu.close = function () {
  let menu = $('#menu');
  if (!menu) return;
  menu.isOpen = false;
  menu.className = 'close';
}

menu.click = function () {
  let menu = $('#menu');
  if (!menu) return;
  menu.className = menu.isOpen? 'close' : 'open';
  menu.isOpen = !menu.isOpen;
}
