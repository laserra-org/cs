<script>
    import { Label, Input, Button, Icon } from "$lib/components/atoms";
</script>

<div class="h-screen w-screen bg-teal-800">
    <div class="flex flex-col text-neutral-300 h-full p-8 gap-8">
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
        <div>
            Per prenotare un campo, <a href="/app">entra</a> nella nostra app.
        </div>
        <div class="flex flex-row items-center gap-3">
            Non sei ancora membro?
        </div>
        <div class="flex flex-row items-center gap-3">
            <a href="/register"><Button>Registrati subito!</Button></a>
        </div>

        <div class="flex flex-row items-center gap-3">
            <div><p>Potrai prenotare:</p>
            <ul>
                <li>- Campi da tennis</li>
                <li>- Campi da calcetto</li>
                <li>- ...</li>
            </ul></div>
        </div>
    </div>
</div>
