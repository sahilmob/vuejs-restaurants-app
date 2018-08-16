import Home from './components/Home.vue'
// Lazy loading Menu section
const Menu = () => import('./components/Menu.vue')
// Lazy loading admin section
const Admin = () => import(/* webpachChunkName: "footer-group" */ './components/Admin.vue')
// Lazy loading about section
const About = () => import(/* webpachChunkName: "footer-group" */ './components/About.vue')
import Contact from './components/Contact.vue'
import History from './components/History.vue'
import Delivery from './components/Delivery.vue'
import OrderingGuide from './components/OrderingGuide.vue'

export const routes = [
    {
        path: '/',
        name: 'homeLink',
        components: {
            default: Home,
            'ordering-guide': OrderingGuide,
            'delivery': Delivery,
            'history': History
        }
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