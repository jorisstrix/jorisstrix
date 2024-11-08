// ab-test-datalayer.js
(function() {
  console.log("Loading datalayer script");
  window.datalayer = window.datalayer || [];
  window.datalayer.push({
    event: 'abtestperformance',
    testname: 'ab test name here',
    variant: 'a',
    timestamp: new Date().toISOString()
  });
  console.log("Event pushed to datalayer:", window.datalayer);
})();
