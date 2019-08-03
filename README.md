# Unknown Alphabet

Unkown alphabet is a simple function to determine a foreign alphabet. Given a list of words that are sorted alphabetically according to the foreign language, we can visualize the problem as a matrix with position [0,0] being the first node. By traversing the nodes, we can create a directd acyclic graph represented as a set of edges and then sort.

### Philosophy

Don't rewrite the wheel. Use tools at your disposal, within reason. 

### Assumptions

* A list provided with a single word and single letter means the alphabet is primitive with only a single letter.
* A list with a word of only one characters is also consider primitive, return the unique letter.
* An empty list is an empty list, so no alphabet.

### Prerequisites

* node >=10.15.0 (probably can go lower, but that's what I have instlled at the moment)
* npm
* optional: docker 

### Development

`npm install` to install deps.

#### Tests

`npm run test` to run once.
`npm run test:watch` to run the tests in watch mode.

##### Docker Development

To avoid installing node/npm or having to manage a version, you can run the tests in watch mode and edit the files locally using the following commands:

```
docker-build --tag=unknown-alphabet .
docker run -v $(pwd):/usr/src/app unknown-alphabet
```
