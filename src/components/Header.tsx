// // // // // // // components/Navbar.js
// // // // // // "use client";
// // // // // // import { useState } from "react";
// // // // // // import Link from "next/link";
// // // // // // import Logo from "../public/Logo.png";
// // // // // // import Image from "next/image";
// // // // // // import Cart from "../public/cart.png";
// // // // // // import User from "../public/user.png";
// // // // // // import Search from "../public/search.png";
// // // // // // import { FaHamburger } from "react-icons/fa";

// // // // // // const Navbar = () => {
// // // // // //   const [isOpen, setIsOpen] = useState(false);

// // // // // //   const toggleMenu = () => {
// // // // // //     setIsOpen(!isOpen);
// // // // // //   };

// // // // // //   return (

// // // // // //       <nav className="flex items-center justify-between p-4  bg-transparent text-emerald-900 ">
// // // // // //         <div className="text-2xl font-bold ">
// // // // // //           <Link href="/">
// // // // // //             <Image src={Logo} alt="Logo" className="absolute top-4 pl-20" />
// // // // // //           </Link>
// // // // // //         </div>

// // // // // //         <div className="hidden md:flex space-x-5 ">
// // // // // //           <Link href="/">Home</Link>
// // // // // //           <Link href="/about">About</Link>
// // // // // //           <Link href="/products">Products</Link>
// // // // // //           <Link href="/categories">Catergories</Link>
// // // // // //           <Link href="/contact">Contact</Link>
// // // // // //         </div>

// // // // // //         <div className="flex items-center space-x-4 pr-20">
// // // // // //           <Link href="#" className="hidden md:block">
// // // // // //             <Image src={Search} alt="Search" className="w-6 h-6" />
// // // // // //           </Link>
// // // // // //           <Link href="#" className="hidden md:block">
// // // // // //             <Image src={User} alt="User" className="w-6 h-6" />
// // // // // //           </Link>
// // // // // //           <Link href="#" className="hidden md:block">
// // // // // //             <Image src={Cart} alt="Cart" className="w-6 h-6" />
// // // // // //           </Link>

// // // // // //           <button onClick={toggleMenu} className="md:hidden focus:outline-none">
// // // // // //           <FaHamburger/>
// // // // // //         </button>
// // // // // //         </div>

// // // // // //         {isOpen && (
// // // // // //           <div className="absolute top-16  right-0  p-4 md:hidden">
// // // // // //             <Link href="/" className="block py-2">
// // // // // //               Home
// // // // // //             </Link>
// // // // // //             <Link href="/about" className="block py-2">
// // // // // //               About
// // // // // //             </Link>
// // // // // //             <Link href="/products" className="block py-2">
// // // // // //               Products
// // // // // //             </Link>
// // // // // //             <Link href="/categories" className="block py-2">
// // // // // //               Categories
// // // // // //             </Link>
// // // // // //             <Link href="/contact" className="block py-2">
// // // // // //               Contact
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </nav>

// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;
// // // // // "use client";
// // // // // import { useState } from "react";
// // // // // import Link from "next/link";
// // // // // import Logo from "../public/Logo.png";
// // // // // import Image from "next/image";
// // // // // import Cart from "../public/cart.png";
// // // // // import User from "../public/user.png";
// // // // // import Search from "../public/search.png";
// // // // // import { FaHamburger } from "react-icons/fa";

// // // // // const Navbar = () => {
// // // // //   const [isOpen, setIsOpen] = useState(false);

// // // // //   const toggleMenu = () => {
// // // // //     setIsOpen((prev) => !prev);
// // // // //   };

// // // // //   return (
// // // // //     <nav className="flex items-center justify-between p-4 bg-transparent text-emerald-900 relative">
// // // // //       <div className="text-2xl font-bold">
// // // // //         <Link href="/">
// // // // //           <Image src={Logo} alt="Logo" className="absolute top-4 pl-20" />
// // // // //         </Link>
// // // // //       </div>

// // // // //       <div className="hidden md:flex space-x-5">
// // // // //         <Link href="/">Home</Link>
// // // // //         <Link href="/about">About</Link>
// // // // //         <Link href="/products">Products</Link>
// // // // //         <Link href="/categories">Categories</Link>
// // // // //         <Link href="/contact">Contact</Link>
// // // // //       </div>

// // // // //       <div className="flex items-center space-x-4 pr-20">
// // // // //         <Link href="#" className="hidden md:block">
// // // // //           <Image src={Search} alt="Search" className="w-6 h-6" />
// // // // //         </Link>
// // // // //         <Link href="#" className="hidden md:block">
// // // // //           <Image src={User} alt="User" className="w-6 h-6" />
// // // // //         </Link>
// // // // //         <Link href="#" className="hidden md:block">
// // // // //           <Image src={Cart} alt="Cart" className="w-6 h-6" />
// // // // //         </Link>

// // // // //         <button onClick={toggleMenu} className="md:hidden focus:outline-none">
// // // // //           <FaHamburger />
// // // // //         </button>
// // // // //       </div>

// // // // //       {isOpen && (
// // // // //         <div className="absolute top-16 right-0 bg-white shadow-lg p-4 md:hidden z-10">
// // // // //           <Link href="/" className="block py-2">
// // // // //             Home
// // // // //           </Link>
// // // // //           <Link href="/about" className="block py-2">
// // // // //             About
// // // // //           </Link>
// // // // //           <Link href="/products" className="block py-2">
// // // // //             Products
// // // // //           </Link>
// // // // //           <Link href="/categories" className="block py-2">
// // // // //             Categories
// // // // //           </Link>
// // // // //           <Link href="/contact" className="block py-2">
// // // // //             Contact
// // // // //           </Link>
// // // // //         </div>
// // // // //       )}
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar;

// // // // "use client";
// // // // import { useState } from "react";
// // // // import Link from "next/link";
// // // // import Logo from "../public/Logo.png";
// // // // import Image from "next/image";
// // // // import Cart from "../public/cart.png";
// // // // import User from "../public/user.png";
// // // // import Search from "../public/search.png";
// // // // import { FaHamburger } from "react-icons/fa";

// // // // const Navbar = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   const toggleMenu = () => {
// // // //     setIsOpen((prev) => !prev);
// // // //   };

// // // //   const handleLinkClick = () => {
// // // //     setIsOpen(false); // Close the menu when a link is clicked
// // // //   };

// // // //   return (
// // // //     <nav className="flex items-center justify-between p-4 bg-transparent text-emerald-900 relative">
// // // //       <div className="text-2xl font-bold">
// // // //         <Link href="/">
// // // //           <Image src={Logo} alt="Logo" className="absolute top-4 pl-20" />
// // // //         </Link>
// // // //       </div>

// // // //       <div className="hidden md:flex space-x-5">
// // // //         <Link href="/">Home</Link>
// // // //         <Link href="/about">About</Link>
// // // //         <Link href="/products">Products</Link>
// // // //         <Link href="/categories">Categories</Link>
// // // //         <Link href="/contact">Contact</Link>
// // // //       </div>

// // // //       <div className="flex items-center space-x-4 pr-20">
// // // //         <Link href="#" className="hidden md:block">
// // // //           <Image src={Search} alt="Search" className="w-6 h-6" />
// // // //         </Link>
// // // //         <Link href="#" className="hidden md:block">
// // // //           <Image src={User} alt="User" className="w-6 h-6" />
// // // //         </Link>
// // // //         <Link href="#" className="hidden md:block">
// // // //           <Image src={Cart} alt="Cart" className="w-6 h-6" />
// // // //         </Link>

// // // //         <button onClick={toggleMenu} className="md:hidden focus:outline-none">
// // // //           <FaHamburger />
// // // //         </button>
// // // //       </div>

// // // //       {isOpen && (
// // // //         <div className="absolute top-16 right-0 bg-white shadow-lg p-4 md:hidden z-10">
// // // //           <Link href="/" className="block py-2" onClick={handleLinkClick}>
// // // //             Home
// // // //           </Link>
// // // //           <Link href="/about" className="block py-2" onClick={handleLinkClick}>
// // // //             About
// // // //           </Link>
// // // //           <Link href="/products" className="block py-2" onClick={handleLinkClick}>
// // // //             Products
// // // //           </Link>
// // // //           <Link href="/categories" className="block py-2" onClick={handleLinkClick}>
// // // //             Categories
// // // //           </Link>
// // // //           <Link href="/contact" className="block py-2" onClick={handleLinkClick}>
// // // //             Contact
// // // //           </Link>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;

// // "use client";
// // import { useState } from "react";
// // import Link from "next/link";
// //  // Import if you are using a logo image
// // import { FaHamburger } from "react-icons/fa";
// // //import Logo from "../public/Logo.png";
// //  import Image from "next/image";
// // import Cart from "/public/cart.png";
// //  import User from "/public/user.png";
// //  import Search from "/public/search.png"; // Import hamburger icon

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsOpen((prev) => !prev);
// //   };

// //   return (
// //     <nav className="flex items-center justify-between p-4 bg-white shadow-md">
// //       <div className="text-2xl font-bold">
// //         <Link href="/">
// //           {/* Replace with your logo */}
// //           <span className="text-emerald-900">INWOOD</span>
// //         </Link>
// //       </div>

// //       <div className="hidden md:flex space-x-5">
// //         <Link href="/">Home</Link>
// //         <Link href="/about">About</Link>
// //         <Link href="/products">Products</Link>
// //         <Link href="/categories">Categories</Link>
// //         <Link href="/contact">Contact</Link>
// //       </div>

// //       <div className="flex items-center space-x-4 pr-20">
// //          <Link href="#" className="hidden md:block">
// //            <Image src={Search} alt="Search" className="w-6 h-6" />
// //                     </Link>
// //          <Link href="#" className="hidden md:block">
// //            <Image src={User} alt="User" className="w-6 h-6" />
// //          </Link>
// //          <Link href="#" className="hidden md:block">
// //           <Image src={Cart} alt="Cart" className="w-6 h-6" />
// //          </Link>
// //          </div>

// //       <button onClick={toggleMenu} className="md:hidden">
// //         <FaHamburger className="text-2xl" />
// //       </button>

// //       {isOpen && (
// //         <div className="absolute top-16 right-0 bg-white shadow-lg p-4 md:hidden z-10">
// //           <Link href="/" className="block py-2" onClick={() => setIsOpen(true)}>
// //             Home
// //           </Link>
// //           <Link href="/about" className="block py-2" onClick={() => setIsOpen(true)}>
// //             About
// //           </Link>
// //           <Link href="/products" className="block py-2" onClick={() => setIsOpen(false)}>
// //             Products
// //           </Link>
// //           <Link href="/categories" className="block py-2" onClick={() => setIsOpen(false)}>
// //             Categories
// //           </Link>
// //           <Link href="/contact" className="block py-2" onClick={() => setIsOpen(false)}>
// //             Contact
// //           </Link>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;


// //updated
// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { FaHamburger } from "react-icons/fa";
// import Image from "next/image";
// import Cart from "/public/cart.png";
// import User from "/public/user.png";
// import Search from "/public/search.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleLinkClick = () => {
//     setIsOpen(false); 
//   };

//   return (
//     <header className="absolute top-0 left-0 w-full z-20 bg-transparent">
//     <nav className="flex justify-between items-center p-4 font-serif">
//       <div className="text-2xl font-bold">
//         <Link href="/">
//           <span className="text-emerald-900">INWOOD</span>
//         </Link>
//       </div>

//       <div className="hidden md:flex space-x-5">
//         <Link href="/" onClick={handleLinkClick}>Home</Link>
//         <Link href="/about" onClick={handleLinkClick}>About</Link>
//         <Link href="/products" onClick={handleLinkClick}>Products</Link>
//         <Link href="/categories" onClick={handleLinkClick}>Categories</Link>
//         <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
//       </div>

//       <div className="flex items-center space-x-4 pr-20">
//         <Link href="#" className="hidden md:block">
//           <Image src={Search} alt="Search" className="w-6 h-6" />
//         </Link>
//         <Link href="#" className="hidden md:block">
//           <Image src={User} alt="User" className="w-6 h-6" />
//         </Link>
//         <Link href="#" className="hidden md:block">
//           <Image src={Cart} alt="Cart" className="w-6 h-6" />
//         </Link>
//       </div>

//       <button onClick={toggleMenu} className="md:hidden">
//         <FaHamburger className="text-2xl" />
        
//       </button>
//   {isOpen && (
//         <div className="absolute top-16 right-0 bg-white shadow-lg p-4 md:hidden z-10">
//           <Link href="/" className="block py-2" onClick={handleLinkClick}>
//             Home
//           </Link>
//           <Link href="/about" className="block py-2" onClick={handleLinkClick}>
//             About
//           </Link>
//           <Link href="/products" className="block py-2" onClick={handleLinkClick}>
//             Products
//           </Link>
//           <Link href="/categories" className="block py-2" onClick={handleLinkClick}>
//             Categories
//           </Link>
//           <Link href="/contact" className="block py-2" onClick={handleLinkClick}>
//             Contact
//           </Link>
//         </div>
//       )}

      
//     </nav>
//     </header>
//   );
// };

// export default Navbar;

"use client";
import { useState } from "react";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import Image from "next/image";
import Cart from "/public/cart.png";
import User from "/public/user.png";
import Search from "/public/search.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <nav className="flex justify-between items-center p-4 font-serif">
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={100} height={100}/>
          </Link>
        </div>

        <div className="hidden md:flex space-x-5">
          <Link href="/" onClick={handleLinkClick}>Home</Link>
          <Link href="/about" onClick={handleLinkClick}>About</Link>
          <Link href="/products" onClick={handleLinkClick}>Products</Link>
          <Link href="/categories" onClick={handleLinkClick}>Categories</Link>
          <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
        </div>

        <div className="flex items-center space-x-4 pr-20">
          <Link href="#" className="hidden md:block">
            <Image src={Search} alt="Search" className="w-6 h-6" />
          </Link>
          <Link href="#" className="hidden md:block">
            <Image src={User} alt="User" className="w-6 h-6" />
          </Link>
          <Link href="#" className="hidden md:block">
            <Image src={Cart} alt="Cart" className="w-6 h-6" />
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden">
          <FaHamburger className="text-2xl" />
        </button>
      </nav>

      {isOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-lg p-4 md:hidden z-10">
          <Link href="/" className="block py-2" onClick={handleLinkClick}>
            Home
          </Link>
          <Link href="/about" className="block py-2" onClick={handleLinkClick}>
            About
          </Link>
          <Link href="/products" className="block py-2" onClick={handleLinkClick}>
            Products
          </Link>
          <Link href="/categories" className="block py-2" onClick={handleLinkClick}>
            Categories
          </Link>
          <Link href="/contact" className="block py-2" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;







