import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

const Home = ({ sidebar }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar sidebar={sidebar} />

      {/* Feed / Main Content */}
      <div
        className={`transition-all duration-300 p-4 ${
          sidebar ? "w-[calc(100%-14rem)]" : "w-full"
        }`}
      >
        <Feed />
      </div>
    </div>
  );
};

export default Home;
