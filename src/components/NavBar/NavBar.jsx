import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigation = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Blog", url: "/blog" },
  { id: 5, name: "Contact", url: "/contact" },
];

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = navigation.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))

  return (
    <nav className="flex mx-4 my-5 justify-between">

      <span className="flex" onClick={()=>setOpen(!open)}>
        {open? <X className="md:hidden"></X> : <Menu className="md:hidden"></Menu>}

        <ul className={`md:hidden absolute ${open? 'top-10':'-top-40'} duration-1000 bg-blue-200 px-2.5 rounded-md`}>
          {links}
        </ul>
        
        <h3 className="ml-2">My Navbar</h3>
      </span>

      <ul className="hidden md:flex">
        {links}
      </ul>
      {/* <ul className='flex gap-3'>
                {
                    navigation.map(route => <li key={route.id} ><a href={route.url}>{route.name}</a></li>)
                }
            </ul> */}
      {/* <ul className='flex'>
                <li className='mr-4'><a href="/"></a>Home</li>
                <li className='mr-4'><a href="/about"></a>About</li>
                <li className='mr-4'><a href="/blogs"></a>Blogs</li>
            </ul> */}
      <button>Sign In</button>
    </nav>
  );
};

export default NavBar;
