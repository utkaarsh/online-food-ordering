import { useContext, useState } from "react"
import logo from "../assets/res-logo2.png"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import UserContext from "../utils/userContext"
import { useSelector } from "react-redux";
 


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header=()=>{
  //subscribing the store using a selector
const cartItems = useSelector((store)=>store.cart.items);
console.log("Selectors",cartItems);
 
const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact Us', href: '/contact', current: false },
  { name: `Cart [${cartItems.length}]`, href: '/cart', current: false },
]
    const [logBtn,setLogBtn]=useState("Log in")
    const onlineStatus=useOnlineStatus();
    const data1=useContext(UserContext);
    console.log("Context API ->",data1);

    return(
        // <div className="header flex justify-between bg-yellow-200 m-4 p-4 shadow-lg ">
        //     <div className="img-logo">
        //     <img className="logo w-16" src={logo} alt="image" />
        //     <h1 className="header-text fle" >ONLINE MENU</h1>
        //     </div>
        //     <div className="nav-items hidden items-center sm:flex">
        //          <ul className="flex p-6">
        //             <li className="px-4" >{onlineStatus? "🟢":"🔴"}</li>
        //             <li>
        //                 <Link className="px-4 no-underline" to="/">Home</Link> </li>
        //             <li>
        //                 <Link className="px-4 no-underline" to="/about">About us</Link>
        //             </li>
        //             <li>
        //                 <Link className="px-4 no-underline" to="/contact">Contact us</Link>
        //             </li>
        //             <li className="px-4">Cart</li>
        //             <button className="login-btn" onClick={()=>{
        //                 setLogBtn("Log out")
        //                 if(logBtn=="Log out"){
        //                     setLogBtn("Log in")
        //                 }
        //             }}> <b>{logBtn}</b></button>
        //          </ul>
        //     </div>
        // </div>
        <Disclosure as="nav" className="bg-[#8a2be2] ">
        {({ open }) => (
          <>
            <div className="mx-auto  max-w-7xl px-2 py-4 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-14 w-auto items-center"
                      src={logo}
                      alt="Your Company"
                    />
                    <h1 className="text-white text-2xl font-bold mx-4">ONLINE MENU</h1>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current ? 'bg-red-900 text-yellow-200' : 'text-yellow-100 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                    type="button"
                    className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                   
                   {onlineStatus? "🟢":"🔴"}
                  </button>
                  
                  {/* <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button> */}
                  
  
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-10 w-10 border border-black rounded-full m-1"
                          src="https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png"
                          alt="default-user"
                        />
                        <h3 className=" text-center text-white items-center p-2 mx-1">Hi {data1.loggedInUser}</h3>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
  
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
   
        
    )
}

export default Header;