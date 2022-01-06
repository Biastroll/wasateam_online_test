import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import InputType from '../views/InputType.vue'
import Api from '../views/Api.vue'
import Text from '../components/InputByText.vue'
import Radio from '../components/InputByRadio.vue'
import Select from '../components/InputBySelect.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        title: 'online test'}
  },
  {
    path: '/inputtype',
    name: 'Input Type',
    component: InputType,
    meta: {
        title: 'Changing Input Type'
      },
    children: [
      {
      path: '/inputtype/text',
      component: Text
      },{
        path: '/inputtype/radio',
        component: Radio
      },{
        path: '/inputtype/select',
        component: Select
      }
    ]
  },
  {
    path: '/jsonApi',
    name: 'Api',
    component: Api,
    meta: {
        title: 'json Api'}
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes 
})

router.beforeEach((to, from) => {
  from.meta.title = document.title;
  if (to.meta.title) {
      document.title = to.meta.title
  }
})

export default router