import { CgCloseO } from "react-icons/cg";

const DetailsModal = ({ showDetailsData, isOpen, onClose }) => {
  const {
    fullName,
    email,
    admissionDate,
    blodGroup,
    department,
    dob,
    fatherName,
    gender,
    guardianNumber,
    image,
    motherName,
    nationality,
    permanentAddress,
    presentAddress,
    religion,
    studentID,
    studentNumber,
  } = showDetailsData;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative bg-white rounded-lg md:p-8 p-2 md:min-w-[60%] min-w-full min-h-[98%] md:min-h-fit">
            <div className="text-base text-gray-600 sm:flex justify-around relative">
              <button
                onClick={onClose}
                className="btn btn-ghost absolute top-6 sm:top-0 right-0 md:hidden"
              >
                <CgCloseO size={22} />
              </button>
              <div>
                <img
                  src={image}
                  alt="Teacher"
                  loading="lazy"
                  className="rounded-sm h-28 w-28 object-cover my-2 border-2 border-blue-300"
                />
                <h3 className="font-bold text-lg">{fullName}</h3>
              </div>
              <div className="overflow-y-scroll md:overflow-hidden">
                <p className="py-1">
                  <span className="font-semibold text-gray-700">ID: </span>
                  {studentID}
                </p>
                <p className="py-1">
                  <span className="font-semibold text-gray-700">
                    Admission Date:{" "}
                  </span>
                  {admissionDate}
                </p>
                {department && (
                  <p className="py-1">
                    <span className="font-semibold text-gray-700">
                      department:{" "}
                    </span>
                    {department}
                  </p>
                )}
                <p className="py-1">
                  <span className="font-semibold text-gray-700">Class: </span>
                  {showDetailsData.class}
                </p>
                <p className="py-1">
                  <span className="font-semibold text-gray-700">Email: </span>
                  {email}
                </p>
                <p className="py-1">
                  <span className="font-semibold text-gray-700">Number: </span>
                  {studentNumber}
                </p>
                <p className="py-1">
                  <span className="font-semibold text-gray-700">
                    Date of Birth:{" "}
                  </span>
                  {dob}
                </p>

                <p className="py-1">
                  <span className="font-semibold text-gray-700">Gender: </span>
                  {gender}
                </p>
                <p className="py-1">
                  <span className="font-semibold text-gray-700">
                    Religion:{" "}
                  </span>
                  {religion}
                </p>
                <p className="py-1">
                  <span className="font-semibold text-gray-700">
                    Blod Group:{" "}
                  </span>
                  {blodGroup}
                </p>

                <p className="py-1">
                  <span className="font-semibold text-gray-700">
                    Nationality:{" "}
                  </span>
                  {nationality}
                </p>
                <p className="py-1">
                  <span className="font-semibold text-gray-700">
                    Present Address:{" "}
                  </span>
                  {presentAddress}
                </p>
                <p className="">
                  <span className="font-semibold text-gray-700">
                    Permanent Address:{" "}
                  </span>
                  {permanentAddress}
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end ">
              <button
                onClick={onClose}
                className="btn btn-error btn-sm hidden md:block"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsModal;
