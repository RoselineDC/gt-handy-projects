"use client";

import React, { useState } from "react";
// Update the import path below if your Navbar component is located elsewhere
import UpNavBar from "../componets/Navbar";
import Hero from "../componets/Hero";
import WhoWeAre from "../componets/About";
import About from "../componets/About";

import {
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarItem,
} from "../componets/Sidebar";
export default function Page() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      
       <main className="flex-1 overflow-y-auto p-6 bg-white">
          <UpNavBar toggleSidebar={() => setShowSidebar(!showSidebar)} />
       <Hero />
       <WhoWeAre />
       <About />
         
        </main>
      
    </>
  );
}