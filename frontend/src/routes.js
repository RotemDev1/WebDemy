import { Home } from './pages/Home/Home';
import { Courses } from './components/Courses/Courses';
import { CourseDetail } from './components/Courses/CourseDetail';
import { LoginSignup } from './components/Login/LoginSignup';


export const routes = [

    {
        path: '/',
        component: LoginSignup,
    },
    {
        path: '/login',
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
    // {
    //     path: '/addCourse',
    //     component: AddCourse,
    // },
    {
        path: '/home',
        component: Home,
    },




]
