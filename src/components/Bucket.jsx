import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRootContext } from "../context/RootContext";
import Card from "./Card";

export default function Buck() {
  const [items, setItems] = useState([]);
  const [bucketNameForm, setBucketNameForm] = useState("");
  const {
    user,
    allItems,
    buckets,
    setBuckets,
    postBucket,
    activeBucket,
    setActiveBucket,
    deleteDocWithID,
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

  const createBucket = async (e) => {
    e.preventDefault();
    const newBucketName = bucketNameForm;
    console.log(buckets);
    try {
      await postBucket(newBucketName);
      setBuckets([...buckets, { name: newBucketName, uid: user.uid }]);
      // navigate("/");
    } catch (error) {
      console.log(error);
    }

    console.log("new bucket created");
  };

  const deleteBucket = async (bucketId) => {
    const newList = buckets.filter((bucket) => bucket.id !== bucketId);
    setBuckets(newList);

    try {
      await deleteDocWithID("buckets", bucketId);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (itemId) => {
    const newList = items.filter((item) => item.id !== itemId);
    setItems(newList);

    try {
      await deleteDocWithID("cards", itemId);
    } catch (error) {
      console.log(error);
    }
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
            placeholder="Create playlist"
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
        {buckets.map((bucket) => {
          return (
            <div
              onClick={() => setActiveBucket(bucket.name)}
              className="bucket-item"
              key={bucket.id}
            >
              <p style={{ cursor: "pointer" }}>{bucket.name}</p>
              <button
                type="button"
                className="delete-button"
                onClick={() => deleteBucket(bucket.id)}
              >
                ×
              </button>
            </div>
          );
        })}
      </div>
      <div className="right-bucket">
        {activeBucket && (
          <button
            type="button"
            className="add-new-video btn btn-primary me-3"
            onClick={routeChange}
          >
            Add new video
          </button>
        )}
        {items.length > 0 ? (
          <div className="item-container">
            {items.map((item) => {
              return <Card item={item} key={item.id} deleteItem={deleteItem} />;
            })}
          </div>
        ) : (
          <div className="empty-items">
            <h3>Select or Create a card to get started</h3>
          </div>
        )}
      </div>
    </div>
  );
}
