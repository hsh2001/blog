window.addEventListener('DOMContentLoaded', () => {
  $$('code:not(.plain-text)').forEach(
    elem => {
      const langName = elem.className.replace('no-load', '').trim(),
            url = `/blog/code/${elem.innerHTML.trim()}`;
      let promise;

      if (elem.className.includes('no-load'))
        promise = Promise.resolve(elem.innerHTML);
      else
        promise = ajax.fetch(url).catch(e => {
          console.log(url);
        });

      elem.innerHTML = '로딩중...';

      promise.then(
        s => s.trim()
      ).then(
        code => elem.innerHTML = hljs.highlight(langName, code).value
      );
    }
  );
});
