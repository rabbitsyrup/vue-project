import { useAlertStore } from '@/stores/alert'
import { useConfirmStore } from '@/stores/confirm'

export default {
  alert: (msg, title) => {
    let alertStore = useAlertStore()
    alertStore.$patch({
      show: true,
      title: title,
      msg: msg
    })

    return new Promise(resolve => {
      alertStore.$subscribe((show) => {
        if(show) resolve()
      })
    })
  },
  
  confirm: (msg, title) => {
    let confirmStore = useConfirmStore()
    confirmStore.$patch({
      show: true,
      title: title,
      msg: msg
    })
    
    return new Promise(resolve => {
      confirmStore.$subscribe((show) => {
        if(show) {
          resolve(confirmStore.result)
        }
      })
    })
  }
}