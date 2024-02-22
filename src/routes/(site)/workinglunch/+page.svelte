<script>
    import { Label, Input, Button, Icon } from "$lib/components/atoms";
</script>

<div class="h-screen w-screen bg-teal-800">
    <div class="flex flex-col text-neutral-300 h-full p-8 gap-8">
        <div class="flex flex-row items-center">
            <a href="/"><Icon name="chevron-left" color="fill-neutral-300" size="32" /></a>
            <div><a href="/">Torna indietro</a></div>
        </div>
        <div>Menu a prezzo fisso dal lunedi al venerdi, dalle 12:00 alle 14:30</div>
        <div class="flex flex-row items-center gap-3">
            <div><p class="font-bold">MENU COMPLETO  12 EUR</p>
            <p>Primo, secondo, contorno, acqua, caffe</p></div>
        </div>
        <div class="flex flex-row items-center gap-3">
            <div><p class="font-bold">MENU PRIMO  12 EUR</p>
            <p>Primo, contorno, acqua, caffe</p></div>
        </div>
        <div class="flex flex-row items-center gap-3">
            <div><p class="font-bold">MENU SECONDO  12 EUR</p>
            <p>Secondo, contorno, acqua, caffe</p></div>
        </div>
        <div class="flex flex-row items-center gap-3">
            <div><p class="font-bold">MENU PIZZA  12 EUR</p>
            <p>Pizza a scelta, acqua, caffe</p></div>
        </div>
        <div class="flex flex-row items-center gap-3">
            <div><p class="font-bold">MENU INSALATONA  12 EUR</p>
            <p>Erba</p></div>
        </div>
    </div>

</div>
