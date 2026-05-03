import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import { Route } from 'react-router-dom'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// first way to create a router using createBrowserRouter and defining the routes as an array of objects. Each object represents a route and can have a path, an element to render, and children routes. In this example, we have a root route that renders the Layout component, and inside it, we have a child route for the home page that renders the Home component when the path is empty (i.e., "/"). We can add more child routes as needed.
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// second way to create a router using createBrowserRouter and defining the routes using JSX syntax. This approach is more concise and easier to read, especially when we have nested routes. In this example, we define the same routes as before, but we use JSX to specify the structure of the routes directly within the createBrowserRouter function.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element= {<Home />} />
      <Route path="about" element= {<About />} />
      <Route path="contact" element= {<Contact />}/>
      <Route path="user/:userid" element= {<User />} />
      <Route loader= {githubInfoLoader}
      path="github" 
      element= {<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
