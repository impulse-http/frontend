<template>
  <div class="collection-item">
    <chevron-down v-if="collapsible" class="icon"/>
    <span class="icon method" v-else>{{ method }}</span>
    <span class="name">{{ name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChevronDown from '@/components/icons/ChevronDown.vue';

export default defineComponent({
  name: 'RequestCollectionItem',
  components: { ChevronDown },
  props: {
    collapsible: {
      type: Boolean,
      default: false,
    },
    method: {
      type: String,
      default: 'get',
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.collection-item {
  display: flex;
  justify-content: flex-start;
}

.icon {
  width: 40px;
}

.name {
  margin-left: 10px;
}

.method {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 1px;
}
</style>
