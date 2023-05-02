import {Outlet, Navigate, Link} from 'react-router-dom';
import './../navbar.css'

const PrivateRoute = () => {
    return (
        localStorage.getItem("token") ? <MenuBar/> : <LogAndSign/>
    )
}
const MenuBar =() => {
    return(
        <div>
            <li className='hvr-grow'><Link to={'vacation'} className="border">Vacation</Link></li>
            <li className='hvr-grow'><Link to={'profile'} className="border">Profile</Link></li>
            <li className='hvr-grow'><Link to={'itinerary'} className="border">Itinerary</Link></li>
            <li className='hvr-grow'><Link to={'budget'} className="border">Budget</Link></li>
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