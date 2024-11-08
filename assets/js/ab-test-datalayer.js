<script>
   // Create parameters for analytics
    var variant = 'Variant name here'; // A variable that represents the current variant
    var testName = 'AB test name here'; // A variable that describes the A/B test

    // Push data to the dataLayer for analytics tracking
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'abTestPerformance',
    testName: testName,
    variant: variant,
    timestamp: new Date().toISOString()
  });
    console.log('AB DataLayer:', {
        event: 'abTestPerformance',
    testName: testName,
    variant: variant
  });
</script>
