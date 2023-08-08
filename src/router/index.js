import { createRouter, createWebHistory } from 'vue-router/auto'
import comm from "@/utils/comm"

const router = createRouter({  
  extendRoutes: (routes) => {
    // 이 부분은 조금 더 최적화 가능할 것 같긴 함
    routes.forEach(route => {
      // 권한 레벨에 따라서 meta에 정보 입력할 수 있을 것 같음
      // TODO 이 부분 axios 통신으로 db에서 가져와서 세팅하게 할 수 있을듯
      if(route.name != '/') { // requiresAuth 예외 화면 여기다 적어줄 것 (로그인 안해도 들어갈 수 있는 화면들)
        route.meta ??= {}
        route.meta.requiresAuth = true 
      }
    })
    return routes
  },
  history: createWebHistory(import.meta.env.BASE_URL)
})

router.beforeEach((to, from, next)=>{
  if(to.meta.requiresAuth == true) {
    // TODO 로그인 했는지 체크하는 로직 만들기!
    next()
  } else if(to.matched.length == 0) {
    // 없는 페이지 처리
    comm.alert('존재하지 않는 페이지입니다.')
    next(false);
  } else {
    next()
  }
})

export default router