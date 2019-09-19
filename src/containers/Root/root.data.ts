import News from "src/components/pages/News/News"
import NewsItem from "src/components/pages/NewsItem/NewsItem"
import Profile from "src/components/pages/Profile/Profile"
import Login from "src/components/pages/Login/Login"
import userType from "src/model/userType"

const { GUEST, USER, ADMIN } = userType;

export const routeList = {
    [ADMIN]: [
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
    [USER]: [
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
    [GUEST]: [
        {
            path: '/login',
            component: Login,
        },
    ]
}

export const redirectList = {
    [ADMIN]: [
        {
            from: '/login',
            to: '/',
        },
        {
            from: '/',
            to: '/news',
        },
    ],
    [USER]: [
        {
            from: '/login',
            to: '/',
        },
        {
            from: '/',
            to: '/news',
        },
    ],
    [GUEST]: [
        {
            from: '/',
            to: '/login',
        },
    ]
}