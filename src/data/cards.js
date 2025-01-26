const contents = ["👾", "😎", "👻", "👽", "🤖", "💩"];

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
