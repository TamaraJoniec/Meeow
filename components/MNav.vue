<template>
    <nav class="p-5 w-full gap-12 hidden md:flex">
        <icons-logo class="mt-2 flex shrink-0" />
        <div class="flex overflow-hidden gap-12">
            <icons-calendar />
            <icons-grid />
            <icons-faqs />
            <icons-event />
        </div>
        <section class="flex flex-row flex-1 justify-end gap-3 text-base md:text-sm min-w-0">
            <m-button color="none" text-color="grey" class="text-grey flexwrap-nowrap ">Login</m-button>
            <m-button color="blue" text-color="white" class="text-white'">Join Meeow Free</m-button>
            <m-button color="white" text-color="black" class="text-grey outline">View Demo</m-button>
        </section>
        <div class="bg-meeow-blue"></div>
    </nav>
</template>