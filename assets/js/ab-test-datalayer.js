// ab-test-datalayer.js
(function() {
    const variant = document.cookie
      .split('; ')
      .find(row => row.startsWith('strixab='))
      ?.split('=')[1] || 'b';
  
    window.datalayer = window.datalayer || [];
    window.datalayer.push({
      event: 'abtestperformance',
      testname: 'ab test name here',
      variant: variant,
      timestamp: new Date().toISOString()
    });
  })();  