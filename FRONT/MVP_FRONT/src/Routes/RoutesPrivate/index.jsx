import React from 'react';
import { redirect, Route} from 'react-router-dom';

const isAuthenticated = () => localStorage.getItem('token');

export const PrivateRouter = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => 
                    isAuthenticated() ? (
                        <Component {...props} />
                    ) : (
                        <redirect to={{pathname:"/login", state: {from:props.location}}} />
                    )
                }
        />
    )
}

export default PrivateRouter;