import Vue from 'vue'
import Router from 'vue-router'
import Questionair from '@views/Questionair'
import UserInfo from '@views/UserInfo'
import Result from '@views/Result'
/* eslint-disable */
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/questions',
            name: 'questions',
            component: Questionair
        },
        {
            path: '/',
            name: 'userinfo',
            component: UserInfo
        },
        {
            path: '/result',
            name: 'result',
            component: Result
        }
    ]
})