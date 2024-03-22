import { useState } from "react";
import ShowDetailsModal from "./ShowDetailsModal";

const TeacherCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetailsData, setShowDetailsData] = useState({});

  const openDialog = () => {
    setIsOpen(true);
    fetch(`https://college-server-six.vercel.app/teacherInfo/${data.email}`)
      .then((res) => res.json())
      .then((data) => {
        setShowDetailsData(data.data);
        console.log(data);
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
          alt="Teacher"
          loading="lazy"
          className="rounded-full h-20 w-20 object-cover border-2 border-blue-300"
        />
      </figure>
      <div>
        <div className="px-4 pt-3">
          <h2 className="font-bold text-lg">{data.fullName}</h2>
          <p>
            <span className="font-semibold text-gray-700">Subject:</span>{" "}
            {data.subject}
          </p>
          <p>
            <span className="font-semibold text-gray-700">
              years of Experience:
            </span>
            {data?.yearsOfExperience}
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-link" onClick={() => openDialog()}>
            Show Details
          </button>

          <ShowDetailsModal
            showDetailsData={showDetailsData}
            isOpen={isOpen}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
