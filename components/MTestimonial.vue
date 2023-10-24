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

// return to beginning when reaching the last one
function nextCard() {
    // if count is the length of the array, return to the start
    if (count.value === testimonials.length - 1) {
        // set value to 0
        count.value = 0
    } else {
        count.value++
    }
}
function previousCard() {
    // if count is the length of the array, return to the start
    if (count.value === 0) {
        // set value to 0
        count.value = testimonials.length - 1
    } else {
        count.value--
    }
}


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
                    <m-arrow @click="previousCard" class="cursor-pointer" />
                    <div class="flex items-center justify-center gap-4 ">
                        <div class="rounded-full w-2 h-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none duration-700 cursor-pointer"
                            v-for="dot in testimonials.length"
                            :class="dot === count + 1 ? 'bg-white' : 'bg-transparent border border-white'"
                            @click="count = dot - 1"></div>
                    </div>
                    <m-arrow @click="nextCard" class="rotate-180 cursor-pointer" />
                </div>
            </div>
        </div>

        <img class="absolute bottom-14 right-20 w-[207.74px]" :src="testimonials[count].image" />
    </div>
</template>