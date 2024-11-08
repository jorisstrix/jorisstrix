(function() {
  function load_script(src) {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.head.appendChild(script);
  }

  load_script('https://jorisstrix.github.io/assets/js/ab-test-cookie.js');
  load_script('https://jorisstrix.github.io/assets/js/ab-test-datalayer.js');
})();