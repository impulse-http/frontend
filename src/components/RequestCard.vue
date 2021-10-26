<template>
  <div class="card" @click="$emit('click')">
    <div class="headline">
      <badge class="method">{{ method }}</badge>
      <span class="url">{{ url }}</span>
    </div>
    <div class="footer">
      <span class="date">{{ renderedDate }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import moment from 'moment';
import Badge from '@/components/Badge.vue';

export default defineComponent({
  name: 'RequestCard',
  components: { Badge },
  props: {
    method: {
      type: String,
      default: 'GET',
    },
    url: {
      type: String,
      default: 'https://localhost:8000/',
    },
    datetime: {
      type: Number,
      default: Date.now(),
    },
  },
  setup(props) {
    const renderedDate = ref(moment(props.datetime).fromNow());
    return { renderedDate };
  },
});
</script>

<style scoped>
.url {
  display: inline-flex;
  margin-left: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  border: 1px solid #2c3e50;
  padding: 10px;
}

.card div {
  display: flex;
  flex-direction: row;
  align-content: flex-start;
}

.footer {
  margin-top: 5px;
  font-size: 0.8rem;
}

.card:hover {
  border: 1px solid #ffffff;
  background-color: #2c3e50;
  color: #ffffff;
}

.card:hover .method {
  background-color: #ffffff;
  color: #2c3e50;
}
</style>
