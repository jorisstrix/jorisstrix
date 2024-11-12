(function () {
    window.dataLayer = window.dataLayer || [];
    
    // Monitor dataLayer for gtm.init event
    const dataLayerPush = window.dataLayer.push;
    window.dataLayer.push = function(...args) {
        dataLayerPush.apply(this, args);
        
        // Check if the gtm.init event was pushed
        const event = args[0] && args[0].event;
        if (event === "gtm.init") {
            // Push abTestPerformance event immediately after gtm.init
            window.dataLayer.push({
                event: 'abTestPerformance',
                testname: 'ab test name here',
                variant: 'A',
                timestamp: new Date().toISOString()
            });
        }
    };
})();