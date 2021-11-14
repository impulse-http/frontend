<template>
  <div class="card">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseCard',
});
</script>

<style scoped>
.card {
  border: 1px solid #2c3e50;
  padding: 15px;
  width: 200px;
  height: 120px;
  cursor: pointer;
}

.card:hover {
  border: 1px solid #ffffff;
  background-color: #2c3e50;
  color: #ffffff;
}

.header {
  font-weight: bold;
  margin-bottom: 20px;
}

.footer {
  font-size: 0.8em;
}
</style>
