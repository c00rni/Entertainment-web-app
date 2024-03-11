import { fetchData } from "@/app/lib/fetchDataHelper";
import ThumbnailList from "../../ui/thumbnailList";

export default async function Movies() {
  const dataSample = await fetchData();
  return (
    <>
      <main className="flex flex-col">
        <h1 className="text-headingL mb-8 ml-10 xl:ml-0">Movies</h1>
        <ThumbnailList
          data={[...dataSample].filter((item) => item.category == "Movie")}
        />
      </main>
    </>
  );
}
