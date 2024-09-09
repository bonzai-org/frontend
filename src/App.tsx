import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom';
import './App.css';

import Home from './components/home/Home';
import Login from './components/authForm/login';
import Signup from './components/authForm/signup';
import BonsaiUpload from './components/bonsaiUpload/BonsaiUpload';
// import AuthForm from './components/authForm/AuthForm';
import NavBar from './components/navBar/NavBar';
import BonsaiPage from './components/bonsaiPage/BonsaiPage';
import About from './components/about/About';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary'; // Import the ErrorBoundary

const router = createBrowserRouter([{ path: '*', element: <Root /> }]);

export default function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

function Root() {
  return (
    <>
      <NavBar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/upload" element={<BonsaiUpload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bonsai/:id" element={<BonsaiPage />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}
