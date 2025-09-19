import home from "../../assets/home.png";
import game from "../../assets/game_icon.png";
import autos from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";

const Sidebar = ({ sidebar }) => {
  const navItems = [
    { img: home, label: "Home" },
    { img: game, label: "Games" },
    { img: autos, label: "Automobiles" },
    { img: sports, label: "Sports" },
    { img: entertainment, label: "Entertainment" },
    { img: tech, label: "Tech" },
    { img: music, label: "Music" },
    { img: blogs, label: "Blogs" },
    { img: news, label: "News" },
  ];

  const friends = [
    { img: jack, label: "Jack" },
    { img: simon, label: "Simon" },
    { img: tom, label: "Tom" },
    { img: megan, label: "Megan" },
  ];

  return (
    <aside
      className={`${
        sidebar ? "w-56" : "w-16"
      } h-screen bg-white shadow-lg flex flex-col py-6 px-2 transition-all duration-300`}
    >
      {/* Navigation Items */}
      <div className="flex flex-col gap-2">
        {navItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition
              ${sidebar ? "gap-3 justify-start" : "justify-center"}`}
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-6 h-6 flex-shrink-0"
            />
            {sidebar && (
              <p className="text-gray-800 font-medium">{item.label}</p>
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* Subscribed Section */}
      {sidebar && (
        <p className="text-gray-500 text-sm font-semibold mb-3 px-2">
          Subscribed
        </p>
      )}

      {/* Friends Section */}
      <div className="flex flex-col gap-2">
        {friends.map((friend, idx) => (
          <div
            key={idx}
            className={`flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition
              ${sidebar ? "gap-3 justify-start" : "justify-center"}`}
          >
            <img
              src={friend.img}
              alt={friend.label}
              className="w-8 h-8 rounded-full flex-shrink-0"
            />
            {sidebar && (
              <p className="text-gray-800 font-medium">{friend.label}</p>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
