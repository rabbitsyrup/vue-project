//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import PvDialog from "@/components/common/PvDialog.vue"
import PvSelect from "@/components/common/PvSelect.vue"
import PvTab from "@/components/common/PvTab/PvTab.vue"
import PvTabList from "@/components/common/PvTab/PvTabList.vue"
import PvTabPanel from "@/components/common/PvTab/PvTabPanel.vue"

const app = createApp(App)

app.use(router)
   .use(createPinia())
   .use(vuetify)
   .component("PtDialog", PvDialog)
   .component("PtSelect", PvSelect)
   .component("PtTab", PvTab)
   .component("PtTabList", PvTabList)
   .component("PtTabPanel", PvTabPanel)

app.mount('#app')
