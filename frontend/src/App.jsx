import { useEffect, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import { UserDataContext } from './context/UserContext';

function App() {
  const { setUser, setLoading } = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      
      try {
        const response = await fetch('http://localhost:4000/api/users/profile', {
          method: 'GET',
          credentials: 'include', // Include cookies in the request
          headers: {
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
        });
  
        if (response.ok) {
          const data = await response.json();

          setUser(data); // Update user context
        } else {
          const errorData = await response.json();
          console.error('Failed to fetch user profile:', errorData);
          setUser(null); // Clear user context
          localStorage.removeItem('token'); // Clear invalid token
          navigate('/LoginForUser'); // Redirect to login page
        }
      } catch (error) {
        console.error('Error checking token:', error);
        setUser(null); // Clear user context
        localStorage.removeItem('token'); // Clear invalid token
        navigate('/LoginForUser'); // Redirect to login page
      } finally {
        setLoading(false); // Ensure loading is set to false after the check
      }
    };
  
    checkToken();
  }, [navigate, setUser, setLoading]);

  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
