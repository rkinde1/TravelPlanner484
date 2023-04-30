import {Outlet, Navigate} from 'react-router-dom';

const PrivateRoute = () => {
    let auth = false;
    if (localStorage.getItem("token") != null) {
        auth = true;
    }
    return (
        auth ? <Outlet /> : <Navigate to="/login"/>
    )
}

export default PrivateRoute;