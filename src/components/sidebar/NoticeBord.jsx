import { Link } from "react-router-dom";
import { allNotice } from "../../AllText/allText";

const NoticeBord = () => {
  const notice = document.getElementById("notice");
  console.log(notice);

  return (
    <div className=" p-5  bg-white">
      <h3 className="text-lg font-bold text-blue-500 ">নোটিশ বোর্ড</h3>
      <hr className="border border-red-500 my-3" />
      <div>
        <marquee
          behavior="scroll"
          direction="up"
          scrollamount="2"
          height="300px"
          onMouseOver={(e) => {
            e.target.stop();
          }}
          onMouseOut={(e) => {
            e.target.start();
          }}
        >
          {allNotice.slice(0, 6).map((notic, i) => (
            <div key={i} className="flex gap-2 border  p-2 mb-4">
              <div className="flex flex-col justify-center items-center justify-items-start">
                <h5 className="bg-blue-500 p-1 w-fit text-white font-semibold">
                  Dec
                </h5>
                <p className="font-semibold">23</p>
              </div>
              <p className="text-sm font-bold text-gray-500  cursor-pointer text-justify">
                {notic.content}
              </p>
            </div>
          ))}
          <Link to='/notice' className="flex justify-end ">আরও</Link>
        </marquee>
      </div>
    </div>
  );
};

export default NoticeBord;
