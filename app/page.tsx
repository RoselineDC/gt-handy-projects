"use client";

import React, { useState } from "react";
// Update the import path below if your Navbar component is located elsewhere
import UpNavBar from "../componets/Navbar";
import Hero from "../componets/Hero";


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
      <div className="flex-1 flex flex-col">
        <UpNavBar toggleSidebar={() => setShowSidebar(!showSidebar)} />
       
      </div>
      <div className="flex-1 flex overflow-hidden">
        
      <div className="flex  overflow-hidden">
        {showSidebar && (
          <Sidebar>
            
            <SidebarHeader>
              <div className="text-gray-400 font-small text-lg">Main Menu</div>
            </SidebarHeader>

            <SidebarBody>
              <SidebarItem
                label="Home"
              />
              <SidebarItem
                label="About Us"
              >                
              </SidebarItem>
              <SidebarItem
                label="Services"
                // icon={<BookType className="w-5 h-5" />}
              >
              </SidebarItem>
              <SidebarItem
                label="Portifolio"
                // icon={<SquarePen className="w-5 h-5" />}
              />
            </SidebarBody>
          </Sidebar>
        )}
      </div>
       <main className="flex-1 overflow-y-auto p-6 bg-white">
       <Hero />
         
        </main>
      </div>
    </>
  );
}