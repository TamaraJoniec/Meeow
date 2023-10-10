<script setup lang="ts">

</script>

<template class="overflow-hidden w-screen">
    <div>
        <m-nav />
        <m-header />
        <main>
            <section class="flex">
                <div class="flex-col items-start text-left ml-20 mt-20 text-grey z-1">
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
                </div>
                <m-laptop class="items-end mr-10 mt-20 z-[10]"></m-laptop>
            </section>
            <div class="overflow-x-hidden w-screen">
                <div class="bg-meeow-blue rounded-[50%] w-[180vw] h-[150%] bg-circle relative right-[40%]">
                    <div class="flex flex-col flex-1 items-center mt-35 pt-20 text-white text-2xl">
                        <h1>How can Meeow change your business forever?</h1>
                        <img src="@/assets/poster.jpeg" class="rounded-sm mt-10 w-100 h-80 px-40" />
                        <m-testimonial />
                    </div>
                </div>
            </div>

            <m-carroussel class="max-w-screen absolute bottom-0" />
        </main>
    </div>
</template>

<style scoped>
</style>
