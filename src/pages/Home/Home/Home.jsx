import LatestNews from "../../../components/LatestNews";
import SchoolHistory from "../../../components/SchoolHistory/SchoolHistory";
import SuvarnaJayanthiCorner from "../../../components/SuvarnaJayanthiCorner/SuvarnaJayanthiCorner";
import Banner from "../../../components/banner/Banner";
import Container from "../../../components/shared/Container";
import NoticeBord from "../../../components/sidebar/NoticeBord";
import OurAimsAndObjectives from "../../../components/sidebar/OurAimsAndObjectives/OurAimsAndObjectives";
import Headmaster from "../../../components/sidebar/headmaster/Headmaster";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-300">
      <Container>
        <LatestNews />
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 ">
          <div className="lg:col-span-2 col-span-2">
            <Banner />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <NoticeBord />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 my-8">
          <div className="col-span-2 ">
            <SchoolHistory />
          </div>
          <Headmaster title={"Headmaster"} />
        </div>
        <div className="grid lg:grid-cols-3 gap-5 pb-8">
          <div className="col-span-2 w-fit">
            <SuvarnaJayanthiCorner />
          </div>
          <OurAimsAndObjectives />
        </div>
      </Container>
    </div>
  );
};

export default Home;
