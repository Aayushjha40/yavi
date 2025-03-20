import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import LoginForUser from '../pages/Login/LoginForUser';
import SignupForUser from '../pages/Login/SignupForUser';
import LoginForAgency from '../pages/Login/LoginForAgency';
import LoginForAdmin from '../pages/Login/LoginForAdmin';
import SignupForAdmin from '../pages/Login/SignupForAdmin';
import UserLogout from '../pages/Login/UserLogout';
import Bus from '../pages/SubNavbar/Bus';
import Hotel from '../pages/SubNavbar/Hotel';
import Flight from '../pages/SubNavbar/Flight';
import Train from '../pages/SubNavbar/Train';
import EcoFriendlyZone from '../pages/SubNavbar/EcoFriendlyZone';
import Card from '../pages/Card';
import MostBooking from '../pages/MostBooking';
import Trending from '../pages/Trending';
import ExistingTrip from '../pages/ExistingTrip';
import Coins from '../pages/Coins';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'loginForUser', element: <LoginForUser /> },
      { path: 'signupForUser', element: <SignupForUser /> },
      { path: 'home', element: <Home /> },
      { path: 'loginForAgency', element: <LoginForAgency /> },
      { path: 'loginForAdmin', element: <LoginForAdmin /> },
      { path: 'signupForAdmin', element: <SignupForAdmin /> },
      { path: 'logout', element: <UserLogout /> },
      { path: 'bus', element: <Bus /> },
      { path: 'hotel', element: <Hotel /> },
      { path: 'train', element: <Train /> },
      { path: 'coins', element: <Coins /> },
      { path: 'flight', element: <Flight /> },
      { path: 'ecoFriendlyZone', element: <EcoFriendlyZone /> },
      { path: 'card/:id', element: <Card /> },
      { path: 'most-booking', element: <MostBooking /> },
      { path: 'trending', element: <Trending /> },
      { path: 'existing-trip', element: <ExistingTrip /> },
    ],
  },
]);

export default router;