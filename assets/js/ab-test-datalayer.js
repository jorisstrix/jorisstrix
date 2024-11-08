// ab-test-datalayer.js
(function() {
    console.log('Starting to push event to dataLayer'); // Initial log to confirm script execution
  
    window.datalayer = window.datalayer || [];
    window.datalayer.push({
      event: 'abtestperformance',
      testname: 'ab test name here',
      variant: 'a', // or 'b' as needed
      timestamp: new Date().toISOString()
    });
  
    console.log('DataLayer event pushed:', {
      event: 'abtestperformance',
      testname: 'ab test name here',
      variant: 'a', // Confirmed variant
      timestamp: new Date().toISOString()
    });
  })();
  