import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//Importações de "Pages"
import Login from "./Pages/Login";
import LoginContas from "./Pages/Login/LoginAccounts"
import Producao from './Pages/Components/ButtonGlobal';
import Inicio from './Pages/Home';

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
    },{
        path: "/Home",
        element: <Inicio/>
    }]);

    return <RouterProvider router={routes}/>
}