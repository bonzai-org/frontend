import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom';
import './App.css';

import Home from './components/home/Home';
import BonsaiUpload from './components/bonsaiUpload/BonsaiUpload';
import AuthForm from './components/authForm/AuthForm';
import NavBar from './components/navBar/NavBar';

const router = createBrowserRouter([{ path: '*', element: <Root /> }]);

export default function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<BonsaiUpload />} />
      <Route path="/login" element={<AuthForm />} />
    </Routes>
  );
}
