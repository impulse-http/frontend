<template>
  <div class="collection-card">
    <div class="name">{{ name }}</div>
    <div class="request-count">{{ requestsCount }} requests</div>
    <div class="people">{{ people }} people</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CollectionCard',
  props: {
    name: {
      type: String,
      default: 'Sanya Dezhurit',
    },
    requestsCount: {
      type: Number,
      default: 228,
    },
    people: {
      type: Number,
      default: 110,
    },
  },
});
</script>

<style scoped>
.collection-card {
  border: 1px solid #2c3e50;
  padding: 15px;
  width: 200px;
  height: 120px;
  cursor: pointer;
}

.collection-card:hover {
  border: 1px solid #ffffff;
  background-color: #2c3e50;
  color: #ffffff;
}

.name {
  font-weight: bold;
  margin-bottom: 20px;
}

.request-count, .people {
  font-size: 0.8em;
}
</style>
