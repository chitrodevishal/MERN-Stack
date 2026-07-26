function fisherYatesShuffle(arr) {
  const array = [...arr]; // Create a copy to avoid modifying the original

  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

// Example
const numbers = [1, 2, 3, 4, 5];
const shuffled = fisherYatesShuffle(numbers);

console.log("Original:", numbers);
console.log("Shuffled:", shuffled);


const test4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fisherYatesShuffle(test4)

// Original: [ 1, 2, 3, 4, 5 ]
// Shuffled: [ 1, 4, 3, 5, 2 ]