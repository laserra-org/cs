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
        <div class="flex flex-col items-center gap-4">
            <Icon name="account" color="fill-neutral-500" size="96" />
            {userData.user.email}
        </div>
        <div>Qui ci vanno i dati del profilo</div>
        <div>
            <a href="/logout"><Button>Logout</Button></a>
        </div>
    </div>
</main>
