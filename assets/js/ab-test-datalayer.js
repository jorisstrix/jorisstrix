(function () {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: "gtm.init"
    });
    window.addEventListener("gtm.init", function() {
        window.dataLayer.push({
            event: 'abTestPerformance',
            testname: 'ab test name here',
            variant: 'A',
            timestamp: new Date().toISOString()
        });
    });
})();