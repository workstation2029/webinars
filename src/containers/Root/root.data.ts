import News from "src/components/pages/News/News"
import NewsItem from "src/components/pages/NewsItem/NewsItem"
import Profile from "src/components/pages/Profile/Profile"
import Login from "src/components/pages/Login/Login"

export const routeList = {
    admin: [
        {
            path: '/news',
            component: News,
        },
        {
            path: '/news/:id',
            component: NewsItem,
        },
        {
            path: '/profile',
            component: Profile,
        }
    ],
    user: [
        {
            path: '/news',
            component: News,
        },
        {
            path: '/news/:id',
            component: NewsItem,
        },
        {
            path: '/profile',
            component: Profile,
        }
    ],
    guest: [
        {
            path: '/login',
            component: Login,
        },
    ]
}

export const redirectList = {
    admin: [
        {
            from: '/login',
            to: '/',
        },
        {
            from: '/',
            to: '/news',
        },
    ],
    user: [
        {
            from: '/login',
            to: '/',
        },
        {
            from: '/',
            to: '/news',
        },
    ],
    guest: [
        {
            from: '/',
            to: '/login',
        },
    ]
}