<template>
  <div class="input">
    <label :id="randomId" class="input-label">{{ label }}</label>
    <input
      class="input-input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PrettyInput',
  props: {
    modelValue: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  setup() {
    const randomId = ref(`input-${Math.random() * 10000}`);
    return { randomId };
  },
  emits: ['update:modelValue'],
});
</script>

<style scoped>
.input {
  display: flex;
  padding: 5px 0;
}

.input-label {
  font-weight: bold;
  width: 100px;
  text-align: left;
}

.input-input {
  margin-left: 15px;
  border: none;
  border-bottom: 1px solid #2c3e50;
  width: 200px;
}

.input-input:focus {
  outline: none;
  border-bottom: 2px solid #2c3e50;
}
</style>
