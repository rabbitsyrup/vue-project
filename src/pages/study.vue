<template>
  <div style="height: 50px; background-color: lightskyblue;">
    <page-header />
  </div>

  <div style="display: flex; flex-direction: column; float: left; width: 150px; height: 700px; background-color: lightcyan;">
    <LNB />
  </div>

  <div>
    <router-view/>
  </div>
</template>

<script setup>
import PageHeader from '@/layouts/PageHeader.vue'
import LNB from '@/layouts/LNB.vue'
</script>