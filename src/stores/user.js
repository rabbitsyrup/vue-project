import { ref } from "vue"
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const id = ref('')
  const name = ref('')

  function $reset() {
    id.value = ''
    name.value = ''
  }

  return { id, name, $reset }
})