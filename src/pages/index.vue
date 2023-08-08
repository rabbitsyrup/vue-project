<template>
  <h1>index page</h1>
  ID<input type="text" v-model="id" />
  PASSWORD<input type="password" v-model="password" />
  <button @click="login">Login</button>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from "vue"
import { useUserStore } from '@/stores/user'
import comm from "@/utils/comm"

const id = ref('')
const password = ref('')

const router = useRouter()
const userStore = useUserStore()

async function login() {
  // TODO axios 통신 이용해서 제대로 된 로그인 구현
  if(!id.value || id.value != 'icsys') {
    await comm.alert('ID를 확인해 주세요.')
  } else if(password.value != '1234') { // 통신으로 비밀번호 비교
    await comm.alert('비밀번호를 확인해 주세요.')
  } else {
    // axios 결과값을 집어넣어야 함
    userStore.$patch({
      id: id.value,
      name: '시스템관리자'
    })
    router.push({ path: '/study/home' })
  }
}
</script>