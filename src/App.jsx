import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./Components/Layout/AppLayout"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Contact, contactData } from "./Pages/Contact"
import { Country } from "./Pages/Country"
import { ErrorPage } from "./Pages/ErrorPage"
import { getData, getInd } from "./api/CountryApi"
import { IndividualCountryDetails } from "./Pages/IndividualCountryDetails"

export const App = ()=>{

  const router = createBrowserRouter([

    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        { 
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/country",
          element:<Country/>,
          loader:getData,
        },
        {
          path:'/country/:name',
          element:<IndividualCountryDetails/>,
          loader:getInd,
        },
        {
          path:"/contact",
          element:<Contact/>,
          action:contactData,
        },
      ]

    }

  ])

  return <RouterProvider router={router}> </RouterProvider>

}