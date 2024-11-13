(function() {
  // Load ab-test-datalayer.js synchronously for immediate data layer push
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jorisstrix.github.io/assets/js/ab-test-datalayer.js", false);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              const script = document.createElement("script");
              script.text = xhr.responseText;
              document.head.insertBefore(script, document.head.children[1] || null);
          } else {
              console.error("Failed to load ab-test-datalayer.js");
          }
      }
  };
  xhr.send();

  // Load ab-test-cookie.js asynchronously
  const cookieScript = document.createElement('script');
  cookieScript.src = "https://jorisstrix.github.io/assets/js/ab-test-cookie.js";
  cookieScript.defer = true;
  cookieScript.onerror = () => console.error("Failed to load ab-test-cookie.js");
  document.head.appendChild(cookieScript);
})();