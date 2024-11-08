// ab-test.js
(function() {
  function load_script(src) {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.onload = function() {
      console.log(src + ' loaded successfully');
    };
    script.onerror = function() {
      console.log('Error loading ' + src);
    };
    document.head.appendChild(script);
  }

  load_script('https://jorisstrix.github.io/assets/js/ab-test-cookie.js');
  load_script('https://jorisstrix.github.io/assets/js/ab-test-datalayer.js');
})();