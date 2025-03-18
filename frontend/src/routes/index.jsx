import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import LoginForUser from '../pages/Login/LoginForUser';
import SignupForUser from '../pages/Login/SignupForUser'; // Updated import
import LoginForAgency from '../pages/Login/LoginForAgency';
import LoginForAdmin from '../pages/Login/LoginForAdmin';
import SignupForAdmin from '../pages/Login/SignupForAdmin';
import Bus from '../pages/SubNavbar/Bus';
import Hotel from '../pages/SubNavbar/Hotel';
import Flight from '../pages/SubNavbar/Flight';
import Train from '../pages/SubNavbar/Train';
import EcoFriendlyZone from '../pages/SubNavbar/EcoFriendlyZone';
import Card from '../pages/Card';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'loginForUser', element: <LoginForUser /> }, 
      { path: 'signupForUser', element: <SignupForUser /> }, // Updated route path
      { path: 'home', element: <Home /> },
      { path: 'loginForAgency', element: <LoginForAgency /> },
      { path: 'loginForAdmin', element: <LoginForAdmin /> },
      { path: 'signupForAdmin', element: <SignupForAdmin /> },
      { path: 'bus', element: <Bus /> },
      { path: 'hotel', element: <Hotel /> },
      { path: 'train', element: <Train /> },
      { path: 'flight', element: <Flight /> },
      { path: 'ecoFriendlyZone', element: <EcoFriendlyZone /> },
      { path: 'card', element: <Card /> },
    ],
  },
]);

export default router;