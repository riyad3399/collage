import { historyOfTheInstitution } from "../../AllText/allText";
import Container from "../../components/shared/Container";
import NoticeBord from "../../components/sidebar/NoticeBord";

const HistoryOfTheInstitution = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-5 py-5">
        <div className="col-span-2 bg-white p-4">
          <h3 className="font-bold text-xl py-4">স্কুলের ইতিহাস</h3>
          <p className="text-justify">
           {historyOfTheInstitution}
            <p className="mt-4">
              সবশেষে এই আশাবাদ ব্যক্ত করছি সম্মানিত অভিভাবক ও শিক্ষার্থীসহ সকলের
              সহযোগিতা পেলে আগামী কয়েক বৎসরের মধ্যে প্রতিষ্ঠানটি একটি স্বনামধণ্য
              শিক্ষা প্রতিষ্ঠান হিসেবে চট্টগ্রামের নারী শিক্ষার সীমাবদ্ধতা
              কাটিয়ে শিক্ষা বিস্তারে গুরুত্বপূর্ণ ভূমিকা রাখবে - ইনশাল্লাহ।
            </p>
          </p>
        </div>
        <NoticeBord />
      </div>
    </Container>
  );
};

export default HistoryOfTheInstitution;
