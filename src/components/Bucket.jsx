import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRootContext } from "../context/RootContext";
import Card from "./Card";

export default function Buck() {
  const [items, setItems] = useState([]);
  const [bucketNameForm, setBucketNameForm] = useState("");
  const {
    allItems,
    buckets,
    setBuckets,
    postBucket,
    activeBucket,
    setActiveBucket,
  } = useRootContext();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `./create_card`;
    navigate(path);
  };

  useEffect(() => {
    const newItem = allItems.filter((item) => item.bucket === activeBucket);
    setItems(newItem);
  }, [activeBucket, allItems]);

  const bucketData = (e) => {
    e.preventDefault();
    let val = e.target;
    console.log(val);
    console.log("bucket name");
  };
  const createBucket = async (e) => {
    e.preventDefault();
    const newBucketName = bucketNameForm;
    console.log(buckets);
    try {
      await postBucket(newBucketName);
      setBuckets([...buckets, newBucketName]);
      // navigate("/");
    } catch (error) {
      console.log(error);
    }

    console.log("new bucket created");
  };
  const deleteBucket = (e) => {
    e.preventDefault();
    //remove this bucket
    console.log("Delete bucket");
  };

  const handleBucketNameFormChange = (e) => {
    const data = e.target.value;
    setBucketNameForm(data);
  };
  return (
    <div className="bucket-container">
      <div className="left-bucket">
        <div className="search-bucket">
          <input
            type="search"
            placeholder="Search"
            value={bucketNameForm}
            onChange={handleBucketNameFormChange}
          ></input>
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
        {activeBucket && (
          <button
            type="button"
            onClick={routeChange}
            className="btn btn-primary me-3"
          >
            Create
          </button>
        )}
        {items.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
