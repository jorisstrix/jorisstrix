(function() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'abtestperformance',
      testname: 'ab test name here',
      variant: 'a',
      timestamp: new Date().toISOString()
    });
  })();
  