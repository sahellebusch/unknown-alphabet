import getAlphabet from '../src/index';

describe('getAlphabet', () => {
  test('provided an empty list, returns an empty list', () => {
    expect(getAlphabet([])).toHaveLength(0);
  });

  test('provided a list of one word that is a single characrter, returns the character', () => {
    expect(getAlphabet(['s'])).toEqual(['s']);
  });

  test('provided a single word with multiple chars, throws an error', () => {
    const expectedToThrow = () => getAlphabet(['boom']);
    expect(expectedToThrow).toThrowError();
  });

  test('provided a list of letters with words of the same length, returns the alphabet', () => {
    const words = ['bca', 'aaa', 'acb'];
    const expected = ['b', 'a', 'c'];
    expect(getAlphabet(words)).toEqual(expected);
  });

  test('provided a single word that is all the same letter, returns the unique letter', () => {
    expect(getAlphabet(['aaaa'])).toEqual(['a']);
  });

  test('provided a list of words with varying length, returns the correct alphabet', () => {
    const words = ['baa', 'abcd', 'abca', 'cab', 'cad'];
    const expected = ['b', 'd', 'a', 'c'];
    expect(getAlphabet(words)).toEqual(expected);
  });
});
