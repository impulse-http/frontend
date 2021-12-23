<template>
  <div class="page">
    <modal v-model="modalVisible" width="500px">
      <template v-slot:header>
        <template v-if="!isHistory">
          Update request
        </template>
        <template v-else>
          Save request
        </template>
      </template>
      <template v-slot:body>
        <pretty-input v-model="requestName" label="Name"/>
      </template>
      <template v-slot:footer>
        <pretty-button @click="saveRequest">Save</pretty-button>
      </template>
    </modal>
    <div class="sidebar">
      <tabs :tab-names="['Collection', 'History']" @tab-changed="tabChange">
        <template v-slot:tab-0>
          <request-collection
            :items="collectionState"
            @select="it => selectRequest(it)"
          />
        </template>
        <template v-slot:tab-1>
          <request-card
            class="history-card"
            v-for="(r, ind) in historyState"
            :key="ind"
            :datetime="r.date"
            :method="r.method"
            :url="r.url"
            @click="selectHistoryRequest(historyState[ind])"
          />
        </template>
      </tabs>
    </div>
    <div class="main">
      <div class="request-bar">
        <request-options
          v-model:url="selectedRequest.url"
          v-model:method="selectedRequest.method"
          class="bar"
        />
        <pretty-button class="button" @click="requestMake">Send</pretty-button>
        <pretty-button class="button" @click="modalVisible = !modalVisible">Save</pretty-button>
      </div>
      <div class="request-body">
        <tabs :tab-names="['Request', 'Headers']">
          <template v-slot:tab-0>
            <code-editor v-model="selectedRequest.body" ref="editorRef"/>
          </template>
          <template v-slot:tab-1>
            <parameters-grid v-model="selectedRequest.headers"/>
          </template>
        </tabs>
      </div>
      <div class="response">
        <tabs :tab-names="['Body', 'Headers']">
          <template v-slot:tab-0>
            <json-viewer :data="responseBody"/>
          </template>
          <template v-slot:tab-1>
            <parameters-grid v-model="responseHeaders"/>
          </template>
        </tabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, reactive, onMounted,
} from 'vue';
import { useAsyncState } from '@vueuse/core';
import RequestOptions from '@/components/RequestOptions.vue';
import ParametersGrid from '@/components/ParametersGrid.vue';
import JsonViewer from '@/components/JsonViewer.vue';
import PrettyButton from '@/components/PrettyButton.vue';
import RequestCard from '@/components/RequestCard.vue';
import PrettyInput from '@/components/PrettyInput.vue';
import RequestCollection from '@/components/RequestCollection.vue';
import Method from '@/types/method';
import Modal from '@/components/Modal.vue';
import Tabs from '@/components/Tabs.vue';
import CodeEditor from '@/components/CodeEditor.vue';
import { createDefaultParameterList, Parameter } from '@/types/parameter';
import {
  getHistory, getRequest,
  listRequests,
  makeRequest,
  newRequest,
  RequestEntity,
  updateRequest,
} from '@/api/requests';

export default defineComponent({
  name: 'Request',
  props: {
    collectionId: {
      type: Number,
      required: false,
    },
  },
  components: {
    CodeEditor,
    Tabs,
    Modal,
    RequestCard,
    RequestCollection,
    PrettyButton,
    PrettyInput,
    ParametersGrid,
    JsonViewer,
    RequestOptions,
  },
  setup(props) {
    const editorRef = ref();
    const testingJson = ref('{"test": "json", "c": [1, 2, 3, 4], "val": {"a": 1, "b": 2}}');
    const selectedRequest = ref(reactive({
      id: null as number | null,
      method: Method.Get,
      url: '',
      body: '',
      headers: createDefaultParameterList(),
    }));
    // TODO: Refactor request
    const responseBody = ref('');
    const responseHeaders = ref([] as Parameter[]);
    const requestName = ref('');
    const modalVisible = ref(false);

    const collectionRequestsState = useAsyncState(
      async () => listRequests(props.collectionId as number),
      [],
      {
        immediate: false,
        resetOnExecute: true,
      },
    );
    onMounted(collectionRequestsState.execute);

    const requestHistoryState = useAsyncState(
      async () => getHistory(),
      [],
      {
        immediate: false,
        resetOnExecute: true,
      },
    );
    onMounted(requestHistoryState.execute);

    const requestState = useAsyncState(
      async () => {
        const response = await makeRequest(selectedRequest.value);
        responseBody.value = response.body;
        responseHeaders.value = response.headers;
        await requestHistoryState.execute();
      },
      null,
      { immediate: false },
    );
    const isHistory = ref(true);

    const tabChange = (tabIndex: number) => {
      switch (tabIndex) {
        case 0:
          collectionRequestsState.execute().then(() => console.log('Console log'));
          break;
        case 1:
          requestHistoryState.execute().then(() => console.log('Hello'));
          break;
        default:
      }
    };

    const selectHistoryRequest = async (request: RequestEntity) => {
      selectedRequest.value = reactive(request);
      if (!selectedRequest.value.headers || !selectedRequest.value.headers.length) {
        selectedRequest.value.headers = createDefaultParameterList();
      }
      editorRef.value.setValue(selectedRequest.value.body);
      isHistory.value = true;
      requestName.value = request.name || '';
    };

    const selectRequest = async (request: RequestEntity) => {
      const fetchedReq = await getRequest(request.id as number);
      selectedRequest.value = reactive(fetchedReq);
      editorRef.value.setValue(selectedRequest.value.body);
      if (!selectedRequest.value.headers || !selectedRequest.value.headers.length) {
        selectedRequest.value.headers = createDefaultParameterList();
      }
      isHistory.value = false;
      requestName.value = request.name || '';
    };

    const saveRequest = async () => {
      let request = {
        ...selectedRequest.value,
        name: requestName.value,
      } as RequestEntity;
      if (isHistory.value) {
        request = await newRequest(props.collectionId as number, request);
      } else {
        await updateRequest(selectedRequest.value.id as number, request);
      }
      await collectionRequestsState.execute();
      modalVisible.value = false;
      selectedRequest.value.id = request.id;
    };

    return {
      testingJson,
      isHistory,
      selectedRequest,
      selectRequest,
      selectHistoryRequest,
      saveRequest,
      editorRef,
      responseBody,
      responseHeaders,
      requestState: requestState.state,
      requestReady: requestState.isReady,
      requestMake: requestState.execute,
      requestName,
      collectionState: collectionRequestsState.state,
      collectionReady: collectionRequestsState.isReady,
      collectionReceive: collectionRequestsState.execute,
      historyState: requestHistoryState.state,
      historyReady: requestHistoryState.isReady,
      historyReceive: requestHistoryState.execute,
      tabChange,
      modalVisible,
    };
  },
});
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: row;
  padding: 30px 30px 50px;
  align-items: stretch;
  min-height: -webkit-min-content;
  min-height: -moz-min-content;
}

.page .sidebar {
  min-width: 300px;
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
  justify-content: flex-start;
}

.request-bar .bar {
  width: 60%;
}

.request-bar .button {
  margin-left: 20px;
  width: 80px;
}

.request-body, .response {
  margin-top: 20px;
  width: 80%;
  padding-bottom: 30px;
}

.history-card {
  margin-bottom: 10px;
  cursor: pointer;
}
</style>
