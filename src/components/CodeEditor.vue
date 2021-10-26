<template>
  <div :id="editorId" class="editor"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { basicSetup, EditorState } from '@codemirror/basic-setup';
import { EditorView, keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { json } from '@codemirror/lang-json';

export default defineComponent({
  name: 'CodeEditor',
  props: {
    editorId: {
      type: String,
      default: 'editor',
    },
  },
  data() {
    return {
      state: (undefined as unknown) as EditorState,
      editor: (undefined as unknown) as EditorView,
    };
  },
  mounted() {
    this.state = EditorState.create({
      doc: '',
      extensions: [
        basicSetup,
        keymap.of([indentWithTab]),
        json(),
      ],
    });
    this.editor = new EditorView({
      parent: document.getElementById(this.editorId) as Element,
      state: this.state as EditorState,
    });
  },
});
</script>

<style scoped lang="css">
.editor {
  text-align: left;
  margin-top: 10px;
  width: 500px;
}
</style>
