import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTooltip,
} from "mdb-react-ui-kit";

export default function Buck() {
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
  const handleChange = (e) => {
    e.preventDefault();
    //remove this bucket
    console.log("Delete bucket");
  };
  return (
    <div>
      <section className="gradient-custom-2 vh-100">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="d-flex justify-content-center align-items-center">
            <MDBCol md="12" xl="10">
              <MDBCard>
                <MDBCardHeader className="p-3">
                  <input type="search" placeholder="Search"></input>
                  <button type="button" onChange={createBucket}>
                    Create
                  </button>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBTable className="mb-0" onClick={bucketData}>
                    <MDBTableBody>
                      <tr className="fw-normal">
                        <th>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                            alt="avatar"
                            className="shadow-1-strong rounded-circle"
                            style={{ width: "45px", height: "auto" }}
                          />
                          <span id="bucket-name" className="ms-2">
                            Alice Mayer
                          </span>
                        </th>

                        <td className="align-middle">
                          <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Remove"
                          >
                            <MDBIcon
                              fas
                              icon="trash-alt"
                              color="danger"
                              size="lg"
                              className="me-3"
                              onClick={handleChange}
                            />
                          </MDBTooltip>
                        </td>
                      </tr>
                      <tr className="fw-normal">
                        <th>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                            alt="avatar"
                            className="shadow-1-strong rounded-circle"
                            style={{ width: "45px", height: "auto" }}
                          />
                          <span className="ms-2">Kate Moss</span>
                        </th>

                        <td className="align-middle">
                          <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Remove"
                          >
                            <MDBIcon
                              fas
                              icon="trash-alt"
                              color="danger"
                              size="lg"
                              className="me-3"
                              onClick={handleChange}
                            />
                          </MDBTooltip>
                        </td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}
