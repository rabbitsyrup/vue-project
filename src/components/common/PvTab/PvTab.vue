<template>
  <div>
    <div>
      <slot name="list"></slot>
    </div>
    <div>
      <slot name="panel"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed, provide } from 'vue'

const emit = defineEmits([
  'update:modelValue'
])

const props = defineProps({
  modelValue: String,
})

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

provide('modelValue', modelValue)
</script>