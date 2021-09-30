
export default {
    routes:[
      {
        path:'/',
        name:'index',
        component:()=>import ('../view/index.vue')
      },
      {
          path:"/main",
          name:'main',
          component:()=>import('../view/main.vue')
      }
    ]
}