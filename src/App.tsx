import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {Container, GlobalStyle} from "./globalStyle";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: 'register',
      element: <Register />
    }
  ])


  return (
    <>
    <GlobalStyle />
    <RouterProvider router={routes} />
    </>
  );
}

export default App;
