import React, { useEffect, useState } from "react";
import { useRootContext } from "../context/RootContext";

export default function Buck() {
  const [activeBucket, setActiveBucket] = useState();
  const [items, setItems] = useState([]);
  const {allItems, buckets} = useRootContext();

  useEffect(() => {
    const newItem = allItems.filter((item) => item.bucket === activeBucket);
    setItems(newItem);
  }, [activeBucket]);

  const bucketData = (e) => {
    e.preventDefault();
    let val = e.target;
    console.log(val);
    console.log("bucket name");
  };
  const createBucket = (e) => {
    e.preventDefault();
    //remove this bucket
    console.log("new bucket created");
  };
  const deleteBucket = (e) => {
    e.preventDefault();
    //remove this bucket
    console.log("Delete bucket");
  };
  return (
    <div className="bucket-container">
      <div className="left-bucket">
        <div className="search-bucket">
          <input type="search" placeholder="Search"></input>
          <button
            type="button"
            onClick={createBucket}
            className="btn btn-primary me-3"
          >
            Create
          </button>
        </div>
        {buckets.map((bucketName) => {
          return (
            <div
              onClick={() => setActiveBucket(bucketName)}
              className="bucket-item"
              key={bucketName}
            >
              {bucketName}
            </div>
          );
        })}
      </div>
      <div className="right-bucket">
        {items.map((item) => {
          return (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
