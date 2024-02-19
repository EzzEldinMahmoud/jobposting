import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import  Home  from './pages/Home'
import JobsPage from './pages/JobsPage'
import Navbar from './pages/components/Navbar'
import Register from './pages/components/Register';
import Login from "./pages/components/Login";
import ProfilePage from './pages/ProfilePage';
import CreateJob from './pages/CreateJob';
import Footer from './pages/components/Footer';



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home /> <Footer />
      </>
    ),
  },
  {
    path: "/jobs",
    element: (
      <>
        <Navbar /> <JobsPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Navbar /> <ProfilePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/create",
    element: (
      <>
        <Navbar /> <CreateJob />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar /> <Login />
        <Footer />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar /> <Register />
        <Footer />
      </>
    ),
  },
  {
    path: "/jobs/:jobid",
    element: (
      <>
        <Navbar /> <JobsPage />
        <Footer />
      </>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
