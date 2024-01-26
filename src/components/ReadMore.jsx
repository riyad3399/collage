import { useState } from "react";

const ReadMore = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text-justify">
      {isReadMore ? text.slice(0, 498) : text}
      <span onClick={toggleReadMore} className="text-green-600">
        {isReadMore ? "read more..." : "show less"}
      </span>
    </p>
  );
};

export default ReadMore;
