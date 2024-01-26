
import Container from "../../components/shared/Container";
import NoticeBord from "../../components/sidebar/NoticeBord";

const ChairmanMessage = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-5 py-5">
        <div className="col-span-2 bg-white p-4 space-y-2">
          <h3 className="font-bold text-xl">চেয়ারম্যানের বার্তা</h3>
          <img src="https://cdagsc.edu.bd/images/CM-CDA.jpg" alt="chairman" />
          <h4>আলহাজ্ব এম জহিরুল আলম দোভাষ</h4>
        </div>
        <NoticeBord />
      </div>
    </Container>
  );
};

export default ChairmanMessage;
