<script setup lang="ts">

</script>

<template class="overflow-hidden w-screen">
    <div>
        <m-nav />
        <m-header />
        <div class="relative">
            <section class="flex space-x-64 m-20">
                <div class="flex-col items-start text-left mt-20 text-grey z-1 pl-10">
                    <p class='text-6xl font-bold'>Make new connections.
                        <br /> Find new clients.
                        <br /> Every day.
                    </p>
                    <br />
                    <p class='text-xl font-light whitespace-normal'>
                        Network with new people from around the corner
                        <br />and around the world in groups of no more than 4.
                        <br />
                        Real conversations lead to real outcomes.
                    </p>
                    <div class="flex gap-3">
                        <m-button color="bg-meeow-green" text-color="white" class="text-white bg-meeow-green-2 my-5">Join
                            Meeow Free</m-button>
                        <m-button color="white" text-color="black" class="text-grey outline my-5">See all
                            meetings</m-button>
                    </div>
                </div> <m-laptop class="relative top-32 right-32 z-[1]"></m-laptop>
            </section>
            <m-blue-background />
        </div>
        <m-carroussel class="max-w-screen relative bottom-0" />
        <m-slides />
    </div>
</template>

<style scoped></style>
