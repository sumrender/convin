export default function Card() {
  return (
    <div class="card">
      <iframe
        id="video"
        width="420"
        height="315"
        src="//www.youtube.com/embed/9B7te184ZpQ?rel=0"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <div class="card-body">
        <h4 class="card-title">
          <a>Card title</a>
        </h4>

        <a href="#" class="btn btn-primary">
          Edit
        </a>
        <a href="#" class="btn btn-primary ">
          Delete
        </a>
        <a href="#" class="btn btn-primary ">
          Move
        </a>
      </div>
    </div>
  );
}
