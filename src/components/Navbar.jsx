import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import profile from "../../assets/jack.png";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 text-white shadow-md">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img
          src={menu}
          alt="menu"
          className="w-6 cursor-pointer"
          onClick={() => setSidebar((p) => (p === false ? true : false))}
        />
        <img src={logo} alt="logo" className="w-24 cursor-pointer" />
      </div>

      {/* Middle Section - Search */}
      <div className="flex items-center w-1/2 max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-4 py-2 rounded-l-full border border-gray-700 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button className="px-4 py-2 border border-gray-700 border-l-0 rounded-r-full hover:bg-gray-300 cursor-pointer">
          <img src={search} alt="search" className="w-5 text-slate-600" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <img
          src={upload}
          alt="upload"
          className="w-6 cursor-pointer hover:opacity-80"
        />
        <img
          src={more}
          alt="more"
          className="w-6 cursor-pointer hover:opacity-80"
        />
        <img
          src={notification}
          alt="notification"
          className="w-6 cursor-pointer hover:opacity-80"
        />
        <img
          src={profile}
          alt="profile"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
