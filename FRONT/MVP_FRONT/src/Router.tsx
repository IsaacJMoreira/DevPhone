import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//Importações de "Pages"
import Login from "./Pages/Components/HeaderMenu"

export default function Router(){
    const routes = createBrowserRouter([{
        path: "/Login",
        element: <Login/>
    }]);

    return <RouterProvider router={routes}/>
}