const ShowDetailsModal = ({ showDetailsData, isOpen, onClose }) => {
  const {
    email,
    fullName,
    gender,
    image,
    permanentAddress,
    presentAddress,
    phoneNumber,
    religion,
    subject,
    yearsOfExperience,
    maritalStatus,
    nationality,
  } = showDetailsData;
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative bg-white rounded-lg p-6 max-w-lg">
            <div className="text-base text-gray-600">
              <img
                src={image}
                alt="Teacher"
                loading="lazy"
                className="rounded-sm h-28 w-28 object-cover my-2 border-2 border-blue-300"
              />
              <h3 className="font-bold text-lg">{fullName}</h3>
              <p className="py-1">
                <span className="font-semibold text-gray-700">Subject: </span>
                {subject}
              </p>
              <p className="py-1">
                <span className="font-semibold text-gray-700">
                  Years of Experience:
                </span>
                {yearsOfExperience}
              </p>
              <p className="py-1">
                <span className="font-semibold text-gray-700">Email: </span>
                {email}
              </p>
              <p className="py-1">
                <span className="font-semibold text-gray-700">Number: </span>
                {phoneNumber}
              </p>
              <p className="py-1">
                <span className="font-semibold text-gray-700">Gender: </span>
                {gender}
              </p>
              <p className="py-1">
                <span className="font-semibold text-gray-700">Gender: </span>
                {religion}
              </p>
              <p className="py-1">
                <span className="font-semibold text-gray-700">
                  Marital Status:
                </span>
                {maritalStatus}
              </p>
              <p className="py-1">
                <span className="font-semibold text-gray-700">
                  Nationality:{" "}
                </span>
                {nationality}
              </p>
              <p className="py-1">
                <span className="font-semibold text-gray-700">
                  Present Address:
                </span>
                {presentAddress}
              </p>
              <p className="">
                <span className="font-semibold text-gray-700">
                  Permanent Address:
                </span>
                {permanentAddress}
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={onClose} className="btn btn-error btn-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowDetailsModal;
