"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "../utlis/cn";
import { Link } from "react-router-dom";

export function NavbarDemo() {
  return (
    <div className=" relative w-full flex items-center justify-center">
      <Navbar className="top-2 " />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
            <Link className='mx-4' to='/'>
              <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
            </Link>
           <Link className='mx-4' to='/about'>
              <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
           </Link>
           <Link className='mx-4' to='/gallery'>
              <MenuItem setActive={setActive} active={active} item="Gallery"></MenuItem>
           </Link>
           <Link className='mx-4' to='/contact'>
              <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
           </Link>
          

      </Menu>
    </div>
  );
}
