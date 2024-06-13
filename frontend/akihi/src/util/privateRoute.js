import {Outlet, Navigate} from 'react-router-dom';

const PrivateRoute = () => {
    let auth = false;
    if (localStorage.getItem("id") != null) {
        auth = true;
    }
    return (
        auth ? <Outlet /> : <Navigate to="/login"/>
    )
}

export default PrivateRoute;