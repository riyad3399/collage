const Card = ({ data }) => {
  return (
    <div className="border hover:border-red-500 p-4">
      <img src={data.image} alt="teacher photo" className="object-cover" />
      <div className="mt-2">
        <h3 className="font-bold text-lg">{data.name}</h3>
        <p className="font-semibold">{data.title}</p>
        <p>{data.education}</p>
      </div>
    </div>
  );
};

export default Card;
