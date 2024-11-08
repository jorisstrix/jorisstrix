<script>
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

  // Consolidated log message
  console.log({
    "Weight for Variant A": weightForA,
  "Generated Random Number": randomNumber,
  "Assigned Variant": variant,
  "Cookie Set": cookieValue
    });
  })();
</script>