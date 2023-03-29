import "./Card.css";
export default function Card() {
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
            src="//www.youtube.com/embed/9B7te184ZpQ?rel=0"
            className="url-container"
            allowFullScreen
          ></iframe>
        </div>
        <div class="content">
          <span class="title">Title</span>
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
