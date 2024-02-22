<script>
    import { Label, Input, Button, Icon } from "$lib/components/atoms";
</script>

<div class="flex flex-col min-h-screen">
    <div class="flex-grow"><slot /></div>

    <div id="mynavbar" class="fixed bottom-0 left-0 right-0 w-full h-20 bg-neutral-300 z-50">
        <div class="flex w-full h-full justify-between items-center px-4">
            <div class="flex flex-col items-center justify-center flex-grow">
                <a href="/app">
                    <Icon name="home" color="fill-neutral-500" size="32" />
                </a>
                <a href="/app" class="text-xs text-neutral-500">Home</a>
            </div>
            <div class="flex flex-col items-center justify-center flex-grow">
                <a href="/app/bookings">
                    <Icon name="tennis" color="fill-neutral-500" size="32" />
                </a>
                <a href="/app/bookings" class="text-xs text-neutral-500">Prenotazioni</a>
            </div>
            <div class="flex flex-col items-center justify-center flex-grow">
                <a href="/app/events">
                    <Icon name="today" color="fill-neutral-500" size="32" />
                </a>
                <a href="/app/events" class="text-xs text-neutral-500">Eventi</a>
            </div>
            <div class="flex flex-col items-center justify-center flex-grow">
                <a href="/app/profile">
                    <Icon name="account" color="fill-neutral-500" size="32" />
                </a>
                <a href="/app/profile" class="text-xs text-neutral-500">Profilo</a>
            </div>
        </div>
    </div>
</div>