import {Outlet, Navigate, Link} from 'react-router-dom';

const PrivateRoute = () => {
    let auth = false;
    if (localStorage.getItem("authorized")) {
        auth = true;
    }
    return (
        auth ? <MenuBar/> : <LogAndSign/>
    )
}
const MenuBar =() => {
    return(
        <div>
            <li><Link to={'vacation'}>Vacation</Link></li>
            <li><Link to={'profile'}>Profile</Link></li>
            <li><Link to={'itinerary'}>Itinerary</Link></li>
            <li><Link to={'budget'}>Budget</Link></li>
        </div>
    );
}
const LogAndSign = () => {
    return (
        <div>
            <li className='hvr-grow'><Link to={'login'} className="border">Login</Link></li>
            <li className='hvr-grow'><Link to={'signup'} className="border">Signup</Link></li>
        </div>
    );
}

export default PrivateRoute;