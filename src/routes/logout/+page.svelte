<script>
    // Import any necessary functions or libraries here

    function logout() {
        // Clear the JWT token from the cookie
        document.cookie =
            "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // Redirect the user to a specific page after logging out (e.g., the login page)
        window.location.href = "/";
    }

    // Call the logout function immediately when the route is accessed
    logout();
</script>
