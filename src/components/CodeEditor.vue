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
        json(),
        keymap.of([indentWithTab]),
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
  width: 100%;
  border: 1px solid #2c3e50;
}
</style>

<style lang="css">
.cm-scroller, .cm-gutter {
  min-height: 300px;
}

.cm-gutters {
  background-color: #ffffff !important;
  color: #2c3e50 !important;
  border-right: 1px solid #2c3e50 !important;
}

.cm-activeLineGutter {
  background-color: #ffffff !important;
  font-weight: bold;
}
</style>
