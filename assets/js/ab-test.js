(function() {
  // Synchronously load and execute ab-test-datalayer.js for immediate data layer push
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jorisstrix.github.io/assets/js/ab-test-datalayer.js", false); // Synchronous request
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          const script = document.createElement("script");
          script.text = xhr.responseText;
          document.head.appendChild(script);
          console.log("Data layer loaded and executed from ab-test-datalayer.js");
      } else if (xhr.readyState === 4) {
          console.error("Failed to load ab-test-datalayer.js");
      }
  };
  xhr.send();

  // Asynchronously load ab-test-cookie.js after data layer is set up
  const cookieScript = document.createElement('script');
  cookieScript.src = "https://jorisstrix.github.io/assets/js/ab-test-cookie.js";
  cookieScript.defer = true;
  cookieScript.onload = function() {
      console.log("ab-test-cookie.js loaded asynchronously");
  };
  cookieScript.onerror = function() {
      console.error("Failed to load ab-test-cookie.js");
  };
  document.head.appendChild(cookieScript);
})();