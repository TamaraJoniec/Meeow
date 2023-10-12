<script setup lang="ts">


</script>

<template class="overflow-hidden w-screen">
    <div>
        <m-nav />
        <m-header />
        <div class="relative">
            <section class="flex space-x-64 m-16">
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
        <!-- carousel -->
        <div class="mt-32 mx-20">
            <div class="flex flex-row mx-10">
                <p class="text-2xl font-semibold ml-10">Lots of networking opportunities… every day</p>
                <m-button2 class="bg-meeow-green text-white ml-10">See all</m-button2>
            </div>
            <m-carroussel class="max-w-screen relative bottom-0" />
        </div>
        <m-slides />
        <div class="overflow-hidden h-[100vh] pb-20 relative">
            <div class=" bg-meeow-blue rounded-[50%] w-[180vw] h-[180vh] bg-circle relative right-[40%]">
            </div>
            <div class="bg-meeow-blue w-full max-w-screen absolute bottom-0">
                <div class="flex flex-col justify-center items-center text-center text-white space-y-10 relative z-10">
                    <p class="text-5xl max-w-lg">Business and networking is all about team-work.</p>
                    <p class="max-w-5xl font-light">Meeow is open to all, no matter how long you’ve been in business or
                        whether you’ve been networking
                        before. Just bring yourself, your positive attitude and a desire to help others, and our community
                        will
                        welcome you with open arms.</p>
                    <m-button class="bg-meeow-green text-white">Join Meeow free</m-button>
                </div>
                <img class="my-20" src="@/public/StripFaces.png" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
