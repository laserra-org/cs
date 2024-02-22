<script>
    import { isAuthenticated } from "$lib/auth.js";
    import { supabase } from "$lib/supabaseClient.js";
    import { Label, Input, Button, Icon } from "$lib/components/atoms";
    import { onMount } from "svelte";
    import { getBookableSlotList } from "$lib/api/bookable_slots";
    import { createBooking } from "$lib/api/bookings";

    let token = isAuthenticated();
    let res;
    let isLoading = true;
    let localStorageData = localStorage.getItem(
        "sb-jzzzibgfrdarpjzaezzb-auth-token",
    );
    let userData = localStorageData ? JSON.parse(localStorageData) : null;
    console.log(userData.user.email);

    const fromDate = new Date();
    const toDate = new Date(fromDate);
    toDate.setMonth(fromDate.getMonth() + 10);
    console.log(fromDate);
    console.log(toDate);

    const fromYear = fromDate.getFullYear();
    const fromMonth = (fromDate.getMonth() + 1).toString().padStart(2, "0");
    const fromDay = fromDate.getDate().toString().padStart(2, "0");
    const fromHours = fromDate.getHours().toString().padStart(2, "0");
    const fromMinutes = fromDate.getMinutes().toString().padStart(2, "0");
    const fromSeconds = fromDate.getSeconds().toString().padStart(2, "0");
    const fromOffset = -toDate.getTimezoneOffset();
    const fromOffsetHours = Math.floor(Math.abs(fromOffset) / 60)
        .toString()
        .padStart(2, "0");
    const fromOffsetMinutes = (Math.abs(fromOffset) % 60)
        .toString()
        .padStart(2, "0");
    const fromSign = fromOffset < 0 ? "-" : "+";
    const fromDateWithOffset = `${fromYear}-${fromMonth}-${fromDay}T${fromHours}:${fromMinutes}:${fromSeconds}${fromSign}${fromOffsetHours}:${fromOffsetMinutes}`;

    const toYear = toDate.getFullYear();
    const toMonth = (toDate.getMonth() + 1).toString().padStart(2, "0");
    const toDay = toDate.getDate().toString().padStart(2, "0");
    const toHours = toDate.getHours().toString().padStart(2, "0");
    const toMinutes = toDate.getMinutes().toString().padStart(2, "0");
    const toSeconds = toDate.getSeconds().toString().padStart(2, "0");
    const toOffset = -toDate.getTimezoneOffset();
    const toOffsetHours = Math.floor(Math.abs(toOffset) / 60)
        .toString()
        .padStart(2, "0");
    const toOffsetMinutes = (Math.abs(toOffset) % 60)
        .toString()
        .padStart(2, "0");
    const toSign = toOffset < 0 ? "-" : "+";
    const toDateWithOffset = `${toYear}-${toMonth}-${toDay}T${toHours}:${toMinutes}:${toSeconds}${toSign}${toOffsetHours}:${toOffsetMinutes}`;

    onMount(async () => {
        const params = {
            service: "560fef82-9963-43e9-8116-3a36cb50c86c",
            from: fromDateWithOffset,
            to: toDateWithOffset,
            location: "c84065c5-c565-4310-8119-6a0c0707b9ba",
        };
        console.log(params);
        const response = await getBookableSlotList({}, params);
        res = await response.json();
        console.log(res.data);
        isLoading = false;
    });

    async function handleSubmit(slot) {
        try {
            const body = {
                resource_id: slot.resources[0].id,
                service_id: "560fef82-9963-43e9-8116-3a36cb50c86c",
                location_id: "c84065c5-c565-4310-8119-6a0c0707b9ba",
                starts_at: slot.starts_at,
                ends_at: slot.ends_at,
                metadata: { user: userData.user.email },
            };
            const responseData = await createBooking({}, body);
            location.reload();
            console.log(body);
        } catch (error) {
            console.error("Error:", error);
        }
    }
</script>

{#if !isLoading}
    <main>
        <div
            class="flex flex-row px-4 py-8 gap-8 pb-24 items-center justify-center"
        >
            <div class="flex flex-col gap-2 items-center">
                Campo 1
                {#each res.data.filter((obj) => obj.resources[0].id === "012cf36f-73fe-4f5a-9be9-a8feb98b00dd") as row}
                    <form on:submit={() => handleSubmit(row)}>
                        <div class="flex">
                            <Button
                                ><p>{row.starts_at.substring(0, 10)}</p>
                                {row.starts_at.substring(11, 16)}</Button
                            >
                        </div>
                    </form>
                {/each}
            </div>
            <div class="flex flex-col gap-2 items-center">
                Campo 2
                {#each res.data.filter((obj) => obj.resources[0].id === "0580a516-d7f4-431a-865c-b681e5fbc142") as row}
                    <form on:submit={() => handleSubmit(row)}>
                        <div>
                            <Button
                                ><p>{row.starts_at.substring(0, 10)}</p>
                                {row.starts_at.substring(11, 16)}
                            </Button>
                        </div>
                    </form>
                {/each}
            </div>
        </div>
    </main>
{/if}
