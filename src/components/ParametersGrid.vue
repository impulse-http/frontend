<template>
  <div class="parameters-grid">
    <parameter-row
      v-for="(obj, ind) in modelValue"
      :key="ind"
      :model-value="obj"
      @update:model-value="(v) => updateEvent(v, ind)"
      class="parameter-row"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ParameterRow from '@/components/ParameterRow.vue';
import {
  createDefaultParameterList,
  createDefaultParameter,
  isDefinedParameter,
  Parameter,
} from '@/types/parameter';

export default defineComponent({
  name: 'ParametersGrid',
  components: { ParameterRow },
  props: {
    modelValue: {
      type: Array,
      default: createDefaultParameterList,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const updateEvent = (v: Parameter, ind: number) => {
      const modelVal = (props.modelValue as Parameter[] | null) || createDefaultParameterList();
      modelVal.splice(ind, 1, v);
      if (isDefinedParameter(modelVal[modelVal.length - 1])) {
        modelVal.push(createDefaultParameter());
      }
      emit('update:modelValue', modelVal);
    };

    return { updateEvent };
  },
});
</script>

<style scoped>
.parameter-row {
  margin: -1px;
}
</style>
