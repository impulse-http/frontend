<template>
  <div class="collections-view">
    <modal v-model="modalVisible" width="500px">
      <template v-slot:header>New collection</template>
      <template v-slot:body>
        <pretty-input v-model="collectionName" label="Name"/>
      </template>
      <template v-slot:footer>
        <pretty-button>Create</pretty-button>
      </template>
    </modal>
    <div class="collections-view-header">
      <pretty-button @click="modalVisible = !modalVisible">New collection</pretty-button>
    </div>
    <div class="collections">
      <collection-card
        v-for="(item, ind) in collections"
        :key="ind"
        :name="item.name"
        :people="item.people"
        :requests-count="item.requests"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import CollectionCard from '@/components/CollectionCard.vue';
import collections from '@/mocks/collections';
import PrettyButton from '@/components/PrettyButton.vue';
import Modal from '@/components/Modal.vue';
import PrettyInput from '@/components/PrettyInput.vue';

export default defineComponent({
  name: 'Collections.vue',
  components: {
    PrettyInput,
    Modal,
    PrettyButton,
    CollectionCard,
  },
  setup() {
    const cols = ref(collections);
    const modalVisible = ref(false);
    const collectionName = ref('');
    return { collections: cols, modalVisible, collectionName };
  },
});
</script>

<style scoped>
.collections-view {
  padding: 30px;
}

.collections-view-header {
  display: flex;
  margin-bottom: 20px;
}

.collections {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
}
</style>
