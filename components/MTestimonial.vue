<script setup lang='ts'>

const testimonials = [
    {
        message: 'So many of the connections I’ve made on Meeow have turned into really great business relationships…',
        name: 'Anna Iveson',
        company: 'Wordistry',
        country: 'United Kingdom',
        image: '/anna-iveson.png',
    },
    {
        message: 'Meeow is the best way to continue conversations and collaborations after online events…',
        name: 'Stuart Clarke',
        company: 'Leeds Digital Festival',
        country: 'United Kingdom',
        image: '/stuart-clarke.png',

    },
    {
        message: "Meeow isn't just the best way of networking online, it's the best way of networking full stop.",
        name: 'Tara Boyd',
        company: 'Lived Health',
        country: 'United Kingdom',
        image: '/tara-boyd.png'

    },
    {
        message: "Meeow is a great way to have real conversations online, and the format of 4 people keeps things lively.",
        name: 'Mitali Mookerjee',
        country: 'United Kingdom',
        image: '/mitali-mookerjee.png',
    }
]

// count, click next, next item in the array
const count = ref(1);
</script>
<template>
    <div class='relative flex flex-col w-[35%] m-20 pr-64 pb-40 mb-40'>
        <h3 class="text-white text-6xl z-1 absolute top-20">Success stories</h3>
        <!-- white box -->
        <div class="white box pt-20 w-[110%]">
            <div class="rounded-sm ml-96 w-[60%] py-10 pl-10 text-black bg-white">
                <p class="w-[400px] text-2xl whitespace-wrap">
                    {{ testimonials[count].message }}</p>
                <!-- Person details -->
                <div class="flex flex-row text-sm bold whitespace-pre-line py-5">
                    <h5>
                        {{ testimonials[count].name }}
                    </h5>
                    <h5 class="pl-5">
                        United Kingdom
                    </h5>
                </div>
                <div class="flex flex-row gap-6 absolute bottom-20 left-[32%] ">
                    <m-arrow />
                    <div class="flex items-center justify-center gap-4 ">
                        <div class="rounded-full w-2 h-2 bg-white"></div>
                        <div class="rounded-full w-2 h-2 border-solid border-2 border-white bg-transparent"></div>
                        <div class="rounded-full w-2 h-2 border-solid border-2 border-white bg-transparent"></div>
                    </div>
                    <m-arrow class="rotate-180" />
                </div>
            </div>
        </div>

        <img class="absolute bottom-14 right-20 w-[207.74px]" :src="testimonials[count].image" />
    </div>
</template>