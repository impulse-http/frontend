<template>
  <div
    class="modal"
    :class="{'modal-visible': modelValue}"
    @click="$emit('update:modelValue', false)"
  >
    <div
      class="modal-content"
      :style="{width: width}"
      @click.stop="$emit('update:modelValue', true)"
    >
      <div class="content-header">
        <slot name="header"/>
      </div>
      <div class="content-body">
        <slot name="body" class="items"/>
      </div>
      <slot/>
      <div class="content-footer">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '60%',
    },
  },
  emits: ['update:modelValue'],
});
</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal-visible {
  display: block;
}

.modal-content {
  margin: 15% auto;
  background-color: #ffffff;
  border: 1px solid #2c3e50;
  padding: 20px;
  width: 60%;
}

.content-header {
  font-size: 1.3em;
  display: flex;
  font-weight: bold;
}

.content-body {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.content-body > * {
  margin-bottom: 20px;
}

.content-footer {
  display: flex;
  margin-top: 20px;
}
</style>
