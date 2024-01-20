import ReadMore from "../ReadMore";
import { schoolHistoryText } from "../../AllText/schoolHistoryText";

const SchoolHistory = () => {
  return (
    <div className="p-4 bg-white">
      <h3 className="font-extrabold text-xl mb-5">স্কুলের ইতিহাস</h3>
      <ReadMore text={schoolHistoryText} />
    </div>
  );
};

export default SchoolHistory;
