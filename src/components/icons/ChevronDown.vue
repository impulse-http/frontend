<template>
  <icon-base
    :height="height"
    :width="width"
    :icon-color="iconColor"
    icon-name="chevron-down"
  >
    <line x1="3.4" y1="4.7" x2="9.4" y2="12.7" stroke="black"/>
    <line y1="-0.5" x2="10" y2="-0.5" transform="matrix(-0.6 0.8 0.8 0.6 15 5)" stroke="black"/>
  </icon-base>
</template>

<script>
import { defineComponent } from 'vue';
import IconBase from '@/components/icons/IconBase.vue';

export default defineComponent({
  name: 'ChevronDown',
  components: { IconBase },
  props: {
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
});
</script>

<style scoped>

</style>
