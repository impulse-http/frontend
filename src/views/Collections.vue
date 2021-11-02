<template>
  <div class="collections">
    <div class="row" v-for="(row, rowInd) in chunks" :key="rowInd">
      <collection-card
        v-for="(item, ind) in row"
        :key="ind"
        :name="item.name"
        :people="item.people"
        :requests-count="item.requests"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import CollectionCard from '@/components/CollectionCard.vue';
import chunkBy from '@/utils/array';
import collections from '@/mocks/collections';

export default defineComponent({
  name: 'Collections.vue',
  components: { CollectionCard },
  setup() {
    const chunks = reactive(chunkBy(collections, 6));
    return { chunks };
  },
});
</script>

<style scoped>
.collections {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 40px;
}
</style>
