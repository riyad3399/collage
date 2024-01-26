import Container from "../../components/shared/Container";
import NoticeBord from "../../components/sidebar/NoticeBord";
import Headmaster from "../../components/sidebar/headmaster/Headmaster";

const HeadTeacherMessage = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-5 py-5">
        <div className="col-span-2 ">
          <Headmaster
            title={"প্রতিষ্ঠান প্রধানের বার্তা"}
            name={"আলহাজ্ব মো: গাজীউল হক"}
          />
        </div>
        <NoticeBord />
      </div>
    </Container>
  );
};

export default HeadTeacherMessage;
