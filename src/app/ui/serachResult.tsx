import { fetchData } from "../lib/fetchDataHelper";
import ThumbnailList from "./thumbnailList";

export default function SearchResult(search: any) {
  const dataSample = fetchData();
  const result = [...dataSample].filter((item) =>
    item.title.toLowerCase().includes(search.search.toLowerCase()),
  );
  return (
    <>
      <main className="flex flex-col">
        <h1 className="mb-8 ml-10 text-headingL xl:ml-0">{`Found ${result.length} results for ${search.search}`}</h1>
        <ThumbnailList data={result} />
      </main>
    </>
  );
}
