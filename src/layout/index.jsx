import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
        <nav className="fixed top-0 w-full z-10 bg-white shadow-md">
            <Navbar />

        </nav>
        <div className="flex flex-1 mt-14">
        <aside className="hidden md:block w-[20%]">
            <Sidebar />

        </aside>
        <main className="w-full md:w-[80%]">
            <Outlet />
        </main>
        </div>
    </div>
  )
}

export default Layout;