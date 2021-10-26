<template>
  <div class="request-bar">
    <input type="text" v-model="urlVal" class="input">
    <pretty-select :options="httpMethods" class="method-select"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import PrettySelect from '@/components/PrettySelect.vue';

export default defineComponent({
  components: { PrettySelect },
  props: {
    method: {
      type: String,
      required: false,
      default: 'GET',
    },
    url: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup(props) {
    const methodVal = ref(props.method);
    const urlVal = ref(props.url);
    const httpMethods = ref(['GET', 'POST', 'PUT', 'UPDATE', 'DELETE', 'PATCH', 'OPTIONS']);
    watch(() => props.method, (val) => { methodVal.value = val; });
    watch(() => props.url, (val) => { urlVal.value = val; });
    return { methodVal, urlVal, httpMethods };
  },
});
</script>

<style scoped>
.request-bar {
  position: relative;
}

.input {
  background-color: #ffffff;
  border: 1px solid #2c3e50;
  padding: 15px;
  width: calc(100% - (2 * 15px) - 1px);
}

.input:focus {
  outline: 1.5px solid #2c3e50;
}

.method-select {
  position: absolute;
  top: 12px;
  right: 1.5%;
}
</style>
