<template>
  <suspense>
    <collections/>
  </suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Collections from '@/views/Collections.vue';

export default defineComponent({
  name: 'CollectionsWrapper',
  components: { Collections },
});
</script>

<style scoped>

</style>
