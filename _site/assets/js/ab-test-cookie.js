(function () {
    const cookieExpirationDays = 30;
    const cookieMaxAge = 60 * 60 * 24 * cookieExpirationDays;
    const weightForA = 50;
    const randomMax = 2147483648;
    const randomNumber = Math.floor(Math.random() * randomMax);
    const variant = (randomNumber % 100) < weightForA ? 'A' : 'B';
    document.cookie = `StrixAB=${variant}; path=/; max-age=${cookieMaxAge}`;
})();