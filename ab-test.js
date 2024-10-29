<script>
  (function() {
    // Generate a random number from the built-in Random Number variable
    var randomNumber = {{Random Number}};
    
    // Determine the variant based on the random number
    var variant = randomNumber % 2 === 0 ? 'A' : 'B'; 
    
    // Set the cookie to persist the variant for 30 days
    document.cookie = "ab_test_variant=" + variant + "; path=/; max-age=" + (60*60*24*30);
  })();
</script>
