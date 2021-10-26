<template>
<div class="tabs">
  <div class="header">
    <div
      class="title"
      v-for="(name, ind) in tabNames"
      :key="ind"
      @click="setActiveTab(ind)"
      :class="{ active: ind === activeTabIndex }"
    >{{ name }}</div>
  </div>
  <div class="tab-view">
    <div
      class="tab-wrapper"
      v-for="(name, ind) in tabNames"
      :key="ind"
      :class="{ hidden: ind !== activeTabIndex }"
    >
      <slot :name="`tab-${ind}`"/>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Tabs',
  props: {
    tabNames: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const activeTabIndex = ref(0);
    return { activeTabIndex };
  },
  methods: {
    setActiveTab(ind: number) {
      console.log(ind);
      this.activeTabIndex = ind;
    },
  },
});
</script>

<style scoped>
.title {
  cursor: pointer;
}

.header {
  display: flex;
  flex-direction: row;
}

.title + .title {
  margin-left: 10px;
}

.title {
  padding: 3px;
  border-bottom: 1px solid #2c3e50;
}

.tab-view {
  margin-top: 20px;
}

.active {
  font-weight: bold;
  border-bottom: 2px solid #2c3e50;
}

.hidden {
  display: none;
}
</style>
