import toposort from 'toposort';

export default function getAlphabet(words: string[]): readonly string[] {
  if (!words.length) {
    return [];
  }

  if (words.length === 1) {
    // single character, return it
    if (words[0].length === 1) {
      return words;
    }

    // if the word has all the same character, let's just
    // assume they have a single letter alphabet!
    const sameCharRegex = new RegExp(/^(.)\1+$/);
    if (sameCharRegex.test(words[0])) {
      return [words[0][0]];
    }

    // a single word with non-unique chars, no enough info
    throw new Error('Not enough information to determine alphabet');
  }

  const edges: readonly [string, string][] = words.reduce(
    (edgesAcc, currWord, index) => {
      if (index + 1 === words.length) {
        return edgesAcc;
      }

      const nextWord = words[index + 1];

      for (let i = 0; i < currWord.length; i++) {
        if (nextWord[i] !== undefined && currWord[i] !== nextWord[i]) {
          return edgesAcc.concat([[currWord[i], nextWord[i]]]);
        }
      }

      return edgesAcc;
    },
    [] as readonly [string, string][]
  );

  return toposort(edges);
}
