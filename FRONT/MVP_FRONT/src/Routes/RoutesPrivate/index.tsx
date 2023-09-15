import { Route, redirect} from "react-router-dom"
import react from "react"
import { LogadoContext } from '../../../Routes/Logado';


const RoutesPrivate = ({component: Component, ...rest}) => {
    const {user} = react.useContext(LogadoContext)

    return (
        <Route
        {...rest}
        render={() => user?.token ?
            <Component {...rest} />
            :
            <redirect to="/login"/>
        }
        />
    )
};

export default RoutesPrivate;