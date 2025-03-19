import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import LoginForUser from '../pages/Login/LoginForUser'
import LoginForAgency from '../pages/Login/LoginForAgency'
import LoginForAdmin from '../pages/Login/LoginForAdmin'
import Bus from '../pages/SubNavbar/Bus'
import Hotel from '../pages/SubNavbar/Hotel'
import Flight from '../pages/SubNavbar/Flight'
import Train from '../pages/SubNavbar/Train'
import EcoFriendlyZone from '../pages/SubNavbar/EcoFriendlyZone'
import Card from '../pages/Card';
import Dashboard from '../pages/dashboard/userd';
import AdminDashboard from '../pages/dashboard/Admind'


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {path : "", element : <Home/>},
            {path : "loginForUser", element : <LoginForUser/>},
            {path : "loginForAgency", element : <LoginForAgency/>},
            {path : "loginForAdmin", element : <LoginForAdmin/>},
            {path : "bus", element : <Bus/>},
            {path : "hotel", element : <Hotel/>},
            {path : "train", element : <Train/>},
            {path : "flight", element : <Flight/>},
            {path : "ecoFriendlyZone", element : <EcoFriendlyZone/>},
            {path : "card", element : <Card/>},
            { path: "dashboard", element: <Dashboard /> },
            {path : "admindashboard", element : <AdminDashboard/>}
        ]
    }
])

export default router