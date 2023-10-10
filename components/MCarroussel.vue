
<script setup lang="ts">
import { meeows } from './meeows';



</script>

<template>
  <div class="carousel ">
    <div class="inner flex flex-row relative w-screen" dir="ltr">
      <!-- for loop is only telling us what to do -->
      <div class="card" v-for="meeow in meeows" :key="meeow.id">
        <!-- inside this div we need to have the thing that are going to show for the loop -->
        <m-card 
        :meeow="meeow" 
        />
      </div>
    </div>
  </div>
  <m-arrow class="rotate-180" />
  <m-arrow />

</template>

<style scoped>
.carousel {
  max-width: 100vw;
  overflow-x: scroll;
}


</style>
