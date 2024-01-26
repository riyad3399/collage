import Container from "../../components/shared/Container";
import NoticeBord from "../../components/sidebar/NoticeBord";

const AimsAndObjectives = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-5 py-5">
        <div className="col-span-2 p-4 bg-white">
          <h3 className="font-bold text-xl py-4">আমাদের লক্ষ্য ও উদ্দেশ্য</h3>
          <div className="space-y-4 ">
            <p>
              ক. প্রকৃত গণতান্ত্রিক চেতনা, মানবিক বিবেক বোধ, বিজ্ঞানমনস্ক
              যুক্তিবাদী মানস, অগ্রসর চিন্তা, সুস্থ রুচিবোধ, স্বাজাত্যবোধ এবং
              আত্মমর্যাদা ও আত্মবিশ্বাসসম্পন্ন ভবিষ্যত নাগরিক তৈরি।
            </p>
            <p>
              ক. প্রকৃত গণতান্ত্রিক চেতনা, মানবিক বিবেক বোধ, বিজ্ঞানমনস্ক
              যুক্তিবাদী মানস, অগ্রসর চিন্তা, সুস্থ রুচিবোধ, স্বাজাত্যবোধ এবং
              আত্মমর্যাদা ও আত্মবিশ্বাসসম্পন্ন ভবিষ্যত নাগরিক তৈরি।
            </p>
          </div>
        </div>
        <NoticeBord />
      </div>
    </Container>
  );
};

export default AimsAndObjectives;
