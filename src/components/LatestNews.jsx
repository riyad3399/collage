
const LatestNews = () => {
  return (
    <div className="flex py-8 ">
      <div>
        <h3 className="text-base bg-red-600 p-2 text-white ">সাম্প্রতিকখবর</h3>
      </div>
      <div className="border-2 border-red-500 w-full pl-2 bg-white">
       
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="1"
          onMouseOver={(e) => {
            e.target.stop();
          }}
          onMouseOut={(e) => {
            e.target.start();
          }}
          style={{paddingTop: "5px"}}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo similique nesciunt sit quod.
        </marquee>
      </div>
    </div>
  );
};

export default LatestNews;
