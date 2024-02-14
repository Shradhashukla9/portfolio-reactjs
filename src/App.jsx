import Dashboard from "./pages/Dashboard/Dashboard"
import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Support from "./pages/Support/Support";
import Transaction from "./pages/Transaction/Transaction";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Dashboard/>,
  },
  {
    path: "/Transaction",
    element:<Transaction/>,
  },
  {
    path: "/Support",
    element:<Support/>,
  },
]);
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={router} />
      
    </>
  )
}

export default App
