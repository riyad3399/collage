import { useEffect, useState } from "react";
import Container from "../../components/shared/Container";
import Card from "../../components/shared/Card";

const EmployeeInformation = () => {
  const [employeeDatas, setEmployeeDatas] = useState([]);

  useEffect(() => {
    fetch("./employee.json")
      .then((res) => res.json())
      .then((data) => setEmployeeDatas(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <h3 className="font-bold text-xl pt-4 border-b-2 w-fit border-red-500">কর্মকর্তাবৃন্দের তথ্য</h3>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-8">
        {employeeDatas.map((data, i) => (
          <Card key={i} data={data} />
        ))}
      </div>
    </Container>
  );
};

export default EmployeeInformation;
