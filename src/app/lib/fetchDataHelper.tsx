import { unstable_noStore as noStore } from "next/cache";
import { promises as fs } from "fs";

export async function fetchData() {
  noStore();
  try {
    const file = await fs.readFile(
      process.cwd() + "/src/app/lib/data.json",
      "utf-8",
    );
    return JSON.parse(file);
  } catch (error) {
    console.error(error);
    throw new Error("Local data file couldn't been found.");
  }
}
