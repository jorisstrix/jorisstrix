<script>
(function() {
    // Function to get the value of a specified cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Function to set a cookie with specified name and value
    function setSessionCookie(name, value) {
        document.cookie = name + "=" + (value || "") + "; path=/";
    }

    // Get the current page view count from the cookie
    var pageviewCount = getCookie("pageviewCount");
    if (pageviewCount === null) {
        pageviewCount = 1; // If cookie doesn't exist, initialize to 1
    } else {
        pageviewCount = parseInt(pageviewCount, 10) + 1; // Increment the count
    }

    // Set the updated page view count in the cookie
    setSessionCookie("pageviewCount", pageviewCount);
    console.log('Page view count cookie set to: ' + pageviewCount);
})();
</script>
