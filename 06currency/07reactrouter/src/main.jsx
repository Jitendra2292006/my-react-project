import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import React from 'react'
import User from "./components/User/User.jsx";
import Github,{githubinfolouder} from "./components/Github/Github.jsx"; 
// const router=createBrowserRouter([
//   { path:'/',
//     element:<Layout/>,
//     children:[
//      {path:"",element:<Home/>},
//      {path:"about",element:<About/>},
//      {path:"Contact",element:<Contact/>}

//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      // id notedown is importent
      <Route path='User/:id' element={<User />} />
      <Route 
      loader={githubinfolouder}
      path='github'
       element={<Github />} />
    </Route>,
  ),
);
createRoot(document.getElementById("root")).render(
  // here we are  create a router
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
// jitu  