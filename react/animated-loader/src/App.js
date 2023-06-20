import React, { useState } from "react";
import AnimatedLoader from "./AnimatedLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const [imgList, setImgList] = useState([]);

  const getAPIData = () => {
    setLoading(true);

    fetch("http://localhost:5000/getImages")
      .then((response) => response.json())
      .then((data) => {
        setImgList(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR:", error);
        setLoading(false);
      });
  };

  return (
    <div className="container">
      {loading ? (
        <AnimatedLoader />
      ) : (
        <div className="img-container">
          {imgList.map((item, index) => {
            return (
              <img
                src={item.imageURL}
                width="200px"
                height="100px"
                style={{ objectFit: "cover" }}
              />
            );
          })}
        </div>
      )}

      <button className="btn" onClick={getAPIData}>
        Get Data
      </button>
    </div>
  );
}

export default App;
