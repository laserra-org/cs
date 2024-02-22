<script>
    import { isAuthenticated } from "$lib/auth.js";
    import { supabase } from "$lib/supabaseClient.js";
    import { onMount } from "svelte";
    import { getBookingList } from "$lib/api/bookings";
    import { Spinner } from "$lib/components/atoms";

    let token = isAuthenticated();
    let isLoading = true;
    let res;

    let localStorageData = localStorage.getItem(
        "sb-jzzzibgfrdarpjzaezzb-auth-token",
    );
    let userData = localStorageData ? JSON.parse(localStorageData) : null;
    console.log(userData.user.email);

    onMount(async () => {
        const params = {
            "metadata[user][eq]": userData.user.email,
        };
        const response = await getBookingList({}, params);
        res = await response.json();
        console.log(res);
        isLoading = false;
    });
</script>

<main>
    <div class="flex flex-col px-12 py-24 gap-24">
        <div>
            {#if userData.user.email}
                <p>Benvenuto {userData.user.email}</p>
            {:else}
                <p>If you see this, we have a problem.</p>
            {/if}
        </div>
        {#if !isLoading}
            <div class="flex flex-col gap-4">
                <div>Le mie prenotazioni:</div>
                {#if res.data.length > 0}
                    {#each res.data as booking}
                        <div
                            class="bg-teal-800 text-neutral-200 rounded-md shadow-md p-2"
                        >
                            <p>
                                {booking.service.name} - {booking.resource.name}
                            </p>
                            <p>{booking.starts_at.substring(0, 10)}</p>
                            <p>
                                {booking.starts_at.substring(11, 16)} - {booking.ends_at.substring(
                                    11,
                                    16,
                                )}
                            </p>
                        </div>
                    {/each}
                {:else}
                <div
                class="bg-neutral-400 text-neutral-100 rounded-md shadow-md p-2"
            >
                <p>
                    Non hai prenotazioni!
                </p>
            </div>
                {/if}
            </div>
        {:else}
            <Spinner></Spinner>
        {/if}
        <div>Info, news, gli eventi</div>
    </div>
</main>
