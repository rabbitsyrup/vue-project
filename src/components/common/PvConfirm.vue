<template>
  <Teleport to="body">
    <div v-if="confirmStore.show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <!-- 일단 임시로 nbsp 처리 -->
          {{ confirmStore.title||'&nbsp;' }}

          <button style="float: right;" @click="close">X</button>
        </div>

        <div class="modal-body">
          {{ confirmStore.msg }}

          <div style="display: flex; justify-content: center;">
            <button @click="confirm">확인</button>
            <button @click="close">취소</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { useConfirmStore } from '@/stores/confirm'

const confirmStore = useConfirmStore()

function confirm() {
  confirmStore.$patch({
    show: false,
    result: true
  })  
}

function close() {
  confirmStore.$reset()
}
</script>

<style scoped>
.modal-mask {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 9900;
  width: 100%;
  height: 100%;
  display: flex;
}
.modal-container {
  z-index: 9902;
  margin: auto;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.modal-header {
  padding: 5px 10px 5px 10px;
  background-color: lightsteelblue;
}
.modal-body {
  margin: 10px;
}
</style>