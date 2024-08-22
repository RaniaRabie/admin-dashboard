import React from 'react'
import ReactDOM from 'react-dom/client';

import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import Dashboard from './pages/dashboard/Dashboard';

import Faq from './pages/faq/FAQ';

import RoadMap from './pages/form/RoadMap';
import Courses from './pages/form/Courses';
import ManageCourses from './pages/form/ManageCourses';
import Form from './pages/form/Form';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Dashboard/>} />
      <Route path='roadmap' element={<RoadMap/>} />
      <Route path='courses' element={<Courses/>} />
      <Route path='manage courses' element={<ManageCourses/>} />
      <Route path='faq' element={<Faq/>} />
      <Route path='signup' element={<Form/>} />




    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
