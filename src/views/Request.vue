<template>
  <div class="page">
    <div class="sidebar">
      <request-card
        class="history-card"
        v-for="(r, ind) in requestHistory"
        :key="ind"
        :datetime="r.date"
        :method="r.method"
        :url="r.url"
        @click="selectRequest(ind)"
      />
    </div>
    <div class="main">
      <div class="request-bar">
        <request-options :url="selectedRequest.url" :method="selectedRequest.method" class="bar"/>
        <pretty-button class="button">Send</pretty-button>
      </div>
      <div class="request-body">
        <tabs :tab-names="['Request', 'Headers']">
          <template v-slot:tab-0><code-editor/></template>
          <template v-slot:tab-1>
            <parameters-grid v-model="selectedRequest.headers"/>
          </template>
        </tabs>
      </div>
      <div class="response">
        <tabs :tab-names="['Body', 'Headers']">
          <template v-slot:tab-0><json-viewer :data="testingJson" class="viewer"/></template>
          <template v-slot:tab-1><div>Haha!</div></template>
        </tabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, reactive,
} from 'vue';
import RequestOptions from '@/components/RequestOptions.vue';
import ParametersGrid from '@/components/ParametersGrid.vue';
import JsonViewer from '@/components/JsonViewer.vue';
import PrettyButton from '@/components/PrettyButton.vue';
import RequestCard from '@/components/RequestCard.vue';
import RequestData from '@/types/request';
import Method from '@/types/method';
import Tabs from '@/components/Tabs.vue';
import CodeEditor from '@/components/CodeEditor.vue';
import { createDefaultParameterList } from '@/types/parameter';

export default defineComponent({
  name: 'Request',
  components: {
    CodeEditor,
    Tabs,
    RequestCard,
    PrettyButton,
    ParametersGrid,
    JsonViewer,
    RequestOptions,
  },
  setup() {
    const testingJson = ref('{"test": "json", "c": [1, 2, 3, 4], "val": {"a": 1, "b": 2}}');
    const requestHistory: RequestData[] = [
      {
        method: Method.Get,
        date: Date.now(),
        url: 'http://localhost:8000/api_1',
        headers: createDefaultParameterList(),
      },
      {
        method: Method.Get,
        date: Date.now(),
        url: 'http://localhost:8000/test',
        headers: createDefaultParameterList(),
      },
      {
        method: Method.Get,
        date: Date.now(),
        url: 'http://localhost:8000/test_2',
        headers: createDefaultParameterList(),
      },
      {
        method: Method.Get,
        date: Date.now(),
        url: 'http://localhost:8000/test_3',
        headers: createDefaultParameterList(),
      },
      {
        method: Method.Get,
        date: Date.now(),
        url: 'http://localhost:8000/test_4',
        headers: createDefaultParameterList(),
      },
      {
        method: Method.Get,
        date: Date.now(),
        url: 'http://localhost:8000/test_5',
        headers: createDefaultParameterList(),
      },
      {
        method: Method.Get,
        date: Date.now(),
        url: 'http://localhost:8000/test_6',
        headers: createDefaultParameterList(),
      },
      {
        method: Method.Get,
        date: Date.now(),
        url: 'http://localhost:8000/test_7',
        headers: createDefaultParameterList(),
      },
      {
        method: Method.Get,
        date: Date.now(),
        url: 'http://localhost:8000/test_8',
        headers: createDefaultParameterList(),
      },
      {
        method: Method.Get,
        date: Date.now(),
        url: 'http://localhost:8000/test_9',
        headers: createDefaultParameterList(),
      },
      {
        method: Method.Get,
        date: Date.now(),
        url: 'http://localhost:8000/test_10',
        headers: createDefaultParameterList(),
      },
    ];
    const selectedRequest = ref(reactive({
      method: Method.Get,
      date: Date.now(),
      url: '',
      headers: createDefaultParameterList(),
    } as RequestData));
    const selectRequest = (ind: number) => {
      selectedRequest.value = reactive(requestHistory[ind] as RequestData);
    };
    return {
      testingJson,
      requestHistory,
      selectedRequest,
      selectRequest,
    };
  },
});
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: row;
  padding: 10px 30px 50px;
  align-items: stretch;
  min-height: -webkit-min-content;
  min-height: -moz-min-content;
}

.page .sidebar {
  width: 300px;
  overflow-y: scroll;
  scrollbar-width: none;
}

.page .sidebar::-webkit-scrollbar {
  display: none;
}

.page .main {
  flex: 1 1 auto;
  margin-left: 20px;
}

.request-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.request-bar .bar {
  width: 100%;
}

.request-bar .button {
  margin-left: 20px;
  width: 80px;
}

.request-body {
  margin-top: 20px;
  width: 100%;
  padding-bottom: 30px;
}

.request-body .viewer {
}

.history-card {
  margin-bottom: 10px;
  cursor: pointer;
}
</style>
