import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import charit from "../assets/charity.jpg";
import gover from "../assets/Emblem_of_Saudi_Arabia_(2).svg.png";
import logo from "../assets/logo.jpg";
import logo1 from "../assets/baseLogo.png";
import logo2 from "../assets/AseerLogo.png";
import { useSelector } from "react-redux"; // Import useSelector hook to access Redux state
import { Link } from "react-router-dom";
import userImage from "../assets/Ellipse 2.png";
import Bell from "../assets/Bell.png";

export default function Navheader() {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the visibility of the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const { role, token, email, displayName } = useSelector(
    (state) => state.auth
  ); // Access user role from
  const logIn = false;
  let profileImage;

  email
    ? (profileImage = role === 1 ? gover : charit)
    : (profileImage = userImage);

  return (
    <nav className="bg-white border-b-[3px]  border-[#0000004D] py-2 w-full">
      <div className="flex flex-wrap items-center justify-between  px-[3%]  mx-auto ">
        <div className="flex flex-row gap-3  lg:-order-1">
          <img
            src={logo1}
            className="w-15 h-15 max-md:w-20 max-md:h-20  lg:w-[100px] mr-5 sm:h-23"
            alt="Landwind Logo"
          />
          <img
            src={logo2}
            className="w-15 h-15 max-md:w-22 max-md:h-20 lg:w-[150px] mr-3 sm:h-23"
            alt="Landwind Logo"
          />
        </div>
        <div className="flex flex-row-reverse">
          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span />
            </div>

            <button className="mx-6">
              <img src={Bell} />
            </button>
            <p className="max-lg:hidden text-black text-[24px] font-[700] mx-1">
              <Link to="/first">تسجيل الدخول</Link>
            </p>

            <Menu as="div" className="relative ml-3">
              <Menu.Button>
                <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img className="hidden lg:block lg:h-15 lg:w-12 " src={profileImage} alt="" />
                </div>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-[1000] mt-2 w-48 origin-top-right rounded-md bg-[#c0bc9d] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={"/profilePage"}
                        className={`
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-900 no-underline"`}
                      >
                        Your Profile
                      </Link>
                    )}
                  </Menu.Item>

                  {/* <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-[#3f4934] no-underline"
                        `}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item> */}

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/signin"
                        className={`
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-900 no-underline"`}
                      >
                        Sign out
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
            <ButtonT toggleMobileMenu={toggleMobileMenu} />
          </div>

          <div
            className={`${
              isMobileMenuOpen ? "" : "hidden"
            } items-center justify-between w-full lg:flex lg:w-auto lg:order-2`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col-reverse mt-4  lg:flex-row lg:space-x-8 lg:mt-0 text-[24px] font-[600]">
              <li
                className={`p-1 rounded my-2 lg:my-0 lg:px-4 hover:text-black ${
                  window.location.pathname === "/complaint"
                    ? "text-[#a39776] underline underline-offset-[9px] decoration-[#a39776] decoration-4 "
                    : "text-black "
                }`}
              >
                <Link
                  to="/complaint"
                  className="block py-2 pl-3 pr-4 text-center  rounded lg:bg-transparent  lg:p-0 "
                >
                  الشكاوى
                </Link>
              </li>
              <li
                className={`text-black p-1 rounded my-2 lg:my-0 lg:px-4 hover:text-black ${
                  window.location.pathname === "/map1"
                    ? "text-[#a39776] underline underline-offset-[9px] decoration-[#a39776] decoration-4 "
                    : "text-black "
                }`}
              >
                <Link
                  to="/map1"
                  className="block py-2 pl-3 pr-4 text-center   rounded lg:bg-transparent  lg:p-0 "
                >
                  الخريطة التفاعلية
                </Link>
              </li>
              <li
                className={`text-black p-1 rounded  my-2 lg:my-0 lg:px-4 hover:text-black ${
                  window.location.pathname === "/"
                    ? "text-[#a39776] underline underline-offset-[9px] decoration-[#a39776] decoration-4 "
                    : "text-black "
                }`}
              >
                <Link
                  to="/"
                  className="block  text-center py-2 pl-3 pr-4  border-b border-gray-100 lg:hover:bg-transparent lg:border-0  lg:p-0 "
                >
                  الرئيسية
                </Link>
              </li>

              <li
                className={`text-black p-1 rounded  my-2 lg:my-0 lg:px-4 hover:text-black lg:hidden  `}
              >
                <p className="text-black text-[24px] font-[700] mx-1">
                  <Link to="/first">تسجيل الدخول</Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

const ButtonT = ({ toggleMobileMenu }) => {
  return (
    <button
      onClick={toggleMobileMenu}
      type="button"
      className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 "
      aria-controls="mobile-menu-2"
      aria-expanded="true"
    >
      <span className="sr-only">Open main menu</span>
      {/* Conditional rendering based on the state of isMobileMenuOpen */}

      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};
