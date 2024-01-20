const Headmaster = () => {
  return (
    <div className="border border-red-500 bg-white">
      <h3 className="uppercase font-bold text-xl p-4">Headmaster</h3>
      <hr className="border border-red-500" />
      <img
        className="object-cover p-4"
        loading="lazy"
        src="./headmaster.webp"
        alt="Headmaster photo"
      />
    </div>
  );
};

export default Headmaster;
