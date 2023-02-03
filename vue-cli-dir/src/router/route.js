export const routes = [
  {
    name: 'HelloWorld',
    path: '/helloWorld',
    component: () => import('../view/transform/transform.vue')
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import('../view/home/home.vue')
  }
]