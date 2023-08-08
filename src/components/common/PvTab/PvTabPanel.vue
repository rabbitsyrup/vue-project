<template>
  <div v-if="tabIndex == value">
    <slot></slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  value: String,
})

const tabIndex = inject('modelValue')
</script>