import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import  AuthContext  from './AuthContext'; // Update the import statement to include the specific export from AuthContext

const useRedirectAuthUser = () => {
  const navigate = useNavigate();
  const { username } = useContext(AuthContext);

  useEffect(() => {
    if (username) {
      navigate('/');
    }
  }, [username, navigate]);
};

export default useRedirectAuthUser;