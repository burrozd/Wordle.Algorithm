let word1 = "House";
let word2 = "Games";

export default function checkLetterMatch(word1, word2) {
    word1 = word1.toUpperCase().split("");
    word2 = word2.toUpperCase().split("");
    for (let i = 0; i < word2.length; i++) {
        if (word2[i] === word1[i]) {
            console.log(`${word1[i]} / correct`);
        } else if (word1.includes(word2[i])) {
            console.log(`${word2[i]} / misplaced`);
        } else {
            console.log(`${word2[i]} / incorrect`);
        }
    }
}
export { word1 };
export { word2 };
checkLetterMatch(word1, word2);