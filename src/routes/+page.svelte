<script>
    import { Label, Input, Button, Icon } from "$lib/components/atoms";
</script>

<div
    class="grid grid-cols-2 grid-rows-2"
    style="width: 100vw; height: 100vh; position: relative"
>
    <div class="bg-teal-800 px-8 py-12 text-neutral-300">
        <div class="flex flex-col items-center h-full gap-6">
            <div class="text-xl">SPORT</div>
            <div class="flex flex-row items-center w-full gap-4">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/fakeinfo"
                        ><Icon
                            name="tennis"
                            color="fill-neutral-300"
                            size="48"
                        /></a
                    >
                </div>
                <div class="grow">Prenota un campo</div>
            </div>
            <div class="flex flex-row items-center w-full gap-4">
                <div class="grow text-right">I nostri corsi</div>
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/fakeinfo"
                        ><Icon
                            name="gymnastics"
                            color="fill-neutral-300"
                            size="48"
                        /></a
                    >
                </div>
            </div>
            <div class="flex flex-row items-center w-full gap-4">
                <div
                    class="rounded-full flex-none bg-opacity-10 bg-neutral-100 p-2"
                >
                    <a href="/fakeinfo"
                        ><Icon
                            name="fitness"
                            color="fill-neutral-300"
                            size="48"
                        /></a
                    >
                </div>
                <div class="grow">La Palestra</div>
            </div>
        </div>
    </div>
    <div class="bg-cyan-800 px-8 py-12 text-neutral-300">
        <div class="flex flex-col items-center h-full gap-6">
            <div class="text-neutral-300 text-xl">CIBO</div>
            <div class="flex flex-row items-center w-full gap-2">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/fakeinfo"
                        ><Icon
                            name="restaurant"
                            color="fill-neutral-300"
                            size="48"
                        /></a
                    >
                </div>
                <div class="flex grow">Pranzo di lavoro</div>
            </div>
            <div class="flex flex-row items-center w-full gap-2">
                <div class="grow text-right">Menu serale</div>
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/fakeinfo"
                        ><Icon
                            name="burger"
                            color="fill-neutral-300"
                            size="48"
                        /></a
                    >
                </div>
            </div>
        </div>
    </div>
    <div class="bg-cyan-800 px-8 py-12 text-neutral-300">
        <div class="flex flex-col-reverse items-center h-full gap-6">
            <div class="text-neutral-300 text-center text-xl">
                MEDICINA DELLO SPORT
            </div>
            <div class="flex flex-row items-center w-full gap-4">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/fakeinfo"
                        ><Icon
                            name="nutrition"
                            color="fill-neutral-300"
                            size="48"
                        /></a
                    >
                </div>
                <div class="grow">Nutrizionista</div>
            </div>

            <div class="flex flex-row items-center w-full gap-4">
                <div class="grow text-right">Servizi ambulatoriali</div>
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/fakeinfo"
                        ><Icon
                            name="heart"
                            color="fill-neutral-300"
                            size="48"
                        /></a
                    >
                </div>
            </div>
            <div class="flex flex-row items-center w-full gap-4">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/fakeinfo"
                        ><Icon
                            name="knee"
                            color="fill-neutral-300"
                            size="48"
                        /></a
                    >
                </div>
                <div class="grow">Fisioterapia</div>
            </div>
        </div>
    </div>
    <div class="bg-teal-800 px-8 py-12 text-neutral-300">
        <div class="flex flex-col-reverse items-center h-full gap-6">
            <div class="text-neutral-300 text-center text-xl">
                PER I BAMBINI
            </div>
            <div class="flex flex-row items-center w-full gap-2">
                <div class="grow text-right">Per le scuole</div>
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/fakeinfo"
                        ><Icon
                            name="bus"
                            color="fill-neutral-300"
                            size="32"
                        /></a
                    >
                </div>
            </div>

            <div class="flex flex-row items-center w-full gap-2">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/fakeinfo"
                        ><Icon
                            name="handball"
                            color="fill-neutral-300"
                            size="32"
                        /></a
                    >
                </div>
                <div class="grow">Summer e Winter camps</div>
            </div>

            <div class="flex flex-row items-center w-full gap-2">
                <div class="grow text-right">Attività 8-12 anni</div>
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/fakeinfo"
                        ><Icon
                            name="skate"
                            color="fill-neutral-300"
                            size="32"
                        /></a
                    >
                </div>
            </div>
            <div class="flex flex-row items-center w-full gap-2">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/fakeinfo"
                        ><Icon
                            name="toddler"
                            color="fill-neutral-300"
                            size="32"
                        /></a
                    >
                </div>
                <div class="grow">Attività 3-7 anni</div>
            </div>
        </div>
    </div>
    <div
        class="w-32 h-32 bg-neutral-300 rounded-full"
        style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
    >
        <div class="flex justify-center items-center h-full">
            <a href="/login"
                ><Icon name="volleyball" color="fill-teal-800" size="96" /></a
            >
        </div>
    </div>
    <div
        style="position: absolute; top: 56%; left: 50%; transform: translate(-50%, -50%);"
    >
        <div class="flex justify-center items-center h-full text-teal-800">
            <a href="/login">Login</a>
        </div>
    </div>
    <div
        class="w-24 h-24 bg-neutral-300 rounded-full"
        style="position: absolute; top: 50%; left: 80%; transform: translate(-50%, -50%);"
    >
        <div class="flex justify-center items-center h-full">
            <a href="/login"
                ><Icon name="today" color="fill-teal-800" size="48" /></a
            >
        </div>
    </div>
    <div
        style="position: absolute; top: 54%; left: 80%; transform: translate(-50%, -50%);"
    >
        <div class="flex justify-center items-center h-full text-teal-800">
            <a href="/login">Eventi</a>
        </div>
    </div>
    <div
        class="w-12 h-12 bg-neutral-300 rounded-full"
        style="position: absolute; top: 50%; left: 12%; transform: translate(-50%, -50%);"
    >
        <div class="flex justify-center items-center h-full">
            <a href="https://www.instagram.com/laserra_illocalecordiale"
                ><Icon name="instagram" color="fill-teal-800" size="32" /></a
            >
        </div>
    </div>
    <div
    class="w-12 h-12 bg-neutral-300 rounded-full"
    style="position: absolute; top: 50%; left: 28%; transform: translate(-50%, -50%);"
>
    <div class="flex justify-center items-center h-full">
        <a href="https://www.facebook.com/laserraillocalecordiale/"
            ><Icon name="facebook" color="fill-teal-800" size="32" /></a
        >
    </div>
</div>
</div>
