<template>
  <div class="parameter-row">
    <input type="text" :value="modelValue.key" @change="updateKey">
    <input type="text" :value="modelValue.value" @change="updateValue">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const updateEvent = 'update:modelValue';

export default defineComponent({
  name: 'ParameterRow',
  props: {
    modelValue: {
      type: Object,
      required: false,
      default: () => ({ key: null, value: null }),
    },
  },
  emits: [updateEvent],
  setup(props, { emit }) {
    const updateKey = (e: Event) => {
      if (e.target !== null) {
        const { value } = (e.target as HTMLInputElement);
        emit(updateEvent, { ...props.modelValue, key: value });
      }
    };
    const updateValue = (e: Event) => {
      if (e.target !== null) {
        const { value } = (e.target as HTMLInputElement);
        emit(updateEvent, { ...props.modelValue, value });
      }
    };
    return {
      updateKey,
      updateValue,
    };
  },
});
</script>

<style scoped>
.parameter-row {
  display: flex;
  align-content: stretch;
  justify-content: stretch;
}

.parameter-row input {
  flex-grow: 1;
  background-color: #ffffff;
  border: 1px solid #2c3e50;
  padding: 10px;
  width: calc(100% - (2 * 15px) - 1px);
}

.parameter-row input:focus {
  outline: 2px solid #2c3e50;
  border-left: 1px solid #2c3e50;
}

.parameter-row input:nth-child(2) {
  border-left: none;
}
</style>
