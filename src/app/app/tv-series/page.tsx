import { fetchData } from "@/app/lib/fetchDataHelper";
import ThumbnailList from "../../ui/thumbnailList";

export default async function TvSeries() {
  const dataSample = await fetchData();
  return (
    <>
      <main>
        <h1 className="text-headingL mb-8 ml-10 xl:ml-0">TV Series</h1>
        <ThumbnailList
          data={[...dataSample].filter((item) => item.category == "TV Series")}
        />
      </main>
    </>
  );
}
