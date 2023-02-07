export const routes = [
  {
    path: '/',
    redirect: "/helloWorld"
  },
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