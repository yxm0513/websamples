import React, { useState } from "react";
function App() {
  const [checkedList, setCheckedList] = useState([]);
  const listData = [
    { id: "1", value: "Javascript" },
    { id: "2", value: "Python" },
    { id: "3", value: "Java" },
    { id: "4", value: "Kotlin" },
    { id: "5", value: "Dart" },
    { id: "6", value: "C#" },
  ];

  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      //Add checked item into checkList
      setCheckedList([...checkedList, value]);
    } else {
      //Remove unchecked item from checkList
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedList(filteredList);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <p className="title">Select Programming Language</p>
        </div>

        <div className="list-container">
          <label>You Selected:</label>
          {checkedList.map((item, index) => {
            return (
              <div className="chip">
                <p className="chip-label">{item}</p>
              </div>
            );
          })}
        </div>

        <div className="card-body">
          {listData.map((item, index) => {
            return (
              <div key={item.id} className="checkbox-container">
                <input
                  type="checkbox"
                  name="languages"
                  value={item.value}
                  onChange={handleSelect}
                />
                <label>{item.value}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
