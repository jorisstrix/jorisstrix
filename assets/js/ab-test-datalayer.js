// ab-test-datalayer.js
(function() {
    window.datalayer = window.datalayer || [];
    window.datalayer.push({
      event: 'abtestperformance',
      testname: 'ab test name here',
      variant: 'a', // or 'b' as needed
      timestamp: new Date().toISOString()
    });
  })();