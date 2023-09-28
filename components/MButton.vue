<script setup lang="ts">
const props = defineProps<{
color: string;
textColor: 'black' | 'blue' | 'white' | 'green' | 'purple' | 'red' | 'grey' | 'accent' | 'unset';
outline?: Boolean;
}>();
</script>
<template>
    <button class="rounded-sm px-9 py-3" :class="[
        `bg-meeow-${color} text-${textColor}` 
    ]">
    <slot></slot>
    </button>
</template>
