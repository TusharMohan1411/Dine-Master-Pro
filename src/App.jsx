import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import RootLayout from "./components/Navbar/RootLayout";
import Dashboard from './pages/Dashboard/Dashboard';
import Bills from './pages/Bills/BIlls';
import OurProducts from './pages/Our Products/OurProducts';
import Employees from './pages/Employees/Employees';
import Weather from './pages/Weather/Weather';
import AddEmployee from "./pages/Employees/AddEmployee";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'bills', element: <Bills /> },
        { path: 'ourProducts', element: <OurProducts /> },
        {
          path: 'employees',
          children: [
            { index: true, element: <Employees /> },
            { path: 'addEmployee', element: <AddEmployee /> },
          ]
        },
        { path: 'weather', element: <Weather /> },

      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
