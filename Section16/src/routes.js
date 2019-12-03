import Home from './components/Home.vue'
import Header from './Header.vue'

const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'))
    }, 'user');
}
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'))
    }, 'user');
}
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'))
    }, 'user');
}
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'))
    }, 'user');
}
// import UserStart from './components/user/UserStart.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'
// import User from './components/user/User.vue'


export const routes = [
    { path: '/', components: {
        default: Home,
        'header-top': Header
    }},
    { path: '/user', components: {
        default: User,
        'header-bottom': Header
    }, children:[
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
            console.log("Inside route setup before enter")
            next()
        } },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' },
    ] },
    { path: '/redirect-me', redirect: '/'},
    { path: '*', redirect: '/'},

]