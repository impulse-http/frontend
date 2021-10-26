<template>
  <span class="badge"><slot/></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Badge',
});
</script>

<style scoped>
  .badge {
    background-color: #2c3e50;
    color: #ffffff;
    padding: 3px 6px;
  }
</style>
