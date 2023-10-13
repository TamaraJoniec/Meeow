<script setup lang="ts">
import { meeows } from './meeows';
import { DateTime } from "luxon";


const props = defineProps<{
    meeow: {
    };
}>();
console.log(props.meeow);

let date = DateTime.fromMillis(props.meeow.date);

// if the number is 1 but is not 11, add a st, 
const suffix = computed(() => {
    if (date.day === 1 || date.day === 21 || date.day === 31)
        return "st"
    else if (date.day === 2 || date.day === 22)
        return "nd"
    else if (date.day === 3 || date.day === 23)
        return "rd"
    else
        return "th"
})
// if the number is 2 but is not 12, add a nd,
// if the number is 3 but is not 13, add a rd, else add an th
</script>

<template>
    <div>
        <div class="rounded-tl-xl rounded-br-xl m-10 bg-meeow-green w-96 h-52 relative overflow-hidden">
            <div class="rounded-full bg-white w-12 h-12 absolute top-4 right-4 flex items-center justify-center text-4xl">
                1</div>
            <img :src="meeow.imageUrl" class="bg-cover" />
            <m-button class="rounded-sm px-6 py-2 bg-white absolute bottom-2 right-2" color="white" :class="[`text-$`]">Book
                ahead</m-button>
        </div>
        <div class="flex flex-col mx-10">
            <span class="text-2xl font-bold max-w-md"> {{ meeow.title }}</span>
            <span class="text-lg"> {{ meeow.location }} {{ meeow.country }}</span>
            <span class="text-lg"> {{ date.day }}{{ suffix }} {{ date.monthLong }} {{ date.year }} - {{ date.hour }}  <span class="lowercase">{{ date.toFormat('a') }}</span></span>
                        <!-- <span class="text-lg"> {{ `${date.day} ${date.monthLong} ${date.year} - ${date.hour} ` }}<span class="lowercase">{{ date.toFormat('a') }}</span></span> -->
            <p>Unlimited spaces</p>
            <span class="text-lg max-w-md underline"> {{ meeow.category.name }}</span>

        </div>
    </div>
</template>