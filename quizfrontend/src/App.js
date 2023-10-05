import './App.css';
/*importing routes */
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
/*importing components*/
import Login from './components/login/Login.js';
import Quiz  from './components/questions/Questions.js'
import Result from './components/result/Result.js';
import Signup from './components/signup/Signup.js';
import Instructions from './components/Instructions/Instructions';
import Rootlayout from './components/rootlayout/Rootlayout'
import Home from './components/home/home.js'
import Resetpassword from './components/resetpassword/Resetpassword.js';
import { useState } from 'react';
import { Navigate } from "react-router-dom";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //create routerobj of browser
  const routeObj=createBrowserRouter([
    //routing details
    {
      path:"/",
      element:<Rootlayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        }
      ]
      
    },
    {
      path:'/login',
      element:<Login flag={setIsAuthenticated}/>
    },
    {
      path:"/quiz",
      element:<Quiz/>
    },
    {
      path:"/result",
      element:isAuthenticated ? <Result /> : <Navigate to="/login" />
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/instructions",
      element:isAuthenticated ? <Instructions /> : <Navigate to="/login" />
    },
    {
      path:"/resetpassword",
      element:<Resetpassword/>
    }
  ])
  return (
    <div className="App">
      {/*Provide route to application */}
      <RouterProvider router={routeObj}/> 
    </div>
  );
}

export default App;
