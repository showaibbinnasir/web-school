import { createBrowserRouter } from "react-router-dom";
import Default from "../../layout/Default/Default";

const router = createBrowserRouter([
    {path : '/',
    element : <Default></Default>,
    errorElement:<div>Link destroyed or not found , 404 error</div>,
    children : [
        {
            path: '/',
            element: <div>This is home page</div>
        },
        {
            path : '/home',
            element: <div>This is home page</div>
        },
        {
            path : '/topic',
            element: <div>This is topic section </div>
        },
        {
            path : '/stats',
            element: <div>This is stats section </div>
        },
        {
            path : '/blog',
            element: <div>This is blog section </div>
        }
    ]
    }
])


export default router;