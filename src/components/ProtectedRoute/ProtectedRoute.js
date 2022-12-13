import React from "react"
import { Route, Redirect } from "react-router-dom"

const ProtectedRoute = ({ children, isLoggedIn }) => {
    return (
        <Route>
            {() =>
                isLoggedIn ? children : <Redirect to="/signin" />
            }
        </Route>
    );
};

export default ProtectedRoute