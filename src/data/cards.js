import cube from "../data/cube.png";
import cloud from "../data/cloud.png";
import paw from "../data/paw.png";
import books from "../data/books.png";
import treasure from "../data/treasure.png";
import noodles from "../data/noodles.png";

const contents = [cube, cloud, paw, books, treasure, noodles];

export const cardPairs = contents.flatMap((content, index) => [
  {
    id: index * 2 + 1,
    content,
    flipped: false,
    matched: false,
  },
  {
    id: index * 2 + 2,
    content,
    flipped: false,
    matched: false,
  },
]);
