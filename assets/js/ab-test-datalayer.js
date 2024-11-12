(function () {
    window.dataLayer = window.dataLayer || [];
    
    // Override dataLayer.push to monitor for gtm.init
    const originalPush = window.dataLayer.push;
    window.dataLayer.push = function(...args) {
        originalPush.apply(this, args);

        // Check if the gtm.init event was pushed
        const event = args[0] && args[0].event;
        if (event === "gtm.init") {
            console.log("gtm.init detected, pushing abTestPerformance after delay...");

            // Delay before pushing abTestPerformance event
            setTimeout(function() {
                window.dataLayer.push({
                    event: 'abTestPerformance',
                    testname: 'ab test name here',
                    variant: 'A',
                    timestamp: new Date().toISOString()
                });
                console.log("abTestPerformance event pushed.");
            }, 100);  // Adjust delay in milliseconds as needed
        }
    };
})();