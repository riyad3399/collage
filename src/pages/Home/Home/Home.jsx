import LatestNews from "../../../components/LatestNews";
import SchoolHistory from "../../../components/SchoolHistory/SchoolHistory";
import Banner from "../../../components/banner/Banner";
import Headmaster from "../../../components/headmaster/Headmaster";
import Container from "../../../components/shared/Container";
import NoticeBord from "../../../components/sidebar/NoticeBord";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-300">
      <Container>
        <LatestNews />
        <div className="grid grid-cols-3 gap-5 ">
          <div className="col-span-2">
            <Banner />
          </div>
          <NoticeBord />
        </div>
        <div className="grid grid-cols-3 gap-5 my-8">
          <div className="col-span-2">
            <SchoolHistory />
          </div>
          <Headmaster />
        </div>
      </Container>
    </div>
  );
};

export default Home;
