<script setup lang="ts">
const props = defineProps<{
    meeow: {
    };
}>();
console.log(props.meeow);
</script>

<template>
    <div class="rounded-tl-xl rounded-br-xl m-10 bg-meeow-green w-96 h-52 relative overflow-hidden">
        <div class="rounded-full bg-white w-12 h-12 absolute top-4 right-4 flex items-center justify-center text-4xl">
            1</div>
        <img :src="meeow.imageUrl" class="bg-cover" />
        <m-button class="rounded-sm px-6 py-2 bg-white absolute bottom-2 right-2" color="white" :class="[`text-$`]"
         >Book
            ahead</m-button>
    <nuxt-link to=""></nuxt-link>
    </div>
</template>