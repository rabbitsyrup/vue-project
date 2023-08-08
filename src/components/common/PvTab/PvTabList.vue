<template>
  <button @click="click">
    <slot></slot>
  </button>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  value: String,
})

const tabIndex = inject('modelValue')

function click() {
  tabIndex.value = props.value
}
</script>