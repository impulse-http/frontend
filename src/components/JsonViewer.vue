<template>
  <div class="json-viewer"><pre>{{ data && beautifyJson(data) }}</pre></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

function beautifyJson(obj: string): string {
  const parsedData = JSON.parse(obj);
  return JSON.stringify(parsedData, null, 4);
}

export default defineComponent({
  name: 'JsonViewer',
  props: {
    data: {
      type: String,
      required: true,
    },
  },
  setup() {
    return { beautifyJson };
  },
});
</script>

<style scoped>
.json-viewer {
  border: 1px solid #2c3e50;
  padding: 10px;
  width: 100%;
  height: 400px;
  overflow-y: scroll;
}

.json-viewer pre {
  text-align: left;
  word-wrap: break-word;
}
</style>
