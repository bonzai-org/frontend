import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom';
import './App.css';
import { AuthProvider } from './AuthContext';
import Home from './components/home/Home';
import BonsaiUpload from './components/bonsaiUpload/BonsaiUpload';
import LoginForm from './components/loginForm/LoginForm';
import SignUpForm from './components/signupForm/SignUpForm';
import NavBar from './components/navBar/NavBar';
import BonsaiPage from './components/bonsaiPage/BonsaiPage';
import About from './components/about/About';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary'; // Import the ErrorBoundary

const router = createBrowserRouter([{ path: '*', element: <Root /> }]);

export default function App() {
  return (
    <AuthProvider>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
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
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/bonsai/:id" element={<BonsaiPage />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}
