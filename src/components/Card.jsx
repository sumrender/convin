import "./Card.css";
export default function Card({ item }) {
  return (
    <div class="card">
      <button class="dismiss" type="button">
        ×
      </button>
      <div class="header">
        <div class="image">
          <iframe
            id="video"
            width="420"
            height="315"
            src={item.url}
            className="url-container"
            allowFullScreen
          ></iframe>
        </div>
        <div class="content">
          <span class="title">{item.name}</span>
        </div>
        <div class="actions">
          <button class="track btn-edit" type="button">
            Edit
          </button>
          <button class="track btn-delete" type="button">
            Delete
          </button>
          <button class="track btn-move" type="button">
            Move
          </button>
        </div>
      </div>
    </div>
  );
}
