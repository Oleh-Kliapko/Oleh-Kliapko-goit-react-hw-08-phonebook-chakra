import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
import NavBar from './NavBar';
import NotFoundPage from 'pages/NotFoundPage';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const LogIn = lazy(() => import('pages/LogIn'));
const Register = lazy(() => import('pages/Register'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={5000} />
    </>
  );
};
