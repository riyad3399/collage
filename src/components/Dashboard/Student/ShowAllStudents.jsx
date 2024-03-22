import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import { Option, Select } from "@material-tailwind/react";

const ShowAllStudents = () => {
  const [allStudent, setAllStudent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://college-server-six.vercel.app/studentInfo`)
      .then((res) => res.json())
      .then((data) => {
        setAllStudent(data.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="px-4 mt-10">
      <div className="flex justify-between my-8">
        <div>
          <Select variant="outlined" size="lg" label="Sort by Department">
            <Option value="commerce">Commerce</Option>
            <Option value="science">Science</Option>
            <Option value="arts">Arts</Option>
          </Select>
        </div>
        <div>
          <Select variant="outlined" size="lg" label="Sort by Class">
            <Option value="inter 1st year">Inter 1st year</Option>
            <Option value="inter 2nd year">Inter 2nd year</Option>
          </Select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading ? (
          <span className="loading loading-spinner text-primary loading-lg"></span>
        ) : (
          allStudent.map((student) => (
            <StudentCard key={student._id} data={student} />
          ))
        )}
      </div>
    </div>
  );
};

export default ShowAllStudents;
