import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
// import { auth } from './lib/firebase';
import {
  getAuth,
} from 'firebase/auth';
function ExampleDashboard() {
  const navigate = useNavigate();
  const auth = getAuth();
  async function handleSignOut() {
    await signOut(auth);
    navigate('/');
  }

  return (
    <ProtectedRoute>
      <h1>Dashboard page</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </ProtectedRoute>
  );
}

export default ExampleDashboard;
