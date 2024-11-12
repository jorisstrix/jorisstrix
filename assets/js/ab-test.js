(function () {
  // Load and execute ab-test-datalayer.js directly in the head for immediate dataLayer push
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jorisstrix.github.io/assets/js/ab-test-datalayer.js", false); // false for synchronous
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const script = document.createElement("script");
      script.text = xhr.responseText;
      document.head.appendChild(script);
      console.log("Data layer pushed directly via ab-test-datalayer.js in the head");
    } else if (xhr.readyState === 4) {
      console.error("Failed to load ab-test-datalayer.js for direct data layer push");
    }
  };
  xhr.send();

  // Asynchronously load ab-test-cookie.js after the data layer is set up
  const cookieScript = document.createElement('script');
  cookieScript.src = "https://jorisstrix.github.io/assets/js/ab-test-cookie.js";
  cookieScript.defer = true;
  cookieScript.onload = function () {
    console.log("ab-test-cookie.js loaded asynchronously");
  };
  cookieScript.onerror = function () {
    console.error("Failed to load ab-test-cookie.js");
  };
  document.head.appendChild(cookieScript);
})();
