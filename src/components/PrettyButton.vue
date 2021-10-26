<template>
  <a class="button"><slot/></a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PrettyButton',
});
</script>

<style scoped>
.button {
  border: 1px solid #2c3e50;
  display: inline-block;
  height: 20px;
  padding: 15px;
}

.button:hover {
  border: 1px solid #ffffff;
  background-color: #2c3e50;
  color: #ffffff;
  cursor: pointer;
}
</style>
