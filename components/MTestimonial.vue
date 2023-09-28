<script setup lang='ts'>

</script>
<template>
    <div class='relative flex flex-row h-100 my-20 pr-24 pb-28 '>
        <h3 class="text-white text-4xl">Success stories</h3>
        <!-- white box -->
        <div class="rounded-sm ml-60 h-[200px] w-[500px] py-10 pl-10 text-black bg-white">
            <p class="w-[400px] text-md whitespace-wrap">
                So many of the
                connections I’ve made on Meeow have
                turned into really great business relationships…</p>
            <!-- Person details -->
            <div class="flex flex-row text-sm bold whitespace-pre-line py-5">
                <h5>
                    Anna Iveson, Wordistry
                </h5>
                <h5 class="pl-5">
                    United Kingdom
                </h5>
            </div>
            <div class="flex flex-row gap-6 absolute bottom-5 ">
                <m-arrow />
                <div class="flex inline-flex items-center justify-center gap-4 ">
                    <div class="rounded-full w-2 h-2 bg-white"></div>
                    <div class="rounded-full w-2 h-2 border-solid border-2 border-white bg-transparent"></div>
                    <div class="rounded-full w-2 h-2 border-solid border-2 border-white bg-transparent"></div>

                </div>
                <m-arrow class="rotate-180" />
            </div>
        </div>
        <img class="absolute bottom-0 right-0" src="@/public/Woman.png" />
    </div>
</template>