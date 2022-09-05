import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
function loadView(view){
  return () => 
    import(/* webpackChunkName: "view-[request]" */`@/views/${view}.vue`)
}

const routes = [
 {
   path:'/form',
   name:'Form',
   component: loadView('AdmissionForm'),
   meta:{
     title:'Registration'
   }
 }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to,_,next) =>{
  const metaTitle = to.matched
  .slice()
  .reverse().find(r => r.meta && r.meta.title)
  if(metaTitle) document.title = metaTitle.meta.title 
  return next()

})

