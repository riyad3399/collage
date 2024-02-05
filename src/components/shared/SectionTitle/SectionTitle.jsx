const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center mt-10 mb-6">
      <p className="text-lg text-blue-500 mb-2">--- {subHeading} ---</p>
      <h3 className="text-2xl border-y-2 p-1 border-red-500 uppercase font-medium">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
