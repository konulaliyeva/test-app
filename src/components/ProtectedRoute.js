import { onAuthStateChanged } from 'firebase/auth';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';
import {useDispatch} from 'react-redux';
import { saveUser } from '../redux/login/slice';
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(saveUser(user.accessToken));

      if (!user) {
        dispatch(saveUser(null));
        navigate('/login');
      }
    });
  }, [auth, dispatch]);

  return children;
}

export default ProtectedRoute;
