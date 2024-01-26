const NoticeBord = () => {
  const notice = document.getElementById("notice");
  console.log(notice);

  return (
    <div className=" p-5 h-96 bg-white">
      <h3 className="text-lg font-bold text-blue-500 ">নোটিশ বোর্ড</h3>
      <hr className="border border-red-500 my-3" />
      <div>
        <marquee
          behavior="scroll"
          direction="up"
          scrollamount="1"
          onMouseOver={(e) => {
            e.target.stop();
          }}
          onMouseOut={(e) => {
            e.target.start();
          }}
        >
          <div className="flex gap-4 border mb-4">
            <div className="flex flex-col justify-center items-center justify-items-start">
              <h5 className="bg-blue-500 p-1 w-fit text-white font-semibold">
                Dec
              </h5>
              <p className="font-semibold">23</p>
            </div>
            <p className="font-semibold cursor-pointer">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default NoticeBord;
