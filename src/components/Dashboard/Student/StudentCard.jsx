import { useState } from "react";
import DetailsModal from "./DetailsModal";

const StudentCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetailsData, setShowDetailsData] = useState({});

  const openDialog = () => {
    setIsOpen(true);
    fetch(`http://localhost:5000/studentInfo/${data.email}`)
      .then((res) => res.json())
      .then((data) => {
        setShowDetailsData(data.data);
        console.log(data.data);
      });
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="card w-52 border shadow-md hover:border-red-500">
      <figure className="px-8 pt-8">
        <img
          src={data.image}
          alt="Student"
          loading="lazy"
          className="rounded-full h-20 w-20 object-cover border-2 border-blue-300"
        />
      </figure>
      <div>
        <div className="px-4 pt-3">
          <h2 className="font-semibold">{data.fullName}</h2>
          <p>{data.class}</p>
          <p>{data?.department}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-link" onClick={() => openDialog()}>
            Show Details
          </button>
          <DetailsModal
            isOpen={isOpen}
            onClose={onClose}
            showDetailsData={showDetailsData}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
