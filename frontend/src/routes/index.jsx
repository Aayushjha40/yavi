import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import LoginForUser from '../pages/Login/LoginForUser';
import SignupForUser from '../pages/Login/SignupForUser';
import LoginForAgency from '../pages/Login/LoginForAgency';
import SignupForAgency from '../pages/Login/SignupForAgency';
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
import Admin from '../pages/dashboard/Admind';
import User from '../pages/dashboard/Userd';
import Agency from '../pages/dashboard/Agencyd';

// Import sidebar components
import MyProfile from '../pages/user_panel/my_profile';
import MyBookings from '../pages/user_panel/my_bookings';
import Wishlist from '../pages/user_panel/wishlist';
import Rewards from '../pages/user_panel/rewards';
import EcoZone from '../pages/user_panel/eco_zone';
import Support from '../pages/user_panel/support';
import Settings from '../pages/user_panel/settings';

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
      { path: 'signupForAgency', element: <SignupForAgency /> },
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
      { path: 'admin', element: <Admin /> },
      { path: 'user', element: <User /> },
      { path: 'agency', element: <Agency /> },

      // Sidebar paths
      { path: 'userd/myprofile', element: <MyProfile /> },
      { path: 'userd/mybookings', element: <MyBookings /> },
      { path: 'userd/wishlist', element: <Wishlist /> },
      { path: 'userd/rewards', element: <Rewards /> },
      { path: 'userd/ecozone', element: <EcoZone /> },
      { path: 'userd/support', element: <Support /> },
      { path: 'userd/settings', element: <Settings /> },
    ],
  },
]);

export default router;