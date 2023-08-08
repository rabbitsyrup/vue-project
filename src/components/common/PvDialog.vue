<template>
  <Teleport to="body">
    <div v-if="modelValue" class="modal-mask" @click="close($event, 'mask-area')">
      <!-- TODO modal container div는 dialog tag로 변경 검토해봐야 함 -->
      <div class="modal-container" :style="containerStyle">
        <div class="modal-header">
          {{ title }}

          <button style="float: right;" @click="close($event, 'close-btn')">X</button>
        </div>

        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'

defineExpose({
  open,
  close,
})

const emit = defineEmits([
  'update:modelValue',
  'close'
])

const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  width: Number,
  modelValue: Boolean,
  top: Number,
  left: Number,
  backgroundClose: String,
})

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const containerStyle = computed(() => {
  let rtn = {
    position: 'relative'
  }
  if(props.width != null) rtn.width = props.width + 'px'
  if(props.top != null) {
    rtn.top = props.top + 'px'
    rtn.position = 'absolute'
  }
  if(props.left != null) {
    rtn.left = props.left + 'px'
    rtn.position = 'absolute'
  }
  return rtn
})

function close(event, eventFrom) {
  if(event != null) event.stopPropagation() // event 버블링 방지

  if(eventFrom == 'mask-area') {
    if(props.backgroundClose) {
      emit('close')
    }
  } else if (eventFrom == 'close-btn') {
    // TODO 혹시 다른 동작이 있을까봐 분기처리 해둠
    emit('close')
  } else {
    emit('close')
  }
}
</script>

<style scoped>
.modal-mask {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 9800;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}
.modal-container {
  z-index: 9801;
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