import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//Importações de "Pages"
import Login from "./Pages/Login";
import LoginContas from "./Pages/Login/LoginAccounts"
import Producao from './Pages/Components/ButtonGlobal';

export default function Router(){
    const routes = createBrowserRouter([{
        path: "/Login",
        element: <Login/>
    },
    {
        path: "LoginAccounts",
        element: <LoginContas/>
    },
    {
        path: "/dev",
        element: <Producao/>
    }]);

    return <RouterProvider router={routes}/>
}