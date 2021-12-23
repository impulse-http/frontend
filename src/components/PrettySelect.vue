<template>
  <div class="pretty-select" :style="{'width': `${16 * maxOptionLength()}px`}">
    <div v-on:click="isActive = !isActive" class="baseField">
      <span class="text">{{ modelValue }}</span>
      <chevron-down class="icon"/>
    </div>
    <div v-if="isActive" class="options-container">
      <div
        v-for="(option, ind) in options"
        :key="ind"
        v-on:click="setOption(ind)"
        class="option"
      >{{ option }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, PropType, ref, provide,
} from 'vue';
import ChevronDown from '@/components/icons/ChevronDown.vue';

export default defineComponent({
  components: { ChevronDown },
  props: {
    modelValue: {
      type: String,
      required: false,
    },
    options: {
      type: Array as PropType<Array<string>>,
      required: true,
      minLength: 1,
    },
  },
  emits: ['update:modelValue'],
  setup(props) {
    const isActive = ref(false);
    return { isActive };
  },
  methods: {
    setOption(ind: number) {
      this.$emit('update:modelValue', this.options[ind]);
      this.isActive = false;
    },
    maxOptionLength(): number {
      return this.options
        .map((o: string) => o.length)
        .reduce((acc: number, value: number) => Math.max(acc, value));
    },
  },
});
</script>

<style scoped>
.icon, .text {
  vertical-align: middle;
  display: inline-block;
}

.pretty-select {
  background-color: white;
  cursor: pointer;
}

.option {
  padding: 2px;
}

.option:hover {
  background-color: #2c3e50;
  color: white;
}

.options-container {
  border: 1px solid #2c3e50;
  z-index: 2;
  position: relative;
}
</style>
