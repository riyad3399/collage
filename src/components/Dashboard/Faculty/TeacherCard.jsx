
const TeacherCard = ({data}) => {
    return (
      <div className="card w-52 border shadow-md hover:border-red-500">
        <figure className="px-8 pt-8">
          <img
            src={data.image}
            alt="Student"
            loading="lazy"
            className="rounded-full h-20 w-20 object-cover"
          />
        </figure>
        <div>
          <div className="px-4 pt-3">
            <h2 className="font-semibold">{data.fullName}</h2>
            <p>{data.class}</p>
            <p>{data?.department}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-link">Show Details</button>
          </div>
        </div>
      </div>
    );
};

export default TeacherCard;