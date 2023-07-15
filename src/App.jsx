import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Main from "./components/Main"
import About from './components/Forms';
import { BrowserRouter, Routes, Route, Link, useRoutes, Form } from "react-router-dom";
import Forms from "./components/Forms";
import Tables from "./components/Tables";
export default function App() {
  const routes = useRoutes([
    {
      path: '/home',
      element: <Main/>
    },
    {
      path: '/forms',
      element: <Forms/>
    },
    {
      path: '/table',
      element: <Tables/>
    }

  ]);
  return (
    <div className="flex">
      <div className="basis[0%] md:basis[15%] lg:basis-[15%] h-[100vh]">
        <Sidebar/>
      </div>
      <div className="basis[100%] md:basis[85%] lg:basis-[85%] h-[100vh] overflow-scroll">
        <Dashboard/>
        <div>
          <Main/>
         {routes}
        </div>
      </div>
    </div>
    
  )
}