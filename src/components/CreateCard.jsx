import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useRootContext } from "../context/RootContext";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateCard({ update }) {
  const itemId = useParams();
  const {
    setAllItems,
    activeBucket,
    postItem,
    getItemWithId,
    updateItemWitId,
  } = useRootContext();
  const navigate = useNavigate();
  const [item, setItem] = useState({
    bucket: activeBucket,
    url: "",
    name: "",
  });
  const handleItem = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setItem({ ...item, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    setAllItems((prev) => [...prev, item]);
    item.url = item.url.replace("watch", "embed");
    console.log(item);
    try {
      if (update) await updateItemWitId(itemId, item);
      else await postItem(item);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  async function getItem() {
    try {
      const doc = await getItemWithId(itemId);
      console.log(doc);
      setItem(doc);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!update) return;
    getItem();
  }, []);

  return (
    <MDBContainer fluid>
      <div style={{ margin: "auto" }}>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Card Details
                </p>
                <form method="post">
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      label="URL"
                      id="form1"
                      value={item.url}
                      name="url"
                      onChange={handleItem}
                      type="url"
                      className="w-100"
                      required
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="person me-3" size="lg" />
                    <MDBInput
                      label="Name"
                      id="form4"
                      name="name"
                      value={item.name}
                      onChange={handleItem}
                      type="text"
                      required
                    />
                  </div>

                  <MDBBtn
                    type="submit"
                    onClick={postData}
                    className="mb-4"
                    size="lg"
                  >
                    {update ? <p>Update</p> : <p>Create</p>}
                  </MDBBtn>
                </form>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              ></MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    </MDBContainer>
  );
}
