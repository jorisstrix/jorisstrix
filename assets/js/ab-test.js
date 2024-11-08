<script type="text/javascript">
  (function() {
    // Define the weight for Variant A (percentage)
    var weightForA = 0;

    // Generate a random number from the built-in Random Number variable
    var randomNumber = {{ Random Number }};

    // Determine the variant based on the random number and weight
    var variant = (randomNumber % 100) < weightForA ? 'A' : 'B';

    // Set the cookie to persist the variant for 30 days
    var cookieValue = "strixAB=" + variant + "; path=/; max-age=" + (60 * 60 * 24 * 30);
    document.cookie = cookieValue;

    // Define A/B test details
    var testName = 'AB test name here'; // A variable that describes the A/B test

    // Push data to the dataLayer for analytics tracking
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'abTestPerformance',
        testName: testName,
        variant: variant,
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
        testName: testName,
        variant: variant,
        timestamp: new Date().toISOString()
      }
    });
  })();
</script>