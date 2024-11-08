<script>
  (function abTestScript() {
    // Define the weight for Variant A (percentage)
    const weightForA = 0;

  // Generate a random number between 0 and 2147483647
  const randomNumber = Math.floor(Math.random() * 2147483648);

  // Determine the variant based on the random number and weight
  const variant = (randomNumber % 100) < weightForA ? 'A' : 'B';

  // Set the cookie to persist the variant for 30 days
  const cookieValue = `strixAB=${variant}; path=/; max-age=${60 * 60 * 24 * 30}`;
  document.cookie = cookieValue;

  // Define A/B test details
  const testName = 'AB test name here'; // A variable that describes the A/B test

  // Push data to the dataLayer for analytics tracking
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'abTestPerformance',
  testName,
  variant,
  timestamp: new Date().toISOString()
    });

  // Consolidated log message
  console.log({
    "Weight for Variant A": weightForA,
  "Generated Random Number": randomNumber,
  "Assigned Variant": variant,
  "Cookie Set": cookieValue,
  "DataLayer Push": {
    event: 'abTestPerformance',
  testName,
  variant,
  timestamp: new Date().toISOString()
      }
    });
  })();
</script>