<script>
    import { Label, Input, Button, Icon } from "$lib/components/atoms";
</script>

<div class="h-screen w-screen bg-teal-800">
    <div class="flex flex-col text-neutral-300 h-full p-8 gap-6">
        <div class="flex flex-row items-center">
            <a href="/"
                ><Icon
                    name="chevron-left"
                    color="fill-neutral-300"
                    size="32"
                /></a
            >
            <div><a href="/">Torna indietro</a></div>
        </div>
        <div class="font-medium">BEVANDE</div>
        <div class="flex flex-col gap-2 px-4">
            <div class="flex flex-row items-center justify-between gap-3">
                <p>BIRRA</p>
                <p>5 EUR</p>
            </div>
            <div class="flex flex-row items-center justify-between gap-3">
                <p>VINO</p>
                <p>5 EUR</p>
            </div>
        </div>
        <div class="font-medium">PIZZE</div>
        <div class="flex flex-col gap-2 px-4">
            <div class="flex flex-row items-center justify-between gap-3">
                <p>MARGHERITA</p>
                <p>7 EUR</p>
            </div>
            <div class="flex flex-row items-center justify-between gap-3">
                <p>DIAVOLA</p>
                <p>8 EUR</p>
            </div>
            <div class="flex flex-row items-center justify-between gap-3">
                <p>CAPRICCIOSA</p>
                <p>8 EUR</p>
            </div>
            <div class="flex flex-row items-center justify-between gap-3">
                <p>VEGETARIANA</p>
                <p>9 EUR</p>
            </div>
        </div>
    </div>
</div>
