import React, { useState } from "react";
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

export default function CreateCard() {
  const [user, setUser] = useState({
    bucketName: "",
    url: "",
    name: "",
  });

  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const postData = (e) => {
    e.preventDefault();
    console.log("posted");
  };

  return (
    <MDBContainer fluid>
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
                    value={user.url}
                    name="url"
                    onChange={getUserData}
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
                    value={user.name}
                    onChange={getUserData}
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
                  Create
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
    </MDBContainer>
  );
}
