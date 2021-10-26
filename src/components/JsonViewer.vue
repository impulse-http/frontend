<template>
  <div class="json-viewer"><pre>{{ json }}</pre></div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'JsonViewer',
  props: {
    data: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: false,
      default: '380px',
    },
  },
  setup(props) {
    const jsonData = JSON.parse(props.data);
    const json = ref(JSON.stringify(jsonData, null, 4));
    return { json };
  },
});
</script>

<style scoped>
.json-viewer {
  border: 1px solid #2c3e50;
  padding: 10px;
}

.json-viewer pre {
  text-align: left;
}
</style>
