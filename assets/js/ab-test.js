(function() {
  const cookie_expiration_days = 30;
  const cookie_max_age = 60 * 60 * 24 * cookie_expiration_days;
  const weight_for_a = 50;
  const random_max = 2147483648;
  const random_number = Math.floor(Math.random() * random_max);
  const variant = (random_number % 100) < weight_for_a ? 'a' : 'b';
  
  document.cookie = `strixab=${variant}; path=/; max-age=${cookie_max_age}`;
})();

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
