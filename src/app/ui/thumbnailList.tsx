import Thumbnail from "./thumbnail";

export default async function ThumbnailList(props: any) {
  // const videos = await getVideos();
  return (
    <div className="grid ml-10 xl:ml-0 grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr] grid-flow-row auto-cols-min auto-rows-min pb-10 gap-7 lx:gap-10 mr-10">
      {[...props.data].map((data) => (
        <Thumbnail
          key={data.title}
          category={data.category}
          isBookmarked={data.isBookmarked}
          title={data.title}
          rating={data.rating}
          thumbnail={`/starter-code${data.thumbnail.regular.large.slice(1)}`}
          year={data.year}
        />
      ))}
    </div>
  );
}
