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

const Sidebar = () => {
  return (
    <aside className="w-56 h-screen bg-white shadow-lg flex flex-col py-6 px-4">
      {/* Navigation Items */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <img src={home} alt="Home" className="w-6 h-6" />
          <p className="text-gray-800 font-medium">Home</p>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <img src={game} alt="Games" className="w-6 h-6" />
          <p className="text-gray-800 font-medium">Games</p>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <img src={autos} alt="Automobiles" className="w-6 h-6" />
          <p className="text-gray-800 font-medium">Automobiles</p>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <img src={sports} alt="Sports" className="w-6 h-6" />
          <p className="text-gray-800 font-medium">Sports</p>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <img src={entertainment} alt="Entertainment" className="w-6 h-6" />
          <p className="text-gray-800 font-medium">Entertainment</p>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <img src={tech} alt="Tech" className="w-6 h-6" />
          <p className="text-gray-800 font-medium">Tech</p>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <img src={music} alt="Music" className="w-6 h-6" />
          <p className="text-gray-800 font-medium">Music</p>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <img src={blogs} alt="Blogs" className="w-6 h-6" />
          <p className="text-gray-800 font-medium">Blogs</p>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <img src={news} alt="News" className="w-6 h-6" />
          <p className="text-gray-800 font-medium">News</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[10px] bg-gray-700 my-4"></div>

      {/* Subscribed Section */}
      <p className="text-gray-500 text-sm font-semibold mb-3 px-2">
        Subscribed
      </p>

      {/* Friends Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <img src={jack} alt="Jack" className="w-8 h-8 rounded-full" />
          <p className="text-gray-800 font-medium">Jack</p>
        </div>
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <img src={simon} alt="Simon" className="w-8 h-8 rounded-full" />
          <p className="text-gray-800 font-medium">Simon</p>
        </div>
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <img src={tom} alt="Tom" className="w-8 h-8 rounded-full" />
          <p className="text-gray-800 font-medium">Tom</p>
        </div>
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <img src={megan} alt="Megan" className="w-8 h-8 rounded-full" />
          <p className="text-gray-800 font-medium">Megan</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
