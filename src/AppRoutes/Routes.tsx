import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Portfolio from '../Pages/Portfolio'
import Service from '../Pages/Service'


export default function Routes() {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<Navbar/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                 {
                    path:'/about',
                    element:<About/>
                },
                 {
                    path:'/service',
                    element:<Service/>
                },
                 {
                    path:'/portfolio',
                    element:<Portfolio/>
                },
                 {
                  path:'/contact',
                    element:<Contact/>
                },

            ]
        }
    ])
  
    return (
    <RouterProvider router={router}/>
  )
}
