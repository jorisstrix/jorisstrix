(function abTestScript() {
  // Define the weight for Variant A (as a percentage)
  const weightForA = 50;
  
  // Constants for random number range and cookie expiration
  const RANDOM_MAX = 2147483648;
  const COOKIE_EXPIRATION_DAYS = 30;
  const COOKIE_MAX_AGE = 60 * 60 * 24 * COOKIE_EXPIRATION_DAYS;

  // Generate a random number and determine the variant based on weight
  const randomNumber = Math.floor(Math.random() * RANDOM_MAX);
  const variant = (randomNumber % 100) < weightForA ? 'A' : 'B';

  // Set the cookie to persist the variant
  document.cookie = `strixAB=${variant}; path=/; max-age=${COOKIE_MAX_AGE}`;

  // Define A/B test details
  const testName = 'AB test name here';

  // Push data to the dataLayer for analytics tracking if dataLayer exists
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'abTestPerformance',
      testName,
      variant,
      timestamp: new Date().toISOString()
    });
  } else {
    console.warn("dataLayer is not defined.");
  }

  // Consolidated log message for debugging
  console.log({
    "Weight for Variant A": weightForA,
    "Generated Random Number": randomNumber,
    "Assigned Variant": variant,
    "Cookie Set": `strixAB=${variant}; path=/; max-age=${COOKIE_MAX_AGE}`
  });
})();