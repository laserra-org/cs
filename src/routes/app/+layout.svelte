<script>
    import { Label, Input, Button, Icon } from "$lib/components/atoms";
</script>

<div class="flex flex-col h-[calc(100dvh)] w-screen justify-end">
    <div class="h-full"><slot /></div>

    <div class="flex w-full h-20 bg-neutral-300">
        <div class="flex w-full flex-row items-center justify-between">
            <div class="flex grow flex-col items-center gap-1">
                <div>
                    <a href="/app"
                        ><Icon
                            name="home"
                            color="fill-neutral-500"
                            size="32"
                        /></a
                    >
                </div>
                <div class="grow text-xs text-neutral-500">
                    <a href="/app">Home</a>
                </div>
            </div>
            <div class="flex grow flex-col items-center gap-1">
                <div>
                    <a href="/app/bookings"
                        ><Icon
                            name="tennis"
                            color="fill-neutral-500"
                            size="32"
                        /></a
                    >
                </div>
                <div class="grow text-xs text-neutral-500">
                    <a href="/app/bookings">Prenotazioni</a>
                </div>
            </div>
            <div class="flex grow flex-col items-center gap-1">
                <div>
                    <a href="/app/events"
                        ><Icon
                            name="today"
                            color="fill-neutral-500"
                            size="32"
                        /></a
                    >
                </div>
                <div class="grow text-xs text-neutral-500">
                    <a href="/app/events">Eventi</a>
                </div>
            </div>
            <div class="flex grow flex-col items-center gap-1">
                <div>
                    <a href="/app/profile"
                        ><Icon
                            name="account"
                            color="fill-neutral-500"
                            size="32"
                        /></a
                    >
                </div>
                <div class="grow text-xs text-neutral-500">
                    <a href="/app/profile">Profilo</a>
                </div>
            </div>

        </div>
    </div>
</div>
