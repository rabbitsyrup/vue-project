<template>
  <Teleport to="body">
    <div v-if="alertStore.show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <!-- 일단 임시로 nbsp 처리 -->
          {{ alertStore.title||'&nbsp;' }}

          <button style="float: right;" @click="close">X</button>
        </div>

        <div class="modal-body">
          {{ alertStore.msg }}

          <div style="display: flex; justify-content: center;">
            <button @click="close">확인</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { useAlertStore } from '@/stores/alert'

const alertStore = useAlertStore()

function close() {
  alertStore.$reset()
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
  z-index: 9901;
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