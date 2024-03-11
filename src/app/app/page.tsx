import { fetchData } from "../lib/fetchDataHelper";
import DragScroll from "../ui/dragScroll";
import ThumbnailList from "../ui/thumbnailList";

export default async function Home() {
  const dataSample = await fetchData();
  return (
    <main className="flex flex-col">
      <h1 className="text-headingL mb-8 ml-10 xl:ml-0">Trending</h1>
      <DragScroll data={dataSample} />
      <h1 className="text-headingL mb-8 ml-10 xl:ml-0">Recommended for you</h1>
      <ThumbnailList
        data={[...dataSample].filter((item) => item.rating == "18+")}
      />
    </main>
  );
}
