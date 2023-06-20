import React, { useState } from "react";

function ReadMoreLess() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="card">
      <h3>Read More Read Less</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint numquam
        quia delectus quo vero quod iusto corrupti illum accusamus odit hic ut
        ab minus eveniet, corporis ullam tempora debitis iure. Repellat,
        molestias
      </p>
      {isShowMore && (
        <p>
          sapiente exercitationem odio quia, animi eos distinctio tempora, ipsum
          hic vitae modi eum nostrum id perspiciatis impedit dolores.
        </p>
      )}

      <button onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default ReadMoreLess;
