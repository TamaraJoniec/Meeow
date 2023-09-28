<script setup lang="ts">
defineProps<{
  link: string;
  tall?: boolean;
  xl?: boolean;
  forceAspect?: boolean;
}>();
</script>

<template>
  <div v-if="link" class="max-h-full">
    <Head>
      <Script type="application/javascript" src="https://widget.gotolstoy.com/script.js" defer />
    </Head>

    <iframe
      id="tolstoy"
      :src="link"
      scrolling="no"
      frameborder="0"
      allow="clipboard-write *; encrypted-media *; fullscreen *;"
      class="max-w-full aspect-video rounded lg:rounded-lg lg:shadow-lg mx-auto"
      :class="[$attrs.class, forceAspect ? 'w-[960px]' : 'min-h-[360px] ' , tall ? 'min-h-[560px]' : '', xl ? 'w-full' : '']"
    >
    </iframe>
  </div>
</template>
