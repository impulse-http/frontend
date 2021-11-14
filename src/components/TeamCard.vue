<template>
  <base-card>
    <template v-slot:header>{{ name }}</template>
    <template v-slot:footer>
      <div class="description">{{ description }}</div>
      <div class="members">{{ members }} members</div>
    </template>
  </base-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseCard from '@/components/BaseCard.vue';

export default defineComponent({
  name: 'TeamCard',
  components: { BaseCard },
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    members: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
.members {
  padding-top: 10px;
}
</style>
