<script>
    import { Label, Input, Button, Icon } from "$lib/components/atoms";
</script>

<div
    class="grid grid-cols-2 grid-rows-2 h-[calc(100dvh)]"
    style="width: 100vw; position: relative"
>
    <div class="bg-teal-800 px-4 py-8 text-neutral-300">
        <div class="flex flex-col items-center h-full gap-6">
            <div class="text-xl">SPORT</div>
            <div class="flex flex-row items-center w-full gap-1">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/book"
                        ><Icon
                            name="tennis"
                            color="fill-neutral-300"
                            size="32"
                        /></a
                    >
                </div>
                <div class="grow"><a href="/book">Prenota un campo</a></div>
            </div>
            <div class="flex flex-row items-center w-full gap-1">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/courses"
                        ><Icon
                            name="gymnastics"
                            color="fill-neutral-300"
                            size="32"
                        /></a
                    >
                </div>
                <div class="grow"><a href="/courses">I nostri corsi</a></div>
            </div>
            <div class="flex flex-row items-center w-full gap-1">
                <div
                    class="rounded-full flex-none bg-opacity-10 bg-neutral-100 p-2"
                >
                    <a href="/gym"
                        ><Icon
                            name="fitness"
                            color="fill-neutral-300"
                            size="32"
                        /></a
                    >
                </div>
                <div class="grow"><a href="/gym">La Palestra</a></div>
            </div>
        </div>
    </div>
    <div class="bg-cyan-800 px-4 py-8 text-neutral-300">
        <div class="flex flex-col items-center h-full gap-6">
            <div class="text-neutral-300 text-xl">CIBO</div>
            <div class="flex flex-row items-center w-full gap-1">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/workinglunch"
                        ><Icon
                            name="restaurant"
                            color="fill-neutral-300"
                            size="32"
                        /></a
                    >
                </div>
                <div class="flex grow"><a href="/workinglunch">Pranzo di lavoro</a></div>
            </div>
            <div class="flex flex-row items-center w-full gap-1">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/menu"
                        ><Icon
                            name="burger"
                            color="fill-neutral-300"
                            size="32"
                        /></a
                    >
                </div>
                <div class="grow"><a href="/menu">Menu serale</a></div>
            </div>
        </div>
    </div>
    <div class="bg-cyan-800 px-4 py-8 text-neutral-300">
        <div class="flex flex-col-reverse items-center h-full gap-6">
            <div class="text-neutral-300 text-center text-xl">
                MEDICINA DELLO SPORT
            </div>
            <div class="flex flex-row items-center w-full gap-1">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/nutri"
                        ><Icon
                            name="nutrition"
                            color="fill-neutral-300"
                            size="32"
                        /></a
                    >
                </div>
                <div class="grow"><a href="/nutri">Nutrizionista</a></div>
            </div>

            <div class="flex flex-row items-center w-full gap-1">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/doctor"
                        ><Icon
                            name="heart"
                            color="fill-neutral-300"
                            size="32"
                        /></a
                    >
                </div>
                <div class="grow"><a href="/doctor">Servizi ambulatoriali</a></div>
            </div>
            <div class="flex flex-row items-center w-full gap-1">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/physio"
                        ><Icon
                            name="knee"
                            color="fill-neutral-300"
                            size="32"
                        /></a
                    >
                </div>
                <div class="grow"><a href="/physio">Fisioterapia</a></div>
            </div>
        </div>
    </div>
    <div class="bg-teal-800 px-4 py-8 text-neutral-300">
        <div class="flex flex-col-reverse items-center h-full gap-6">
            <div class="text-neutral-300 text-center text-xl">
                PER I BAMBINI
            </div>
            <div class="flex flex-row items-center w-full gap-1">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/schools"
                        ><Icon
                            name="bus"
                            color="fill-neutral-300"
                            size="24"
                        /></a
                    >
                </div>
                <div class="grow"><a href="/schools">Per le scuole</a></div>
            </div>

            <div class="flex flex-row items-center w-full gap-1">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/summercamps"
                        ><Icon
                            name="handball"
                            color="fill-neutral-300"
                            size="24"
                        /></a
                    >
                </div>
                <div class="grow"><a href="/summercamps">Summer e Winter camps</a></div>
            </div>

            <div class="flex flex-row items-center w-full gap-1">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/kids8-12"
                        ><Icon
                            name="skate"
                            color="fill-neutral-300"
                            size="24"
                        /></a
                    >
                </div>
                <div class="grow"><a href="/kids8-12">Attività 8-12 anni</a></div>
            </div>
            <div class="flex flex-row items-center w-full gap-1">
                <div class="rounded-full bg-opacity-10 bg-neutral-100 p-2">
                    <a href="/kids3-7"
                        ><Icon
                            name="toddler"
                            color="fill-neutral-300"
                            size="24"
                        /></a
                    >
                </div>
                <div class="grow"><a href="/kids3-7">Attività 3-7 anni</a></div>
            </div>
        </div>
    </div>
    <div
        class="w-20 h-20 bg-neutral-300 rounded-full"
        style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
    >
        <div class="flex justify-center items-center h-full">
            <a href="/login"
                ><Icon name="volleyball" color="fill-teal-800" size="48" /></a
            >
        </div>
    </div>
    <div
        style="position: absolute; top: 53.3%; left: 50%; transform: translate(-50%, -50%);"
    >
        <div class="flex justify-center items-center h-full text-teal-800 text-xs">
            <a href="/login">Login</a>
        </div>
    </div>
    <div
        class="w-16 h-16 bg-neutral-300 rounded-full"
        style="position: absolute; top: 50%; left: 80%; transform: translate(-50%, -50%);"
    >
        <div class="flex justify-center items-center h-full">
            <a href="/events"
                ><Icon name="today" color="fill-teal-800" size="32" /></a
            >
        </div>
    </div>
    <div
        style="position: absolute; top: 52.5%; left: 80%; transform: translate(-50%, -50%);"
    >
        <div class="flex justify-center items-center h-full text-teal-800 text-xs">
            <a href="/events">Eventi</a>
        </div>
    </div>
    <div
        class="w-8 h-8 bg-neutral-300 rounded-full"
        style="position: absolute; top: 50%; left: 12%; transform: translate(-50%, -50%);"
    >
        <div class="flex justify-center items-center h-full">
            <a href="https://www.instagram.com/laserra_illocalecordiale"
                ><Icon name="instagram" color="fill-teal-800" size="24" /></a
            >
        </div>
    </div>
    <div
        class="w-8 h-8 bg-neutral-300 rounded-full"
        style="position: absolute; top: 50%; left: 28%; transform: translate(-50%, -50%);"
    >
        <div class="flex justify-center items-center h-full">
            <a href="https://www.facebook.com/laserraillocalecordiale/"
                ><Icon name="facebook" color="fill-teal-800" size="24" /></a
            >
        </div>
    </div>
</div>
