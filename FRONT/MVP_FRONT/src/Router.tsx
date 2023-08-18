import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//Importações de "Pages"
import Login from "./Pages/Login/Logins";
import Producao from './Pages/Components/ButtonGlobal';

export default function Router(){
    const routes = createBrowserRouter([{
        path: "/Login",
        element: <Login/>
    },{
        path: "/dev",
        element: <Producao/>
    }]);

    return <RouterProvider router={routes}/>
}