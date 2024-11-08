(function() {
  // Define your AB test function
  function injectABTest() {
    const weightForA = 50;
    const RANDOM_MAX = 2147483648;
    const COOKIE_EXPIRATION_DAYS = 30;
    const COOKIE_MAX_AGE = 60 * 60 * 24 * COOKIE_EXPIRATION_DAYS;
    const randomNumber = Math.floor(Math.random() * RANDOM_MAX);
    const variant = (randomNumber % 100) < weightForA ? 'A' : 'B';

    // Push AB test data to dataLayer if available
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'abTestPerformance',
        testName: 'AB test name here',
        variant: variant,
        timestamp: new Date().toISOString()
      });
    } else {
      console.warn("dataLayer is not defined.");
    }

    // Set the AB test cookie
    document.cookie = `strixAB=${variant}; path=/; max-age=${COOKIE_MAX_AGE}`;
  }

  // Observe for GTM's dataLayer and execute the AB test script immediately when it becomes available
  const observer = new MutationObserver(function(mutations, obs) {
    if (window.dataLayer) {
      injectABTest(); // Inject AB test data immediately
      obs.disconnect(); // Stop observing once dataLayer is detected
    }
  });

  // Start observing the document body for changes
  observer.observe(document, { childList: true, subtree: true });
})();
