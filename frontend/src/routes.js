import { Home } from './pages/Home/Home';
import { Courses } from './components/Courses/Courses';
import { CourseDetail } from './components/Courses/CourseDetail';
import { LoginSignup } from './components/Login/LoginSignup';
import { Admin } from './pages/Admin/Admin'
import { Product } from './components/Admin/Product';
import { User } from './components/Admin/User'

export const routes = [

    {
        path: '/',
        component: LoginSignup,
    },
    {
        path: '/courses/:id',
        component: CourseDetail,
    },
    {
        path: '/courses',
        component: Courses,
    },
    {
        path: '/admin',
        component: Admin,
    },
    {
        path: '/home',
        component: Home,
    }
]


export const adminRoutes = [
    {
        path: '/user',
        component: User,
    },
    {
        path: '/product',
        component: Product,
    }
]
