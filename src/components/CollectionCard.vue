<template>
  <base-card>
    <template v-slot:header>
      <div class="name">{{ name }}</div>
    </template>
    <template v-slot:footer>
      <div class="request-count">{{ requestsCount }} requests</div>
    </template>
  </base-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseCard from '@/components/BaseCard.vue';

export default defineComponent({
  name: 'CollectionCard',
  components: { BaseCard },
  props: {
    name: {
      type: String,
      required: true,
    },
    requestsCount: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
</style>
