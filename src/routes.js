import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import History from './components/History.vue'
import Delivery from './components/Delivery.vue'
import OrderingGuide from './components/OrderingGuide.vue'

export const routes = [
    {
        path: '/',
        name: 'homeLink',
        component: Home
    },
    {
        path: '/menu',
        name: 'menuLink',
        component: Menu
    },
    {
        path: '/admin',
        name: 'adminLink',
        component: Admin
    },
    {
        path: '/about',
        name: 'aboutLink',
        component: About,
        children: [
            {
                path: '/contact',
                name: 'contactLink',
                component: Contact
            },
            {
                path: '/history',
                name: 'historyLink',
                component: History
            },
            {
                path: '/delivery',
                name: 'deliveryLink',
                component: Delivery
            },
            {
                path: '/ordering-guide',
                name: 'orderingGuideLink',
                component: OrderingGuide
            }
        ]
    },
    {
        path: '*',
        redirect: '/'
    }
]