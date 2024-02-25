import { Option, Select } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import TeacherCard from "./TeacherCard";

const ShowAllTeachers = () => {
  const [allTeachers, setAllTeachers] = useState([]);
  console.log(allTeachers);

  useEffect(() => {
    fetch(`http://localhost:5000/teacherInfo`)
      .then((res) => res.json())
      .then((data) => setAllTeachers(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="px-4 mt-10">
      <div className="flex justify-end my-8">
        <div>
          <Select variant="outlined" size="lg" label="Sort by Subject">
            <Option value="Accounting">Accounting</Option>
            <Option value="Economics">Economics</Option>
            <Option value="Physics">Physics</Option>
            <Option value="English">English</Option>
            <Option value="Bangla">Bangla</Option>
            <Option value="Match">Match</Option>
            <Option value="Finance">Finance</Option>
            <Option value="History">History</Option>
            <Option value="Islamic Studies">Islamic Studies</Option>
          </Select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allTeachers.map((teacher) => (
          <TeacherCard key={teacher._id} data={teacher} />
        ))}
      </div>
    </div>
  );
};

export default ShowAllTeachers;
