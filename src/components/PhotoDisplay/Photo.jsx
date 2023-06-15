export default function Photo({ data }) {
  return (
    <div className="photo">
      <div>
        <a data-testid="thumbnailLink" href={data.url}>
          <img data-testid="thumbnail" src={data.thumbnailUrl} alt="" />
        </a>
      </div>
      <div>
        <h3 data-testid="title">Title: {data.title}</h3>
        <h6 data-testid="id">Id: {data.id}</h6>
        <h6 data-testid="album">Album: {data.albumId}</h6>
      </div>
    </div>
  );
}
