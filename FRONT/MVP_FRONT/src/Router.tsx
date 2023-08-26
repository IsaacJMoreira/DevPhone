import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//Importações de "Pages"
import Login from "./Pages/Login";
import LoginContas from "./Pages/Login/LoginAccounts"
import {ButtonGlobal} from './Pages/Components/ButtonGlobal';
import Inicio from './Pages/Home';
import Shop from './Pages/Shop';

export default function Router(){
    const routes = createBrowserRouter([{
        path: "/Login",
        element: <Login/>
    },
    {
        path: "/LoginAccounts",
        element: <LoginContas/>
    },
    {
        path: "/dev",
        element: <ButtonGlobal>Sou um botão</ButtonGlobal>
    },{
        path: "/Home",
        element: <Inicio/>
    },{
        path: "/Shop",
        element: <Shop/>
    }]);

    return <RouterProvider router={routes}/>
}