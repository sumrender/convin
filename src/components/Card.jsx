import "./Card.css";
import { AiFillEdit } from "react-icons/ai";
import { CgFolderRemove } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
export default function Card({ item, deleteItem }) {
  const navigate = useNavigate();

  function handleEdit() {
    navigate("/Update_Card/" + item.id);
  }

  return (
    <div className="card">
      <button
        className="dismiss"
        style={{ backgroundColor: "red", color: "white" }}
        type="button"
        onClick={() => deleteItem(item.id)}
      >
        ×
      </button>
      <div className="header">
        <div className="image">
          <iframe
            id="video"
            width="420"
            height="315"
            src={item.url}
            className="url-container"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className="actions"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="title">{item.name}</span>
          {/* <div className="card-btns">
            <button className="card-btn" type="button" onClick={handleEdit}>
              <AiFillEdit />
            </button>
            <button className="card-btn" type="button">
              <CgFolderRemove />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
