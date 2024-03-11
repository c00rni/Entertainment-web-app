import { fetchData } from "@/app/lib/fetchDataHelper";
import ThumbnailList from "../../ui/thumbnailList";

export default async function BookMarks() {
  const dataSample = await fetchData();
  return (
    <main>
      <h1 className="text-headingL mb-8 ml-10 xl:ml-0">Bookmarked Movies</h1>
      <ThumbnailList
        data={[...dataSample]
          .filter((item) => item.category == "Movie")
          .filter((item) => item.isBookmarked)}
      />
      <h1 className="text-headingL mb-8 ml-10 xl:ml-0">Bookmarked TV Series</h1>
      <ThumbnailList
        data={[...dataSample]
          .filter((item) => item.category == "TV Series")
          .filter((item) => item.isBookmarked)}
      />
    </main>
  );
}
