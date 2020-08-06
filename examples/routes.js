import About from './views/about'
import Dashboard from './views/dashboard'
import Home from './views/home'

export default [
    {
        path: "/",
        component: Home
    },
    {
        path: "/dashboard",
        component: Dashboard
    },
    {
        path: "/about",
        component: About
    },
]