(function abTestScript() {
  const weightForA = 50;
  const RANDOM_MAX = 2147483648;
  const COOKIE_EXPIRATION_DAYS = 30;
  const COOKIE_MAX_AGE = 60 * 60 * 24 * COOKIE_EXPIRATION_DAYS;
  const randomNumber = Math.floor(Math.random() * RANDOM_MAX);
  const variant = (randomNumber % 100) < weightForA ? 'A' : 'B';

  // Inject AB test data directly into dataLayer
  window.dataLayer.push({
    event: 'abTestPerformance',
    testName: 'AB test name here',
    variant: variant,
    timestamp: new Date().toISOString()
  });

  // Set the AB test cookie
  document.cookie = `strixAB=${variant}; path=/; max-age=${COOKIE_MAX_AGE}`;
})();