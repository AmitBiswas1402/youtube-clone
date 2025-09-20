import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";

const Feed = () => {
  const videos = [
    { img: thumbnail1, title: "Best channel to learn coding", channel: "GreatStack", views: "15k views", time: "2 days ago" },
    { img: thumbnail2, title: "Master React in 2024", channel: "GreatStack", views: "20k views", time: "5 days ago" },
    { img: thumbnail3, title: "JavaScript for Beginners", channel: "GreatStack", views: "10k views", time: "1 week ago" },
    { img: thumbnail4, title: "Tailwind CSS Crash Course", channel: "GreatStack", views: "8k views", time: "3 days ago" },
    { img: thumbnail5, title: "Next.js Full Guide", channel: "GreatStack", views: "25k views", time: "1 month ago" },
    { img: thumbnail6, title: "DSA in JavaScript", channel: "GreatStack", views: "12k views", time: "4 days ago" },
    { img: thumbnail7, title: "Responsive UI Design", channel: "GreatStack", views: "18k views", time: "2 weeks ago" },
    { img: thumbnail8, title: "Learn APIs in Next.js", channel: "GreatStack", views: "30k views", time: "1 day ago" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {videos.map((video, idx) => (
        <div key={idx} className="flex flex-col cursor-pointer">
          <img
            src={video.img}
            alt={video.title}
            className="w-full h-48 object-cover rounded-lg mb-2"
          />
          <h2 className="text-base font-semibold text-gray-900 line-clamp-2">
            {video.title}
          </h2>
          <h3 className="text-sm text-gray-600">{video.channel}</h3>
          <p className="text-xs text-gray-500">
            {video.views} • {video.time}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
