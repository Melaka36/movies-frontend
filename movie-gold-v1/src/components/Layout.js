import { Outlet } from "react-router-dom";

import React from 'react'

const Layout = () => {
  return (
    // <main> is used to wrap the main content of each page
    <main>
        <Outlet/>
    </main>
  )
}

export default Layout