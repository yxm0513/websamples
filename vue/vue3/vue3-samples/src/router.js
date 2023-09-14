// imports
import { createRouter , createWebHistory } from 'vue-router';
import store from './store/index';

//pages
import Home from './pages/Home';
import Todos from './pages/Todos';
import Calender from './pages/Calender';
import Markdown from './pages/Markdown';
import Calculator from './pages/Calculator';
import Slider from './pages/Slider';
import Modal from './pages/Modal';
import Chat from './pages/Chat';
import UserCrud from './pages/UserCrud';
import TensorFlow from './pages/TensorFlow';

// routes array
const routes = [
  { path : '/' , component : Home , name : 'Home' },
  { path : '/todos' , component : Todos , name : 'Todos' },
  { path : '/calender' , component : Calender , name : 'Calendar' },
  { path : '/markdown' , component : Markdown , name : 'Markdown' },
  { path : '/calculator' , component : Calculator , name : 'Calculator' },
  { path : '/slider' , component : Slider , name : 'Slider' },
  { path : '/modal' , component : Modal , name : 'Modal' },
  { path : '/chat' , component : Chat , name : 'Chat', meta: { middleware: 'auth' } },
  { path : '/user-crud' , component : UserCrud , name : 'UserCrud' },
  { path : '/tensor-flow' , component : TensorFlow , name : 'TensorFlow' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if(to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`)
    if(middleware) {
      middleware.default(next, store)
    }
  } else {
    next()
  }
})

export default router;
export { routes };