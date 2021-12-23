<template>
  <Suspense>
    <template #default>
      <div class="collections-view">
            <modal v-model="modalVisible" width="500px">
              <template v-slot:header>New collection</template>
              <template v-slot:body>
                <pretty-input v-model="collectionName" label="Name"/>
              </template>
              <template v-slot:footer>
                <pretty-button @click="newCollection">Create</pretty-button>
              </template>
            </modal>
            <div class="collections-view-header">
              <pretty-button  @click="modalVisible = !modalVisible">New collection</pretty-button>
            </div>
            <div class="collections">
              <collection-card
                v-for="item in collections"
                :id="item.id"
                :key="item.id"
                :name="item.name"
                :requests-count="item.requests"
              />
            </div>
      </div>
    </template>
    <template #fallback>
      Collections are loading
    </template>
  </Suspense>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import CollectionCard from '@/components/CollectionCard.vue';
import PrettyButton from '@/components/PrettyButton.vue';
import Modal from '@/components/Modal.vue';
import PrettyInput from '@/components/PrettyInput.vue';
import { createCollection, listCollections } from '@/api/collections';

export default defineComponent({
  name: 'Collections',
  components: {
    PrettyInput,
    Modal,
    PrettyButton,
    CollectionCard,
  },
  async setup() {
    const collections = ref([]);
    const modalVisible = ref(false);
    const collectionName = ref('');

    const getCollections = async () => { collections.value = await listCollections(); };
    onMounted(getCollections);

    const newCollection = async () => {
      await createCollection({ name: collectionName.value });
      collectionName.value = '';
      modalVisible.value = false;
      await getCollections();
    };

    return {
      collections,
      modalVisible,
      collectionName,
      newCollection,
    };
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
