import { Link } from "react-router-dom";
import Container from "../../../components/shared/Container";

const VideoClass = () => {
  return (
    <div className="min-h-screen background">
      <div className="flex justify-between items-center px-3 bg-blue-600 py-5">
        <Link to="/">
          <img
            src="https://ecloudbd.com/uploads/CDA/logo.png"
            alt="collegeLogo"
            className="w-[80px]"
          />
        </Link>
        <Link to="/">
          <h2 className="font-semibold text-3xl">CDA Girls School & College</h2>
        </Link>
      </div>
      <Container>
        <div className="mt-9 mb-4 bg-white py-8 rounded-md">
          <h3 className="font-bold text-2xl text-center text-gray-500">
            E-Learning Video
          </h3>
          <hr className="border  my-3" />
          <div className="flex justify-center gap-7">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                All Class
              </option>
              <option>Five</option>
              <option>Six</option>
            </select>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                All Subject
              </option>
            </select>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md mt-5">
          <hr className="border mb-4" />
          <div className="grid md:grid-cols-3 gap-4 ">
            <video controls height="220px" width="100%">
              <source
                type="video/mp4"
                src="https://www.youtube.com/embed/fGiDcgbPUm0"
              />
            </video>
            <video controls height="220px" width="100%">
              <source
                type="video/mp4"
                src="https://www.youtube.com/embed/28-fsL4GZSo"
              />
            </video>
            <video controls height="220px" width="100%">
              <source
                type="video/mp4"
                src="https://www.youtube.com/embed/o-UUUp9PDSc"
              />
            </video>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VideoClass;
