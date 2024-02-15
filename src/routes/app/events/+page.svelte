<script>
    import { isAuthenticated } from "$lib/auth.js";
    import { supabase } from "$lib/supabaseClient.js";
    import { Label, Input, Button, Icon } from "$lib/components/atoms";

    let token = isAuthenticated();

    let localStorageData = localStorage.getItem(
        "sb-jzzzibgfrdarpjzaezzb-auth-token",
    );
    let userData = localStorageData ? JSON.parse(localStorageData) : null;
    console.log(userData.user.email);
</script>

<main>
    <div class="flex flex-col px-12 py-24 gap-24 items-center">
        <div>
            PRENOTA EVENTI
        </div>
        <div>
            
        </div>
        <div>

        </div>
    </div>
</main>
