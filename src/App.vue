<template>
  <router-view />

  <pv-alert></pv-alert>
  <pv-confirm></pv-confirm>
</template>

<script setup>
import { RouterView } from 'vue-router'
import PvAlert from "@/components/common/PvAlert.vue"
import PvConfirm from "@/components/common/PvConfirm.vue"
</script>