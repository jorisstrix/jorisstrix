// ab-test-datalayer.js
(function() {
    window.datalayer = window.datalayer || [];
    window.datalayer.push({
      event: 'abtestperformance',
      testname: 'ab test name here',
      variant: 'a', // or 'b', set directly if predetermined
      timestamp: new Date().toISOString()
    });
  
    console.log('DataLayer event pushed:', {
      event: 'abtestperformance',
      testname: 'ab test name here',
      variant: 'a', // Confirmed variant
      timestamp: new Date().toISOString()
    });
  })();  