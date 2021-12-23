<template>
  <div :id="editorId" class="editor"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { basicSetup, EditorState } from '@codemirror/basic-setup';
import { EditorView, keymap, ViewUpdate } from '@codemirror/view';
import { standardKeymap, insertTab } from '@codemirror/commands';
import { json } from '@codemirror/lang-json';

export default defineComponent({
  name: 'CodeEditor',
  props: {
    editorId: {
      type: String,
      default: 'editor',
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      state: (undefined as unknown) as EditorState,
      editor: (undefined as unknown) as EditorView,
    };
  },
  emits: ['update:modelValue'],
  mounted() {
    this.state = EditorState.create({
      doc: this.modelValue,
      extensions: [
        keymap.of([
          ...standardKeymap,
          {
            key: 'Tab',
            run: insertTab,
          },
        ]),
        EditorView.updateListener.of((update: ViewUpdate) => {
          if (update.docChanged) {
            const value = Array.from(update.state.doc).join('');
            this.$emit('update:modelValue', value);
          }
        }),
        basicSetup,
        json(),
      ],
    });
    this.editor = new EditorView({
      parent: document.getElementById(this.editorId) as Element,
      state: this.state as EditorState,
    });
  },
  methods: {
    setValue(newValue: string) {
      const currentState = this.editor.state;
      const update = currentState.update({
        changes: {
          from: 0,
          to: currentState.doc.length,
          insert: newValue,
        },
      });
      this.editor.update([update]);
    },
  },
});
</script>

<style scoped lang="css">
.editor {
  text-align: left;
  margin-top: 10px;
  border: 1px solid #2c3e50;
  width: 100%;
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
