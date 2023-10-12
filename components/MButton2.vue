<script setup lang="ts">
const props = defineProps<{
color?: string;
textColor?: 'black' | 'blue' | 'white' | 'green' | 'purple' | 'red' | 'grey' | 'accent' | 'unset';
outline?: Boolean;
}>();
</script>
<template>
    <button class="rounded-xs px-3 py-1" :class="[
        `bg-meeow-${color} text-${textColor}` 
    ]">
    <slot></slot>
    </button>
</template>