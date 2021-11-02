<template>
  <div class="request-collection">
    <div
      class="item-wrapper"
      v-for="(item, ind) in items"
      :key="ind"
    >
      <div class="item">
        <request-collection-item
          v-if="!item.collection"
          :method="item.method"
          :name="item.name"
          @click="$emit('select', item.request)"
        />
        <template v-else>
          <request-collection-item
            :collapsible="true"
            :name="item.name"
            @click="collapsed[ind] = collapsed[ind] !== true"
          />
        </template>
      </div>
      <request-collection
        v-if="collapsed[ind]"
        :items="item.items"
        class="item nested"
        @select="it => $emit('select', it)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import RequestCollectionItem from '@/components/RequestCollectionItem.vue';

export default defineComponent({
  name: 'RequestCollection',
  components: { RequestCollectionItem },
  emits: ['select'],
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const collapsed = reactive({});
    return { collapsed };
  },
});
</script>

<style scoped>
.item {
  margin-bottom: 10px;
}
.nested {
  margin-left: 10px;
}
</style>
