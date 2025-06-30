import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets, categories } from "../assets/assets";
import { useAppContext } from "../context/useAppContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    searchQuery,
    setSearchQuery,
    getCartCount,
    axios,
  } = useAppContext();

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        toast.success(data.message);
        setUser(null);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 border-b border-gray-300 bg-white/90 fixed w-full top-0 z-50 transition-all shadow-md">
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img
          className="h-24 rounded hidden md:flex"
          src={assets.logo}
          alt="Logo"
        />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden md:max-lg:text-xs md:max-lg:gap-4 sm:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All Product</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <div className="md:max-lg:flex lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img
            src={assets.search_icon}
            alt="search"
            className="w-4 h-4 cursor-pointer"
          />
        </div>

        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img src={assets.nav_cart_icon} alt="cart" className="w-9 h-9" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary/60 w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-secondary transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="profile icon"
              className="w-10 cursor-pointer"
            />
            <ul className="hidden group-hover:block absolute top-9 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40 px-2">
              <li
                onClick={() => navigate("/my-orders")}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                My Orders
              </li>
              <li
                onClick={logout}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile View */}
      <div className="sm:hidden flex items-center justify-between w-full">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img className="h-20 rounded" src={assets.logo} alt="Logo" />
        </NavLink>
        {isSearchExpanded ? (
          <div className="flex items-center flex-grow ml-2 border border-gray-300 rounded-full px-2">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow py-1.5 bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            <button onClick={() => setIsSearchExpanded(false)}>
              <img src={assets.close_icon} alt="close" className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSearchExpanded(true)}>
              <img src={assets.search_icon} alt="search" className="w-4 h-4" />
            </button>
            <div
              onClick={() => navigate("/cart")}
              className="relative cursor-pointer"
            >
              <img src={assets.nav_cart_icon} alt="cart" className="w-9 h-9" />
              <button className="absolute -top-2 -right-3 text-xs text-white bg-primary/60 w-[18px] h-[18px] rounded-full">
                {getCartCount()}
              </button>
            </div>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="cursor-pointer"
            >
              <img src={assets.menu_icon} alt="menu icon" />
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-md py-6 flex-col items-start gap-8 px-5 text-xl md:hidden z-40 flex">
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>
            All Product
          </NavLink>
          {user && (
            <NavLink to="/my-orders" onClick={() => setOpen(false)}>
              My Orders
            </NavLink>
          )}
          <NavLink to="/booking" onClick={() => setOpen(false)}>
            Booking
          </NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>

          {/* Categories Dropdown */}
          <div className="w-full mt-4">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="w-full text-left text-lg font-semibold text-primary mb-2"
            >
              {showCategories ? "Hide Categories ▲" : "Browse Categories ▼"}
            </button>
            {showCategories && (
              <div className="flex flex-col gap-3 pl-4">
                {categories.map((cat, index) => (
                  <NavLink
                    key={index}
                    to={`/products/${cat.path.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-sm text-gray-700 hover:text-primary"
                  >
                    {cat.text}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-secondary transition text-white rounded-2xl text-md"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-secondary transition text-white rounded-full text-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}

      {/* Call to Book (Mobile Only) */}
      <div className="w-full flex gap-4 justify-center items-center lg:hidden py-2.5 font-medium text-sm text-black text-center bg-secondary rounded-full">
        <p className="font-semibold">📞 CALL TO BOOK</p>
        <a href="tel:+2347066743178" className="text-md">
          +234-706-674-3178
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
