import { allNotice } from "../../AllText/allText";
import Container from "../../components/shared/Container";

const Notice = () => {
  return (
    <Container>
      <div className="bg-white p-4">
        <h3 className="font-bold text-xl py-5">সকল বিজ্ঞপ্তি</h3>
        <div className="px-4 space-y-5">
          {allNotice.map((notic, i) => (
            <div
              key={i}
              className=" font-bold text-blue-500  "
            >
              <a href="" className=" divide-y divide-red-500">
                {notic.content}
              </a>{" "}
              <span className="badge badge-accent">{notic.date}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Notice;
