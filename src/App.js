import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Component/LoginPage";
import SignUp from "./Component/SignUp";
import Home from "./Component/Home";
import DocotorConsultant from "./Component/DocotorConsultant";
import HealthCarePage from "./Component/HealthCarePage";
import NearByShop from "./Component/NearByShop";
import Meditation from "./Component/Meditation";
import HealthyDiet from "./Component/HealthyDiet";

function App() {

    const router = createBrowserRouter([
      {
        path: "/",
        children: [
          {
            index: true,
            element: <SignUp />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
        ],
      },
      {
        path: "/home",
        element: <HealthCarePage />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "DoctorConsultant",
            element: <DocotorConsultant />,
          },
          {
            path: "NearByShop",
            element: <NearByShop />,
          },
          {
            path: "Meditation",
            element: <Meditation />,
          },
          {
            path:"HealthyDiet",
            element:<HealthyDiet/>
          }
        ],
      },
    ]);

  return(
     <>

        <RouterProvider router={router}/>

     </>
  ) 
}

export default App;
