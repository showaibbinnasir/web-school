import { createBrowserRouter } from "react-router-dom";
import Default from "../../layout/Default/Default";
import Blog from "../Blog/Blog";
import Homepage from "../Homepage/Homepage";
import QuizItems from "../QuizItems/QuizItems";
import Stats from "../Stats/Stats";
import Topics from "../Topics/Topics";

const router = createBrowserRouter([
    {path : '/',
    element : <Default></Default>,
    errorElement:<div>Link destroyed or not found , 404 error</div>,
    loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
    children : [
        {
            path: '/',
            element: <Homepage></Homepage>
        },
        {
            path : '/home',
            element: <Homepage></Homepage>
        },
        {
            path : '/topic',
            element: <Topics></Topics>
        },
        {
            path : '/stats',
            element: <Stats></Stats>
        },
        {
            path : '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/course/:courseId',
            loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`),
            element: <QuizItems></QuizItems>
        }
    ]
    }
])


export default router;