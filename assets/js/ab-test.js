(function() {
  function loadScript(src, onloadCallback) {
      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      script.onload = onloadCallback;
      script.onerror = function() {
          console.error('Error loading ' + src);
      };
      document.head.appendChild(script);
  }

  // Load ab-test-cookie.js and then ab-test-datalayer.js once the cookie is set
  loadScript('https://jorisstrix.github.io/assets/js/ab-test-cookie.js', function() {
      console.log('ab-test-cookie.js loaded successfully');
      
      // After setting the cookie, load ab-test-datalayer.js to push data to the dataLayer
      loadScript('https://jorisstrix.github.io/assets/js/ab-test-datalayer.js', function() {
          console.log('ab-test-datalayer.js loaded successfully');
      });
  });
})();