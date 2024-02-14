<script>
    import { Label, Input, Button, Icon } from "$lib/components/atoms";
</script>

<div class="h-screen w-screen bg-teal-800">
    <div class="flex flex-col text-neutral-300 h-full p-8 gap-8">
        <div class="flex flex-row items-center">
            <a href="/"><Icon name="chevron-left" color="fill-neutral-300" size="32" /></a>
            <div><a href="/">Torna indietro</a></div>
        </div>
        <div>Esempio di pagina di dettaglio con presentazione delle attività. Tipicamente, ci sarà un elenco di attività disponibili, per ciascuno la faccia del responsabile, un breve descrizione e i contatti. Nel caso di prenotazioni dirette, ci sarà un calendar o simile.</div>
        <div class="flex flex-row items-center gap-3">
            <img src="https://images2.gazzettaobjects.it/assets-mc/tennis/giocatori/high/jannik_sinner.png" alt="Jannik Sinner" class="w-24 h-24 rounded-full">
            <div><p class="text-xl ">Jannik Sinner</p><p>Il nostro maestro di tennis. E' giovane ma promettente. Chiamalo allo 012-3456789</p></div>
        </div>
        <div class="flex flex-row items-center gap-3">
            <img src="https://www.abcallenamento.it/wp-content/uploads/2021/10/chechi01g.600x420.30060.jpg" alt="Yuri Chechi" class="w-24 h-24 rounded-full">
            <div><p class="text-xl ">Yuri Chechi</p><p>Anche lui è rosso di capelli. Chiamalo allo 012-3456789</p></div>
        </div>
        <div class="flex flex-row items-center gap-3">
            <img src="https://static1.personality-database.com/profile_images/cb298fcd4bd44439b8ea57c7a4f36aed.png" alt="Nick Riviera" class="w-24 h-24 rounded-full">
            <div><p class="text-xl ">Dr. Nick Riviera</p><p>Il nutrizionista più famoso del mondo. Chiamalo allo 012-3456789</p></div>
        </div>
        <div class="flex flex-row items-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/en/3/33/Lundgren_Ivan_Drago.jpg" alt="Ivan Drago" class="w-24 h-24 rounded-full">
            <div><p class="text-xl ">Ivan Drago</p><p>Ti spiezza in due e poi ti rimette a posto. Chiamalo allo 012-3456789</p></div>
        </div>
        NOTA: LE PAGINE DI DETTAGLIO AL MOMENTO SON TUTTE UGUALI
    </div>

</div>
