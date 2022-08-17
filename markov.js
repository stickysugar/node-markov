/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */




   getChains(words) {
    let chain = new Map();

    for (let i = 0; i < words.length; i++){
      if (!chain.get(words[i])) {
        chain.set(words[i],[words[i + 1]]);
      } else {
        chain.get(words[i]).push(words[i +1])
      }


      }
      return chain;
   }



  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText(chains) {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null

    let [currentWord] = chains.keys();
    let markovText = "";

    let nextWord = chains.get(currentWord); //find the values of first word
    let random = Math.floor(Math.random() * nextWord.length); //find length of the values
    let randomChoice = nextWord[random]; // pick (random value)



    //find the values of the (random value)

  while (currentWord !== null){
      markovText += currentWord;
      currentWord = randomChoice;
      nextWord = chains.get(currentWord);
      random = Math.floor(Math.random() * nextWord.length);
      randomChoice = nextWord[random];
  }

  return markovText;
  }

//     for (let i = chains.length -1; i >= 0; i--) {
//       let random = Math.floor(Math.random() * chains.length);
//         if (chains[random] === null) {
//           return markovText;
//         } else {
//         markovText += chains[random];
//         }
//     }
//     return markovText;
//   }
// }
