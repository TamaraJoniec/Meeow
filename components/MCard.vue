<script setup lang="ts">
import { meeows } from './meeows';
import { DateTime } from "luxon";
import "/node_modules/flag-icons/css/flag-icons.min.css";

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
        <div class="flex rounded-tl-xl rounded-br-xl m-10 w-96 h-52 relative overflow-hidden">
            <div class="rounded-full bg-white w-10 h-10 absolute top-4 right-6 flex items-center justify-center text-4xl">
                1</div>
            <div class="rounded-br-xl">
                <img :src="meeow.imageUrl" class="bg-cover" />
            </div>
            <m-button class="rounded-md px-4 py-1 bg-white absolute bottom-2 right-6 text-center justify-center items-center text-opacity-0" color="white">Book
                ahead</m-button>
            <div class="rounded-full bg-white w-10 h-10 absolute top-20 right-6 flex items-center justify-center overflow-hidden border border-white">
                <div class="bg-cover bg-center !h-10 !w-10 relative bottom-1">
                    <span class="fi fi-gb fis !h-10 !w-10 fis"></span>
                </div>
            </div>

        </div>
        <div class="flex flex-col mx-10 space-y-1">
            <span class="text-2xl font-bold max-w-md"> {{ meeow.title }}</span>
            <span class="text-lg"> {{ meeow.location }}</span>
            <span class="text-lg"> {{ date.day }}{{ suffix }} {{ date.monthLong }} {{ date.year }} - {{ date.hour }} <span
                    class="lowercase">{{ date.toFormat('a') }}</span></span>
            <!-- <span class="text-lg"> {{ `${date.day} ${date.monthLong} ${date.year} - ${date.hour} ` }}<span class="lowercase">{{ date.toFormat('a') }}</span></span> -->
            <p>Unlimited spaces</p>
            <span class="text-lg max-w-md underline"> {{ meeow.category.name }}</span>

        </div>
    </div>
</template>