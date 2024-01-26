const Headmaster = ({title, name}) => {

  return (
    <div className=" bg-white">
      <h3 className="uppercase font-bold text-xl p-4">{title}</h3>
      <hr className="border border-red-500" />
      <img
        className=" p-4 w-[250px]"
        loading="lazy"
        src="https://cdagsc.edu.bd/images/HT.jpg"
        alt="Headmaster photo"
      />
      <p>{name}</p>
    </div>
  );
};

export default Headmaster;
