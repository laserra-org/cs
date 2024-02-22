<script>
      import { supabase } from "$lib/supabaseClient.js";
    // Import any necessary functions or libraries here

    async function logout() {
        // Clear the JWT token from the cookie
        const { error } = await supabase.auth.signOut()
        document.cookie =
            "sb-jzzzibgfrdarpjzaezzb-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // Redirect the user to a specific page after logging out (e.g., the login page)
        window.location.href = "/app";
    }

    // Call the logout function immediately when the route is accessed
    logout();
</script>
