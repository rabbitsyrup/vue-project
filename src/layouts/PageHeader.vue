<template>
  <div>
    <router-link to="/study/home"><button>Home</button></router-link>
    
    <div style="float: right;">
      접속자 : {{ userStore.name }}
      <router-link to="/"><button>Log-out</button></router-link>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>