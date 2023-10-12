<script setup lang="ts">
// Imported icon file (but you could also use <icons-icon-spinner /> without importing)
// import IconSpinner from '~/components/icons/IconSpinner.vue';

// Take a look at NuxtLink and Nuxt Routing
    // In Nuxt, instead of using an <a> element, we can use <nuxt-link> which is transpiled into an <a> element when built and automatically takes care of the routes for us. Clicking an <a> link will also reload the page by default but a <nuxt-link> uses SSR to load the new page without refreshing everything
    // We've had to define the element as a variable here so we can choose to use the button as a link or button element 
    // Don't worry about including this in yours for now! This is pretty complicated
const NuxtLink = resolveComponent('NuxtLink');

const props = defineProps<{
  /** Make the button large (increased padding) */
  lg?: boolean;

  /** Fill the width of the parent container */
  hFill?: boolean;

  /**
   * Make the button have an outline instead of a solid colour. Outline and
   * text colour will be the same, specified by the `colour` prop
   */
  outline?: boolean;

  /**
   * Button colour. Default is black
   *
   * - black: black background, white text
   * - blue: Meeow blue background, white text
   * - white: white background, black text
   * - blue-on-white: white background, Meeow blue text. Doesn't work with
   *   `outline`
   */
  colour?: 'black' | 'blue' | 'white' | 'green' | 'purple' | 'red' | 'grey' | 'accent' | 'unset';

  /**
   * Text colour override
   */
  textColour?: 'black' | 'blue' | 'white' | 'green' | 'purple' | 'red' | 'grey' | 'accent' | 'unset';

  /**
   * Disables border-radius
   */
  square?: boolean;

  /**
   * Link to add - if set, this will render a <nuxt-link> element instead of a
   * <button>, with the `to` prop set accordingly
   */
  to?: string;

  /**
   * Override the element used as the root - by default, this will be `NuxtLink`
   * if the `to` property is provided, or 'button' otherwise
   */
  elementOverride?: any;

  /**
   * Behaviour for multiple clicks
   *
   * - false: allow many clicks, default
   * - true: only allow once, same as providing @click.once
   * - 'load': like `true`, but also changes the button to have a spinner
   */
  once?: boolean | 'load';

  disabled?: boolean;
}>();

// Adding emits allows us to call a function in the parent component without adding another event listener
  // This is really powerful and definately worth some research if it hasn't come up in the course
  // Note: the below is written in typescript
const emit = defineEmits<{
  (e: 'click', event: Event): void;
}>();
// The below could be used instead if you didn't want to use typescript
// const emit = defineEmits([ 'click' ]);

// The below few lines add a loading spinner to show that the button has been clicked if a fuction takes a bit of time to return a result - try selecting a different time from the dropdown on a meeow page or booking to see this in action
let clicked = false;
const spinnerMode = ref(false); // Check out refs and reactivity. Super powerful and essential for working with vue comp api
function handleClick(e: Event) {
  if(clicked && (props.once || spinnerMode.value))
    return;

  clicked = true;

  if(props.once === 'load')
    spinnerMode.value = true;

  emit('click', e);
}
function spinner() {
  clicked = true;
  spinnerMode.value = true;
}
function reset() {
  clicked = false;
  spinnerMode.value = false;
}

// Below are all computed props - again really important to know
  // As the colour, outline, text colour, etc. variations got more complicated, we decided to switch to computed props to set the colours rather than adding lines and lines of conditional styling
const outlineColour = computed(() =>
  !props.outline ? '' :
  props.colour === 'unset' ? '' :
  props.colour === 'black' ? 'ring-black' :
  props.colour === 'blue' ? 'ring-meeow-blue' :
  props.colour === 'green' ? 'ring-meeow-green' :
  props.colour === 'purple' ? 'ring-meeow-purple' :
  props.colour === 'red' ? 'ring-meeow-red' :
  props.colour === 'grey' ? 'ring-meeow-grey' :
  props.colour === 'white' ? 'ring-white' :
  props.colour === 'accent' ? 'ring-accent' :
  'ring-black');

const bgColour = computed(() =>
  props.outline ? 'bg-transparent' :
  props.colour === 'unset' ? '' :
  props.colour === 'black' ? 'bg-black' :
  props.colour === 'blue' ? 'bg-meeow-blue hover:bg-meeow-blue-2' :
  props.colour === 'green' ? 'bg-meeow-green hover:bg-meeow-green-2' :
  props.colour === 'purple' ? 'bg-meeow-purple hover:bg-meeow-purple-2' :
  props.colour === 'red' ? 'bg-meeow-red hover:bg-meeow-red-2' :
  props.colour === 'grey' ? 'bg-meeow-grey hover:bg-meeow-grey-2' :
  props.colour === 'white' ? 'bg-white' :
  props.colour === 'accent' ? 'bg-accent' :
  'bg-black');

const textColour = computed(() =>
  props.textColour ? (
    props.textColour === 'unset' ? '' :
    props.textColour === 'black' ? 'text-black' :
    props.textColour === 'blue' ? 'text-meeow-blue' :
    props.textColour === 'green' ? 'text-meeow-green' :
    props.textColour === 'purple' ? 'text-meeow-purple' :
    props.textColour === 'red' ? 'text-meeow-red' :
    props.textColour === 'grey' ? 'text-meeow-grey' :
    props.textColour === 'white' ? 'text-white' :
    props.textColour === 'accent' ? 'text-accent' :
    'text-black'
  ) :
    props.outline ? (
      props.colour === 'unset' ? '' :
      props.colour === 'black' ? 'text-black' :
      props.colour === 'blue' ? 'text-meeow-blue' :
      props.colour === 'green' ? 'text-meeow-green' :
      props.colour === 'purple' ? 'text-meeow-purple' :
      props.colour === 'red' ? 'text-meeow-red' :
      props.colour === 'grey' ? 'text-meeow-grey' :
      props.colour === 'white' ? 'text-white' :
      props.colour === 'accent' ? 'text-accent' :
      'text-black'
    ) :
      props.colour === 'unset' ? '' :
      props.colour === 'black' ? 'text-white' :
      props.colour === 'blue' ? 'text-white' :
      props.colour === 'green' ? 'text-black' :
      props.colour === 'purple' ? 'text-white' :
      props.colour === 'red' ? 'text-white' :
      props.colour === 'grey' ? 'text-white' :
      props.colour === 'white' ? 'text-black' :
      props.colour === 'accent' ? 'text-white' :
      'text-white');

// Below sets the element type, either a button (to call a function in page - like booking a meeow) or a nuxt-link (to act as a link element - change page/route)
const component = computed(() =>
  props.elementOverride ? props.elementOverride : props.to ? NuxtLink : 'button');

// useAttrs() allows us to apply specific styling/classes when calling the custom component in the parent component
  // These can be set to override the default styling in the component
  // This is a bit complicated so ignore for now if you want to
const attrs = useAttrs();
const displayClasses = /\binline(-block|-flex|-table|-grid)?\b|\btable-|\b(hidden|block|flex|table|grid|contents|list-item|flow-root)\b/;

const needDisplayClass =
  !displayClasses.test(attrs.class as string || '')
  && !/\bdisplay\s*:/.test(attrs.style as string || '');

const textAlign = computed(() =>
  /\btext-(left|center|right|justify|start|end)\b/.exec(attrs.class as string)?.[1]);

const textSizeSet = computed(() =>
  /\btext-(xs|sm|base|big|lg|[23456]?xl|huge)\b/.test(attrs.class as string));

const fontWeightSet = computed(() =>
  /\bfont-(thin|(extra)?light|normal|medium|(semi|extra)?bold|black)\b/.test(attrs.class as string));

// This lets us make certain elements, variables or functions accessible from within the parent
// check the docs on this one if you want but you don't need it right now
defineExpose({
  spinner,
  reset,
});
</script>

<template>
  <!-- The <compnent> element allows us to dynamically choose what element is being rendered with the 'is' attribute. We're using it here to determine whether we should use a button or nuxt-link element. This is confusing so just use <button> for now -->
  <component
    :is="component"
    :to="to"
    :disabled="disabled || spinnerMode"
    :class="{
      'text-lg': !textSizeSet,
      'font-semibold': !fontWeightSet,
      'rounded-sm': !square,
      'inline-block': needDisplayClass,
      'text-center': component !== 'button' && !textAlign,
      'cursor-pointer': component !== 'button' && !(attrs.class as string || '').includes('cursor-'),
      'enabled:cursor-pointer': component === 'button',
      'px-5 sm:px-9 py-4 -tracking-1': lg,
      'py-[5px] px-[18px]': !lg,
      'w-full relative': hFill,
      'hover:brightness-95 transition-all duration-200' : !outline,

      ['bg-transparent ring-4 sm:ring-2 ring-inset ' + outlineColour]: outline,
      'enabled:hover:ring-4 disabled:ring-grey-1 disabled:text-grey-1': outline && component === 'button',
      'hover:ring-4': outline && component !== 'button',
      ['disabled:bg-grey-1 disabled:text-white']: !outline && component === 'button' && colour !== 'unset',
      [[bgColour, textColour].join(' ')]: true,
    }"
    @click="handleClick"
  >
  <!-- Named slot to add an icon. Note that with the v-if statement, this slot will only be rendered if there is something to go in it. Wihtout that, the padding and space would be added even if there was no icon -->
    <template v-if="$slots['icon']">
      <span
        :class="{
          'absolute left-0 top-0 bottom-0': hFill,
          'px-5 sm:px-9 py-4': hFill && lg,
          'py-[5px] px-[18px]': hFill && !lg,
          'mr-5': lg,
          'mr-[18px]': !lg,
          'opacity-0': spinnerMode,
        }"
      >
        <!-- @slot Icon, will be shown at left end -->
        <slot name="icon"></slot>
      </span>
    </template>

    <!-- @slot Button text -->
    <div
      class="h-full relative flex items-center"
      :class="{
        'justify-center': !textAlign || textAlign === 'center',
      }"
    >
      <div :class="{ 'opacity-0': spinnerMode }">
        <slot></slot>
      </div>

      <div
        v-if="spinnerMode"
        class="absolute inset-0 flex items-center"
        :class="{
          'justify-center': !textAlign || textAlign === 'center',
        }"
      >
        <!-- <icon-spinner class="animate-spin h-5 w-5" /> -->
      </div>
    </div>
  </component>
</template>
